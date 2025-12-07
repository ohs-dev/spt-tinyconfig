import process from 'node:process';
//import console from 'node:console';
import { Utils } from './src/scripts/utils.js';
import { Traders } from './src/models/enums/Traders.js';
import { EFTBot } from './src/scripts/BotClass.js';
import type { IBotTypeSkills } from './src/models/spt/IBotType.js';

// Log file
import * as app_log from './app_log.json' with {type: 'json'}

namespace App {

  // environment variables
  const app = {
    args: process.argv,
    cwd: process.cwd(),
    debug: true,
    debug_jsonFile: false,
    debug_cli: true,
    path: process.cwd(),
    assets: {
      images: "./src/assets/images",
      spt: "./src/assets/spt/",
    },
    // User installed game path
    spt_install_path: "",
    // User game version
    spt_install_version: ""
    /* From `App.ts` - class App -> async load()
    this.logger.debug(`Server: ${ProgramStatics.SPT_VERSION || this.coreConfig.sptVersion}`);
    const nodeVersion = process.version.replace(/^v/, "");
    if (ProgramStatics.EXPECTED_NODE && nodeVersion !== ProgramStatics.EXPECTED_NODE) {
        this.logger.error(
            `Node version mismatch. Required: ${ProgramStatics.EXPECTED_NODE} | Current: ${nodeVersion}`,
        );
        process.exit(1);
    }
    this.logger.debug(`Node: ${nodeVersion}`); */
  };

  /* #region -- DEBUG -- */

  // DEBUG MODE
  if (app.debug) {

    // COMMAND LINE ENABLED
    if (app.debug_jsonFile) {

      const flags = [
        "-b", //  backup file []
        "-o", //  overwrite existing file
        "-n"  //  new file -- `DEFAULT`
      ];

      if (app.args.length <= 2) {
        console.log("usage: [OPTIONS]...  FILE...  [(optional) CHANGEFILE]");
        console.log("Updates json key-vals in <FILE> with changes from <FILE2>.");
        console.log("Example:\n $ node index.js 'file.json' '/path/to/custom.json'");
        process.exit(1);
      }

      try {

        //const out_path = "";
        //const bkup_path = "";

        // check for flags
        for (let i = 2; i < app.args.length - 1; i++) {
          switch (app.args[i]) {
            case "-b":
              // backup file

              break;
            case "-n":
              // new file

              break;
          }
        }

        const botPath = app.args[2];


        if (botPath === undefined) {
          throw new Error('No botPath or botName');
        }

        const bot: EFTBot = new EFTBot(botPath);
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
        process.exit(0);
      } catch (error) {
        console.log(error);
        process.exit(1);
      }
    }

    // Used for debugging values in the console.
    if (app.debug_cli) {
      try {


      } catch (err) {
        //console.log('Error during property search:');
        console.log(err);
        process.exit(1);
      }

    }

    // End DEBUG_MODE
    process.exit(0);
  }
  /* #endregion -- DEBUG -- */



  // Main code branch
  /* #region Main */







  /* #endregion */

}




