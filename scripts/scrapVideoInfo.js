const conectDB = require('./db/connectDB');
const subjectPrompt = require('./services/prompts/subjectPrompt');
const chalk = require('chalk');
const figlet = require('figlet');
require('dotenv').config();

conectDB();
console.log(
    chalk.red(
      figlet.textSync('Youtube DataBase', { horizontalLayout: 'full' })
    )
  );
subjectPrompt();
