export declare function findKey(keyname: string, obj: any): any;
export declare function findLocalized(keyId: string, searchType: string, file: string): any;
/** Checks if a .json file exists and reads data from file
 * @param name {string} The name of the file.
 * @param path {string} The file system path where the file is located.
 */
export declare function readJSONFile(path: string, name?: string): any;
/** Writes data to a .json file.
 *
 * @param name {string} Name of the file
 * @param path {string} File path
 * @returns `boolean`
 */
export declare function writeJSONFile(path: string, data: any, backup?: boolean): boolean;
export declare function validateString(str?: string): boolean;
export declare function fileExists(path: string): boolean;
/**
 * Creates a new Map from an object's properties.
 * @param {Object} obj - a non-primitive object. "[Object object]"
 * @returns {Map}
 */
export declare function convertToMap(obj: any): Map<any, any>;
//# sourceMappingURL=utils.d.ts.map