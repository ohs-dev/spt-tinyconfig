import { type IExit, type ILocationBase } from "./ILocationBase.js";
import { type IGroupPostion, type ILooseLoot } from "./ILooseLoot.js";
import { type Ixyz } from "./Globals.js";
import { type IItem } from "./IItem.js";
export interface ILocation {
    /** Map meta-data */
    base: ILocationBase;
    /** Loose loot postions and item weights */
    looseLoot: ILooseLoot;
    /** Static loot item weights */
    /** Static container postions and item weights */
    /** All possible static containers on map + their assign groupings */
    /** All possible map extracts */
    allExtracts: IExit[];
}
export interface ItemCountDistribution {
    count: number;
    relativeProbability: number;
}
export interface ItemDistribution {
    tpl: string;
    relativeProbability: number;
}
export interface IStaticPropsBase {
    Id: string;
    IsContainer: boolean;
    useGravity: boolean;
    randomRotation: boolean;
    Position: Ixyz;
    Rotation: Ixyz;
    IsGroupPosition: boolean;
    IsAlwaysSpawn: boolean;
    GroupPositions: IGroupPostion[];
    Root: string;
    Items: IItem[];
}
//# sourceMappingURL=ILocation.d.ts.map