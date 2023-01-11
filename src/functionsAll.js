import { existsSync } from 'node:fs';
import fs from 'fs';
import path from 'path';

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
 * funcion que prueba si es un archivo 
 *@param {string} footpath una ruta
 *@returns {boolean} result 
 */
export function pathIsFile(footpath) {
  const result = fs.statSync(footpath).isFile();
  return result
}

/**
 * funcion que prueba si es un directorio o carpeta
 *@param {string} footpath una ruta
 *@returns {boolean} result  
 */
export function pathIsDirectory(footpath) {
  const result = fs.statSync(footpath).isDirectory();
  return result
}


/**
 * funcion que lee el contenido de un directorio
 *@param {string} footpath una ruta
 *@returns {array} result  
 */
export function readDirectorycontents(footpath) {
  const result = fs.readdirSync(footpath)
  console.log(result)
return result
}
readDirectorycontents('C:\\Users\\USUARIO\\laboratoria\\proyect4\\DEV001-md-links-aniapq\\proof') 
