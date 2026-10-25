// @ts-nocheck
const METADATA = {
	website: "https://cable.ayra.ch",
	author: "AyrA; MeLT",
	name: "findshape2",
	version: "15",
	id: "findshape2",
	description: "Searches map chunks for shapes, supports Find Next navigation, and can experimentally skip mined clusters",
	minimumGameVersion: ">=1.5.0",
	doesNotAffectSavegame: true,
	originalAuthor: "AyrA",
	credits: "Original Shape finder mod by AyrA. Modified by MeLT. GenAI Assisted."
};

// Need to add this to the readme file:
// <a href="https://www.flaticon.com/free-icons/magnifying-glass" title="magnifying glass icons">Magnifying glass icons created by Freepik - Flaticon</a>

class Mod extends shapez.Mod {
	init() {
		window.sf = this;
		this.findShapeSearch = null;
		this.lastSyntheticEnterTime = 0;

		this.signals.stateEntered.add(state => {
			if (state.key === "InGameState") {
				this.addHudButtons();
			}
		});

		this.modInterface.registerIngameKeybinding({
			id: "findshape2_mod_binding",
			keyCode: shapez.keyToKeyCode("F"),
			modifiers: {
				ctrl: true
			},
			translation: "Open the shape finder",
			handler: () => {
				this.showFindDialog();
				return shapez.STOP_PROPAGATION;
			}
		});

		this.modInterface.registerIngameKeybinding({
			id: "findshape2_mod_next_binding",
			keyCode: shapez.keyToKeyCode("G"),
			modifiers: {
				ctrl: true
			},
			translation: "Find next shape",
			handler: () => {
				this.findNextShape();
				return shapez.STOP_PROPAGATION;
			}
		});

		this.registerGlobalKeyboardHandlers();

		window.findShape = (shape, radius) => this.findShape([shape], radius, false, false);
		console.log("findshape2 loaded. Use window.findShape(shape,radius) to find a given shape");
	}

	registerGlobalKeyboardHandlers() {
		this.globalKeyHandler = event => {
			if (event.ctrlKey && !event.shiftKey && !event.altKey && !event.metaKey && event.key && event.key.toUpperCase() === "G") {
				event.preventDefault();
				event.stopImmediatePropagation();
				this.findNextShape();
				return;
			}

			if (this.isPlainEnterEvent(event)) {
				const button = this.getVisibleDialogActionButton();
				if (button) {
					event.preventDefault();
					event.stopImmediatePropagation();
					this.syntheticPressButton(button);
				}
			}
		};

		window.addEventListener("keydown", this.globalKeyHandler, true);
		document.addEventListener("keydown", this.globalKeyHandler, true);
	}

	isPlainEnterEvent(event) {
		const isEnter = event.key === "Enter" || event.key === "Return" || event.code === "Enter" ||
			event.keyCode === 13 || event.which === 13;
		return isEnter && !event.ctrlKey && !event.shiftKey && !event.altKey && !event.metaKey;
	}

	addHudButtons() {
		const menu = document.querySelector("#ingame_HUD_GameMenu");
		// The game menu loads after the "InGameState" trigger. Possibly a bug
		if (!menu) {
			setTimeout(() => this.addHudButtons(), 10);
			return;
		}

		const findBtn = this.createHudButton("findshape2_button", "Open shape finder", () => this.showFindDialog());
		if (findBtn) {
			findBtn.style.backgroundImage = "url(data:image/png;base64," + this.icon + ")";
		}
	}

	createHudButton(buttonId, title, clickHandler) {
		if (document.getElementById(buttonId)) {
			return null;
		}

		const menu = document.querySelector("#ingame_HUD_GameMenu");
		if (!menu) {
			return null;
		}

		const btn = menu.appendChild(document.createElement("button"));
		btn.id = buttonId;
		btn.title = title;
		btn.addEventListener("click", e => {
			e.preventDefault();
			clickHandler();
		});
		return btn;
	}

	getVisibleDialogActionButton() {
		const buttons = Array.from(document.querySelectorAll(".ingameDialog.visible button.good, .ingameDialog button.good"))
			.filter(button => !button.disabled && button.getClientRects().length > 0);

		return buttons.length ? buttons[buttons.length - 1] : null;
	}

	syntheticPressButton(button) {
		const now = performance.now();
		if (now - this.lastSyntheticEnterTime < 200) {
			return;
		}
		this.lastSyntheticEnterTime = now;

		const rect = button.getBoundingClientRect();
		const clientX = rect.left + rect.width / 2;
		const clientY = rect.top + rect.height / 2;
		const eventOptions = {
			bubbles: true,
			cancelable: true,
			view: window,
			button: 0,
			buttons: 1,
			clientX,
			clientY
		};

		button.dispatchEvent(new MouseEvent("mousedown", eventOptions));
		button.dispatchEvent(new MouseEvent("mouseup", eventOptions));
		button.dispatchEvent(new MouseEvent("click", eventOptions));
	}

	renameLatestOkDialogButton(label) {
		const rename = () => {
			const buttons = Array.from(document.querySelectorAll(".ingameDialog button.good, button.good"));
			for (let i = buttons.length - 1; i >= 0; i--) {
				const button = buttons[i];
				const text = (button.textContent || "").trim().toUpperCase();
				if (!text.startsWith("OK")) {
					continue;
				}

				for (let n = 0; n < button.childNodes.length; n++) {
					const node = button.childNodes[n];
					if (node.nodeType === Node.TEXT_NODE && node.nodeValue && node.nodeValue.toUpperCase().indexOf("OK") >= 0) {
						node.nodeValue = node.nodeValue.replace(/OK/i, label);
						return true;
					}
				}

				button.insertBefore(document.createTextNode(label), button.firstChild);
				return true;
			}
			return false;
		};

		setTimeout(rename, 0);
		setTimeout(rename, 50);
		setTimeout(rename, 150);
	}

	showFindDialog() {
		const lastSearch = this.lastSearch || {
			item: "",
			radius: 500,
			quick: false,
			rotate: true,
			excludeMinedClusters: false
		};

		const checkRadius = value => {
			const number = Number(value);
			return Number.isInteger(number) && number > 0 && number <= 5000;
		};

		const searchInput = new shapez.FormElementInput({
			id: "findItem",
			label: "Shape declaration",
			placeholder: "Shape declaration",
			defaultValue: lastSearch.item,
			validator: val => this.validateSignalCode(val)
		});

		const searchRadius = new shapez.FormElementInput({
			id: "findRadius",
			label: "Radius (max 5000)",
			placeholder: "Search radius",
			defaultValue: lastSearch.radius.toString(),
			validator: val => checkRadius(val)
		});

		const firstMatchOnly = new shapez.FormElementCheckbox({
			id: "findShortcut",
			label: "First match only",
			placeholder: "",
			defaultValue: lastSearch.quick
		});

		const rotate = new shapez.FormElementCheckbox({
			id: "allowRotate",
			label: "Allow rotated shapes",
			placeholder: "",
			defaultValue: lastSearch.rotate
		});

		const excludeMinedClusters = new shapez.FormElementCheckbox({
			id: "excludeMinedClusters",
			label: "Skip extractor-used clusters (experimental)",
			placeholder: "",
			defaultValue: lastSearch.excludeMinedClusters === true
		});

		const dialog = new shapez.DialogWithForm({
			app: this.app,
			title: "Shape finder",
			desc: "<p><b>Shape:</b> 4 chars using C/R/S/W, or - as wildcard.<br><b>Search:</b> caches matches closest to farthest. Ctrl+G = next.<br><b>Experimental:</b> optionally skips clusters with extractors.</p>",
			formElements: [searchInput, searchRadius, firstMatchOnly, rotate, excludeMinedClusters],
			buttons: ["cancel:bad:escape", "ok:good:enter"],
			confirmButtonId: "ok",
			closeButton: false,
		});

		const handleDialogResult = () => {
			const root = this.getRoot();
			if (!root || !root.entityMgr) {
				console.warn("Game stopped while dialog was open!");
				return;
			}

			const item = searchInput.getValue().toUpperCase();
			const fields = {
				item,
				radius: Number(searchRadius.getValue()),
				quick: this.normalizeCheckboxValue(firstMatchOnly.getValue()),
				rotate: this.normalizeCheckboxValue(rotate.getValue()),
				excludeMinedClusters: this.normalizeCheckboxValue(excludeMinedClusters.getValue()),
				permutations: this.getPermutatedCodes(item)
			};

			this.lastSearch = fields;
			console.log("findshape2 search request", fields);
			this.findShape(fields.rotate ? fields.permutations : [fields.item], fields.radius, fields.quick, fields.excludeMinedClusters);
		};

		dialog.buttonSignals.ok.add(handleDialogResult);
		this.dialogs.internalShowDialog(dialog);
		this.renameLatestOkDialogButton("SEARCH");
		return dialog;
	}

	getRoot() {
		return this.app && this.app.stateMgr && this.app.stateMgr.currentState &&
			this.app.stateMgr.currentState.core && this.app.stateMgr.currentState.core.root;
	}

	normalizeCheckboxValue(value) {
		return value === true || value === "true" || value === 1 || value === "1" || value === "on";
	}

	validateSignalCode(code) {
		return typeof code === "string" && (/^[CRSW\-]{4}$/i.test(code) || /^6[CRSW\-]{6}$/i.test(code));
	}

	getPermutatedCodes(code) {
		if (!this.validateSignalCode(code)) {
			return [];
		}
    const permutations = [];
    if (code.startsWith('6')){
      code = code.substring(1);
      const chars = code.toUpperCase().split("");
      for (let i = 0; i < 6; i++) {
        permutations.push('6' + chars.join(""));
        chars.unshift(chars.pop());
      }
    } else {
      const chars = code.toUpperCase().split("");
      for (let i = 0; i < 6; i++) {
        permutations.push(chars.join(""));
        chars.unshift(chars.pop());
      }
    }

		return permutations.filter((value, index, array) => array.indexOf(value) === index);
	}

	distance(x1, y1, x2, y2) {
		return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
	}

	shapeCodeToRegex(code) {
    let normCode = code;
    if (code.startsWith('6')){
      normCode = code.substring(1);
    }
		let pattern = normCode
			.toUpperCase()
			.split("")
			.map(char => char === "-" ? ".u" : char + "u")
			.join("");
    if (code.startsWith('6')){
      pattern = '6' + pattern;
    }
		return new RegExp("^" + pattern + "$");
	}

	matchesAnyPattern(value, patterns) {
		return typeof value === "string" && patterns.some(pattern => pattern.test(value));
	}

	getShapePatchMatch(chunk, patch, patterns, tileCoords, radius, tileSizePixels) {
		if (!patch || !patch.item || !patch.pos) {
			return null;
		}

		const item = patch.item;
		if (item._type !== "shape" || !item.definition || !this.matchesAnyPattern(item.definition.cachedHash, patterns)) {
			return null;
		}

		const patchTileX = chunk.tileX + patch.pos.x;
		const patchTileY = chunk.tileY + patch.pos.y;
		const distance = this.distance(patchTileX, patchTileY, tileCoords.x, tileCoords.y);
		if (distance > radius) {
			return null;
		}

		return {
			x: chunk.worldSpaceRectangle.x + patch.pos.x * tileSizePixels,
			y: chunk.worldSpaceRectangle.y + patch.pos.y * tileSizePixels,
			distance,
			hash: item.definition.cachedHash,
			tileX: patchTileX,
			tileY: patchTileY
		};
	}


	collectMatches(normalizedShapes, radius, firstMatchOnly, excludeMinedClusters) {
		const root = this.getRoot();
		if (!root || !root.map || !root.camera) {
			console.warn("Unable to search; game root, map, or camera is not available.");
			return {
				matches: [],
				origin: { x: 0, y: 0 },
				excludedByExtractorClusters: 0,
				minedClusterCount: 0
			};
		}

		const chunkSizeTiles = 16;
		const tileSizePixels = 32;
		const tileCoords = {
			x: Math.round(root.camera.center.x / tileSizePixels),
			y: Math.round(root.camera.center.y / tileSizePixels),
		};

		const minChunkX = Math.floor((tileCoords.x - radius) / chunkSizeTiles);
		const maxChunkX = Math.floor((tileCoords.x + radius) / chunkSizeTiles);
		const minChunkY = Math.floor((tileCoords.y - radius) / chunkSizeTiles);
		const maxChunkY = Math.floor((tileCoords.y + radius) / chunkSizeTiles);
		const patterns = normalizedShapes.map(shape => this.shapeCodeToRegex(shape));
		let matches = [];
		const createdChunkIds = [];
		const resourceTiles = new Map();

		console.log("findshape2 scanning chunks", {
			minChunkX,
			maxChunkX,
			minChunkY,
			maxChunkY,
			radius,
			excludeMinedClusters
		});

		try {
			for (let chunkX = minChunkX; chunkX <= maxChunkX; chunkX++) {
				for (let chunkY = minChunkY; chunkY <= maxChunkY; chunkY++) {
					const chunkId = chunkX + "|" + chunkY;
					const existingChunk = root.map.getChunk(chunkX, chunkY, false);
					const chunk = existingChunk || root.map.getChunk(chunkX, chunkY, true);
					if (!existingChunk) {
						createdChunkIds.push(chunkId);
					}

					if (!chunk || !chunk.patches) {
						continue;
					}

					for (let i = 0; i < chunk.patches.length; i++) {
						const patch = chunk.patches[i];

						if (excludeMinedClusters) {
							this.indexShapeResourceTile(resourceTiles, chunk, patch);
						}

						const match = this.getShapePatchMatch(chunk, patch, patterns, tileCoords, radius, tileSizePixels);
						if (!match) {
							continue;
						}

						console.debug(match.hash + " at X=" + match.tileX + ", Y=" + match.tileY + ", dist=" + Math.floor(match.distance));
						matches.push(match);

						if (firstMatchOnly && !excludeMinedClusters) {
							return {
								matches,
								origin: tileCoords,
								createdChunkIds,
								excludedByExtractorClusters: 0,
								minedClusterCount: 0
							};
						}
					}
				}
			}
		} finally {
			this.cleanupCreatedChunks(root.map, createdChunkIds);
		}

		let excludedByExtractorClusters = 0;
		let minedClusterCount = 0;
		let detectedMinerResourceTiles = 0;
		let detectedMinerEntities = 0;
		if (excludeMinedClusters && matches.length > 0) {
			const minerSeedResult = this.getMinerResourceKeys(root, resourceTiles, matches);
			const minerResourceKeys = minerSeedResult.keys;
			detectedMinerEntities = minerSeedResult.minerCount;
			detectedMinerResourceTiles = minerResourceKeys.size;
			const filtered = this.filterMatchesFromMinedClusters(matches, resourceTiles, minerResourceKeys);
			matches = filtered.matches;
			excludedByExtractorClusters = filtered.excluded;
			minedClusterCount = filtered.minedClusterCount;
			console.log("findshape2 cluster filter detected", detectedMinerEntities, "miner entity/entities,", detectedMinerResourceTiles, "miner/search-near resource tile(s), and excluded", excludedByExtractorClusters, "candidate(s) from", minedClusterCount, "mined cluster(s)");
		}

		matches.sort((a, b) => a.distance - b.distance);
		if (firstMatchOnly && matches.length > 1) {
			matches = [matches[0]];
		}

		return {
			matches,
			origin: tileCoords,
			createdChunkIds,
			excludedByExtractorClusters,
			minedClusterCount,
			detectedMinerResourceTiles,
			detectedMinerEntities
		};
	}

	indexShapeResourceTile(resourceTiles, chunk, patch) {
		if (!patch || !patch.item || !patch.pos || patch.item._type !== "shape" || !patch.item.definition) {
			return;
		}

		const tileX = chunk.tileX + patch.pos.x;
		const tileY = chunk.tileY + patch.pos.y;
		const hash = patch.item.definition.cachedHash;
		resourceTiles.set(tileX + "|" + tileY, {
			tileX,
			tileY,
			hash
		});
	}


	getItemHash(item) {
		return item && item.definition && item.definition.cachedHash ? item.definition.cachedHash : null;
	}

	getMinerEntities(root) {
		const result = [];
		const seen = new Set();

		const addMiner = entity => {
			if (!entity || entity.destroyed || entity.queuedForDestroy || !entity.components || !entity.components.Miner) {
				return;
			}
			const key = entity.uid || result.length;
			if (seen.has(key)) {
				return;
			}
			seen.add(key);
			result.push(entity);
		};

		if (root.entityMgr && root.entityMgr.componentToEntity && root.entityMgr.componentToEntity.Miner) {
			for (let i = 0; i < root.entityMgr.componentToEntity.Miner.length; i++) {
				addMiner(root.entityMgr.componentToEntity.Miner[i]);
			}
		}

		if (root.entityMgr && root.entityMgr.entities) {
			for (let i = 0; i < root.entityMgr.entities.length; i++) {
				addMiner(root.entityMgr.entities[i]);
			}
		}

		return result;
	}




	getMinerResourceKeys(root, resourceTiles, matches) {
		const minerResourceKeys = new Set();
		const miners = this.getMinerEntities(root);
		const minerTiles = [];
		const seedRadius = 16;

		for (let i = 0; i < miners.length; i++) {
			const entity = miners[i];
			const staticComp = entity.components.StaticMapEntity;
			if (!staticComp) {
				continue;
			}

			const footprint = this.getStaticEntityFootprint(staticComp);
			for (let f = 0; f < footprint.length; f++) {
				minerTiles.push(footprint[f]);
				this.seedResourceTilesNearPoint(minerResourceKeys, resourceTiles, footprint[f], seedRadius);
			}
		}

		// Important fallback:
		// If the miner footprint and resource-patch coordinate systems don't line up exactly,
		// seed from actual search matches near miners. This directly handles clusters where
		// the extractor clearly sits on the found resource patch but the miner origin is offset.
		for (let i = 0; i < matches.length; i++) {
			const match = matches[i];
			if (this.isPointNearAnyMinerTile(match, minerTiles, seedRadius)) {
				minerResourceKeys.add(match.tileX + "|" + match.tileY);
			}
		}

		console.log("findshape2 detected", miners.length, "miner entity/entities and seeded", minerResourceKeys.size, "miner/search-near resource tile(s)");
		return {
			keys: minerResourceKeys,
			minerCount: miners.length
		};
	}

	seedResourceTilesNearPoint(seedKeys, resourceTiles, point, radius) {
		for (let dx = -radius; dx <= radius; dx++) {
			for (let dy = -radius; dy <= radius; dy++) {
				const key = (point.x + dx) + "|" + (point.y + dy);
				if (resourceTiles.has(key)) {
					seedKeys.add(key);
				}
			}
		}
	}

	isPointNearAnyMinerTile(point, minerTiles, radius) {
		for (let i = 0; i < minerTiles.length; i++) {
			const minerTile = minerTiles[i];
			const dx = point.tileX - minerTile.x;
			const dy = point.tileY - minerTile.y;
			if ((dx * dx + dy * dy) <= radius * radius) {
				return true;
			}
		}
		return false;
	}

	getStaticEntityFootprint(staticComp) {
		const tiles = [];
		const seen = new Set();

		const addCandidate = (x, y) => {
			if (typeof x !== "number" || typeof y !== "number") {
				return;
			}

			const tileX = Math.round(x);
			const tileY = Math.round(y);
			const key = tileX + "|" + tileY;
			if (!seen.has(key)) {
				seen.add(key);
				tiles.push({
					x: tileX,
					y: tileY
				});
			}
		};

		const addRawAndScaledCandidate = (x, y) => {
			addCandidate(x, y);

			// Some coordinates exposed by game internals can be world/pixel-space rather than tile-space.
			// Also add a /32 interpretation to tolerate that without needing to know which one this build exposes.
			addCandidate(x / 32, y / 32);
		};

		if (typeof staticComp.getTileSpaceBounds === "function") {
			const bounds = staticComp.getTileSpaceBounds();
			const x = Math.floor(bounds.x);
			const y = Math.floor(bounds.y);
			const w = Math.ceil(bounds.w || bounds.width || 1);
			const h = Math.ceil(bounds.h || bounds.height || 1);

			for (let dx = 0; dx < w; dx++) {
				for (let dy = 0; dy < h; dy++) {
					addRawAndScaledCandidate(x + dx, y + dy);
				}
			}
		}

		if (staticComp.origin) {
			addRawAndScaledCandidate(staticComp.origin.x, staticComp.origin.y);
		}

		return tiles;
	}

	getMinerMinedHash(root, minerComp, footprint, resourceTiles) {
		if (minerComp && minerComp.cachedMinedItem) {
			const cachedHash = this.getItemHash(minerComp.cachedMinedItem);
			if (cachedHash) {
				return cachedHash;
			}
		}

		for (let i = 0; i < footprint.length; i++) {
			const key = footprint[i].x + "|" + footprint[i].y;
			const resourceTile = resourceTiles.get(key);
			if (resourceTile && resourceTile.hash) {
				return resourceTile.hash;
			}

			if (root.map && typeof root.map.getLowerLayerContentXY === "function") {
				const tileBelow = root.map.getLowerLayerContentXY(footprint[i].x, footprint[i].y);
				const mapHash = this.getItemHash(tileBelow);
				if (mapHash) {
					return mapHash;
				}
			}
		}

		return null;
	}

	filterMatchesFromMinedClusters(matches, resourceTiles, minerResourceKeys) {
		if (!minerResourceKeys || minerResourceKeys.size === 0) {
			return {
				matches,
				excluded: 0,
				minedClusterCount: 0
			};
		}

		const minedResourceKeys = new Set();
		const visited = new Set();
		let minedClusterCount = 0;

		minerResourceKeys.forEach(key => {
			if (visited.has(key)) {
				return;
			}

			const clusterKeys = this.collectConnectedResourceCluster(key, resourceTiles, visited);
			if (clusterKeys.length === 0) {
				return;
			}

			minedClusterCount++;
			for (let i = 0; i < clusterKeys.length; i++) {
				minedResourceKeys.add(clusterKeys[i]);
			}
		});

		const filtered = [];
		let excluded = 0;
		for (let i = 0; i < matches.length; i++) {
			const key = matches[i].tileX + "|" + matches[i].tileY;
			if (minedResourceKeys.has(key)) {
				excluded++;
			} else {
				filtered.push(matches[i]);
			}
		}

		return {
			matches: filtered,
			excluded,
			minedClusterCount
		};
	}

	collectConnectedResourceCluster(startKey, resourceTiles, visited) {
		const start = resourceTiles.get(startKey);
		if (!start) {
			return [];
		}

		const stack = [startKey];
		const clusterKeys = [];

		while (stack.length > 0) {
			const key = stack.pop();
			if (visited.has(key)) {
				continue;
			}
			visited.add(key);

			const tile = resourceTiles.get(key);
			if (!tile || tile.hash !== start.hash) {
				continue;
			}

			clusterKeys.push(key);

			const x = tile.tileX;
			const y = tile.tileY;
			for (let dx = -1; dx <= 1; dx++) {
				for (let dy = -1; dy <= 1; dy++) {
					if (dx === 0 && dy === 0) {
						continue;
					}

					const neighbourKey = (x + dx) + "|" + (y + dy);
					const neighbour = resourceTiles.get(neighbourKey);
					if (neighbour && neighbour.hash === start.hash && !visited.has(neighbourKey)) {
						stack.push(neighbourKey);
					}
				}
			}
		}

		return clusterKeys;
	}

	cleanupCreatedChunks(map, chunkIds) {
		let removed = 0;
		for (let i = 0; i < chunkIds.length; i++) {
			const chunk = map.chunksById.get(chunkIds[i]);
			if (chunk && chunk.containedEntities && chunk.containedEntities.length === 0) {
				removed += map.chunksById.delete(chunkIds[i]) ? 1 : 0;
			}
		}
		if (removed > 0) {
			console.log("findshape2 removed", removed, "temporary empty chunk(s)");
		}
	}

	findShape(shapes, radius, firstMatchOnly, excludeMinedClusters = false) {
		if (!Array.isArray(shapes) || shapes.length === 0 || shapes.some(shape => !this.validateSignalCode(shape))) {
			throw new Error("Argument 'shapes': Expected array of shape strings of length 4 and made up of only the characters 'CRSW-'. Argument was", shapes);
		}

		const normalizedShapes = shapes.map(shape => shape.toUpperCase());
		if (normalizedShapes.indexOf("WWWW") >= 0) {
			this.dialogs.showInfo("Shape finder", "A shape made exclusively out of windmill pieces \"W\" cannot exist.");
			return false;
		}

		if (typeof radius !== "number" || radius < 1 || radius !== Math.floor(radius)) {
			throw new Error("Argument 'radius': Expected positive integer. Argument was", radius);
		}

		if (typeof firstMatchOnly !== "boolean") {
			throw new Error("Argument 'firstMatchOnly': Expected boolean. Argument was", firstMatchOnly);
		}

		if (typeof excludeMinedClusters !== "boolean") {
			throw new Error("Argument 'excludeMinedClusters': Expected boolean. Argument was", excludeMinedClusters);
		}

		const result = this.collectMatches(normalizedShapes, radius, firstMatchOnly, excludeMinedClusters);
		const matches = result.matches;

		this.findShapeSearch = {
			shapes: normalizedShapes,
			radius,
			origin: result.origin,
			matches,
			index: 0,
			firstMatchOnly,
			excludeMinedClusters
		};

		console.log("findshape2 found", matches.length, "matching shape patch(es)");

		if (matches.length === 0) {
			this.dialogs.showInfo("Shape finder", normalizedShapes.join(" or ") + " could not be found in a " + radius + " block radius.");
			return false;
		}

		this.setCameraToShape(matches[0], firstMatchOnly ? "Found first matching shape" : "Found closest shape 1/" + matches.length);

		const clusterFilterText = excludeMinedClusters
			? " Cluster filter: " + result.excludedByExtractorClusters + " excluded from " + result.minedClusterCount + " mined cluster(s); " + result.detectedMinerResourceTiles + " miner/search-near resource tile(s) seeded from " + result.detectedMinerEntities + " miner(s)."
			: "";

		if (firstMatchOnly) {
			this.dialogs.showInfo("Shape finder", "Found the first matching shape patch." + clusterFilterText + " Disable 'First match only' to cache all matches for Ctrl+G.");
		} else {
			this.dialogs.showInfo("Shape finder", "Found " + matches.length + " matching shape patch(es)." + clusterFilterText + " Use Ctrl+G to jump to the next cached result.");
		}

		return true;
	}

	findNextShape() {
		let search = this.findShapeSearch;

		if (!search || !search.matches || search.matches.length === 0) {
			this.dialogs.showInfo("Shape finder", "Run a normal shape search first, then use Ctrl+G to cycle through the cached results.");
			return false;
		}

		if (search.firstMatchOnly && this.lastSearch) {
			const shapes = this.lastSearch.rotate ? this.lastSearch.permutations : [this.lastSearch.item];
			const result = this.collectMatches(shapes, this.lastSearch.radius, false, this.lastSearch.excludeMinedClusters);
			search = {
				shapes,
				radius: this.lastSearch.radius,
				origin: result.origin,
				matches: result.matches,
				index: 0,
				firstMatchOnly: false,
				excludeMinedClusters: this.lastSearch.excludeMinedClusters
			};
			this.findShapeSearch = search;
			console.log("findshape2 refreshed first-match cache into", search.matches.length, "full cached match(es)");
		}

		if (search.matches.length <= 1) {
			if (search.matches.length === 1) {
				this.setCameraToShape(search.matches[0], "Only one matching shape was found");
			}
			this.dialogs.showInfo("Shape finder", "Only " + search.matches.length + " matching shape patch(es) were found in the last full search.");
			return search.matches.length === 1;
		}

		search.index = (search.index + 1) % search.matches.length;
		this.setCameraToShape(search.matches[search.index], "Found next shape " + (search.index + 1) + "/" + search.matches.length);
		console.log("findshape2 showing cached match", search.index + 1, "of", search.matches.length, search.matches[search.index]);
		return true;
	}

	setCameraToShape(match, message) {
		const root = this.getRoot();
		if (!root || !root.camera) {
			console.warn("Unable to move camera; game root or camera is not available.");
			return false;
		}

		console.log(message || "Found shape", match);
		root.camera.desiredZoom = 1;
		root.camera.desiredCenter = {
			x: match.x,
			y: match.y
		};
		return true;
	}

	cleanup() {
		const root = this.getRoot();
		if (!root || !root.map) {
			return;
		}

		const pending = [];
		root.map.chunksById.forEach(chunk => {
			if (chunk.containedEntities.length === 0) {
				pending.push(chunk.x + "|" + chunk.y);
			}
		});

		let removed = 0;
		for (const chunkId of pending) {
			removed += root.map.chunksById.delete(chunkId) ? 1 : 0;
		}
		console.log("Removed", removed, "empty chunks");
	}

	get icon() {
		return "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAA3NCSVQICAjb4U/" +
		"gAAAACXBIWXMAAAOnAAADpwE8lLkYAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2" +
		"NhcGUub3Jnm+48GgAAAr5QTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
		"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
		"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
		"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
		"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
		"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
		"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
		"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
		"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
		"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
		"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
		"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
		"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
		"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
		"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
		"AAAAAAAAAAAAAAAAASC4HpAAAAOl0Uk5TAAECAwQFBgcICQoLDA0ODxAREhMUFh" +
		"cZGhscHR4fICEiJCUmJygpKissLS4wMTM0NTY3ODk6Ozw9P0BBQkNERUZHSElKS" +
		"0xNTlBRUlNUVVZXWFlaXF9gYWJjZGZnaGlqa2xtbm9wcXJzdHV2d3h5ent8fX5/" +
		"gIGCg4SGiImKi4yNjo+QkZKTlJWWl5iZmpudnp+go6Slpqeoqqusra6vsLGys7S" +
		"1tri5u7y9vr/AwcLDxMXGx8jJysvMzs/Q0dLT1dbX2Nna29zd3t/g4eLj5OXn6O" +
		"nq6+zt7u/w8fLz9PX29/j5+vv8/f4gQEFyAAAGX0lEQVR42u2b+1sUVRjHD6CAC" +
		"ggBYhAliVgQGV4qIkzAGyIZQUIZdAEKsQtmYIWJqWhElpSQF5AszQtIcjESzJK8" +
		"IZiIggGp3Jf5L2JnhodzZmd3z3t2Z6eeZ9+fhuN+3/ezO2fe877njAhRmHNwVFL" +
		"WztKa5t6u8yeK8zLiw/xtkcXsgTeODnA6dqsoxskCwW3mbDzL6bP+IyneyoafUd" +
		"DGGbGGdZMVC++5Y5CjsBvJExQJ75xzh6O0i6tszB7ePu0WB7AzC80cf9VVDmjHH" +
		"jFjeLvtHNzurDBbfLdjHIuNfGCm+AGXOEbbZ5YncnEPx2wNPqbHz9QYijDQenPE" +
		"0L+3LzA1/i49nodObkiKDPIYfd4neIdEv7ZN320aiDEt/jpZr10l8W7ST/qvrRq" +
		"W+2zvEybdf7nf/0iYnlTrliSXLW6YMA9mdev6Ox1qKF+myuTLxims8V0v6DhrWs" +
		"GwYpQz1ip2P0k9DabaUayZZToEn7IB5En9dITS1SzZOk9mLEv8OKmX3x+ilcbek" +
		"0j/YpgGjtclTg4504sfa5WIP4EDrJW4yAfNJM8GST7yg8Z36ZR8f+BM9m4n9Yeh" +
		"ADmk/g9nqIMFksp9KUzu8Q+h/tsPfg+TSIDL9iD1Z4R4mKnC20YSxIHuYB+hfZs" +
		"tkVWSRSJEW0BI/7Rjy2SBxFI24kuvtCWXlOfF4Sc/THYFERQTbrLphXPJukrsMr" +
		"Zo19aZEAC/IdxPC323spEAWCwMvi4UAybUU/RTmUhj1cJYmPBtOmDpqB/3VEwrm" +
		"05wR/JjD4qZ8SxsHhYStRGt6hVc1TORHzsg/rkSBhBBfBfa4qwcF+3nhx4Xl/h8" +
		"4JPocBf3FcMiWs2PicXRcXDnfxD3lUunCcY1Gk8+Awh/dN4HTkbE7TxBWYsTRTA" +
		"/JHbHmfBs6IWXZz10meBlHCCHH7rMX7dNYsjHv+HeZlFJ1utMAX/h+mOWBeF73F" +
		"sElWQnLlmkHUkTruezAHwJr45LcUngOFInU3+RjXtLpJLU4hL3caQqpjU5GfeWS" +
		"iVpxqtZDGkvE0A0DpBFJenFFK0Y0nYmgHk4wCYqSRe+w8GPNPHXXzABhOIABVSS" +
		"JjwR8rm3QmhymQBewAHovkMFLrlfO1LCX/7CBJCGe1tPJSnBJXPGijGO62faaMj" +
		"Fvb1EJdmCS5ZrRxKE62gWgG9wb+HwtvRVvk8S6usiFgBil4OupE0gmmJ+qE5ICr" +
		"4MANdwb3Q7p+G45Aq+Pu1maE5wZ7fpNP5EHRegHfIVWt3huWCA94hTBEoRsTeSi" +
		"VckbV5QgBrc12aWFVRYgjzFzbfaibD47hqWzmQpsSnsSjRLwDMAYkLfc6BUTerV" +
		"eRCRg/AgcJdMeAjp27ofiS02R6G6FE4Mr4LiP83BqwGdIoJ7S2yZ+yHzSLBqwpE" +
		"/fU9JbpCKG1TLOkb7JNAhDDGZxJRCZ42EcsPY3mUwbOfd9hzhJh0gfZNQ9rizbd" +
		"EkkDttkLN1+xZCW8Z0Eutzk3AC6ypWc6zbO+MP8xnCRd802BbbefIMkuEUdA/5H" +
		"QqB8pWSc9hHofEzSAeah6EOfiUdXAFOxOckR2jXwK93LJJs19eDFsKFXdLjjlNg" +
		"gkqJh+uAA8B0mSNEMEGA9My4L552Y6hI9rgTTLBM5+wpl6o/9qrTc4wLJsjScXE" +
		"8yKjIJl7/izZggn06LjTfGjk6i2g0dJgOJZgs887SQL6nfkFIhZEXCqAEvh1yL4" +
		"fsCJetDN0SDhl/pQFKEDok66a7JG4q+cEZ6ZVDVC9VQAni+vQ4Gqzbn/9+YlTwv" +
		"OiUnF0/NNG/1gElCGnjzGxQgun1ahM47lGbAL2jUZtgSY/aBD67h1UmQLPLIf7b" +
		"FSBA83+mfYutLHjqaSUI0JJzFOE1e7X1o0IEtsu/NvLjNueKHaCLMgSj633IR3p" +
		"X3JbNWNmmGIH2mUg53CJ5QaKvvnBNMPkpJQm0v4RHUGRi1udlB77a9O6a2EC58z" +
		"yFCSjMpc5KYCWwEvxHCGqtBOoTOFsJrARagpr/AUEpUpsgTm2CzmlqExxEahPMV" +
		"JvgRaQyQR5SnKDaIMBJpDJBF1KZ4IIFAJCTAYISpDJBBlKZ4BmkLsFtJ2QpglPq" +
		"5CEjBGUIqUqg9GIoJTgqiX83ClnW7LaSO1xByOL21Pht6M6agtSw2Qlbq7ovfpf" +
		"57Nj/JPoXYfGJVqHG56gAAAAASUVORK5CYII=";
	}
}