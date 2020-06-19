const conectDB = require('./db/connectDB');
const downloadPrompt = require('./services/prompts/downloadPrompt');
const chalk = require('chalk');
const figlet = require('figlet');
require('dotenv').config();

conectDB();
console.log(
    chalk.red(
      figlet.textSync('Node Youtube Get Info', { horizontalLayout: 'full' })
    )
  );
downloadPrompt();




