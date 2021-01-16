const conectDB = require('./db/connectDB');
const subjectPrompt = require('./services/prompts/subjectPrompt');
const chalk = require('chalk');
const figlet = require('figlet');

conectDB();
 console.log(
  chalk.red(
    figlet.textSync('Node Youtube', { horizontalLayout: 'full' })
  )
 );
subjectPrompt();
