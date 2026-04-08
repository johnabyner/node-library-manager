import {createBook, readAllBooks, readBook, updateBook, deleteBook} from '../services/userService.js';
import {validateInputCommands, validateInputForBD} from '../utils/validator.js'

//textsBoilerplate 
const textOptions = '\nCommands: seeallbooks addbook, deletebook , seebook , updatebook \n'; 
const textAddBook = 'Write bellow separated by comma, books name , author and data publish ';

function chooseOption(input){
    let inputSanitazed = validateInputCommands(input);
    switch(inputSanitazed[0]){
        case 'options':
            return console.log(textOptions);
        case 'help':
            return console.log('Depois termino');

        //-----------------------------------
        case 'seeallbooks':
            return readAllBooks();

        case 'addbook':
            const inputAddBook = validateInputForBD(inputSanitazed);
            createBook(inputAddBook[0], inputAddBook[1], inputAddBook[2]);
            break;
        case 'deletebook':
            const inputDeleteBook = validateInputForBD(inputSanitazed);
            return deleteBook(inputDeleteBook[0]);

        case 'seebook':
            const inputReadBook = validateInputForBD(inputSanitazed);
            return readBook(inputReadBook[0]);
        case 'updatebook':
            const inputUpdateBook = validateInputForBD(inputSanitazed);
            return updateBook(inputUpdateBook[0], inputUpdateBook[1], inputUpdateBook[2], inputUpdateBook[3]);

        default:
            console.log(`Write a valid value, try to see these commands ${textOptions}`);
            break;
    }
}

export default chooseOption;