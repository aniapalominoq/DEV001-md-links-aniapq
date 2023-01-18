import { pathValidator } from "./functionsAll"

 export function mdLinks(path, option) {
   return new Promise((resolve, reject) => {
     if (pathValidator(path))
    {
     
    }
    else
    {
       reject('Ruta no existe')
    }
     
     
   })
}

/** example: api que devuelve una promesa  */

/* function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      throw new Error('Alarm delay must not be negative');
    }
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}

 */

