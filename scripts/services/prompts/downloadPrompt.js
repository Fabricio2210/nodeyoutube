const inquirer = require('inquirer');
const youtubeDl = require('../youtubeDl');
const question = [
    {
        name:"Script",
        type:'list',
        message:'Enter the name of the script',
        choices:['detractors','developers','redlettermedia']
       
    }
]
const subjectPrompt = ()=>{ 
    inquirer
    .prompt(question)
    .then(answers => { 
        youtubeDl(answers.Script)
    })
}

module.exports = subjectPrompt