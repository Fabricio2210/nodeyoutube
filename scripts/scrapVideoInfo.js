const subjectPrompt = require('./services/prompts/subjectPrompt');
const chalk = require('chalk');
const figlet = require('figlet');

console.log(
    chalk.red(
      figlet.textSync('Node Youtube', { horizontalLayout: 'full' })
    )
  );
subjectPrompt();
