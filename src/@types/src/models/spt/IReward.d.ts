import { RewardType } from "../enums/RewardType.js";
import { type IItem } from "./IItem.js";
export interface IReward {
    value?: string | number;
    id?: string;
    isHidden?: boolean;
    type: RewardType;
    index: number;
    target?: string;
    items?: IItem[];
    loyaltyLevel?: number;
    /** Hideout area id */
    traderId?: string;
    findInRaid?: boolean;
    gameMode?: string[];
}
//# sourceMappingURL=IReward.d.ts.map