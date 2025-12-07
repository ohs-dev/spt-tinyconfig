import type { IBodyPart, IBotType, IBotTypeSkills, IDifficultySetting, IDifficultyType } from "../models/spt/IBotType.js";
import type { MinMax } from "../models/MinMax.js";
export declare class EFTBot {
    protected readonly _botPresetType: IBotType;
    protected readonly _botPresetPath: string;
    private _botPrototype;
    private _settings;
    private _filename;
    private _name;
    private _role;
    constructor(path: string);
    get Name(): string;
    get Role(): string;
    get Settings(): IBotType;
    set Settings(k: IBotType);
    /** Gets the min/max health for a EFT bot's bodypart
     *
     * @param part {keyof IBodyPart} One of ('Head','Chest','Stomach','RightArm','LeftArm','RightLeg','LeftLeg')
     *
     * @returns `{ min: number, max: number }`
     */
    getBodyPartValue(part: keyof IBodyPart): MinMax;
    /** Sets minimum and maximum health values for a bot's body part.
     *
     * @param partName {keyof IBodyPart} The name of the body part. (Head, Chest, RightArm, LeftLeg, etc)
     * @param min {number} minimun health the body part can have
     * @param max {number} max health value
     */
    setBodyPartValue(partName: keyof IBodyPart, min: number, max: number): void;
    /** Gets skill info for 'common skills' or 'mastering skills'
     *
     * @param skillType {keyof IBotTypeSkills} ('Common', 'Mastering')
     * @param skill {string} The name of the sub-skill
     * @returns the whole group of skills, or one specific skill if `skill?: string` is specified.
     */
    getSkillType(skillType: keyof IBotTypeSkills, skill?: string): Record<string, MinMax> | MinMax;
    setSkillValue<T extends IBotTypeSkills, K extends keyof T>(skill: T, key: K, value: T[K]): T;
    updateNormalSettings<T extends IDifficultySetting, K extends keyof T>(setting: T, key: K, value: T[K]): T;
    getDifficultySetting(diff: keyof IDifficultyType, key: keyof IDifficultySetting): Record<string, string | number | boolean | string[]> | undefined;
    /** Updates the EFTBot prototype difficulty settings by category
     *
     * @param diffType {string} A valid key of the difficulty object.
     *                          {easy, normal, hard, impossible}
     *
     * @param key {string} A valid setting(key) within the difficulty.
     *                     { Aiming, Boss, Change, Core, Cover, Grenade,
     *                       Hearing, Lay, Look, Mind, Move, Patrol,
     *                       Scattering,Shoot }
     * @returns Record<string, string | number | boolean | string[]>
     *           |  Record<string, string | number | boolean>
     * */
    setDifficultySetting(diffType: keyof IDifficultyType, key: keyof IDifficultySetting): void;
}
//# sourceMappingURL=BotClass.d.ts.map