const inquirer = require('inquirer');
const youtubeScrap = require('../youtubeScrapData');
const question = [
    {
        name:"Subject",
        type:'list',
        message:'Enter the name of the subject',
        choices:['dsp','coders','none']
       
    }
]
const subjectPrompt = ()=>{ 
    inquirer
    .prompt(question)
    .then(answers => { 
        youtubeScrap(answers.Subject)
    })
}

module.exports = subjectPrompt