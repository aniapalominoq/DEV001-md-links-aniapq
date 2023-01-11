
import {
  pathValidator,
  pathAbsolute,
  pathIsDirectory,
  pathIsFile
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
    expect(pathValidator('./proof/datos.text')).toBeTruthy();
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
    expect(pathAbsolute('C:\\Users\\USUARIO\\laboratoria\\proyect4\\DEV001-md-links-aniapq\\proof\\datos.text')).toBe('C:\\Users\\USUARIO\\laboratoria\\proyect4\\DEV001-md-links-aniapq\\proof\\datos.text');
  });
   it("should return path absolute", () => {
    expect(pathAbsolute('./proof/datos.text')).toBe('C:\\Users\\USUARIO\\laboratoria\\proyect4\\DEV001-md-links-aniapq\\proof\\datos.text');
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