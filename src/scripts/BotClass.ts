import { BotCommonNames } from "../models/enums/BotNames.js";
import type { IBodyPart, IBotType, IBotTypeSkills, IDifficultySetting, IChanceEquipment, IChanceWeaponMods, IExperience, IInventoryAmmo, IInventoryEquipment, IInventoryItems, IInventoryMods, IChanceEquipmentMods, IItemGen, IItemWeights, IChanceType, IDifficultyType } from "../models/spt/IBotType.js";
import type { MinMax } from "../models/MinMax.js";
import { readJSONFile } from "./utils.js";


export class EFTBot {

  // ## Private and protected members in classes ##
  // -----------------------------------------------------------------
  // Private and protected members in a class affect their compatibility. 
  //
  // When an instance of a class is checked for compatibility, if /the target 
  //   type contains a private member, then the source type must also contain 
  //   a private member that originated from the same class. 
  // 
  // Likewise, the same applies for an instance with a protected member. This 
  //   allows a class to be assignment compatible with its `super` class, 
  //   but not with classes from a different inheritance hierarchy which 
  //   otherwise have the same shape.

  // ##  Bot Preset (DO NOT MODIFY)  ##
  // --------------------------------------------------------
  //     All `user` changes should be made to the prototype
  //     rather than the preset, which serves as a static 
  //     reference to the default configuration settings
  protected readonly _botPresetType: IBotType;
  protected readonly _botPresetPath: string;

  // Bot Configurable Settings Data
  /* private */
  public _botPrototype: IBotType;
  public _settings: IBotType;
  public _name: string;
  public _role: string;

  // Difficulty
  //private _normal: IDifficultySetting;
  //private _easy: IDifficultySetting;
  //private _hard: IDifficultySetting;
  //private _impossible: IDifficultySetting;

  // Skill settings
  //private _skillSettings: IBotTypeSkills;

  // Chances
  // private _chanceEquipment: IChanceEquipment;
  // private _chanceWeaponMods: IChanceWeaponMods;
  // private _chanceEquipmentMods: IChanceEquipmentMods;

  // Inventory
  //private _inventory: IInventory;
  //private _inventoryAmmo: IInventoryAmmo;
  //private _inventoryEquipment: IInventoryEquipment;
  //private _inventoryItems: IInventoryItems;
  //private _inventoryMods: IInventoryMods;

  // Experience
  //private _experience: IExperience;

  // TODO fix missing `type?: string` errors
  constructor(
    path: string,
    type?: string
  ) {

    // Details
    this._botPresetPath = path;

    // Data 
    this._botPresetType = readJSONFile(path) as IBotType;
    this._botPrototype = structuredClone(this._botPresetType) as IBotType;

    // Difficulty
    //this._normal = this._botPrototype.difficulty.normal;
    //this._easy = this._botPrototype.difficulty.easy;
    //this._hard = this._botPrototype.difficulty.easy;
    //this._impossible = this._botPrototype.difficulty.easy;

    // Chance
    //this._chanceEquipment = this._botPrototype.chances.equipment;
    //this._chanceWeaponMods = this._botPrototype.chances.weaponMods;
    //this._chanceEquipmentMods = this._botPrototype.chances.equipmentMods;

    // Inventory
    //this._inventoryAmmo = this._botPrototype.inventory.Ammo;
    //this._inventoryEquipment = this._botPrototype.inventory.equipment;
    //this._inventoryItems = this._botPrototype.inventory.items;
    //this._inventoryMods = this._botPrototype.inventory.mods

    this._settings = this._botPrototype;

    // Skills
    //this._skillSettings = this._botPrototype.skills;

    // XP
    //this._experience = this._botPrototype.experience;

    // default bot name & role
    this._name = "Scav";
    this._role = "assault";

    // Name/Role
    if (type) {

      // assign name & role
      this._name = BotCommonNames[type as keyof typeof BotCommonNames];
      this._role = type;
    }
  }

  public get Name() {
    return this._name;
  }
  public set Name(n: string) {
    this._name = n;
  }

  public get Role(): string {
    return this._role;
  }
  public set Role(r: string) {
    this._role = r;
  }

  public get Settings() {
    return this._settings;
  }

  public set Settings(k: IBotType) {
    this._settings = k;
  }


  /** Gets the min/max health for a EFT bot's bodypart
   * 
   * @param part {keyof IBodyPart} One of ('Head','Chest','Stomach','RightArm','LeftArm','RightLeg','LeftLeg')
   * 
   * @returns `{ min: number, max: number }` 
   */
  getBodyPartValue(part: keyof IBodyPart): MinMax {

    if (part != undefined && this._botPrototype.health.BodyParts[0] != undefined) {

      return this._botPrototype.health.BodyParts[0][part]

    } else {
      throw new Error(
        'Body part does not exist or bot has no health value for corresponding limb.');
    }
  }

  /** Sets minimum and maximum health values for a bot's body part.
   * 
   * @param partName {keyof IBodyPart} The name of the body part. (Head, Chest, RightArm, LeftLeg, etc)
   * @param min {number} minimun health the body part can have
   * @param max {number} max health value 
   */
  setBodyPartValue(partName: keyof IBodyPart, min: number, max: number): void {

    if (partName != undefined && this._botPrototype.health.BodyParts[0] != undefined) {

      this._botPrototype.health.BodyParts[0][partName].min = min;
      this._botPrototype.health.BodyParts[0][partName].max = max;
    }
  }

  /** Gets skill info for 'common skills' or 'mastering skills'
   * 
   * @param skillType {keyof IBotTypeSkills} ('Common', 'Mastering')
   * @param skill {string} The name of the sub-skill 
   * @returns the whole group of skills, or one specific skill if `skill?: string` is specified.
   */
  public getSkillType(skillType: keyof IBotTypeSkills, skill?: string): Record<string, MinMax> | MinMax {

    if (skillType === undefined || this._botPrototype.skills[skillType] === undefined) {
      throw new Error('Skill invalid.');
    }

    if (skill !== undefined && skill !== "" && this._botPrototype.skills[skillType][skill] !== undefined) {

      return this._botPrototype.skills[skillType][skill];
    } else {

      return this._botPrototype.skills[skillType];
    }
  }

  public setSkillValue<T extends IBotTypeSkills, K extends keyof T>(skill: T, key: K, value: T[K]): T {
    return { ...skill, [key]: value };
  }

  /*  <T extends UserProfile>: This means T can be any type that extends UserProfile. 
      This gives flexibility if you want to have additional properties in the user profile.
      
      <K extends keyof T>: This ensures that K is a valid key of T. This means you can only pass a 
      key that exists on the profile object.
      
      value: T[K]: This specifies that the value must be of the same type as the property being updated. */

  public updateNormalSettings<T extends IDifficultySetting, K extends keyof T>(setting: T, key: K, value: T[K]): T {
    return { ...setting, [key]: value };
  }


  public getDifficultySetting(diff: keyof IDifficultyType, key: keyof IDifficultySetting) {

    if (key && diff) return this._botPrototype.difficulty[diff][key];
  }

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
  public setDifficultySetting(diffType: keyof IDifficultyType, key: keyof IDifficultySetting) {

    if (!diffType || !key) throw new Error('setDifficultySetting(diffType, key) must include valid params.');

    if (key in this._botPrototype.difficulty[diffType][key]) {

    }
  }


  // END OF CLASS
}




// Check if param matches any key in this._botPrototype.Difficulty
export function isKeyOf(key: any, obj: any) {

  if (key in obj) {
    return key as typeof obj;
  } else {
    return undefined;
  }
}

export function isTypeOf(a: any, b: any): boolean {
  if (typeof a === typeof b && a != null && b != null) {
    return true;
  } else {
    return false
  }
}


type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };

function move(animal: Fish | Bird | Human) {
  if ("swim" in animal) {
    animal; // (parameter) animal: Fish | Human
  } else {
    animal; // (parameter) animal: Bird | Human
  }
}

/* 
export interface IDifficultyCategories {
  Aiming: Record<string, string | number | boolean>;
  Boss: Record<string, string | number | boolean>;
  Change: Record<string, string | number | boolean>;
  Core: Record<string, string | number | boolean>;
  Cover: Record<string, string | number | boolean>;
  Grenade: Record<string, string | number | boolean>;
  Hearing: Record<string, string | number | boolean>;
  Lay: Record<string, string | number | boolean>;
  Look: Record<string, string | number | boolean>;
  Mind: Record<string, string | number | boolean | string[]>;
  Move: Record<string, string | number | boolean>;
  Patrol: Record<string, string | number | boolean>;
  Scattering: Record<string, string | number | boolean>;
  Shoot: Record<string, string | number | boolean>;
}
  
*/

