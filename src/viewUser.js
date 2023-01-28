import inquirer from 'inquirer'
import colors from 'colors'


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
  message: 'Que quieres hacer, con la ruta ingresada?',
  choices: [
    {
      value: '1',
      name: `${'1.'.green} --validate`
    },
    {
      value: '2',
      name: `${'2.'.green} --stats`
    },
    {
      value: '3',
      name: `${'3.'.green} --stats --validate`

      },
       {
        value: '4',
        name:`${'4.'.green}--help`
      },
        {
        value: '0',
        name: `${'0.'.red}--exit`
      }
    ]
}] 

  const { options} = await inquirer.prompt(questions)
  return options
}


export const contentHelp = () => {
  
  console.log(`${'∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞---Options:--∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞'.cyan}`)
  console.log(`${'     --validate         '.grey}: ${'Print href, text, file, message(ok or fail) and status.'.cyan}`)
  console.log(`${'     --stats            '.grey}: ${'Print total and unique links.'.cyan}`)
  console.log(`${'     --stats --validate '.grey}: ${'Print total, unique and broken links.'.cyan}`)
  console.log(`${'     --help             '.grey}: ${'Show all the options.'.cyan}`)
  console.log(`${'     --exit             '.grey}: ${'Exit the program.'.cyan}`)
  console.log(`${'∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞'.cyan}`)
}
 
export const readInput = async() => {
  console.clear()
  console.log(`${'∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞- '}`.yellow)
  console.log(`             ${'maskay-linsk-md'.underline} ${'Library'.brightBlue}`)
  console.log(`${'∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞-∞- '}`.yellow)
    console.log('\n');
  console.log(`                            today : ${date}-${month}-${year}`.yellow);
  console.log('\n');


 const inputs = [
    {
     type: 'input',
    name: 'filePath',
      message:`enter the path of a file`,
    
    validate(value) {
        if (value.length === 0) return 'enter the path of a file'  
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
      message: `Press ${'enter'.green} to continue...`
    }
  ];
  console.log('\n');
await inquirer.prompt(question)
}

