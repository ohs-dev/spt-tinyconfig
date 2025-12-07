export declare namespace Utils {
    /** Tests if a file exists at the given path.
     * @param path {string} The relative path with filename & extension
     * @returns boolean;
      */
    function fileExists(path: string): boolean;
    /** Checks if a .json file exists and reads data from file
   * @param path {string} The relative path with filename & extension
   */
    function readJSONFile(filePath: string): any;
    /** Writes data to a .json file. Overwrites file if it already exists.
   *
   * @param filepath {string} The relative path with filename & extension
   * @param data {string} data to write in the file.
   * @returns `boolean`
   */
    function writeJSONFile(filepath: string, data: any): boolean;
}
/**
 * Creates a new Map from an object's properties.
 * @param {Object} obj - a non-primitive object. "[Object object]"
 * @returns {Map}
 */
export declare function convertToMap(obj: any): Map<any, any>;
export declare function findKey(keyname: string, obj: any): any;
//# sourceMappingURL=utils.d.ts.map