/* ---------- Helper Functions --------- */
//
import * as fs from 'node:fs';

/* #region Array, object value helpers */

/**
 * Converts the key-value pairs from a Map instance map<k, v> into a new object.
 * @param {Map} map - a set key-values of type [Map]
 * @returns {Object} - An object containing properties gathered from `m`
 */
export function convertToObject(map) {
  if (typeof map === "Map") {
    const obj = Object.fromEntries(map);
    return obj;
  } else {
    throw new Error(`Error in utils.js: function mapFrom(obj) {...}'\n Invalid object passed as parameter: ${obj}`);
  }
}

/**
 * Creates a new Map from an object's properties.
 * @param {Object} obj - a non-primitive object. "[Object object]"
 * @returns {Map} 
 */
export function convertToMap(obj) {
  const m = new Map();
  if (typeof obj === "object") {
    for (const [key, val] of Object.entries(obj)) {
      m.set(key, val);
    };
  }
  return m;
}


/* #endregion */

// WLAN mac 4cebbd005E8d
// realtek rtl881ce

/* #region Filesystem helpers */

//open a file and return the object
export function readJSON(target) {

  const obj = fs.readFileSync(target);
  console.log(obj.length, " lines");
  return JSON.parse(obj);
}

// save a copy of a json file
export function backupJSON(target, path) {

}

// output a new json file <path> with data <obj>
export function newJSON(obj, path) {

}

// overwrite an existing json file <path> with data <obj>
export function updateJSON(obj, path) {

}

/* #endregion */