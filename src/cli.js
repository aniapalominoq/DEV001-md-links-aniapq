#!/usr/bin/env node
import colors from 'colors'
import { table } from 'table'
import { contentHelp, menu, pause, readInput} from './viewUser.js'
import { mdLinks } from './mdLinks.js'
import { brokenLinks, fullLinks, uniqueLinks } from './functionsAll.js'


const mainOptions = async () => {
  let opt = ''
  const ruta = await readInput()
  do {
    opt = await menu()
    switch (opt) {

      case '1':
         console.clear()
             mdLinks(ruta, { validate: false })
            .then(res => {
              const title = [['HREF'.yellow, 'TEXT'.yellow, 'PATH'.yellow]]
              const dato = title.concat(res.map(elem => Object.values(elem)))
              const config = {
                columns: {
                  0: { width: 40 },
                  2: { width: 55 },
               
                },
                header: {
                  alignment: 'center',
                  content: 'Table with basic information'.yellow,
                },
              }
              console.log('\n');
              console.log(colors.grey(table(dato, config)))
            
            })
            .catch(error => console.log(error))


        break;
      case '2':
       console.clear()
          mdLinks(ruta, { validate: true })
            .then(res => {
              const title = [['HREF'.yellow, 'TEXT'.yellow, 'PATH'.yellow, 'STATUS'.yellow, 'OK'.yellow]]
              const dato = title.concat(res.map(elem => Object.values(elem)))
              const config = {
                columns: {
                  0: { width: 40 },
                  2: { width: 55 },
               
                },
                header: {
                  alignment: 'center',
                  content: '--validate'.yellow,
                },
              }
              console.log('\n');
              console.log(colors.grey(table(dato, config)))
            
            })
            .catch(error => console.log(error))
       
        break;
      case '3':
        console.clear()

         mdLinks(ruta,{validate:false})
           .then(res => { 
               const dato = [
             ['Total',`${fullLinks(res)}`],
             ['unique',`${uniqueLinks(res)}`]
           
          ]
           
           const config = {
             columns: {
               1: { width: 20 },
               
             },
            header: {
            alignment: 'center',
            content: '--stats'.yellow,
  },
           }
           console.log('\n');
         console.log(colors.grey(table(dato, config)))
            })
          .catch(error=>console.log(error))
        break;
      case '4':
        console.clear()
        console.log('\n');
       mdLinks(ruta,{validate:true})
         .then(res => {
           
           const dato = [
             ['Total',`${fullLinks(res)}`],
             ['unique',`${uniqueLinks(res)}`],
             ['Broken',`${brokenLinks(res)}`.red]
          ]
           
           const config = {
             columns: {
               1: { width: 10},
               
             },
            header: {
            alignment: 'center',
            content: '--stats --validate'.yellow,
  },
           }
           console.log('\n');
           console.log(colors.grey(table(dato, config)))
           
         })
          .catch(error => console.log(error))
        break;
      
      case '5':
        console.clear()
        contentHelp()

        break;
      case '0':
     console.clear()
        break;
    }
   console.log('\n');
    await pause()
    
  } while (opt != 0)
 
} 


mainOptions()
 

