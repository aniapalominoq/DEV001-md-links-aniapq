import {
  pathValidator,
  filtersPathsExtensionMd,
  allFindLinksContent,
  statusLinksFileContent
} from "./functionsAll.js"


 export function mdLinks(footpath, options={}) {
   return new Promise((resolve, reject) => {
     if (!pathValidator(footpath)) {
       return reject(`Ruta:${path} ,no es valida o no existe`)
     }
     else {
       if (!filtersPathsExtensionMd(footpath).length ){
         return reject(`Ruta:${footpath} no es o no contiende archivo(os) Markdown`)
       }
       else {
         if (!allFindLinksContent(footpath).length) {
           return reject(`Ruta:${footpath} ,nose encontro ningun link.`)
         }
         else {
           if (options === undefined || !options.validate) {
             console.log('Recuerde que para validar los links, elegir la option {validate:true}')
             resolve(allFindLinksContent(footpath))
           }
           else {
             resolve(console.log(statusLinksFileContent(footpath).then(res => console.log(res))))
           }
         }
       }
     }

     })
   
}

console.log(mdLinks('proof',{validate:true}).then(res=>console.log(res)).catch(err=>console.log(err)))