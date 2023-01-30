import {
  pathValidator,
  filtersPathsExtensionMd,
  allFindLinksContent,
  statusLinksFileContent
} from "./functionsAll.js"
 export function mdLinks(footpath, options={}) {
   return new Promise((resolve, reject) => {
     if (pathValidator(footpath)===false) {
       return reject('Ruta:No es valida o no existe')
     }
     else {
       if (filtersPathsExtensionMd(footpath).length===0 ){
         return reject('Ruta:No es o no contiende archivo(os) Markdown')
       }
       else {
         if (!allFindLinksContent(footpath).length) {
           return reject('Ruta:nose encontro ningun link.')
         }
         else {
           if (options === undefined || !options.validate) {
             console.log('Recuerde que para validar los links, elegir la option --validate')
             return resolve(allFindLinksContent(footpath))
           }
           else {
             resolve(Promise.all(statusLinksFileContent(footpath)).then(res => { return res }).catch(err => {return err}))
             
           }
         }
       }
     }

     })
   
}
