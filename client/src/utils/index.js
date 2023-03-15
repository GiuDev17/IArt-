import FileSaver from 'file-saver';
import FilerSaver from 'file-saver'

/*Esto será un archivo donde pueda crear diferentes funciones que luego se puede reutilizar en la app  */

import { surpriseMePrompts } from '../constants'

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length); /*Indica la longitud del punto, escencialmente estamos obteniendo un resultado aleatorio desde el índice del 1 al 49 */

    const randomPrompt = surpriseMePrompts[randomIndex];
    /*Entonces podemos recuperar ese mensaje aleatorio aquí mismo */



   /*--- Podemos Implementamos una verificacion para asegurarnos de que no obtengamos el mismo indicador aleatorio 2 veces seguidas, o 3. Lo cuál es poco probable, pero aún así es para poder mejorarlo.*/
   if(randomPrompt === prompt) return getRandomPrompt(prompt)

    return randomPrompt;
}

export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}