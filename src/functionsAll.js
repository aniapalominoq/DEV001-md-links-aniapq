import { existsSync } from 'node:fs';
import fs from 'fs';
import path from 'path';
//import markdownLinkExtractor from 'markdown-link-extractor';
//import linkCheck  from 'link-check';


/**
 * funcion que valida si existe la ruta
 * @param {string} footpath una ruta 
 * @returns {boolean} result   true : en el caso exista la ruta de lo contrario false
 */
export function pathValidator(footpath) {
  const result = existsSync(footpath) ? true : false;
   return result
}
 /** 
  * funcion  que convierte una ruta relativa en absoluta y si fuera absoluta la mantiene igual
  * @param {string} footpath una ruta
  *@returns {string} result  la ruta absoluta 
  */
export function pathAbsolute(footpath) {
  const result = path.isAbsolute(footpath) ? footpath:path.resolve(footpath)
return result 
}

/**
 * funcion extrae todo los archivos con extension.md  de una ruta absoluta
 *@param {string} footpath es una ruta absoluta
 *@returns {array} [pathAbsolute1,pathAbsolute2,pathAbsolute3,pathAbsolute4....]
 */
export function filtersPathsExtensionMd(footpath) {
  if (fs.statSync(footpath).isFile() && path.extname(footpath)==='md') {
  return [footpath]
  }
  else if (fs.statSync(footpath).isDirectory())
 {
    const arrayFile = fs.readdirSync(footpath).filter(e => e.includes('.md'))
    return arrayFile.map((elemt)=>pathAbsolute(elemt))
  }
}

/**
 * funcion que retorna los link del contenido de un archivo .md
 *@param {string} footpath una ruta absoluta
 *@returns {array}[{href,text,path}]  
 */
export function findLinksFileContent(footpath) {
  const linkFileMd=[]
  const textContentMardown = fs.readFileSync(footpath, { encoding: 'utf8' });
  const myRe = /\[([^\]]*)\]\(((?:\/|https?:\/\/)[\w\d./?=#&_%~,.:-]+)\)/gm;
  textContentMardown.match(myRe).forEach((elem) => {
    const text=elem.split("](")[0].slice(1)
    const link = elem.split("](")[1].slice(0, -1)
     linkFileMd.push( {
        href: link,
        text: text,
        path:footpath,
     });
  });

  return linkFileMd;
  
};
/**
 * funcion que retorna los link del contenido de todos los archivo .md
 *@param {string} footpath una ruta absoluta
 *@returns {array}[{href,text,path}]  
 */
  
export function allFindLinksContent(footpath) {
  const allMdLinks = []
  filtersFileExtensionMd(footpath).forEach((e) => {
   console.log(e)
  })
 
  return allMdLinks
};
  




/**
 * funcion que retorna el estado de los link  contenido de un archivo .md
 *@param {string} footpath una ruta absoluta
 *@returns {array}  [{ href, text, file, status, ok }, ...]
 */
export function statusLinksFileContent(footpath) {
  const arrayStatusLinks=findLinksFileContent(footpath).forEach((elem) => {
    fetch(elem.href)
      .then((res)=> {
        
      })
      .catch(err => console.log(err))
      //.finally(() => console.log('Cargando ...'))
  })

  }
   

statusLinksFileContent('C:\\Users\\USUARIO\\laboratoria\\proyect4\\DEV001-md-links-aniapq\\proof\\JavaScript.md')
































































































































