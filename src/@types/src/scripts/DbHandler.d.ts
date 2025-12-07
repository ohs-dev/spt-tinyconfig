import { type IBotType } from '../models/spt/IBotType.js';
import type { ILocationBase } from '../models/spt/ILocationBase.js';
import type { ILooseLoot } from '../models/spt/ILooseLoot.js';
/** Gets bot info from json file.
 * @param name {string}  name of the bot
 * @returns `IBotType`
 */
export declare function getBotType(path: string, name?: string, version?: string): IBotType | undefined;
/** Gets bot details for each bot name in an array.
 * @param names {Array<string>} An array of bot names. Should NOT include file extension (.json)
 * @param path {string} Path to the bot types base folder. Ex: './SPT_Data/Server/database/bots/types/'
 */
export declare function getAllBotTypes(names: Array<string>, path: string): Array<IBotType> | undefined;
/** Loads map specific information for an Escape From Tarkov map.
 * @param name {string} Name of the map
 * @param path {string} Path to the map json file - 'base.json'
 *
 * @returns `ILocationBase`
*/
export declare function getMapBase(name: string, path: string): ILocationBase | undefined;
/** Gets all loose loot for a specific map in EFT.
 * @param map {string} Map name. Eg: (bigmap, woods, reservbase, etc.)
 * @param path {string} Path to map dir.
 *
 * @returns `ILooseLoot`
 */
export declare function getMapLooseLoot(map: string, path: string, fileName?: string): ILooseLoot | undefined;
//# sourceMappingURL=DbHandler.d.ts.map