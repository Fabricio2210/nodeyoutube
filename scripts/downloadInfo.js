const downloadPrompt = require('./services/prompts/downloadPrompt');
const chalk = require('chalk');
const figlet = require('figlet');

conectDB();
console.log(
    chalk.red(
      figlet.textSync('Node Youtube Get Info', { horizontalLayout: 'full' })
    )
  );
downloadPrompt();




