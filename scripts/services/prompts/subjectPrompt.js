const inquirer = require("inquirer");
const youtubeScrap = require("../scraper/youtubeScrapData");
require("dotenv").config();
const question = [
  {
    name: "Subject",
    type: "list",
    message: "Enter the name of the subject",
    choices: process.env.CHOICES.split(","),
  },
];
const subjectPrompt = () => {
  inquirer.prompt(question).then((answers) => {
    youtubeScrap(answers.Subject);
  });
};

module.exports = subjectPrompt;
