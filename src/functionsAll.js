import { existsSync } from 'node:fs';
import fs from 'node:fs';
import path from 'node:path';

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
 * funcion RECURSIVA extrae todo los archivos con extension.md  de una RUTA
 *@param {string} footpath es una ruta absoluta o relativa
 *@returns {array} [pathAbsolute1,pathAbsolute2,pathAbsolute3,pathAbsolute4....]
 */
export function filtersPathsExtensionMd (footpath) {
   let allPaths = []
  const pathAbs = pathAbsolute(footpath)
    if (fs.statSync(pathAbs).isFile()) allPaths .push(pathAbs);
    else fs.readdirSync(pathAbs).forEach(e => allPaths = allPaths.concat(filtersPathsExtensionMd(`${pathAbs}\\${e}`)))
   return allPaths.filter(e => e.includes('.md'))
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
  if (textContentMardown) {
    textContentMardown.match(myRe).forEach((elem) => {
      const text = elem.split("](")[0].slice(1)
      const link = elem.split("](")[1].slice(0, -1)
      linkFileMd.push({
        href: link,
        text: text,
        path: footpath,
      });
    });
  } else {
    linkFileMd.push()
  }
  return linkFileMd;
};
/**
 * funcion que retorna los link del contenido de TODO los archivo .md
 *@param {string} footpath una ruta absoluta o relativa
 *@returns {array}[{href,text,path},....]
 */
  
export function allFindLinksContent(footpath) {
  return filtersPathsExtensionMd(footpath).map((path) => findLinksFileContent(path)).flat()
};

/**
 * funcion que retorna el estado de los link  contenido de todos los archivo .md
 *@param {string} footpath una ruta absoluta o relativas
 *@returns {array}  [{ href, text, file, status, ok }, ...] esto es una promesa
 */

export function statusLinksFileContent(footpath) {
  const proms=[]
allFindLinksContent(footpath).forEach((elem) => {
   proms.push(fetch(elem.href).then((res) => { 
      return Object.assign(elem, { status: res.status, ok: res.ok ? 'ok' : 'fail' })
      }))
    //.catch((error) => console.log( new Error('NO CARGO.',error)))
    //.finally(() => console.log('esto se carga si o si...'))
})
return Promise.all(proms)
}

console.log(findLinksFileContent(pathAbsolute('proof/apuntes.md') ))