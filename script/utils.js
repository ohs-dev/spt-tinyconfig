import * as fs from 'node:fs';


/* #region HelperFunctions */

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