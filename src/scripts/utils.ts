import * as fs from 'node:fs';
import type { MinMax } from '../models/MinMax.js';


/* #region Object:Property Search */

// Recursively search an object for a keyname within all nested objects
export function findKey(keyname: string, obj: any): any {

  if (obj.hasOwnProperty(keyname)) {
    return obj[keyname];
  }

  for (let p in obj) {
    if (obj.hasOwnProperty(p)) {
      const val = obj[p];

      // If the value is an object (and not null), recurse into it
      if (typeof val === 'object' && val !== null) {
        const result = findKey(keyname, val);
        // If a result is found in a nested object, return it immediately
        if (result !== undefined) {
          return result;
        }
      }
    }
  }
}

// Search for language-translated name,description
export function findLocalized(keyId: string, searchType: string, file: string): any {

  // [English] locale file
  //const localeFile = 'data/SPT_Data/Server/database/locales/global/en.json';
  const localeFile = file;
  const localeDb = readJSONFile('en.json', './data/SPT_Data/Server/database/locales/global/');

  const result: ItemDescriptionLocalized = {
    Name: "",
    ShortName: "",
    Description: ""
  };

  // searchType = [item, quest, trader]

  if (searchType === "item") {

    // Name, ShortName, Description
    if (localeDb.hasOwnProperty(`${keyId} Name`)) {
      result.Name = localeDb[`${keyId} Name`];
    }
    if (localeDb.hasOwnProperty(`${keyId} ShortName`)) {
      result.ShortName = localeDb[`${keyId} ShortName`];
    }
    if (localeDb.hasOwnProperty(`${keyId} Description`)) {
      result.Description = localeDb[`${keyId} Description`];
    }

    return result;
  }
}

/* #endregion */


/* #region JSON Read/Write */

/** Checks if a .json file exists and reads data from file
 * @param name {string} The name of the file.
 * @param path {string} The file system path where the file is located.
 */
export function readJSONFile(path: string, name?: string): any {
  try {
    //fs.accessSync(`${path}/${name}`, fs.constants.W_OK);

    if (path.includes('.json') && fileExists(path)) {
      return JSON.parse(fs.readFileSync(path, 'utf-8'));
    }

    /* if (path.lastIndexOf('/') < path.length - 1) {
      throw new Error(`File missing or invalid path: (${path})`);
    }

    if (name.includes('.json') && fileExists(`${path}/${name}`)) {
      return JSON.parse(fs.readFileSync(`${path}/${name}`, 'utf-8'));
    } */

    /* if (fileExists(`${path}/${name}.json`)) {
      return JSON.parse(fs.readFileSync(`${path}/${name}.json`, 'utf-8'));
    } */ else {
      throw new Error(`File not found at path: ${path}`);
    }
  } catch (err: Error | any) {
    console.error(`Error in utils.ts - readJSONFile():`, err.message);
  }
}


/** Writes data to a .json file.
 * 
 * @param name {string} Name of the file
 * @param path {string} File path
 * @returns `boolean`
 */
export function writeJSONFile(path: string, data: any, backup?: boolean): boolean {

  try {

    fs.accessSync(path, fs.constants.W_OK);

    if (backup) {
      // Create a backup file
      fs.writeFileSync(`${path}.bkup`, JSON.stringify(data), 'utf-8');
    }

    // Write to the file
    console.log('Writing to file...');
    //fs.writeFileSync(`${fullPath}`, JSON.stringify(data), 'utf-8');
    console.log('Write complete!');

    return true;

  } catch (err: Error | any) {
    console.log(`Error writing to .json file: ${err.message}`);
    return false;
  }
}

export function validateString(str?: string): boolean {
  if (str != undefined && str != null && str != "") {
    return true;
  } else { return false; }
}



// path is in the name
/* export function fileExists2(name: string) {
  try {
    if (fs.existsSync(`${name}`)) {
      return true;
    } else {
      //fs.accessSync(`${path}/${name}`, fs.constants.W_OK)
      return true;
    }
  } catch (error: Error | any) {
    return false;
  }
} */

export function fileExists(path: string): boolean {

  try {

    if (fs.existsSync(`${path}`)) {
      return true;
    } else {
      //fs.accessSync(`${path}/${name}`, fs.constants.W_OK)
      return true;
    }
  } catch (error: Error | any) {
    return false;
  }
}
/* #endregion */


/* #region Array, object value helpers */


/**
 * Creates a new Map from an object's properties.
 * @param {Object} obj - a non-primitive object. "[Object object]"
 * @returns {Map} 
 */
export function convertToMap(obj: any) {
  const m = new Map();
  if (typeof obj === "object") {
    for (const [key, val] of Object.entries(obj)) {
      m.set(key, val);
    };
  }
  return m;
}

/* #endregion */


/* #region Types */

type ItemDescriptionLocalized = {
  Name: string;
  ShortName: string;
  Description: string;
};

/* #endregion */


/* #region Images */

const questImageDir = "data/SPT_Data/Server/images/quest/icon/";
const gas_analyzer = "59689f8f86f7740d121082d7.png";

/* #endregion  */

// #-----  Old PC wlan  -----#
// realtek rtl881ce


namespace Utils {
  export function testUtil(): void {
    console.log('this is a namespace function');
  }
}