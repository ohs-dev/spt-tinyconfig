export declare class JsonUtil {
    protected fileHashes?: Map<string, string>;
    protected jsonCacheExists: boolean;
    protected jsonCachePath: string;
    constructor();
    /**
     * From object to string
     * @param data object to turn into JSON
     * @param prettify Should output be prettified
     * @returns string
     */
    serialize(data: any, prettify?: boolean): string;
    /**
     * From object to string
     * @param data object to turn into JSON
     * @param replacer An array of strings and numbers that acts as an approved list for selecting the object properties that will be stringified.
     * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
     * @returns string
     */
    serializeAdvanced(data: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;
    /**
     * From object to string
     * @param data object to turn into JSON
     * @param filename Name of file being serialized
     * @param options Stringify options or a replacer.
     * @returns The string converted from the JavaScript value
     */
    /**
     * From string to object
     * @param jsonString json string to turn into object
     * @param filename Name of file being deserialized
     * @returns object
     */
    deserialize<T>(jsonString: string, filename?: string): T | undefined;
    /**
     * From string to object
     * @param jsonString json string to turn into object
     * @param filename Name of file being deserialized
     * @param options Parsing options
     * @returns object
     */
    deserializeJson5<T>(jsonString: string, filename?: string): T | undefined;
    /**
     * Take json from file and convert into object
     * Perform valadation on json during process if json file has not been processed before
     * @param jsonString String to turn into object
     * @param filePath Path to json file being processed
     * @returns A promise that resolves with the object if successful, if not returns undefined
     */
    /**
     * Writes the file hashes to the cache path, to be used manually if writeHashes was set to false on deserializeWithCacheCheck
     */
    /**
     * Read contents of json cache and add to class field
     * @param jsonCachePath Path to cache
     */
    /**
     * Convert into string and back into object to clone object
     * @param objectToClone Item to clone
     * @returns Cloned parameter
     * @deprecated Use ICloner implementations, such as RecursiveCloner or StructuredCloner
     */
    clone<T>(objectToClone: T): T;
}
//# sourceMappingURL=JsonUtils.d.ts.map