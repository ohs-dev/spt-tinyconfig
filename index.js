import process from 'node:process';
import { readJSON } from './script/utils.js';
import botList from './data/app/roster.json' with { type: "json" };
import mapList from './data/app/maps.json' with { type: "json" };
import traderList from './data/app/traders.json' with { type: "json" };
import { log } from 'node:console';

// environment variables
const e = {
  args: process.argv,
  cwd: process.cwd(),
  cfg: "/data/app",
  data: "/data/SPT_Data/Server/database",
  dist: "/out",
};

const appConfig = {
  /* bots: Object.keys(botList).slice(1, Object.keys(botList).length - 1), // get all array items except [0] */
  roster: botList,
  traders: traderList,
  maps: mapList
};

const flags = [
  "b", // backup
  "n", // update
  "v" // value
];

let uCnt = 0;

//   data/SPT_Data/Server/database/traders/6617beeaa9cfa777ca915b7c/base.json
//   data\SPT_Data\Server\database\globals.json

/* #region Flag check */

if (e.args.length == "2") {
  console.log("usage: [OPTIONS]...  FILE...  CHANGES...");
  console.log("Updates json key-vals in <FILE> with <CHANGES>.");
  process.exit(1);
}

try {

  const tgt_path = "";
  const out_path = "";
  const bkup_path = "";

  // check for flags
  for (let i = 0; i < e.args.length - 1; i++) {
    switch (e.args[i]) {
      case "-b":
        // backup source file as:
        const bName = e.args[i + 1];
        console.log("backup file name: ", bkupFile);
        //backup(bName);
        break;
      case "-d":
        // diff(update) <target> with changes from <update_file>
        tgt_path = e.args[2];
        const chngPath = e.args[3];
      case "-k":
        // update keys manually (from text)
        tgt_path = e.args[4];

      case "-n":
        // create a new file
        const newFile = e.args[i + 1];
        //new(newFile);
        break;
      case "-v":
        // verbose
        // nologs();
        break;
    }
  }


} catch (error) {
  console.log(error);
  process.exit(1);
}

/* #endregion */

/* #region json */

// Open json file
try {
  const curJSON = readJSON(`${e.args[2]}`);

  if (e.args.length > 3) {
    let searchKey = e.args[3];

    //const rslt = findKey(searchKey, curJSON);
    //console.log(`"${searchKey}":\n${JSON.stringify(rslt, null, 2)}`);

    //printProps(curJSON);
    //console.log(curJSON);
    printProps(curJSON);


  }

} catch (err) {
  //console.log(error);
  console.log("Couldn't open file: File doesn't exist, or contains invalid json.");
  process.exit(1);
};

// Search for key
/* try {
  if (e.args.length > 3) {
    let searchKey = e.args[3];
    const rslt = findKey(searchKey, curJSON);
    console.log(`"${searchKey}":\n${JSON.stringify(rslt, null, 2)}`);
  }
} catch (error) {
  console.log(error);
  process.exit(1);
} */

// Find a key <keyname> within javascript object <obj>
function findKey(keyname, obj) {

  if (obj.hasOwnProperty(keyname)) {
    return obj[keyname];
  }
  Object.keys(obj).forEach(key => {
    console.log(`searching: ${obj}, ${key}`);
    if (typeof obj[key] === "object") {
      findKey(keyname, obj[key]);
    }
  });
}

function printProps(obj) {
  //const m = new Map();
  for (let z of Object.values(obj)) {
    //m.set(z, obj[z]);
    console.log(`${z} ->\n\t ${JSON.stringify(obj[z])}\n`);
    if (typeof obj[z] === "object") {
      printProps(obj[z]);
    }
    else {
      console.log("else condition");
      //console.log(obj[z]);
    }
  }
  return m;
}

/* #endregion */


console.log(uCnt, " lines updated.");