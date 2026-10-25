function ExtendSuperclass(mod, cls, makeSubclass) {
    mod.modInterface.extendClass(cls, (old) => {
        return makeSubclass(old).prototype;
    });
}

shapez;
const { Application, CHANGELOG, AnimationFrame, compressionPrefix, asyncCompressor, AtlasDefinition, atlasFiles, getLogoSprite, BackgroundResourcesLoader, BufferMaintainer, enableImageSmoothing, disableImageSmoothing, getBufferVramUsageBytes, getBufferStats, clearBufferBacklog, makeOffscreenBuffer, registerCanvas, freeCanvas, cachebust, MAX_MOVE_DISTANCE_PX, clickDetectorGlobals, ClickDetector, IS_DEBUG, SUPPORT_TOUCH, IS_MAC, THIRDPARTY_URLS, A_B_TESTING_LINK_TYPE, globalConfig, IS_MOBILE, getDeviceDPI, smoothenDpi, prepareHighDPIContext, resizeHighDPICanvas, resizeCanvas, resizeCanvasAndClear, DrawParameters, initDrawUtils, drawRotatedSprite, drawSpriteClipped, APPLICATION_ERROR_OCCURED, ExplainedResult, Factory, GameState, gMetaBuildingRegistry, gBuildingsByCategory, gComponentRegistry, gGameModeRegistry, gGameSpeedRegistry, gItemRegistry, initBuildingsByCategory, GLOBAL_APP, setGlobalApp, BUILD_OPTIONS, InputDistributor, InputReceiver, Loader, createLogger, serializeError, stringifyObjectContainingErrors, globalDebug, globalLog, globalWarn, globalError, logSection, compressU8, compressU8WHeader, decompressU8WHeader, compressX64, decompressX64, Dialog, DialogLoading, DialogOptionChooser, DialogWithForm, FormElement, FormElementInput, FormElementCheckbox, FormElementItemChooser, queryParamOptions, ReadWriteProxy, Rectangle, PROMISE_ABORTED, RequestChannel, RestrictionManager, RandomNumberGenerator, sha1, getNameOfProvider, CRC_PREFIX, computeCrc, STOP_PROPAGATION, Signal, SingletonFactory, ORIGINAL_SPRITE_SCALE, FULL_CLIP_RECT, BaseSprite, SpriteAtlasLink, AtlasSprite, RegularSprite, StaleAreaDetector, StateManager, TextualGameState, TrackedState, isAndroid, isIos, getPlatformName, make2DUndefinedArray, newEmptyMap, randomInt, accessNestedPropertyReverse, randomChoice, fastArrayDelete, fastArrayDeleteValue, fastArrayDeleteValueIfContained, arrayDelete, arrayDeleteValue, epsilonCompare, lerp, findNiceValue, findNiceIntegerValue, formatBigNumber, formatBigNumberFull, waitNextFrame, round1Digit, round2Digits, round3Digits, round4Digits, clamp, makeDivElement, makeDiv, makeButtonElement, makeButton, removeAllChildren, isSupportedBrowser, formatSecondsToTimeAgo, formatSeconds, round1DigitLocalized, formatItemsPerSecond, rotateFlatMatrix3x3, generateMatrixRotations, rotateDirectionalObject, safeModulo, smoothPulse, fillInLinkIntoTranslation, generateFileDownload, startFileChoose, getRomanNumber, enumDirection, enumInvertedDirections, enumDirectionToAngle, enumAngleToDirection, arrayAllDirections, Vector, mixVector, enumDirectionToVector, AchievementProxy, enumSavePriority, AutomaticSave, BaseItem, BeltPath, Blueprint, gBuildingVariants, registerBuildingVariant, getBuildingDataFromCode, buildBuildingCodeCache, getCodeFromBuildingData, MetaAnalyzerBuilding, enumBalancerVariants, MetaBalancerBuilding, arrayBeltVariantToRotation, beltOverlayMatrices, MetaBeltBuilding, MetaBlockBuilding, MetaComparatorBuilding, MetaConstantProducerBuilding, MetaConstantSignalBuilding, enumCutterVariants, MetaCutterBuilding, MetaDisplayBuilding, MetaFilterBuilding, MetaGoalAcceptorBuilding, MetaHubBuilding, MetaItemProducerBuilding, MetaLeverBuilding, enumLogicGateVariants, MetaLogicGateBuilding, enumMinerVariants, MetaMinerBuilding, MetaMixerBuilding, enumPainterVariants, MetaPainterBuilding, MetaReaderBuilding, enumRotaterVariants, MetaRotaterBuilding, MetaStackerBuilding, MetaStorageBuilding, enumTransistorVariants, MetaTransistorBuilding, MetaTrashBuilding, arrayUndergroundRotationVariantToMode, enumUndergroundBeltVariants, enumUndergroundBeltVariantToTier, MetaUndergroundBeltBuilding, enumVirtualProcessorVariants, MetaVirtualProcessorBuilding, arrayWireRotationVariantToType, wireOverlayMatrices, wireVariants, MetaWireBuilding, MetaWireTunnelBuilding, USER_INTERACT_MOVE, USER_INTERACT_ZOOM, USER_INTERACT_TOUCHEND, enumMouseButton, Camera, enumColors, enumColorToShortcode, enumShortcodeToColor, enumColorsToHexCode, enumColorMixingResults, Component, initComponentRegistry, curvedBeltLength, FAKE_BELT_ACCEPTOR_SLOT, FAKE_BELT_EJECTOR_SLOT_BY_DIRECTION, BeltComponent, enumBeltReaderType, BeltReaderComponent, enumClippedBeltUnderlayType, BeltUnderlaysComponent, ConstantSignalComponent, DisplayComponent, FilterComponent, GoalAcceptorComponent, HubComponent, ItemAcceptorComponent, ItemEjectorComponent, enumItemProcessorTypes, enumItemProcessorRequirements, ItemProcessorComponent, ItemProducerComponent, LeverComponent, enumLogicGateType, LogicGateComponent, MinerComponent, StaticMapEntityComponent, MODS_ADDITIONAL_STORAGE_ITEM_RESOLVER, StorageComponent, enumUndergroundBeltMode, UndergroundBeltComponent, enumWireType, enumWireVariant, WireComponent, WireTunnelComponent, enumPinSlotType, WiredPinsComponent, GameCore, DynamicTickrate, Entity, EntityComponentStorage, EntityManager, GameLoadingOverlay, enumGameModeIds, enumGameModeTypes, GameMode, initGameModeRegistry, initGameSpeedRegistry, GameSystem, MODS_ADDITIONAL_SYSTEMS, GameSystemManager, GameSystemWithFilter, getRandomHint, MOD_ITEM_PROCESSOR_SPEEDS, HubGoals, BaseHUDPart, DynamicDomAttach, GameHUD, HUDBaseToolbar, HUDBetaOverlay, HUDBlueprintPlacer, HUDBuildingPlacer, HUDBuildingPlacerLogic, HUDBuildingsToolbar, HUDCatMemes, HUDColorBlindHelper, MODS_ADDITIONAL_CONSTANT_SIGNAL_RESOLVER, HUDConstantSignalEdit, HUDChangesDebugger, HUDDebugInfo, HUDGameMenu, HUDInteractiveTutorial, HUDKeybindingOverlay, HUDLayerPreview, HUDLeverToggle, HUDMassSelector, HUDMinerHighlight, HUDModalDialogs, HUDPuzzleNextPuzzle, enumNotificationType, HUDNotifications, HUDPinnedShapes, HUDPuzzleBackToMenu, HUDPuzzleCompleteNotification, HUDPuzzleDLCLogo, HUDPuzzleEditorControls, HUDPuzzleEditorReview, HUDPuzzleEditorSettings, HUDPuzzlePlayMetadata, HUDPuzzlePlaySettings, HUDSandboxController, HUDScreenshotExporter, HUDSettingsMenu, HUDShapeTooltip, HUDShapeViewer, HUDShop, HUDStandaloneAdvantages, HUDStatistics, enumDisplayMode, statisticsUnitsSeconds, HUDShapeStatisticsHandle, HUDPartTutorialHints, HUDTutorialVideoOffer, HUDUnlockNotification, HUDVignetteOverlay, HUDWatermark, HUDWaypoints, HUDWireInfo, HUDWiresOverlay, HUDWiresToolbar, initItemRegistry, MODS_ADDITIONAL_ITEMS, itemResolverSingleton, typeItemSingleton, BooleanItem, BOOL_FALSE_SINGLETON, BOOL_TRUE_SINGLETON, isTrueItem, isTruthyItem, ColorItem, COLOR_ITEM_SINGLETONS, ShapeItem, keyToKeyCode, KEYCODES, KEYMAPPINGS, KEYCODE_LMB, KEYCODE_MMB, KEYCODE_RMB, getStringForKeyCode, Keybinding, KeyActionMapper, GameLogic, BaseMap, MODS_ADDITIONAL_SHAPE_MAP_WEIGHTS, MapChunk, MapChunkAggregate, CHUNK_OVERLAY_RES, MOD_CHUNK_DRAW_HOOKS, MapChunkView, MapView, defaultBuildingVariant, MetaBuilding, registerBuildingVariants, initMetaBuildingRegistry, initBuildingCodesAfterResourcesLoaded, PuzzleGameMode, PuzzleEditGameMode, PuzzlePlayGameMode, rocketShape, finalGameShape, generateLevelDefinitions, RegularGameMode, enumAnalyticsDataSource, ProductionAnalytics, layers, GameRoot, MODS_ADDITIONAL_SUB_SHAPE_DRAWERS, TOP_RIGHT, BOTTOM_RIGHT, BOTTOM_LEFT, TOP_LEFT, enumSubShape, enumSubShapeToShortcode, enumShortcodeToSubShape, createSimpleShape, ShapeDefinition, ShapeDefinitionManager, SoundProxy, BELT_ANIM_COUNT, BeltSystem, BeltReaderSystem, BeltUnderlaysSystem, ConstantProducerSystem, ConstantSignalSystem, MODS_ADDITIONAL_DISPLAY_ITEM_RESOLVER, MODS_ADDITIONAL_DISPLAY_ITEM_DRAW, DisplaySystem, FilterSystem, GoalAcceptorSystem, HubSystem, ItemAcceptorSystem, ItemEjectorSystem, MOD_ITEM_PROCESSOR_HANDLERS, MODS_PROCESSING_REQUIREMENTS, MODS_CAN_PROCESS, ItemProcessorSystem, ItemProcessorOverlaysSystem, ItemProducerSystem, LeverSystem, LogicGateSystem, MapResourcesSystem, MinerSystem, StaticMapEntitySystem, StorageSystem, UndergroundBeltSystem, WireNetwork, WireSystem, WiredPinsSystem, ZoneSystem, THEMES, THEME, applyGameTheme, BaseGameSpeed, FastForwardGameSpeed, GameTime, PausedGameSpeed, RegularGameSpeed, enumHubGoalRewards, enumHubGoalRewardsToContentUnlocked, LANGUAGES, Mod: Mod$1, ModInterface, ModMetaBuilding, MOD_SIGNALS, ModLoader, MODS, ACHIEVEMENTS, AchievementProviderInterface, Achievement, AchievementCollection, AdProviderInterface, AdinplayAdProvider, GamedistributionAdProvider, NoAdProvider, AnalyticsInterface, ClientAPI, ShapezGameAnalytics, GoogleAnalyticsImpl, NoAchievementProvider, NoGameAnalytics, SoundImplBrowser, StorageImplBrowser, StorageImplBrowserIndexedDB, PlatformWrapperImplBrowser, SteamAchievementProvider, StorageImplElectron, PlatformWrapperImplElectron, GameAnalyticsInterface, SOUNDS, MUSIC, SoundInstanceInterface, MusicInstanceInterface, SoundInterface, FILE_NOT_FOUND, StorageInterface, PlatformWrapperInterface, enumCategories, uiScales, scrollWheelSensitivities, movementSpeeds, autosaveIntervals, refreshRateOptions, ApplicationSettings, BaseSetting, EnumSetting, BoolSetting, RangeSetting, PuzzleSerializer, Savegame, compressObject, decompressObject, BaseSavegameInterface, savegameInterfaces, getSavegameInterface, enumLocalSavegameStatus, SavegameManager, SavegameSerializer, SavegameInterface_V1000, SavegameInterface_V1001, SavegameInterface_V1002, SavegameInterface_V1003, SavegameInterface_V1004, SavegameInterface_V1005, SavegameInterface_V1006, SavegameInterface_V1007, SavegameInterface_V1008, SavegameInterface_V1009, SavegameInterface_V1010, types, BasicSerializableObject, serializeSchema, deserializeSchema, verifySchema, extendSchema, globalJsonSchemaDefs, schemaToJsonSchema, BaseDataType, TypeInteger, TypePositiveInteger, TypePositiveIntegerOrString, TypeBoolean, TypeString, TypeVector, TypeTileVector, TypeNumber, TypePositiveNumber, TypeEnum, TypeEntity, TypeEntityWeakref, TypeClass, TypeClassData, TypeClassFromMetaclass, TypeMetaClass, TypeArray, TypeFixedClass, TypeKeyValueMap, TypeClassId, TypePair, TypeNullable, TypeStructuredObject, SerializerInternal, AboutState, ChangelogState, GAME_LOADING_STATES, gameCreationAction, GameCreationPayload, InGameState, KeybindingsState, LoginState, MainMenuState, MobileWarningState, ModsState, PreloadState, PuzzleMenuState, SettingsState, WegameSplashState, T, autoDetectLanguageId, matchDataRecursive, updateApplicationLanguage } = shapez;

var SzInfo;
(function (SzInfo) {
    (function (color_1) {
        color_1.outline = "#55575a";
        color_1.list = [
            { name: 'red', style: 'red', code: 'r', combo: 'rrr' },
            { name: 'orange', style: 'orange', code: 'o', combo: 'grr' },
            { name: 'yellow', style: 'yellow', code: 'y', combo: 'ggr' },
            { name: 'green', style: 'green', code: 'g', combo: 'ggg' },
            { name: 'lawngreen', style: 'lawngreen', code: 'l', combo: 'bgg' },
            { name: 'cyan', style: 'cyan', code: 'c', combo: 'bbg' },
            { name: 'blue', style: 'blue', code: 'b', combo: 'bbb' },
            { name: 'purple', style: 'purple', code: 'v', combo: 'bbr' },
            { name: 'pink', style: 'pink', code: 'p', combo: 'brr' },
            { name: 'grey', style: 'grey', code: 'u' },
            { name: 'white', style: 'white', code: 'w' },
            { name: 'none', style: 'none', code: '-' },
        ];
        Object.assign(globalThis, { list: color_1.list });
        color_1.colorList = color_1.list.map(e => e.name);
        color_1.byName = Object.fromEntries(color_1.list.map(e => [e.name, e]));
        color_1.byChar = Object.fromEntries(color_1.list.map(e => [e.code, e]));
        color_1.byCombo = Object.fromEntries(color_1.list.filter(e => e.combo).map(e => [e.combo, e]));
        color_1.byName['uncolored'] = color_1.byName.grey;
        function exampleLayer(color) {
            let i = 0;
            return new SzLayer({
                quads: [
                    { shape: 'circle', from: i, to: i += 6, color },
                    { shape: 'square', from: i, to: i += 6, color },
                    { shape: 'circle', from: i, to: i += 6, color },
                    { shape: 'square', from: i, to: i += 6, color },
                    { shape: 'circle', from: i, to: i += 6, color },
                    { shape: 'square', from: i, to: i += 6, color },
                ]
            });
        }
        color_1.exampleLayer = exampleLayer;
    })(SzInfo.color || (SzInfo.color = {}));
    (function (quad_1) {
        quad_1.list = [
            { name: 'circle', code: 'C', combo: 'C', spawn: '6CuCuCuCuCuCu' },
            { name: 'square', code: 'R', combo: 'R', spawn: '6RuRuRuRuRuRu' },
            { name: 'star', code: 'S', combo: 'S', spawn: '6SuSuSuSuSuSu' },
            { name: 'windmill', code: 'W', combo: 'W', spawn: '6WuWuWuWuWuWu' },
        ];
        quad_1.named4 = {
            circleSpawn: 'CuCuCuCu',
            squareSpawn: 'RuRuRuRu',
            starSpawn: 'SuSuSuSu',
            windmillSpawn: 'WuWuWuWu',
            circleBottom: '--CuCu--',
            circle: "CuCuCuCu",
            circleHalf: "----CuCu",
            rect: "RuRuRuRu",
            rectHalf: "RuRu----",
            circleHalfRotated: "Cu----Cu",
            circleQuad: "Cu------",
            circleRed: "CrCrCrCr",
            rectHalfBlue: "RbRb----",
            circlePurple: "CpCpCpCp",
            starCyan: "ScScScSc",
            fish: "CgScScCg",
            blueprint: "CbCbCbRb:CwCwCwCw",
            rectCircle: "RpRpRpRp:CwCwCwCw",
            watermelon: "--Cg----:--Cr----",
            starCircle: "SrSrSrSr:CyCyCyCy",
            starCircleStar: "SrSrSrSr:CyCyCyCy:SwSwSwSw",
            fan: "CbRbRbCb:CwCwCwCw:WbWbWbWb",
            monster: "Sg----Sg:CgCgCgCg:--CyCy--",
            bouquet: "CpRpCp--:SwSwSwSw",
            logo: "RuCw--Cw:----Ru--",
            target: "CrCwCrCw:CwCrCwCr:CrCwCrCw:CwCrCwCr",
            speedometer: "Cg----Cr:Cw----Cw:Sy------:Cy----Cy",
            // spikedBall: "CcSyCcSy:SyCcSyCc:CcSyCcSy:SyCcSyCc",
            spikedBall: "CcSyCcSy:SyCcSyCc:CcSyCcSy",
            compass: "CcRcCcRc:RwCwRwCw:Sr--Sw--:CyCyCyCy",
            plant: "Rg--Rg--:CwRwCwRw:--Rg--Rg",
            rocket: "CbCuCbCu:Sr------:--CrSrCr:CwCwCwCw",
            mill: "CwCwCwCw:WbWbWbWb",
            star: "SuSuSuSu",
            circleStar: "CwCrCwCr:SgSgSgSg",
            clown: "WrRgWrRg:CwCrCwCr:SgSgSgSg",
            windmillRed: "WrWrWrWr",
            fanTriple: "WpWpWpWp:CwCwCwCw:WpWpWpWp",
            fanQuadruple: "WpWpWpWp:CwCwCwCw:WpWpWpWp:CwCwCwCw",
            bird: "Sr------:--Cg--Cg:Sb--Sb--:--Cw--Cw",
            scissors: "Sr------:--CgCgCg:--Sb----:Cw--CwCw",
        };
        quad_1.named6 = {
            circleSpawn: '6CuCuCuCuCuCu',
            squareSpawn: '6RuRuRuRuRuRu',
            starSpawn: '6SuSuSuSuSuSu',
            windmillSpawn: '6WuWuWuWuWuWu',
            circleBottom: '6----CuCuCu--',
            circle: "6CuCuCuCuCuCu",
            circleHalf: "6------CuCuCu",
            rect: "6RuRuRuRuRuRu",
            rectHalf: "6RuRuRu------",
            circleHalfRotated: "6Cu------CuCu",
            circleQuad: "6CuCu--------",
            circleRed: "6CrCrCrCrCrCr",
            rectHalfBlue: "6RbRbRb------",
            circlePurple: "6CpCpCpCpCpCp",
            starCyan: "6ScScScScScSc",
            fish: "6CgCgScScCgCg",
            blueprint: "6CbCbCbCbCbRb:6CwCwCwCwCwCw",
            rectCircle: "6RpRpRpRpRpRp:6CwCwCwCwCwCw",
            watermelon: "6--CgCg------:6--CrCr------",
            starCircle: "6SrSrSrSrSrSr:6CyCyCyCyCyCy",
            starCircleStar: "6SrSrSrSrSrSr:6CyCyCyCyCyCy:6SwSwSwSwSwSw",
            fan: "6CbCbRbRbCbCb:6CwCwCwCwCwCw:6WbWbWbWbWbWb",
            monster: "6Sg--------Sg:6CgCgCgCgCgCg:6--CyCyCyCy--",
            bouquet: "6CpCpRpCpCp--:6SwSwSwSwSwSw",
            logo: "6RwCuCw--CwCu:6------Ru----",
            target: "6CrCwCrCwCrCw:6CwCrCwCrCwCr:6CrCwCrCwCrCw:6CwCrCwCrCwCr",
            speedometer: "6CgCb----CrCy:6CwCw----CwCw:6Sc----------:6CyCy----CyCy",
            spikedBall: "6CcSyCcSyCcSy:6SyCcSyCcSyCc:6CcSyCcSyCcSy:6SyCcSyCcSyCc",
            compass: "6CcRcRcCcRcRc:6RwCwCwRwCwCw:6----Sr----Sb:6CyCyCyCyCyCy",
            plant: "6Rg--Rg--Rg--:6CwRwCwRwCwRw:6--Rg--Rg--Rg",
            rocket: "6CbCuCbCuCbCu:6Sr----------:6--CrCrSrCrCr:6CwCwCwCwCwCw",
            mill: "6CwCwCwCwCwCw:6WbWbWbWbWbWb",
            star: "6SuSuSuSuSuSu",
            circleStar: "6CwCrCwCrCwCr:6SgSgSgSgSgSg",
            clown: "6WrRgWrRgWrRg:6CwCrCwCrCwCr:6SgSgSgSgSgSg",
            windmillRed: "6WrWrWrWrWrWr",
            fanTriple: "6WpWpWpWpWpWp:6CwCwCwCwCwCw:6WpWpWpWpWpWp",
            fanQuadruple: "6WpWpWpWpWpWp:6CwCwCwCwCwCw:6WpWpWpWpWpWp:6CwCwCwCwCwCw",
            bird: "6Sr----------:6--CgCg--CgCg:6Sb----Sb----:6--CwCw--CwCw",
            scissors: "6Sr----------:6--CgCgCgCgCg:6----Sb------:6CwCw--CwCwCw",
        };
        quad_1.named = {
            circleSpawn: '6CuCuCuCuCuCu',
            squareSpawn: '6RuRuRuRuRuRu',
            starSpawn: '6SuSuSuSuSuSu',
            windmillSpawn: '6WuWuWuWuWuWu',
        };
        Object.assign(quad_1.named, Object.fromEntries(Object.keys(quad_1.named6).flatMap(k => {
            let s4 = quad_1.named4[k];
            let s6 = quad_1.named6[k];
            let a = [];
            if (s4)
                a.push([k + 4, s4]);
            if (s4)
                a.push([s4, s6]);
            if (s6)
                a.push([k, s6]);
            return a;
        })));
        // console.log({ named });
        Object.assign(globalThis, { named: quad_1.named });
        quad_1.byName = Object.fromEntries(quad_1.list.map(e => [e.name, e]));
        quad_1.byChar = Object.fromEntries(quad_1.list.map(e => [e.code, e]));
        function exampleLayer(shape) {
            let i = 0, d = 4;
            return new SzLayer({
                quads: [
                    { shape, from: i, to: i += d, color: 'grey' },
                    { shape, from: i, to: i += d, color: 'grey' },
                    { shape, from: i, to: i += d, color: 'grey' },
                    { shape, from: i, to: i += d, color: 'grey' },
                    { shape, from: i, to: i += d, color: 'grey' },
                    { shape, from: i, to: i += d, color: 'grey' },
                ],
            });
        }
        quad_1.exampleLayer = exampleLayer;
        quad_1.quadList = quad_1.list.map(e => e.name);
    })(SzInfo.quad || (SzInfo.quad = {}));
    let s = Array(100).fill(0).map((e, i) => i.toString(36)).join('').slice(0, 36);
    s += s.slice(10).toUpperCase();
    SzInfo.nToChar = s.split('');
    SzInfo.charToN = Object.fromEntries(SzInfo.nToChar.map((e, i) => [e, i]));
})(SzInfo || (SzInfo = {}));
class SzLayerQuad {
    shape = 'circle';
    color = 'none';
    from = 0;
    to = 0;
    constructor(source) {
        Object.assign(this, source);
    }
    clone() { return new SzLayerQuad(this); }
    outerPath(ctx, layer) {
        switch (this.shape) {
            case 'circle': {
                ctx.arc(0, 0, 1, this.from, this.to);
                return;
            }
            case 'square': {
                ctx.lineToR(1, this.from);
                // 6 -> Math.SQRT2, 12 -> 1
                let a = this.to - this.from;
                let ar = a * (Math.PI / 24);
                let R = a <= 6 ? 1 / Math.cos(ar) : 1;
                ctx.lineToR(R, (this.from + this.to) / 2);
                ctx.lineToR(1, this.to);
                return;
            }
            case 'star': {
                ctx.lineToR(0.6, this.from);
                ctx.lineToR(Math.SQRT2, (this.from + this.to) / 2);
                ctx.lineToR(0.6, this.to);
                return;
            }
            case 'windmill': {
                ctx.lineToR(1, this.from);
                let a = this.to - this.from;
                let ar = a * (Math.PI / 24);
                let R = a <= 6 ? 1 / Math.cos(ar) : 1;
                ctx.lineToR(R, (this.from + this.to) / 2);
                ctx.lineToR(0.6, this.to);
                // let originX = -quadrantHalfSize;
                // let originY = quadrantHalfSize - dims;
                // const moveInwards = dims * 0.4;
                // context.moveTo(originX, originY + moveInwards);
                // context.lineTo(originX + dims, originY);
                // context.lineTo(originX + dims, originY + dims);
                // context.lineTo(originX, originY + dims);
                // context.closePath();
                // context.fill();
                // context.stroke();
                break;
            }
            default: {
                ctx.saved(ctx => {
                    if (this.shape == 'cover') {
                        ctx.scale(1 / layer.layerScale());
                    }
                    SzInfo.quad.byName[this.shape].path(ctx, this);
                });
                return;
            }
        }
    }
    getHash() {
        return `${SzInfo.quad.byName[this.shape].code}${SzInfo.color.byName[this.color].code}${SzInfo.nToChar[this.from]}${SzInfo.nToChar[this.to]}`;
    }
    static fromShortKey(e) {
        return new SzLayerQuad({
            shape: SzInfo.quad.byChar[e[0]].name,
            color: SzInfo.color.byChar[e[1]].name,
            from: SzInfo.charToN[e[2]],
            to: SzInfo.charToN[e[3]],
        });
    }
}
const testTemplate = {
    quads: [
        { shape: 'square', color: 'green', from: 2, to: 4 },
        { shape: 'circle', color: 'pink', from: 5, to: 19 },
        { shape: 'square', color: 'green', from: 20, to: 22 },
    ],
};
class SzLayer {
    layerIndex = 0;
    quads = [];
    static createTest() {
        let l = new SzLayer(testTemplate);
        console.error('test layer', l);
        return l;
    }
    constructor(source, layerIndex) {
        if (source) {
            this.quads = (source.quads ?? []).map(e => new SzLayerQuad(e));
            if (source.layerIndex) {
                this.layerIndex = source.layerIndex;
            }
        }
        if (layerIndex != null) {
            this.layerIndex = layerIndex;
        }
        return this.normalize();
    }
    layerScale(layerIndex) {
        layerIndex ??= this.layerIndex;
        return 0.9 - 0.22 * layerIndex;
    }
    drawCenteredLayerScaled(ctx, layerIndex) {
        ctx.saved(ctx => {
            ctx.scale(this.layerScale(layerIndex));
            this.drawCenteredNormalized(ctx);
        });
    }
    drawCenteredNormalized(ctx) {
        ctx.saved(ctx => {
            this.clipShapes(ctx);
            this.quads.forEach(q => ctx.saved(ctx => this.fillQuad(q, ctx)));
        });
        ctx.saved(ctx => this.drawQuadOutline(ctx, true));
    }
    fillQuad(quad, ctx) {
        ctx.fillStyle = SzInfo.color.byName[quad.color].style;
        if (quad.color == 'cover')
            ;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        quad.outerPath(ctx, this);
        ctx.fill();
    }
    fullQuadPath(ctx, withCuts) {
        ctx.beginPath();
        for (let i = 0; i < this.quads.length; i++) {
            let prev = i > 0 ? this.quads[i - 1] : this.quads.slice(-1)[0];
            let quad = this.quads[i];
            if (withCuts || quad.from != prev.to % 24)
                ctx.lineTo(0, 0);
            quad.outerPath(ctx, this);
        }
        ctx.closePath();
    }
    drawQuadOutline(ctx, withCuts) {
        this.fullQuadPath(ctx, withCuts);
        ctx.lineWidth = 0.05;
        ctx.strokeStyle = SzInfo.color.outline; // 'orange';
        ctx.stroke();
    }
    clipShapes(ctx) {
        this.fullQuadPath(ctx);
        ctx.clip();
    }
    clone() {
        return new SzLayer(this);
    }
    isNormalized() {
        for (let i = 0; i < this.quads.length; i++) {
            let next = this.quads[i];
            let prev = this.quads[i - 1] || this.quads[this.quads.length - 1];
            if (next.from < 0 || next.from >= 24)
                return false;
            if (next.from >= next.to)
                return false;
            if (i == 0) {
                if (prev.to > 24 && prev.to % 24 > next.from)
                    return false;
            }
            else {
                if (prev.to > next.from)
                    return false;
            }
        }
        let places = Array(24).fill('');
        Array(24).fill('');
        for (let q of this.quads) {
            for (let i = q.from; i < q.to; i++) {
                if (places[i % 24])
                    return false;
                places[i % 24] = q.shape;
            }
        }
        return true;
    }
    normalize() {
        if (this.isNormalized())
            return this;
        for (let i = 0; i < this.quads.length; i++) {
            let q = this.quads[i];
            if (q.from > q.to) {
                this.quads.splice(i, 1);
                i--;
                continue;
            }
            if (q.from >= 24) {
                q.from -= 24;
                q.to -= 24;
            }
        }
        this.quads.sort((a, b) => a.from - b.from);
        let places = Array(24).fill('');
        let paints = Array(24).fill('');
        for (let q of this.quads) {
            for (let i = q.from; i < q.to; i++) {
                places[i % 24] = q.shape;
            }
        }
        for (let i = 0; i < 24; i++)
            if (!places[i])
                paints[i] = '';
        if (!this.isNormalized()) {
            Object.assign(globalThis, { layer: this });
            console.error('Layer failed to normalize properly!', this);
            debugger;
        }
        return this;
    }
    isEmpty() {
        return this.quads.length == 0;
    }
    getQuadAtSector(s) {
        let s1 = (s + 0.5) % 24, s2 = s1 + 24;
        return this.quads.find(q => (q.from < s1 && q.to > s1) || (q.from < s2 && q.to > s2));
    }
    canStackWith(upper) {
        if (!upper)
            return true;
        for (let i = 0; i < 24; i++) {
            let q1 = this.getQuadAtSector(i);
            let q2 = upper.getQuadAtSector(i);
            if (q1 && q2)
                return false;
        }
        return true;
    }
    stackWith(upper) {
        if (!this.canStackWith(upper)) {
            console.error('Invalid stacking requested!');
            debugger;
            return this.clone();
        }
        if (!upper)
            return this.clone();
        return new SzLayer({
            quads: this.quads.concat(upper.quads),
        });
    }
    rotate(rot) {
        this.quads.map(e => { e.from += rot; e.to += rot; });
        return this.normalize();
    }
    cloneFilteredByQuadrants(includeQuadrants) {
        // const good = (n: number) => includeQuadrants.includes((~~(n / 6)) % 4);
        const good = (n) => includeQuadrants.includes(~~((~~(n / 4)) / 1.5));
        let allowed = Array(48).fill(0).map((e, i) => good(i + 0.5));
        function convert(old) {
            let filled = Array(48).fill(0).map((e, i) => old.from < i + 0.5 && i + 0.5 < old.to);
            let last = old.clone();
            last.to = -999;
            let list = [];
            for (let i = 0; i < 48; i++) {
                if (!filled[i])
                    continue;
                if (!allowed[i])
                    continue;
                if (last.to != i) {
                    last = old.clone();
                    last.from = i;
                    last.to = i + 1;
                    list.push(last);
                }
                else {
                    last.to++;
                }
            }
            return list;
        }
        return new SzLayer({
            quads: this.quads.flatMap(convert),
        });
    }
    cloneFilteredBySectors(includeSectors) {
        const allowed = Array(48).fill(0).map((e, i) => includeSectors.includes(Math.floor((i % 24) / 4)));
        function convert(old) {
            let last = old.clone();
            last.to = -999;
            const result = [];
            for (let i = 0; i < 48; i++) {
                if (!allowed[i] || !(old.from < i + 0.5 && i + 0.5 < old.to))
                    continue;
                if (last.to != i) {
                    last = old.clone();
                    last.from = i;
                    last.to = i + 1;
                    result.push(last);
                } else {
                    last.to++;
                }
            }
            return result;
        }
        return new SzLayer({
            quads: this.quads.flatMap(convert),
        });
    }
    cloneAsCover() {
        function convert(quad) {
            return new SzLayerQuad({
                color: 'cover',
                shape: 'cover',
                from: quad.from, to: quad.to,
            });
        }
        return new SzLayer({
            quads: this.quads.flatMap(convert),
        }).paint('cover').normalize();
    }
    removeCover() {
        this.quads = this.quads.filter(e => e.shape != 'cover');
        return this;
    }
    filterPaint(paint) {
        return paint.map((e, i) => {
            let quad = this.getQuadAtSector(i);
            return quad && quad.shape == 'cover' ? null : e;
        });
    }
    paint(paint) {
        if (Array.isArray(paint))
            throw this;
        this.quads.map(e => e.color = paint);
        // if (!Array.isArray(paint)) paint = Array<color | null>(24).fill(paint);
        // paint.map((color, i) => {
        // 	if (color) {
        // 		this.areas.push(new SzLayerArea({
        // 			color,
        // 			from: i, to: i + 1,
        // 			shape: 'sector',
        // 		}))
        // 	}
        // });
        return this.normalize();
    }
    paintBySectors(paints) {
        this.quads = this.quads.flatMap(quad => {
            if (quad.shape == 'cover')
                return [];
            const painted = [];
            for (let sector = 0; sector < 6; sector++) {
                for (let turn = 0; turn < 2; turn++) {
                    const start = sector * 4 + turn * 24;
                    const from = Math.max(quad.from, start);
                    const to = Math.min(quad.to, start + 4);
                    if (from >= to)
                        continue;
                    const color = paints[sector * 4];
                    painted.push(new SzLayerQuad({
                        ...quad,
                        from,
                        to,
                        color: color == null ? quad.color : color,
                    }));
                }
            }
            return painted;
        });
        return this.normalize();
    }
    static fromShapezHash(hash) {
        let angle = 6;
        if (hash[0] == '6') {
            angle = 4;
            hash = hash.slice(1);
        }
        return new SzLayer({
            quads: hash.match(/../g).map((s, i) => {
                if (s[0] == '-')
                    return null;
                return new SzLayerQuad({
                    shape: SzInfo.quad.byChar[s[0]].name,
                    color: SzInfo.color.byChar[s[1]].name,
                    from: i * angle,
                    to: (i + 1) * angle,
                });
            }).filter(e => e),
        });
    }
    getHash() {
        if (this.quads.every(e => e.to - e.from == 6)) {
            return [0, 1, 2, 3].map(i => {
                let q = this.quads.find(q => q.from == i * 6);
                if (!q)
                    return '--';
                return q.getHash().slice(0, 2);
            }).join('');
        }
        return '6' + [0, 1, 2, 3, 4, 5].map(i => {
            let q = this.quads.find(q => q.from == i * 4);
            if (!q)
                return '--';
            return q.getHash().slice(0, 2);
        }).join('');
    }
    static fromShortKey(key) {
        if (key.startsWith('6') || !key.startsWith('!') && key.length == 8) {
            return SzLayer.fromShapezHash(key);
        }
        if (key.startsWith('sz!'))
            key = key.slice(3);
        if (!key.startsWith('l!z|'))
            throw new Error('invalid hash');
        let layer = new SzLayer();
        for (let part of key.split('|')) {
            if (part.startsWith('q!')) {
                let strs = part.slice('q!'.length).split(',');
                layer.quads = strs.map(e => SzLayerQuad.fromShortKey(e));
            }
        }
        return layer;
    }
}

const PI12 = -Math.PI / 12;
class SzContext2D {
    static fromCanvas(cv) {
        let ctx = cv.getContext('2d');
        ctx.scale(cv.width / 2, cv.height / 2);
        ctx.translate(1, 1);
        ctx.rotate(-Math.PI / 2);
        ctx.scale(1 / 1.15, 1 / 1.15);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        return new SzContext2D(ctx);
    }
    clear() {
        this.ctx.clearRect(-2, -2, 4, 4);
    }
    ctx;
    constructor(ctx) {
        this.ctx = ctx;
    }
    get lineWidth() { return this.ctx.lineWidth; }
    set lineWidth(v) { this.ctx.lineWidth = v; }
    get strokeStyle() { return this.ctx.strokeStyle; }
    set strokeStyle(v) { this.ctx.strokeStyle = v; }
    get fillStyle() { return this.ctx.fillStyle; }
    set fillStyle(v) {
        this.ctx.fillStyle = v || 'black';
        if (v == 'sz-cover') {
            let gradient = this.ctx.createRadialGradient(0, 0, 0, 0, 0, 2);
            let c1 = '#00000000';
            let c2 = '#00000033';
            let n = 20;
            for (let i = 1; i < n; i++) {
                gradient.addColorStop((i - 0.01) / n, i % 2 ? c2 : c1);
                gradient.addColorStop((i + 0.01) / n, i % 2 ? c1 : c2);
            }
            this.ctx.fillStyle = gradient;
        }
        if (v == 'none') {
            let gradient = this.ctx.createRadialGradient(0, 0, 0, 0, 0, 2);
            let c1 = 'red';
            let c2 = 'blue';
            let n = 20;
            for (let i = 0; i <= n; i++) {
                gradient.addColorStop(i / n, i % 2 ? c2 : c1);
            }
            this.ctx.fillStyle = gradient;
            // this.ctx.fillStyle = 'transparent';
        }
    }
    get globalAlpha() { return this.ctx.globalAlpha; }
    set globalAlpha(v) { this.ctx.globalAlpha = v; }
    createGradientFill(source) {
        if (source.type == 'none') {
            return source.color;
        }
        if (source.type == 'radial10') {
            let g = this.ctx.createRadialGradient(0, 0, 0, 0, 0, 2);
            const n = 10;
            g.addColorStop(0, source.color);
            for (let i = 0; i < n; i++) {
                g.addColorStop((i + 0.5) / n, source.secondaryColor);
                g.addColorStop((i + 1) / n, source.color);
            }
            return g;
        }
        throw 0;
    }
    beginPath() { this.ctx.beginPath(); return this; }
    closePath() { this.ctx.closePath(); return this; }
    stroke() { this.ctx.stroke(); return this; }
    fill() { this.ctx.fill(); return this; }
    clip() { this.ctx.clip(); return this; }
    save() { this.ctx.save(); return this; }
    restore() { this.ctx.restore(); return this; }
    scale(x, y = x) {
        this.ctx.scale(x, y);
        return this;
    }
    rotate(angle) {
        this.ctx.rotate(-angle * PI12);
        return this;
    }
    moveTo(x, y) {
        // log({ move: { x: +x.toFixed(3), y: +y.toFixed(3) } });
        this.ctx.moveTo(y, x);
        return this;
    }
    moveToR(r, a) {
        this.moveTo(-r * Math.sin(a * PI12), r * Math.cos(a * PI12));
        return this;
    }
    lineTo(x, y) {
        // log({ line: { x: +x.toFixed(3), y: +y.toFixed(3) } })
        this.ctx.lineTo(y, x);
        return this;
    }
    lineToR(radius, direction) {
        this.lineTo(-radius * Math.sin(direction * PI12), radius * Math.cos(direction * PI12));
        return this;
    }
    rToXY(radius, direction) {
        return [-radius * Math.sin(direction * PI12), radius * Math.cos(direction * PI12)];
    }
    arc(cx, cy, radius, from, to, dir) {
        this.ctx.arc(cx, cy, radius, -from * PI12, -to * PI12, dir);
        return this;
    }
    fillRect(x, y, w, h) {
        this.ctx.fillRect(x, y, w, h);
        return this;
    }
    saved(f) {
        this.save();
        f(this);
        this.restore();
    }
}

class SzDefinition extends BasicSerializableObject {
    static getId() {
        return "sz-definition";
    }
    static createTest() {
        return new SzDefinition({
            layers: [SzLayer.createTest()],
        });
    }
    constructor(data, clone = false) {
        super();
        if (typeof data == 'string')
            return SzDefinition.fromShortKey(data);
        if (data?.layers)
            this.layers = data.layers.map((e, i) => new SzLayer(e, i));
        if (!this.layers.every(e => e.isNormalized())) {
            this.layers = SzDefinition.createTest().layers;
        }
        // console.log(this.getHash())
        if (clone)
            return;
        if (SzDefinition.definitionCache.has(this.getHash())) {
            return SzDefinition.definitionCache.get(this.getHash());
        }
        // console.log(this.getHash());
    }
    layers = [];
    cachedHash = '';
    bufferGenerator;
    getClonedLayers() {
        throw new Error("Method not implemented.");
    }
    isEntirelyEmpty() {
        return this.layers.every(e => e.isEmpty());
    }
    getHash() {
        if (this.cachedHash)
            return this.cachedHash;
        if (!this.layers.length)
            debugger;
        return this.cachedHash = this.layers.map(e => e.getHash()).join(':');
    }
    drawFullSizeOnCanvas(context, size) {
        this.internalGenerateShapeBuffer(null, context, size, size, 1);
    }
    generateAsCanvas(size = 120) {
        const [canvas, context] = makeOffscreenBuffer(size, size, {
            smooth: true,
            label: "definition-canvas-cache-" + this.getHash(),
            reusable: false,
        });
        this.internalGenerateShapeBuffer(canvas, context, size, size, 1);
        return canvas;
    }
    cloneFilteredByQuadrants(includeQuadrants) {
        let layers = this.layers.map(e => e.cloneFilteredByQuadrants(includeQuadrants)).filter(e => !e.isEmpty());
        return new SzDefinition({ layers });
    }
    cloneFilteredBySectors(includeSectors) {
        let layers = this.layers.map(e => e.cloneFilteredBySectors(includeSectors)).filter(e => !e.isEmpty());
        return new SzDefinition({ layers });
    }
    cloneRotateCW() {
        return new SzDefinition({
            layers: this.layers.map(l => l.clone().rotate(4))
        });
    }
    cloneRotate24(n) {
        return new SzDefinition({
            layers: this.layers.map(l => l.clone().rotate(n))
        });
    }
    cloneRotateCCW() {
        return new SzDefinition({
            layers: this.layers.map(l => l.clone().rotate(24 - 4))
        });
    }
    cloneRotate180() {
        return new SzDefinition({
            layers: this.layers.map(l => l.clone().rotate(12))
        });
    }
    cloneAndStackWith(upper) {
        let bottom = this.clone(e => e.removeCover()).layers;
        let top = upper.clone().layers;
        let dh = 0;
        dhloop: for (dh = 5; dh > 0; dh--) {
            for (let iBottom = 0; iBottom < bottom.length; iBottom++) {
                let iTop = iBottom - dh + 1;
                let can = bottom[iBottom].canStackWith(top[iTop]);
                // console.log({
                // 	iBottom,
                // 	iTop, can
                // });
                if (!can)
                    break dhloop;
            }
        }
        let overlap = bottom.length - dh;
        let newLayers = bottom.map((l, i) => {
            return l.stackWith(top[i - dh]);
        }).concat(top.slice(overlap));
        return new SzDefinition({ layers: newLayers.slice(0, 4) });
    }
    cloneAndPaintWith(color) {
        Array(24).fill(color);
        if (color == 'purple')
            color = 'pink';
        return this.clone((l, i, a) => l.clone().paint(color));
        // return this.clone((l, i, a) => {
        // 	let paints = a.slice(i).reduceRight((v, e) => e.filterPaint(v), rawPaints);
        // 	return l.removeCover().paint(paints);
        // });
    }
    cloneAndPaintWith4Colors(colors) {
        return this;
    }
    cloneAndPaintWith6Colors(colors) {
        const sectorPaints = Array.from({ length: 24 }, (e, i) => colors[Math.floor(i / 4)]);
        const layers = this.layers.map((layer, i, all) => {
            const paints = all.slice(i).reduceRight((result, coverLayer) => coverLayer.filterPaint(result), sectorPaints);
            return layer.clone().paintBySectors(paints);
        }).filter(layer => !layer.isEmpty());
        return new SzDefinition({ layers });
    }
    cloneAndMakeCover() {
        return new SzDefinition({ layers: this.layers.map(e => e.cloneAsCover()) });
    }
    clone(layerMapper) {
        if (layerMapper) {
            return new SzDefinition({
                layers: this.layers.map(e => e.clone()).flatMap((e, i, a) => {
                    return layerMapper(e, i, a) || [];
                }).filter(e => !e.isEmpty())
            });
        }
        return new SzDefinition(this, true);
    }
    static getSchema() {
        return types.string;
    }
    serialize() {
        return this.getHash();
    }
    deserialize(data, root) {
        // console.log('deser', this);
    }
    // inherited
    drawCentered(x, y, parameters, diameter) {
        const dpi = smoothenDpi(globalConfig.shapesSharpness * parameters.zoomLevel);
        if (!this.bufferGenerator) {
            this.bufferGenerator = this.internalGenerateShapeBuffer.bind(this);
        }
        const key = diameter + "/" + dpi + "/" + this.cachedHash;
        const canvas = parameters.root.buffers.getForKey({
            key: "shapedef",
            subKey: key,
            w: diameter,
            h: diameter,
            dpi,
            redrawMethod: this.bufferGenerator,
        });
        parameters.context.drawImage(canvas, x - diameter / 2, y - diameter / 2, diameter, diameter);
    }
    internalGenerateShapeBuffer(canvas, ctx, w, h, dpi) {
        // prepare context
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.lineWidth = 0.05;
        ctx.translate((w * dpi) / 2, (h * dpi) / 2);
        ctx.scale((dpi * w) / 2.3, (dpi * h) / 2.3);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.strokeStyle = THEME.items.outline;
        ctx.lineWidth = THEME.items.outlineWidth / 10;
        ctx.rotate(-Math.PI / 2);
        ctx.fillStyle = THEME.items.circleBackground;
        ctx.beginPath();
        ctx.arc(0, 0, 1.15, 0, 2 * Math.PI);
        ctx.fill();
        let sCtx = new SzContext2D(ctx);
        this.layers.forEach((l, i) => l.drawCenteredLayerScaled(sCtx, i));
    }
    static rawHashMap = new Map();
    static getHashfromRawHash(hash) {
        if (!this.rawHashMap.has(hash)) {
            this.rawHashMap.set(hash, SzDefinition.fromShortKey(hash).getHash());
        }
        return this.rawHashMap.get(hash);
    }
    static fromRawShape(shapeDefinition) {
        if (typeof shapeDefinition != 'string')
            shapeDefinition = shapeDefinition.getHash();
        return new SzDefinition({
            layers: shapeDefinition.split(':').map(e => SzLayer.fromShortKey(e))
        });
    }
    static definitionCache = new Map();
    static fromShortKey(key) {
        if (!this.definitionCache.has(key)) {
            this.definitionCache.set(key, new SzDefinition({
                layers: key.split(':').map(e => SzLayer.fromShortKey(e))
            }));
        }
        return this.definitionCache.get(key);
    }
    compute_ANALYZE(root) {
        let firstQuad = this.layers[0].quads[0];
        if (firstQuad.from != 0)
            return [null, null];
        let definition = new SzDefinition({ layers: [SzInfo.quad.exampleLayer(firstQuad.shape)] });
        let color = enumShortcodeToColor[SzInfo.color.byName[firstQuad.color].code];
        return [
            COLOR_ITEM_SINGLETONS[color],
            root.shapeDefinitionMgr.getShapeItemFromDefinition(definition),
        ];
    }
    static install(mod) {
        mod.modInterface.extendObject(ShapeDefinition, ({ $old }) => ({
            fromShortKey(key) {
                return SzDefinition.fromShortKey(key);
            },
            isValidShortKey(key) {
                try {
                    SzDefinition.fromShortKey(key);
                    return true;
                }
                catch (e) {
                    return false;
                }
            }
        }));
        mod.modInterface.extendClass(LogicGateSystem, ({ $old }) => ({
            compute_ANALYZE(parameters) {
                let item = parameters[0];
                if (!item || item.getItemType() !== "shape") {
                    // Not a shape
                    return [null, null];
                }
                let def = item.definition;
                if (def instanceof SzDefinition) {
                    return def.compute_ANALYZE(this.root);
                }
                return $old.compute_ANALYZE.call(this, parameters);
            }
        }));
    }
}

class SzLevel {
    index;
    shapeName;
    shape;
    required;
    reward;
    throughputOnly = false;
    constructor(index, required, shape, reward) {
        this.index = index;
        if (named[shape]) {
            this.shapeName = shape;
            shape = named[shape];
        }
        this.shape = shape;
        this.required = required;
        this.reward = reward;
    }
    static modifyLevelDefinitions(levels) {
        Object.assign(levels, levelDefinitions);
        Object.assign(globalThis, { levels });
        levels.map(d => {
            if (named[d.shape]) {
                d.shape = named[d.shape];
            }
            d.shape = SzDefinition.getHashfromRawHash(d.shape);
            d.required = ~~(d.required / 3);
        });
    }
    static modifyUpgrades(upgrades) {
        Object.values(upgrades).flat().flatMap(e => e.required)
            .map(e => {
            e.shape = SzDefinition.getHashfromRawHash(e.shape);
            if (named[e.shape])
                e.shape = named[e.shape];
            e.amount = ~~(e.amount / 10);
        });
        Object.assign(globalThis, { upgrades });
    }
    static install(mod) {
        mod.signals.modifyLevelDefinitions.add(SzLevel.modifyLevelDefinitions);
        mod.signals.modifyUpgrades.add(SzLevel.modifyUpgrades);
        let r = 'reward_painter_double';
        T.storyRewards[r] = {
            title: 'Multicolor painter',
            desc: `
				You have unlocked <strong>Double Painter</strong>.<br>
				It can use more then a single paint at once to paint shapes in 7 combined colors
			`,
        };
        ExtendSuperclass(mod, GameMode, (old) => {
            // @ts-ignore
            return class HexaGameMode extends GameMode {
                getBlueprintShapeKey() {
                    return SzInfo.quad.named6.blueprint;
                }
            };
        });
        ExtendSuperclass(mod, HubGoals, (old) => {
            return class HexaGameMode extends HubGoals {
                computeFreeplayShape(level) {
                    const rng = new RandomNumberGenerator(this.root.map.seed + "/" + level);
                    return SzLevel.computeFreeplayShape(level, rng);
                }
            };
        });
        // const rewardName = T.storyRewards[reward].title;
        // let html = `
        // <div class="rewardName">
        //     ${T.ingame.levelCompleteNotification.unlockText.replace("<reward>", rewardName)}
        // </div>
        // <div class="rewardDesc">
        //     ${T.storyRewards[reward].desc}
        // </div>
    }
    static computeFreeplayShape(level, rng) {
        let layerCount = 1;
        if (level >= 50)
            layerCount = 2;
        if (level >= 75)
            layerCount = 3;
        if (level >= 100)
            layerCount = 4;
        if (rng.next() < 0.2) {
            layerCount && layerCount--;
            if (rng.next() < 0.25) {
                layerCount && layerCount--;
            }
        }
        const allowHoles = level > 60;
        let choice = (s) => rng.choice(s.split(''));
        const shapes = "RCSW";
        const symmetries = [
            "012210",
            "012321",
            "012012",
            "010101", // third-rotate
        ];
        const colorWheel = "rygcbp".repeat(3);
        const extraColors = level < 50 ? "w" : "wu";
        const colorWheelGroups = [
            "a012",
            "a024",
            "ab03",
            "0134", // opposite pairs
        ];
        const symmetryOffset = +choice('012345');
        const cwOffset = +choice('012345');
        const symmetry = rng.choice(symmetries).repeat(3).slice(symmetryOffset, symmetryOffset + 6);
        const colors = rng.choice(colorWheelGroups)
            .replace(/\d/g, n => colorWheel[+n + cwOffset])
            .replace(/[ab]/g, () => choice(extraColors));
        /** @type {ShapestLayer[]} */
        let layers = [];
        for (let layerIndex = 0; layerIndex <= layerCount; layerIndex++) {
            const quads = Array(6).fill('').map(() => choice(shapes) + choice(colors));
            if (allowHoles) {
                quads[+choice('012345')] = '--';
            }
            // const layer = new Shape6Layer('6' + symmetry.replace(/\d/g, n => quads[+n]), layerIndex);
            // if (!allowUnstackable && layers.length && layer.can_fall_through(layers[layers.length - 1])) {
            // 	layerIndex--;
            // } else {
            // 	layers.push(layer);
            // }
            layers.push('6' + symmetry.replace(/\d/g, n => quads[+n]));
        }
        return SzDefinition.fromShortKey(layers.join(':'));
    }
}
const named = SzInfo.quad.named;
const levelDefinitions = [
// new SzLevel(1, 30, 'circle1', 'reward_cutter_and_trash'),
// new SzLevel(2, 40, 'circleHalfLeft', 'no_reward'),
// new SzLevel(3, 70, 'square2', 'reward_balancer'),
// new SzLevel(4, 70, 'squareHalfRight', 'reward_rotater'),
// new SzLevel(5, 170, 'circleHalfTop2', 'reward_tunnel'),
// new SzLevel(6, 270, 'squareHalfTop2', 'reward_painter'),
// new SzLevel(7, 300, 'circleRed', 'reward_rotater_ccw'),
// new SzLevel(8, 480, 'square3TopBlue', 'reward_painter_double'),
// new SzLevel(9, 600, 'star3Cyan', 'reward_blueprints'),
// new SzLevel(10, 800, 'diamond', 'reward_stacker'),
// new SzLevel(11, 1000, 'squid', 'no_reward'),
// new SzLevel(12, 1000, 'splikeball48', 'no_reward'),
// // @ts-expect-error
// new SzLevel(8, 480, "RbRb----", 'reward_mixer'),
// // @ts-expect-error
// new SzLevel(9, 600, "CpCpCpCp", 'reward_merger'),
// // @ts-expect-error
// new SzLevel(10, 800, "ScScScSc", 'reward_stacker'),
// // @ts-expect-error
// new SzLevel(11, 1000, "CgScScCg", 'reward_miner_chainable'),
// // @ts-expect-error
// new SzLevel(12, 1000, "CbCbCbRb:CwCwCwCw", 'reward_blueprints'),
];
// 	// Tunnel Tier 2
// 	{
// 		shape: chinaShapes ? "CuCuCuCu:CwCwCwCw:Sb--Sr--" : "RpRpRpRp:CwCwCwCw", // painting t3
// 		required: 3800,
// 		reward: enumHubGoalRewards.reward_underground_belt_tier_2,
// 	},
// 	// 14
// 	// Belt reader
// 	{
// 		shape: "--Cg----:--Cr----", // unused
// 		required: 8, // Per second!
// 		reward: enumHubGoalRewards.reward_belt_reader,
// 		throughputOnly: true,
// 	},
// 	// 15
// 	// Storage
// 	{
// 		shape: "SrSrSrSr:CyCyCyCy", // unused
// 		required: 10000,
// 		reward: enumHubGoalRewards.reward_storage,
// 	},
// 	// 16
// 	// Quad Cutter
// 	{
// 		shape: "SrSrSrSr:CyCyCyCy:SwSwSwSw", // belts t4 (two variants)
// 		required: 6000,
// 		reward: enumHubGoalRewards.reward_cutter_quad,
// 	},
// 	// 17
// 	// Double painter
// 	{
// 		shape: chinaShapes
// 			? "CyCyCyCy:CyCyCyCy:RyRyRyRy:RuRuRuRu"
// 			: "CbRbRbCb:CwCwCwCw:WbWbWbWb", // miner t4 (two variants)
// 		required: 20000,
// 		reward: enumHubGoalRewards.reward_painter_double,
// 	},
// 	// 18
// 	// Rotater (180deg)
// 	{
// 		shape: "Sg----Sg:CgCgCgCg:--CyCy--", // unused
// 		required: 20000,
// 		reward: enumHubGoalRewards.reward_rotater_180,
// 	},
// 	// 19
// 	// Compact splitter
// 	{
// 		shape: "CpRpCp--:SwSwSwSw",
// 		required: 25000,
// 		reward: enumHubGoalRewards.reward_splitter, // X
// 	},
// 	// 20
// 	// WIRES
// 	{
// 		shape: finalGameShape,
// 		required: 25000,
// 		reward: enumHubGoalRewards.reward_wires_painter_and_levers,
// 	},
// 	// 21
// 	// Filter
// 	{
// 		shape: "CrCwCrCw:CwCrCwCr:CrCwCrCw:CwCrCwCr",
// 		required: 25000,
// 		reward: enumHubGoalRewards.reward_filter,
// 	},
// 	// 22
// 	// Constant signal
// 	{
// 		shape: chinaShapes
// 			? "RrSySrSy:RyCrCwCr:CyCyRyCy"
// 			: "Cg----Cr:Cw----Cw:Sy------:Cy----Cy",
// 		required: 25000,
// 		reward: enumHubGoalRewards.reward_constant_signal,
// 	},
// 	// 23
// 	// Display
// 	{
// 		shape: chinaShapes
// 			? "CrCrCrCr:CwCwCwCw:WwWwWwWw:CrCrCrCr"
// 			: "CcSyCcSy:SyCcSyCc:CcSyCcSy",
// 		required: 25000,
// 		reward: enumHubGoalRewards.reward_display,
// 	},
// 	// 24 Logic gates
// 	{
// 		shape: chinaShapes
// 			? "Su----Su:RwRwRwRw:Cu----Cu:CwCwCwCw"
// 			: "CcRcCcRc:RwCwRwCw:Sr--Sw--:CyCyCyCy",
// 		required: 25000,
// 		reward: enumHubGoalRewards.reward_logic_gates,
// 	},
// 	// 25 Virtual Processing
// 	{
// 		shape: "Rg--Rg--:CwRwCwRw:--Rg--Rg",
// 		required: 25000,
// 		reward: enumHubGoalRewards.reward_virtual_processing,
// 	},
// 	// 26 Freeplay
// 	{
// 		shape: "CbCuCbCu:Sr------:--CrSrCr:CwCwCwCw",
// 		required: 50000,
// 		reward: enumHubGoalRewards.reward_freeplay,
// 	},
// ]),
// ];

class SzShapeItem extends ShapeItem {
    static getId() {
        return 'szItem';
    }
    // @ts-ignore
    definition;
    constructor(definition) {
        if (SzShapeItem.constructorCache.has(definition.getHash())) {
            return SzShapeItem.constructorCache.get(definition.getHash());
        }
        super(null);
        this.definition = definition;
        this.definition.getHash();
        SzShapeItem.constructorCache.set(definition.getHash(), this);
    }
    static constructorCache = new Map();
    static getSchema() {
        return types.string;
    }
    getItemType() {
        return 'shape';
    }
    equals(other) {
        return other.getItemType() == this.getItemType() && other.definition == this.definition;
    }
    drawItemCenteredClipped(x, y, parameters, diameter) {
        if (!parameters.visibleRect.containsCircle(x, y, diameter / 2))
            return;
        if (!diameter)
            throw new Error();
        this.drawItemCenteredImpl(x, y, parameters, diameter);
    }
    getBackgroundColorAsResource() {
        return THEME.map.resources.shape;
    }
    static deserialize(data) {
        // debugger;
        // console.log('deserialize', data);
        if (data.length < 4)
            debugger;
        // this.definition = SzDefinition.fromShortKey(data);
        return new SzShapeItem(new SzDefinition(data));
    }
    serialize() {
        let h = this.definition.getHash();
        if (h.length < 4)
            debugger;
        // console.log('serialize', h);
        return h;
    }
    // deserialize(data: any, root?: GameRoot): string | void {
    // 	throw new Error("Method not implemented.");
    // }
    getAsCopyableKey() {
        return this.definition.getHash();
    }
    equalsImpl(other) {
        return this.getAsCopyableKey() == other?.getAsCopyableKey();
    }
    drawFullSizeOnCanvas(context, size) {
        this.definition.drawFullSizeOnCanvas(context, size);
    }
    drawItemCenteredImpl(x, y, parameters, diameter) {
        this.definition.drawCentered(x, y, parameters, diameter);
    }
    static install(mod) {
        mod.modInterface.extendClass(ShapeDefinitionManager, ({ $old }) => ({
            getShapeItemFromDefinition(definition) {
                if (!(definition instanceof SzDefinition)) {
                    return $old.getShapeItemFromDefinition.call(this, definition);
                }
                return this.shapeKeyToItem[definition.getHash()] ??= new SzShapeItem(definition);
            }
        }));
        mod.modInterface.registerItem(SzShapeItem, data => SzShapeItem.deserialize(data));
    }
}

const shapePatchChances = {
    circleSpawn: { base: 50, growth: 3, cap: 100 },
    squareSpawn: { base: 100, growth: 2, cap: 100 },
    starSpawn: { base: 20, growth: 1, cap: 100 },
    windmillSpawn: { base: 6, growth: 0.5, cap: 100 },
};
const predefinedPatches = [
    {
        x: 0, y: 0, item: 
        // SzColorItem.fromColor('red')
        COLOR_ITEM_SINGLETONS.red,
        dx: 7, dy: 7
    },
    { x: -1, y: 0, item: SzInfo.quad.named.circleSpawn, dx: -9, dy: 7 },
    { x: 0, y: -1, item: SzInfo.quad.named.squareSpawn, dx: 5, dy: -7 },
    {
        x: -1, y: -1, item: 
        // SzColorItem.fromColor('green')
        COLOR_ITEM_SINGLETONS.green
    },
    { x: 5, y: -2, item: SzInfo.quad.named.starSpawn, dx: 5, dy: -7 },
];
class SpawnOwerride extends MapChunk {
    // internalGenerateColorPatch(rng: RandomNumberGenerator, colorPatchSize: number, distanceToOriginInChunks: number) {
    // 	console.log(this)
    // 	let available = ['red', 'green'];
    // 	if (distanceToOriginInChunks > 2) available.push('blue');
    // 	this.internalGeneratePatch(rng, colorPatchSize, SzColorItem.fromColor(rng.choice(available)));
    // }
    internalGenerateShapePatch(rng, shapePatchSize, distanceToOriginInChunks) {
        let dToChance = (base, grow, maxTotal) => Math.round(base + clamp(distanceToOriginInChunks * grow, 0, maxTotal - base));
        let weights = Object.fromEntries(Object.entries(shapePatchChances).map(([k, { base, growth, cap }]) => [k, dToChance(base, growth, cap)]));
        if (distanceToOriginInChunks < 7) {
            // Initial chunks can not spawn the good stuff
            weights.starSpawn = 0;
            weights.windmillSpawn = 0;
        }
        let quadNames = [];
        let next = this.internalGenerateRandomSubShape(rng, weights);
        quadNames.push(next);
        if (distanceToOriginInChunks >= 10) {
            let next = this.internalGenerateRandomSubShape(rng, weights);
            while (quadNames.concat(next).filter(e => e == 'windmillSpawn').length > 1)
                next = this.internalGenerateRandomSubShape(rng, weights);
            quadNames.push(next);
        }
        if (distanceToOriginInChunks >= 15) {
            let next = this.internalGenerateRandomSubShape(rng, weights);
            while (quadNames.concat(next).filter(e => e == 'windmillSpawn').length > 1)
                next = this.internalGenerateRandomSubShape(rng, weights);
            quadNames.push(next);
        }
        let quadHashes = quadNames.map(e => SzInfo.quad.named[e]);
        let hash = '6' + quadHashes.map((e, i, a) => {
            let l = 12 / a.length;
            return e.slice(1 + l * i, 1 + l * (i + 1));
        }).join('');
        const definition = SzDefinition.fromShortKey(hash);
        this.internalGeneratePatch(rng, shapePatchSize, this.root.shapeDefinitionMgr.getShapeItemFromDefinition(definition));
    }
    generatePredefined(rng) {
        let def = predefinedPatches.find(p => p.x == this.x && p.y == this.y);
        if (!def)
            return false;
        let item = def.item instanceof BaseItem ? def.item
            : this.root.shapeDefinitionMgr.getShapeItemFromDefinition(ShapeDefinition.fromShortKey(def.item));
        let dx = def.dx == null ? null : def.dx + (def.dx > 0 ? 0 : globalConfig.mapChunkSize);
        let dy = def.dy == null ? null : def.dy + (def.dy > 0 ? 0 : globalConfig.mapChunkSize);
        this.internalGeneratePatch(rng, 2, item, dx, dy);
        return true;
    }
    static install(mod) {
        ExtendSuperclass(mod, MapChunk, () => SpawnOwerride);
    }
}

const HEX_CUTTER_PROCESSOR = "hexCutter";
const HEX_PAINTER_PROCESSOR = "hexPainter";
const HEX_PAINTER_REQUIREMENT = "hexPainter";
const HEX_BUILDING_VARIANT = "hex";
function getEnabledHexPainterSectors(entity) {
    return entity.components.WiredPins.slots.map(slot => {
        const network = slot.linkedNetwork;
        return !!(network && network.hasValue() && isTruthyItem(network.currentValue));
    });
}
class HexProcessorBuildings {
    static install(mod) {
        MOD_ITEM_PROCESSOR_HANDLERS[HEX_CUTTER_PROCESSOR] = function (payload) {
            const shapeItem = payload.items.get(0);
            assert(shapeItem instanceof ShapeItem, "Input for hex cutter is not a shape");
            const ejector = payload.entity.components.ItemEjector;
            for (let sector = 0; sector < 6; sector++) {
                const definition = shapeItem.definition.cloneFilteredBySectors([sector]);
                if (definition.isEntirelyEmpty()) {
                    ejector.slots[sector].lastItem = null;
                    continue;
                }
                payload.outItems.push({
                    item: this.root.shapeDefinitionMgr.getShapeItemFromDefinition(definition),
                    requiredSlot: sector,
                });
            }
        };

        MOD_ITEM_PROCESSOR_HANDLERS[HEX_PAINTER_PROCESSOR] = function (payload) {
            const shapeItem = payload.items.get(0);
            assert(shapeItem instanceof ShapeItem, "Input for hex painter is not a shape");
            const enabledSectors = getEnabledHexPainterSectors(payload.entity);
            const colors = Array(6).fill(null);
            for (let sector = 0; sector < 6; sector++) {
                const colorItem = payload.items.get(sector + 1);
                if (colorItem) {
                    assert(colorItem instanceof ColorItem, "Input for hex painter is not a color");
                    if (enabledSectors[sector])
                        colors[sector] = colorItem.color;
                }
            }
            const definition = shapeItem.definition.cloneAndPaintWith6Colors(colors);
            payload.outItems.push({
                item: this.root.shapeDefinitionMgr.getShapeItemFromDefinition(definition),
            });
        };

        MODS_CAN_PROCESS[HEX_PAINTER_REQUIREMENT] = function ({ entity }) {
            const processor = entity.components.ItemProcessor;
            const shapeItem = processor.inputSlots.get(0);
            if (!(shapeItem instanceof ShapeItem))
                return false;

            const enabledSectors = getEnabledHexPainterSectors(entity);
            if (!enabledSectors.includes(true))
                return false;

            for (let sector = 0; sector < 6; sector++) {
                if (!enabledSectors[sector] || processor.inputSlots.get(sector + 1))
                    continue;
                for (const layer of shapeItem.definition.layers) {
                    for (let part = 0; part < 4; part++) {
                        if (layer.getQuadAtSector(sector * 4 + part))
                            return false;
                    }
                }
            }
            return true;
        };

        MOD_ITEM_PROCESSOR_SPEEDS[HEX_CUTTER_PROCESSOR] = root =>
            root.hubGoals.getProcessorBaseSpeed(enumItemProcessorTypes.cutterQuad);
        MOD_ITEM_PROCESSOR_SPEEDS[HEX_PAINTER_PROCESSOR] = root =>
            root.hubGoals.getProcessorBaseSpeed(enumItemProcessorTypes.painterQuad);

        mod.modInterface.addVariantToExistingBuilding(MetaCutterBuilding, HEX_BUILDING_VARIANT, {
            rotationVariants: [0],
            dimensions: new Vector(6, 1),
            regularSpriteBase64: RESOURCES["cutter_hex.png"],
            blueprintSpriteBase64: RESOURCES["cutter_hex_blueprint.png"],
            name: "Hex Cutter",
            description: "Cuts shapes into six sectors",
            additionalStatistics(root) {
                if (root.gameMode.throughputDoesNotMatter())
                    return [];
                const speed = root.hubGoals.getProcessorBaseSpeed(HEX_CUTTER_PROCESSOR);
                return [[T.ingame.buildingPlacement.infoTexts.speed, formatItemsPerSecond(speed)]];
            },
            isUnlocked(root) {
                return root.hubGoals.isRewardUnlocked(enumHubGoalRewards.reward_cutter_quad);
            },
        });
        mod.modInterface.extendClass(MetaCutterBuilding, ({ $old }) => ({
            updateVariants(entity, rotationVariant, variant) {
                if (variant !== HEX_BUILDING_VARIANT)
                    return $old.updateVariants.bind(this)(entity, rotationVariant, variant);
                entity.components.ItemEjector.setSlots(Array.from({ length: 6 }, (e, x) => ({
                    pos: new Vector(x, 0),
                    direction: enumDirection.top,
                })));
                entity.components.ItemProcessor.type = HEX_CUTTER_PROCESSOR;
            },
        }));

        mod.modInterface.addVariantToExistingBuilding(MetaPainterBuilding, HEX_BUILDING_VARIANT, {
            rotationVariants: [0],
            dimensions: new Vector(6, 1),
            regularSpriteBase64: RESOURCES["painter_hex.png"],
            blueprintSpriteBase64: RESOURCES["painter_hex_blueprint.png"],
            name: "Hex Painter",
            description: "Paints shape sectors independently",
            additionalStatistics(root) {
                if (root.gameMode.throughputDoesNotMatter())
                    return [];
                const speed = root.hubGoals.getProcessorBaseSpeed(HEX_PAINTER_PROCESSOR);
                return [[T.ingame.buildingPlacement.infoTexts.speed, formatItemsPerSecond(speed)]];
            },
            isUnlocked(root) {
                return root.hubGoals.isRewardUnlocked(enumHubGoalRewards.reward_wires_painter_and_levers) &&
                    root.gameMode.getSupportsWires();
            },
        });
        mod.modInterface.extendClass(MetaPainterBuilding, ({ $old }) => ({
            updateVariants(entity, rotationVariant, variant) {
                if (variant !== HEX_BUILDING_VARIANT)
                    return $old.updateVariants.bind(this)(entity, rotationVariant, variant);

                if (!entity.components.WiredPins)
                    entity.addComponent(new WiredPinsComponent({ slots: [] }));
                entity.components.WiredPins.setSlots(Array.from({ length: 6 }, (e, x) => ({
                    pos: new Vector(x, 0),
                    direction: enumDirection.bottom,
                    type: enumPinSlotType.logicalAcceptor,
                })));
                entity.components.ItemAcceptor.setSlots([
                    {
                        pos: new Vector(0, 0),
                        direction: enumDirection.left,
                        filter: "shape",
                    },
                    ...Array.from({ length: 6 }, (e, x) => ({
                        pos: new Vector(x, 0),
                        direction: enumDirection.bottom,
                        filter: "color",
                    })),
                ]);
                entity.components.ItemEjector.setSlots([
                    { pos: new Vector(0, 0), direction: enumDirection.top },
                ]);
                entity.components.ItemProcessor.type = HEX_PAINTER_PROCESSOR;
                entity.components.ItemProcessor.processingRequirement = HEX_PAINTER_REQUIREMENT;
                entity.components.ItemProcessor.inputsPerCharge = 7;
            },
        }));
    }
}

const METADATA = {
    "id": "hexagonal",
    "version": "1.3.0",
    "name": "hexagonal",
    "author": "Dimava",
    "description": "Hexagonal shapes",
    "website": "",
    "settings": {},
};
class Mod extends Mod$1 {
    init() {
        // return;
        this.use(SzDefinition);
        this.use(SzShapeItem);
        // this.use(SzColorItem);
        // this.use(PainterOverride);
        // this.use(Balancer22);
        // this.use(Rotator3);
        this.use(SpawnOwerride);
        this.use(HexProcessorBuildings);
        this.use(SzLevel);
        // this.use(TestMode);
        for (let c in enumShortcodeToColor) {
            // @ts-ignore
            SzInfo.color.byChar[c].style = enumColorsToHexCode[enumShortcodeToColor[c]];
        }
    }
    use(module) {
        module.install(this);
        return this;
    }
}
window.$shapez_registerMod(Mod, METADATA);
const RESOURCES = {
    "cutter_hex.png":
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABIAAAADACAYAAAB8vxglAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAvRaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pg0KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPg0KCTxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+DQoJCTxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjAtMDQtMTdUMDk6NDg6NTkrMDI6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjAtMDktMjRUMTQ6MjA6MTYrMDI6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTA5LTI0VDE0OjIwOjE2KzAyOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozMGJkZjBjNC0wZDZmLTJkNDMtYWJjZS0yNTI3NTViMTMxNDkiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo1NDhhMjQyYy1mMjBhLTZiNDUtYjFmNC1jNzkxNWZiOWI5YjEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZDBlNjkyZi05NGU3LTQwNDItYWNjYi02ZTc4YTMwZTU3ZmMiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHRpZmY6T3JpZW50YXRpb249IjEiIHRpZmY6WFJlc29sdXRpb249IjcyMDAwMC8xMDAwMCIgdGlmZjpZUmVzb2x1dGlvbj0iNzIwMDAwLzEwMDAwIiB0aWZmOlJlc29sdXRpb25Vbml0PSIyIiBleGlmOkNvbG9yU3BhY2U9IjY1NTM1IiBleGlmOlBpeGVsWERpbWVuc2lvbj0iNzY4IiBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTkyIj4NCgkJCTx4bXBNTTpIaXN0b3J5Pg0KCQkJCTxyZGY6U2VxPg0KCQkJCQk8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0ZDBlNjkyZi05NGU3LTQwNDItYWNjYi02ZTc4YTMwZTU3ZmMiIHN0RXZ0OndoZW49IjIwMjAtMDQtMTdUMDk6NDg6NTkrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPg0KCQkJCQk8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZTliNDc3MGQtYjNlYi1kNTQzLWJjMmItZWM4OTYwNjE3Y2RlIiBzdEV2dDp3aGVuPSIyMDIwLTA0LTE3VDA5OjQ5OjU0KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4NCgkJCQkJPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjA1ZTIxYTA2LTQxOGItYjQ0NS1iMmJlLTM3YjQ5MWMwMmM3YSIgc3RFdnQ6d2hlbj0iMjAyMC0wOS0yNFQxNDoyMDoxNiswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+DQoJCQkJCTxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4NCgkJCQkJPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+DQoJCQkJCTxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDozMGJkZjBjNC0wZDZmLTJkNDMtYWJjZS0yNTI3NTViMTMxNDkiIHN0RXZ0OndoZW49IjIwMjAtMDktMjRUMTQ6MjA6MTYrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPg0KCQkJCTwvcmRmOlNlcT4NCgkJCTwveG1wTU06SGlzdG9yeT4NCgkJCTx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA1ZTIxYTA2LTQxOGItYjQ0NS1iMmJlLTM3YjQ5MWMwMmM3YSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjk3MDYxZWYyLTY2ZGMtZjI0Zi1iZTMyLTVhNTdh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",
    "cutter_hex_blueprint.png":
      "data:image/png;base64,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",
    "painter_hex.png":
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABIAAAADACAYAAAB8vxglAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAvRaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pg0KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPg0KCTxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+DQoJCTxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjAtMDQtMTdUMDk6NDg6NTkrMDI6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjAtMDktMjRUMTU6Mzk6MzIrMDI6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTA5LTI0VDE1OjM5OjMyKzAyOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZDViNWU4Mi1lZTRlLWMyNDktYTUxYy01YzlhOGU2YmY4NDIiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiZTVlZDc2YS0yYmEzLTkwNDMtOTA3MS1hZDY1YjdjZmY5N2IiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZDBlNjkyZi05NGU3LTQwNDItYWNjYi02ZTc4YTMwZTU3ZmMiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHRpZmY6T3JpZW50YXRpb249IjEiIHRpZmY6WFJlc29sdXRpb249IjcyMDAwMC8xMDAwMCIgdGlmZjpZUmVzb2x1dGlvbj0iNzIwMDAwLzEwMDAwIiB0aWZmOlJlc29sdXRpb25Vbml0PSIyIiBleGlmOkNvbG9yU3BhY2U9IjY1NTM1IiBleGlmOlBpeGVsWERpbWVuc2lvbj0iNzY4IiBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTkyIj4NCgkJCTx4bXBNTTpIaXN0b3J5Pg0KCQkJCTxyZGY6U2VxPg0KCQkJCQk8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0ZDBlNjkyZi05NGU3LTQwNDItYWNjYi02ZTc4YTMwZTU3ZmMiIHN0RXZ0OndoZW49IjIwMjAtMDQtMTdUMDk6NDg6NTkrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPg0KCQkJCQk8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZTliNDc3MGQtYjNlYi1kNTQzLWJjMmItZWM4OTYwNjE3Y2RlIiBzdEV2dDp3aGVuPSIyMDIwLTA0LTE3VDA5OjQ5OjU0KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4NCgkJCQkJPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjM2MDUxNmYyLWE1MGQtOTQ0Yy1hMjMzLWU2ODIyYjAyYjlkNyIgc3RFdnQ6d2hlbj0iMjAyMC0wOS0yNFQxNTozOTozMiswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+DQoJCQkJCTxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4NCgkJCQkJPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+DQoJCQkJCTxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoyZDViNWU4Mi1lZTRlLWMyNDktYTUxYy01YzlhOGU2YmY4NDIiIHN0RXZ0OndoZW49IjIwMjAtMDktMjRUMTU6Mzk6MzIrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPg0KCQkJCTwvcmRmOlNlcT4NCgkJCTwveG1wTU06SGlzdG9yeT4NCgkJCTx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM2MDUxNmYyLWE1MGQtOTQ0Yy1hMjMzLWU2ODIyYjAyYjlkNyIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjk3MDYxZWYyLTY2ZGMtZjI0Zi1iZTMyLTVhNTdh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",
    "painter_hex_blueprint.png":
    "data:image/png;base64,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",
};