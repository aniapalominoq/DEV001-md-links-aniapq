
import colors from 'colors'
import { contentHelp, menu, pause, readInput } from './viewUser.js'
import { mdLinks } from './mdLinks.js'
import { brokenLinks, fullLinks, uniqueLinks } from './functionsAll.js'


const mainOptions = async () => {
  let opt = ''
    const ruta=await readInput()
  do {
    opt = await menu()
    switch (opt) {
      case '1':
        console.clear()
        console.log('Option:--validate')
        mdLinks(ruta,{validate:true})
          .then(res=>console.log(res))
          .catch(error=>console.log(error))
       
        break;
      case '2':
        console.clear()
        console.log('Option:--stats')
         mdLinks(ruta,{validate:false})
           .then(res => { 
             console.log('\n');
             console.log('Total',fullLinks(res))
             console.log('Unique',uniqueLinks(res))
            })
          .catch(error=>console.log(error))
        
        break;
      case '3':
        console.clear()
        console.log('Option:--stats --validate')
       mdLinks(ruta,{validate:true})
         .then(res => {
           console.log('\n');
           console.log('Total  :',fullLinks(res))
           console.log('Unique :',uniqueLinks(res))
           console.log('Broken :',brokenLinks(res))
         })
          .catch(error=>console.log(error))
       
        break;
      
      case '4':
        console.clear()
        contentHelp()
        break;
      case '0':
     console.clear()
     console.log('--exit')
        break;
     default:
     contentHelp()
    }
    await pause()
  } while(opt!=0)
} 


mainOptions()
 

