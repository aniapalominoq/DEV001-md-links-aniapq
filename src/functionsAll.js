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
 * funcion que retorna el TOTAL de  link 
 *@param {array} arrayPath [{href:https://example.com},]
 *@returns {Number} total de links
 */

export function fullLinks(arrayPath) {
  const arrayFullLinks = arrayPath.map(el => el.href)
return arrayFullLinks ? arrayFullLinks.length:0
}

/**
 * funcion que retorna el TOTAL de  link  unicos 
 *@param {array} arrayPath [{href:https://example.com},]
 *@returns {Number} total de links unicos
 */
export function uniqueLinks(arrayPath) {
  const arrayLinksUnique = new Set(arrayPath.map(el => el.href))
return arrayLinksUnique.size
}

/**
 * funcion que retorna el TOTAL de  link  rotos 
*@param {array} arrayPath [{href:https://example.com},]
 *@returns {Number} total de links rotos
 */
export function brokenLinks(arrayPath) {
 const broken=arrayPath.filter(el => el.ok==='fail')
return broken.length? broken.length:0
}

/**
 * funcion que retorna el estado de los link  contenido de todos los archivo .md
 *@param {string} footpath una ruta absoluta o relativas
 *@returns {array}  [{ href, text, file, status, ok }, ...] un array de promesas
 */
export function statusLinksFileContent(footpath) {
  const arrayFetch = allFindLinksContent(footpath).map(elem =>
    fetch(elem.href)
      .then((response) => {
        if (response.status >= 200 && response.status < 400) return { ...elem, status: response.status, ok: 'ok' }
        else if (response.status >= 400 && response.status < 500) return { ...elem, status: response.status, ok: 'fail' }
      })
      .catch(() => {
        return {...elem, status: `Does not answer`, ok: 'fail' }
      })
    //.finally(() => console.log('esto se carga si o si...'))
  ) 
 return arrayFetch
   
}

//fetch('https://github.com/aniapalominoq').then(res => console.log(res.status))

//Promise.all(statusLinksFileContent('proof/ania-links.md')).then(res => console.log(res))
/*
 USARLO PARA EXPERIENCIA  LA PRIMERA PARTE DEL CV

 uniformizar 
ortografia
ingenieria informatica
formatos 
alinaciones
 colores sobriosa
 proyectos dondo de los hice

 certificion excel avanzado en skill
 seccion extracurruicleert
 voluntariados para hobbis y voluntariados

bachi

abao
datoso personales direcion  telefono.linkeding


experiencia
petramas.sac. breve descricipn de empresa
   

educacion
extracurricular
OTROS
LISTAS LOS SKILLS
TI: TELLO SAGO
PROGRAMAS : LENJUADES
HTML
DISEÑO
 HABILIDADES Y IDEOMAS



--------------------------
  deque se trata el proyecto
tecnologias usadas,
  bulet
   laboratoria educacion
  
---------------
 DIFERENCIA ALGUN VALOR
 EXPERIENCIA : EN DIFERENCIA GESTION DE EQUIPO
MAXIMO CUATRO
PONER MIS FUNCIONES
VIÑETAS:
LOGROS:
EN UNA SOLA PERSONA

 FOTO SIN FONDO
 SONRIENTE
  DE HOMBRO  DES CRIPCION CRIPCIONES 
   MAYUSCULAS 
    TILDES
    
Ejecutivo Comercial Senior, experto en Gestión B2B para los sectores Banca y Seguros.  Ingeniero Industrial por la Universidad de Lima, con MBA por la Universidad del Pacífico.  Sólida experiencia en startups, gestión de estados financieros ligados a la venta y todo el proceso productivo de cara a la rentabilidad con indicadores de ROI y Ebitda.  Sostenida experiencia en gestión gerencial satisfactoria relativa a las ventas y marketing para el segmento corporativo (B2B).  Altas Competencias en Pensamiento Estratégico y Analítico, Empatía y Liderazgo. REFERENCIAL.
work  */
 