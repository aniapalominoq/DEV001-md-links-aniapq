
import {
  pathValidator,
  pathAbsolute,
  filtersPathsExtensionMd,
  findLinksFileContent,
  allFindLinksContent
} from "../src/functionsAll.js";
import { mdLinks } from "../src/mdLinks.js";

describe('mdLinks', () => {

   it('is a function', () => {
    expect(typeof mdLinks).toBe('function');
   });
 


});
/** test  FUNCTION:pathValidator*/
describe('pathValidator', () => {

  it("is a function", () => {
    expect(typeof pathValidator).toBe("function");
  });
  it("should return TRUE", () => {
    expect(pathValidator('./proof/datos.txt')).toBeTruthy();
  });
   it("should return FALSE", () => {
    expect(pathValidator('')).toBeFalsy();
  });
});

/** test  FUNCTION:pathAbsolute */
describe('pathAbsolute', () => {

  it("is a function", () => {
    expect(typeof pathAbsolute).toBe("function");
  });
  it("should return the same path", () => {
    expect(pathAbsolute('C:\\Users\\USUARIO\\laboratoria\\proyect4\\DEV001-md-links-aniapq\\proof\\datos.txt')).toBe('C:\\Users\\USUARIO\\laboratoria\\proyect4\\DEV001-md-links-aniapq\\proof\\datos.txt');
  });
   it("should return path absolute", () => {
    expect(pathAbsolute('./proof/datos.txt')).toBe('C:\\Users\\USUARIO\\laboratoria\\proyect4\\DEV001-md-links-aniapq\\proof\\datos.txt');
  });
});

   /** test  FUNCTION:filtersFileExtensionMd*/
 describe('filtersPathsExtensionMd', () => {
  it("is a function", () => {
    expect(typeof filtersPathsExtensionMd).toBe("function");
  });
    it("independent if the path is absolute or relative returns an array of its absolute paths", () => {
    expect(filtersPathsExtensionMd('proof/ania-links.md')).toEqual([ 'C:\\Users\\USUARIO\\laboratoria\\proyect4\\DEV001-md-links-aniapq\\proof\\ania-links.md']);
  });
  it("must return the absolute path if it were a file of type .md inside an array", () => {
    expect(filtersPathsExtensionMd('C:\\Users\\USUARIO\\laboratoria\\proyect4\\DEV001-md-links-aniapq\\proof\\ania-links.md')).toEqual([ 'C:\\Users\\USUARIO\\laboratoria\\proyect4\\DEV001-md-links-aniapq\\proof\\ania-links.md']);
  });
  it("should return an array of paths of all .md files that a directory contains", () => {
    expect(filtersPathsExtensionMd('C:\\Users\\USUARIO\\laboratoria\\proyect4\\DEV001-md-links-aniapq\\proof')).toEqual([
        "C:\\Users\\USUARIO\\laboratoria\\proyect4\\DEV001-md-links-aniapq\\proof\\ania-links.md",
        "C:\\Users\\USUARIO\\laboratoria\\proyect4\\DEV001-md-links-aniapq\\proof\\apuntes.md",
       "C:\\Users\\USUARIO\\laboratoria\\proyect4\\DEV001-md-links-aniapq\\proof\\carpeta\\recursividad.md",
        "C:\\Users\\USUARIO\\laboratoria\\proyect4\\DEV001-md-links-aniapq\\proof\\JavaScript.md",
      ]);
  });
 }); 

/** test  FUNCTION:findLinksFileContent*/
describe('findLinksFileContent', () => {
  it("is a function", () => {
    expect(typeof findLinksFileContent).toBe("function");
  });
  it("should return an array [{ href, text, file }, ...]", () => {
    expect(findLinksFileContent('C:\\Users\\USUARIO\\laboratoria\\proyect4\\DEV001-md-links-aniapq\\proof\\ania-links.md')).toEqual([
   {
    href: 'https://github.com/aniapalominoq',
    text: 'my github',
    path: 'C:\\Users\\USUARIO\\laboratoria\\proyect4\\DEV001-md-links-aniapq\\proof\\ania-links.md'
  },
  {
    href: 'http://www.example.com/descargar-hola-mundo',
    text: 'pagina error1',
    path: 'C:\\Users\\USUARIO\\laboratoria\\proyect4\\DEV001-md-links-aniapq\\proof\\ania-links.md'
  },
  {
    href: 'http://www.example.com/descargar-hola-mundo',
    text: 'pagina error2',
    path: 'C:\\Users\\USUARIO\\laboratoria\\proyect4\\DEV001-md-links-aniapq\\proof\\ania-links.md'
  },
  {
    href: 'https://web.whatsapp.com/',
    text: 'whatsapp',
    path: 'C:\\Users\\USUARIO\\laboratoria\\proyect4\\DEV001-md-links-aniapq\\proof\\ania-links.md'
  },
  {
    href: 'https://web.whatsapp.com/',
    text: 'whatsapp',
    path: 'C:\\Users\\USUARIO\\laboratoria\\proyect4\\DEV001-md-links-aniapq\\proof\\ania-links.md'
  }
]) 
  });
 it("should return an array []", () => {
    expect(findLinksFileContent('C:\\Users\\USUARIO\\laboratoria\\proyect4\\DEV001-md-links-aniapq\\proof\\apuntes.md')).toEqual([]) 
  });
}); 
 
 /** test  FUNCTION:allFindLinksContent*/
describe('allFindLinksContent', () => {
  it("is a function", () => {
    expect(typeof allFindLinksContent).toBe("function");
  });
  it("should return an array [{ href, text, file }, ...]", () => {
    expect(allFindLinksContent('proof/ania-links.md')).toEqual([
  {
    href: 'https://github.com/aniapalominoq',
    text: 'my github',
    path: 'C:\\Users\\USUARIO\\laboratoria\\proyect4\\DEV001-md-links-aniapq\\proof\\ania-links.md'
  },
  {
    href: 'http://www.example.com/descargar-hola-mundo',
    text: 'pagina error1',
    path: 'C:\\Users\\USUARIO\\laboratoria\\proyect4\\DEV001-md-links-aniapq\\proof\\ania-links.md'
  },
  {
    href: 'http://www.example.com/descargar-hola-mundo',
    text: 'pagina error2',
    path: 'C:\\Users\\USUARIO\\laboratoria\\proyect4\\DEV001-md-links-aniapq\\proof\\ania-links.md'
  },
  {
    href: 'https://web.whatsapp.com/',
    text: 'whatsapp',
    path: 'C:\\Users\\USUARIO\\laboratoria\\proyect4\\DEV001-md-links-aniapq\\proof\\ania-links.md'
  },
  {
    href: 'https://web.whatsapp.com/',
    text: 'whatsapp',
    path: 'C:\\Users\\USUARIO\\laboratoria\\proyect4\\DEV001-md-links-aniapq\\proof\\ania-links.md'
  }
]) 
  });
}); 