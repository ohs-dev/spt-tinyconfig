import type { MinMax } from "../MinMax.js";
import type { Ixy, Ixyz } from "./Globals.js";
export interface ILocationBase {
    AirdropParameters: IAirdropParameter[];
    AveragePlayerLevel: number;
    BossLocationSpawn: IBossLocationSpawn[];
    BotAssault: number;
    /** Weighting on how likely a bot will be Easy difficulty */
    BotEasy: number;
    /** Weighting on how likely a bot will be Hard difficulty */
    BotHard: number;
    /** Weighting on how likely a bot will be Impossible difficulty */
    BotImpossible: number;
    BotLocationModifier: IBotLocationModifier;
    BotMarksman: number;
    /** Maximum Number of bots that are currently alive/loading/delayed */
    BotMax: number;
    /** Is not used in 33420 */
    /** Is not used in 33420 */
    /** Does not even exist in the client in 33420 */
    /** Weighting on how likely a bot will be Normal difficulty */
    BotNormal: number;
    /** How many bot slots that need to be open before trying to spawn new bots. */
    BotSpawnCountStep: number;
    /** How often to check if bots are spawn-able. In seconds */
    BotSpawnPeriodCheck: number;
    /** The bot spawn will toggle on and off in intervals of Off(Min/Max) and On(Min/Max) */
    BotSpawnTimeOffMax: number;
    BotSpawnTimeOffMin: number;
    BotSpawnTimeOnMax: number;
    BotSpawnTimeOnMin: number;
    /** How soon bots will be allowed to spawn */
    BotStart: number;
    /** After this long bots will no longer spawn */
    BotStop: number;
    Description: string;
    DisabledForScav: boolean;
    DisabledScavExits: string;
    Enabled: boolean;
    GlobalLootChanceModifier: number;
    GlobalLootChanceModifierPvE: number;
    GlobalContainerChanceModifier: number;
    Id: string;
    Insurance: boolean;
    IsSecret: boolean;
    Locked: boolean;
    MaxBotPerZone: number;
    MaxDistToFreePoint: number;
    MaxPlayers: number;
    MinDistToExitPoint: number;
    MinDistToFreePoint: number;
    MinMaxBots: IMinMaxBot[];
    MinPlayers: number;
    MaxCoopGroup: number;
    Name: string;
    RequiredPlayerLevel?: number;
    RequiredPlayerLevelMin?: number;
    RequiredPlayerLevelMax?: number;
    PmcMaxPlayersInGroup: number;
    ScavMaxPlayersInGroup: number;
    SpawnPointParams: ISpawnPointParam[];
    _Id: string;
    EscapeTimeLimit: number;
    EscapeTimeLimitCoop: number;
    EscapeTimeLimitPVE: number;
    exit_access_time: number;
    exit_count: number;
    exit_time: number;
    exits: IExit[];
    transits: ITransit[];
    waves: IWave[];
    secretExits: ISecretExit[];
}
export interface IAreaLocationSpawn {
    center: Ixy;
    infiltrationZone: string;
    orientation: number;
    position: Ixy;
    sides: string[];
    size: Ixy;
}
export interface ISecretExit {
    EligibleForPMC: boolean;
    EligibleForScav: boolean;
    ExfiltrationTime: number;
    Id: string;
    Name: string;
}
export interface ITransit {
    activateAfterSec: string;
    active: boolean;
    name: string;
    conditions: string;
    description: string;
    events: boolean;
    id: number;
    location: string;
    target: string;
    time: number;
}
export interface INonWaveGroupScenario {
    Chance: number;
    Enabled: boolean;
    MaxToBeGroup: number;
    MinToBeGroup: number;
}
export interface IAirdropParameter {
    AirdropPointDeactivateDistance: number;
    MinPlayersCountToSpawnAirdrop: number;
    PlaneAirdropChance: number;
    PlaneAirdropCooldownMax: number;
    PlaneAirdropCooldownMin: number;
    PlaneAirdropEnd: number;
    PlaneAirdropMax: number;
    PlaneAirdropStartMax: number;
    PlaneAirdropStartMin: number;
}
export interface IBossLocationSpawn {
    BossChance: number;
    BossDifficult: string;
    BossEscortAmount: string;
    BossEscortDifficult: string;
    BossEscortType: string;
    BossName: string;
    BossPlayer: boolean;
    BossZone: string;
    RandomTimeSpawn: boolean;
    Time: number;
    Delay?: number;
    DependKarma?: boolean;
    DependKarmaPVE?: boolean;
    ForceSpawn?: boolean;
    IgnoreMaxBots?: boolean;
    Supports?: IBossSupport[];
    sptId?: string;
    SpawnMode: string[];
}
export interface IBossSupport {
    BossEscortAmount: string;
    BossEscortDifficult: string[];
    BossEscortType: string;
}
export interface IBotLocationModifier {
    AccuracySpeed: number;
    DistToActivate: number;
    DistToActivatePvE: number;
    DistToSleep: number;
    DistToSleepPvE: number;
    GainSight: number;
    MarksmanAccuratyCoef: number;
    Scattering: number;
    VisibleDistance: number;
    MaxExfiltrationTime: number;
    MinExfiltrationTime: number;
    FogVisibilityDistanceCoef: number;
    FogVisibilitySpeedCoef: number;
    NonWaveSpawnBotsLimitPerPlayer: number;
    NonWaveSpawnBotsLimitPerPlayerPvE: number;
    RainVisibilityDistanceCoef: number;
    RainVisibilitySpeedCoef: number;
}
export interface IChancedEnemy {
    EnemyChance: number;
    Role: string;
}
export interface IMinMaxBot extends MinMax {
    WildSpawnType: WildSpawnType | string;
}
export interface IMinPlayerWaitTime {
    minPlayers: number;
    time: number;
}
export interface ISpawnPointParam {
    BotZoneName: string;
    Categories: string[];
    ColliderParams: IColliderParams;
    CorePointId: number;
    DelayToCanSpawnSec: number;
    Id: string;
    Infiltration: string;
    Position: Ixyz;
    Rotation: number;
    Sides: string[];
}
export interface IColliderParams {
    _parent: string;
    _props: IProps;
}
export interface IProps {
    Center: Ixyz;
    Radius: number;
}
export interface IExit {
    /** % Chance out of 100 exit will appear in raid */
    Chance: number;
    ChancePVE: number;
    Count: number;
    CountPVE: number;
    EntryPoints: string;
    EventAvailable: boolean;
    ExfiltrationTime: number;
    ExfiltrationTimePVE: number;
    ExfiltrationType: string;
    RequiredSlot?: string;
    Id: string;
    MaxTime: number;
    MaxTimePVE: number;
    MinTime: number;
    MinTimePVE: number;
    Name: string;
    PassageRequirement: string;
    PlayersCount: number;
    PlayersCountPVE: number;
    RequirementTip: string;
    Side?: string;
}
export interface IWave {
    BotPreset: string;
    BotSide: string;
    SpawnPoints: string;
    WildSpawnType: WildSpawnType;
    isPlayers: boolean;
    number: number;
    slots_max: number;
    slots_min: number;
    time_max: number;
    time_min: number;
    /** OPTIONAL - Needs to be unique - Used by custom wave service to ensure same wave isnt added multiple times */
    sptId?: string;
    ChanceGroup?: number;
    /** 'pve' and/or 'regular' */
    SpawnMode: string[];
}
export declare enum WildSpawnType {
    ASSAULT = "assault",
    MARKSMAN = "marksman",
    PMCBOT = "pmcbot",
    BOSSKILLA = "bosskilla",
    BOSSKNIGHT = "bossknight"
}
//# sourceMappingURL=ILocationBase.d.ts.map