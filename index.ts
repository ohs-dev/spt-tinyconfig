import process from 'node:process';
import { findKey, findLocalized, readJSONFile } from './src/scripts/utils.js';
import { Traders } from './src/models/enums/Traders.js';
import { EFTBot } from './src/scripts/BotClass.js';
import type { IBotTypeSkills } from './src/models/spt/IBotType.js';

namespace App {

  // environment variables
  const e = {
    args: process.argv,
    cwd: process.cwd(),
    //cfg: "/data/app",
    assets: {
      images: "./src/assets/images",
      spt: "./src/assets/spt/",
    },
    spt_version: "3.11.3"
  };


  const flags = [
    "b", // backup
    "n", // update
    "v" // value
  ];

  /* #region SPT asset locations */

  const SPT_DIR_BASE = "/src/assets/spt/";

  const spt_version = "3.11.3";
  const spt_dir_configs = "SPT_Data/Server/configs/";
  const spt_dir_bots = "SPT_Data/Server/database/bots/types/";
  const spt_dir_locales = "SPT_Data/Server/database/locales/";
  const spt_dir_locations = "SPT_Data/Server/database/locations/";
  const spt_dir_templates = "SPT_Data/Server/database/templates";
  const spt_dir_traders = "SPT_Data/Server/database/traders";

  const spt_dir_images = "SPT_Data/Server/images/";
  const spt_dir_quest_icons = "SPT_Data/Server/images/quest/icon/";
  const spt_dir_trader_avatars = "SPT_Data/Server/images/trader/avatar/";

  const spt_map_list = [
    "bigmap",           // Customs
    //"develop",        // -- inactive
    "factory4_day",
    "factory4_night",
    //"hideout",        // -- unnecessary
    "interchange",
    "laboratory",
    "lighthouse",
    //"privatearea",    // -- inactive
    "reservbase",
    "sandbox",          // Ground Zero (level 0,20)
    "sandbox_high",     // Ground Zero (level 20+)
    "shoreline",
    //"suburbs",        // -- inactive
    "tarkovstreets",
    //"terminal",       // -- inactive (in this version)
    //"town",           // -- inactive
    "woods"
  ];

  const SPT_MAP_NAMES = Object.freeze({
    bigmap: "Customs",
    factory4_day: "Factory Day",
    factory4_night: "Factory Night",
    interchange: "Interchange",
    laboratory: "Labs",
    lighthouse: "Lighthouse",
    reservbase: "Reserve",
    sandbox: "Ground Zero",
    sandbox_high: "Ground Zero",
    shoreline: "Shoreline",
    tarkovstreets: "Tarkov Streets",
    woods: "Woods"
  });


  let uCnt = 0;

  /* #region Test files */

  // Recursive search test file
  //    data/app/test.json

  // SPT template files?
  //    data/SPT_Data/Server/database/templates/items.json
  //    data/SPT_Data/Server/database/templates/quests.json

  // Game editions (Standard, Left Behind, Prepare To Escape, Edge Of Darkness, Unheard, spt_dev...)
  //    data/SPT_Data/Server/database/templates/profiles.json   

  // SPT localization file with english name,shortname,description
  //    data/SPT_Data/Server/database/locales/global/en.json

  /* #endregion */

  /* #region Flag check */

  if (e.args.length === 2) {
    console.log("usage: [OPTIONS]...  FILE...  CHANGES...");
    console.log("Updates json key-vals in <FILE> with <CHANGES>.");
    process.exit(1);
  }

  function getArgFlags() {
    try {

      //let tgt_path = "";
      const out_path = "";
      const bkup_path = "";

      // check for flags
      for (let i = 0; i < e.args.length - 1; i++) {
        switch (e.args[i]) {
          case "-b":
            // backup source file as:
            const bName = e.args[i + 1];
            console.log("backup file name: ", bName);
            //backup(bName);
            break;
          case "-d":
            // diff(update) <target> with changes from <update_file>
            const tgt = e.args[2];
            const src = e.args[3];
            console.log(`diff files: (${tgt}),(${src})`)
            break;
        }
      }

    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }

  /* #endregion */

  /* #region Main */

  interface UserProfile {
    name: string;
    age: number;
    email: string;
    skills: IBotTypeSkills;
  }

  try {

    const user: UserProfile = {
      name: "Alice",
      age: 30,
      email: "alice@example.com",
      skills: {
        Common: {},
        Mastering: {
          AimDrills: {
            max: 5100,
            min: 0
          },
          Assault: {
            max: 5100,
            min: 0
          },
          CovertMovement: {
            "max": 5100,
            "min": 0
          }
        }
      }
    };

    //console.log(JSON.stringify(user, null, 2));

    const newSkills: IBotTypeSkills = {
      Common: {},
      Mastering: {
        AimDrills: {
          max: 5100,
          min: 2500
        },
        Assault: {
          max: 5100,
          min: 2500
        },
        CovertMovement: {
          "max": 3000,
          min: 2500
        }
      }
    }

    //const user2 = updateProfile(user, 'skills', newSkills);
    //console.log(JSON.stringify(user2, null, 2), '\n');

    const botPath = e.args[2];
    //const botName = e.args[3];

    if (botPath === undefined) {
      throw new Error('No botPath or botName');
    }

    const bot: EFTBot = new EFTBot(botPath);

    //bot.CommonName = "Billy Joe";

    //console.log(bot.CommonName, bot.getBodyPartValue('LeftLeg'));
    //console.log(bot.getDifficultyCategory('easy', 'Aiming'));
    //console.log(bot.getSkillType('Mastering', 'AKM'));
    //console.log(bot.getSkillType('Common'));

    const setting = bot.getDifficultySetting('normal', 'Core');

    if (setting) {
      setting['VisibleAngle'] = 400;
      setting['VisibleDistance'] = 385;
    }

    // test if `setting` is set to same ref as bot._botPrototype
    console.log('bot.getDifficultySetting(normal, Core)\n',
      bot.getDifficultySetting('normal', 'Core'));

    bot.Settings.difficulty.hard.Core['VisibleAngle'] = 104;
    bot.Settings.difficulty.hard.Core['VisibleDistance'] = 140;

    console.log('bot.Settings.difficulty.hard.Core:\n', bot.Settings.difficulty.hard.Core);



  } catch (err) {

    //console.log('Error during property search:');
    console.log(err);
    process.exit(1);
  }

  function xyz() {
    //const curJSON = readJSONFile(`${e.args[2]}`, thisPath);

    // Search for specific property in JSON file, if CLI arg is present 
    //   Ex: >node index.js data/app/maps.json mapList
    if (e.args.length > 3) {

      //let searchKey = e.args[3];
      let searchKey = (typeof e.args[3] === 'string') ? e.args[3] : "";
      //const rslt = findKey(searchKey, curJSON);

      /* if (rslt == undefined) {
        console.log('search failed.');
        process.exit(1);
      } */


      console.log(findLocalized(searchKey, "item", 'data/SPT_Data/Server/database/locales/global/en.json'));

      // TODO:  Xref handbook.json [Categories,Items] with en.json AND group by count WHERE Items.ParentId = Categories.Id
      //    Categories: [{Id:"",ParentId:"", Icon:""}]
      //         Items: [{Id:"",ParentId:"",Price:""}]

    }
  }


  /* #endregion */

  /* #region Functions */

  // -------------------------------------


  function updateProfile<T extends UserProfile, K extends keyof T>(profile: T, key: K, value: T[K]): T {
    return { ...profile, [key]: value };
  }


  // ------------------------------------

  // Find a key <keyname> within javascript object <obj>
  /* function findKey(keyname, obj) {
  
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
  } */

  // Search for language-translated name,description
  /* function findLocalized(keyId, searchType) {
  
    // [English] locale file
    const localeFile = 'data/SPT_Data/Server/database/locales/global/en.json';
    const localeDb = readJSON(localeFile);
  
    const result = {};
  
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
  } */

  /* #endregion */

}