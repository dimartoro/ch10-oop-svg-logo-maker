const inquirer = require('inquirer');
const generateMarkdown = require('./lib/generateMarkdown.js');
const fs = require('fs');
const svg = require('@svgdotjs/svg.js');


const questions = [
    {
        type:'input',
        message:'Logo text?',
        name:'text',
        validate:function(input){
            var done = this.async();
            setTimeout(() => {
                if(input.length > 3){
                    done(" :: Error :: Text needs to be 3 characters or less.");
                }
                done(true);
            }, 500);
        }
    },
    {
        type:'input',
        message:'Text color?',
        name:'textColor',
        
    },
    {
        type:'list',
        choices:["circle", "square", "triangle"],
        message:'Logo shape?',
        name:'shape',
        
    },
    {
        type:'input',
        message:'Shape color?',
        name:'shapeColor',
       
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if(err){
            console.log("Could not save file: ", err);
        }else {
        console.log("Sucess: A new logo.svg file has been generated!");
        }
    });
}

function init() {
    inquirer
    .prompt(questions)
    .then((answers) =>{
        deleteLogo();
        const mark = generateMarkdown(answers);
        writeToFile('./logo.svg', mark);
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in the current environment.")
        } else {
          console.log("error other than prompt")
        }
    });
}

function deleteLogo(){
    try {
        if (fs.existsSync('./logo.svg')) {
            fs.unlink('./logo.svg', (err) => {
                if (err) {
                    throw err;
                }
                console.log("The Old logo.svg file has been deleted successfully!.");
            });
        }
      } catch(err) {
        console.error(err)
      }
}

init();