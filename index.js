import process from 'node:process';
import * as fs from 'node:fs';
import botList from './data/app/roster.json' with { type: "json" };
import mapList from './data/app/maps.json' with { type: "json" };
import traderList from './data/app/traders.json' with { type: "json" };

// environment variables
const e = {
  id: process.title,
  args: process.argv,
  path: process.cwd(),
  bots: Object.keys(botList).slice(1, Object.keys(botList).length - 1), // get all array items except [0]
  maps: mapList,
  traders: traderList,
};

const flags = [
  "b", // backup
  "n", // update
  "v" // value
];

//   data/SPT_Data/Server/database/traders/6617beeaa9cfa777ca915b7c/base.json
//   data\SPT_Data\Server\database\globals.json

if (e.args.length == "2") {
  console.log("usage: [OPTIONS]...  FILE...  CHANGES...");
  console.log("Updates json keys and values.");
  process.exit(1);
}

try {

  // check for flags
  for (let i = 0; i < e.args.length - 1; i++) {
    switch (e.args[i]) {
      case "-b":
        // backup source file as:
        const bName = e.args[i + 1];
        console.log("backup file name: ", bkupFile);
        //backup(bName);
        break;
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
  

  let u = 0;
  console.log("updates: ", u);

} catch (error) {
  console.log(error);
  process.exit(1);
}
