import process from 'node:process';
import * as fs from 'node:fs';
import botList from './data/app/roster.json' with { type: "json" };
import mapList from './data/app/maps.json' with { type: "json" };
import traderList from './data/app/traders.json' with { type: "json" };

/* const botList = require("data/app_data/roster.json");
const mapList = require("data/app_data/maps.json");
const traderList = require("data/app_data/traders.json"); */

const env_info = {
  id: process.title,
  args: [...process.argv],
  path: process.cwd(),
  bots: Object.keys(botList).slice(1, Object.keys(botList).length - 1), // get all array items except [0]
  maps: mapList,
  traders: traderList,
};

if (!env_info.args.length > 0) {
  console.log("usage: <target_file> <key> <val>");
  process.exit(1);
}

try {

  console.log(env_info.args[0]);
  // $ node index.js x y z
  console.log(env_info.args[1]);
  // C:\Users\Oliver\Dev\Tools\nvm\v24.11.0\node.exe
  console.log(env_info.args[2]);
  // C:\users\oliver\dev\src\web\spt-tinyconfig\index.js

  console.log(env_info.bots);

  //console.log(process.argv);

  //const jsonFile = JSON.parse(fs.readFileSync(env_info.args(1)));
} catch (error) {
  console.log(error);
  process.exit(1);
}
//console.log(env_info.bots['bear'].role);
//const fPath = "data/SPT_Data/Server/database/bots/types";
