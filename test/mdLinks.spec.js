
import {
  pathValidator,
  pathAbsolute,
  pathIsDirectory,
  pathIsFile,
  readFileExtension,
  filtersFileExtensionMd,
  readDirectorycontents,
  findLinksFileContent
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

/** test  FUNCTION:pathIsFile, */
describe('pathIsFile', () => {

  it("is a function", () => {
    expect(typeof pathIsFile).toBe("function");
  });
  it("should return TRUE", () => {
    expect(pathIsFile('README.md')).toBeTruthy();
  });
   it("should return FALSE", () => {
    expect(pathIsFile('./proof')).toBeFalsy();
  });
});
/** test  FUNCTION:pathIsDirectory */
 describe('pathIsDirectory', () => {

  it("is a function", () => {
    expect(typeof pathIsDirectory).toBe("function");
  });
  it("should return TRUE", () => {
    expect(pathIsDirectory('./proof')).toBeTruthy();
  });
   it("should return FALSE", () => {
    expect(pathIsDirectory('README.md')).toBeFalsy();
  });
 }); 

 /** test  FUNCTION:readDirectorycontents*/
 describe('readDirectorycontents', () => {
  it("is a function", () => {
    expect(typeof readDirectorycontents).toBe("function");
  });
  it("should return an array with the files", () => {
    expect(readDirectorycontents('C:\\Users\\USUARIO\\laboratoria\\proyect4\\DEV001-md-links-aniapq\\proof')).toEqual([
  'ania-links.md',
  'apuntes.md',
  'carpeta',
  'cuentas.xls',
  'curriculum.doc',
  'datos.txt',
  'documents',
  'index.html',
  'JavaScript.md'
]);
  });
 }); 

  /** test  FUNCTION:readFileExtension*/
 describe('readFileExtension', () => {
  it("is a function", () => {
    expect(typeof readFileExtension).toBe("function");
  });
  it("from this path 'docMelania.xls', returns '.xls'", () => {
    expect(readFileExtension('docMelania.xls')).toBe('.xls');
  });
 }); 
   /** test  FUNCTION:filtersFileExtensionMd*/
 describe('filtersFileExtensionMd', () => {
  it("is a function", () => {
    expect(typeof filtersFileExtensionMd).toBe("function");
  });
  it("should return an array with the files .md", () => {
    expect(filtersFileExtensionMd([
  'ania-links.md',
  'apuntes.md',
  'carpeta',
  'cuentas.xls',
  'curriculum.doc',
  'datos.txt',
  'documents',
  'JavaScript.md'
])).toEqual([ 'ania-links.md', 'apuntes.md', 'JavaScript.md' ]);
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
  }
]) 
  });
 }); 