import {
  pathValidator,
  pathAbsolute,
  filtersPathsExtensionMd,
  allFindLinksContent,
  statusLinksFileContent,
  findLinksFileContent
} from "./functionsAll.js"


 export function mdLinks(footpath, options={}) {
   return new Promise((resolve, reject) => {
     if (!pathValidator(footpath)) {
       return reject(`Ruta:${path} ,no es valida o no existe`)
     }
     else {
       if (!filtersPathsExtensionMd(footpath).length || !findLinksFileContent(pathAbsolute(footpath))) {
         return reject(`Ruta:${footpath} no es o no contiende archivo(os) Markdown`)
       }
       else {
         if (!allFindLinksContent(footpath).length) {
           return reject(`Ruta:${footpath} ,nose encontro ningun link.`)
         }
         else {
           if (options === undefined || !options.validate) {
             resolve(allFindLinksContent(footpath))
           }
           else {
             resolve(statusLinksFileContent(footpath).then(res => console.log(res)))
           }
         }
       }
     }

     })
   
}

