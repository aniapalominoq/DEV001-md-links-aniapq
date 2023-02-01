import inquirer from 'inquirer'
import colors from 'colors'
import { table } from 'table';
import figlet from 'figlet';


let date_ob = new Date();
// current date
// adjust 0 before single digit date
let date = ("0" + date_ob.getDate()).slice(-2);
// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
// current year
let year = date_ob.getFullYear();




export const menu = async () => {
  const questions = [{
  type: 'list',
  name: 'options',
  message: 'What do you want to do, with the path entered?'.yellow,
    choices: [
  {
      value: '1',
      name: `--default`.grey
    },
    {
      value: '2',
      name: `--validate`.grey
    },
    {
      value: '3',
      name: `--stats`.grey
    },
    {
      value: '4',
      name: `--stats --validate`.grey

      },
       {
        value: '5',
        name:`--help`.grey
      },
        {
        value: '0',
        name: `--exit`.red, 
      }
    ]
}] 

  const { options} = await inquirer.prompt(questions)
  return options
}

/* export const tableValidate = async () => {
  const questions = [{
  type: 'input',
  name: 'options',
  message: 'Do you want to validate the \nlinks contained in the file?'.yellow,
  
}] 

  const { options} = await inquirer.prompt(questions)
  return options
}
 */

export const contentHelp = () => {
  const data = [
   
    ['Options'.yellow, 'Result'.yellow],
    ['--validate'.grey,'Print href, text, file, ok(ok or fail) and status.'.white],
    ['--stats'.grey, 'Print total and unique links.'.white],
    ['--stats --validate'.grey, 'Print total, unique and broken links.'.white],
    ['--help'.grey,  'Show all the options.'.white],
    ['--exit'.grey, 'Exit the program.'.white],
  ]
   const config = {
  columns: {
    1: { width: 60 }
  },
 
  }
  return console.log(colors.grey(table(data, config)))
}
 
export const readInput = async () => {
  console.clear()
  console.log(`${'∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞ '}`.yellow);
   console.log(colors.yellow(figlet.textSync('maskay-links-md')));
  console.log(`${'∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞ \n'}`.yellow);

  console.log(`                                                           today : ${date}-${month}-${year}`.yellow);
  if (process.env.USERNAME) {
    console.log('Hello,'.yellow, `${process.env.USERNAME}`.green )
  }
  else if (process.env.USER) {
    console.log('Hello,'.yellow, `${process.env.USER}`.green )
  }
    else {
     console.log('Hello,'.yellow,`(*^_^*)`.green)
    }
  console.log('-------------------------------------------------------------------------------------'.grey)
 const inputs = [
   {
     type: 'input',
    name: 'filePath',
      message:`Enter the path of a file`.yellow,
    
    validate(value) {
        if (value.length === 0) return 'Enter the path of a file'.yellow  
     return true
      }
  }]


   const {filePath} = await inquirer.prompt(inputs)
   return filePath
  }


export const pause = async () => {
  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `Press ${'enter'.green} to continue...`. yellow,
    }
  ];
 
  await inquirer.prompt(question)
 
}

