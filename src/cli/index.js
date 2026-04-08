import process from 'node:process';

import initMemoryDB from '../models/setup.js';

initMemoryDB(); //init our bank

import chooseOption from './commands.js'
const args = process.argv.slice(2);
chooseOption(args);

//verify if you are in the folder cli in the terminal

//Example of commands bellow:
//SEEALL
//node index.js seeallbooks 

//ADD
                      //Title       author     data_publish
//node index.js addbook metamorfose franzKafka 1915

//DELETE
                         //id
//node index.js deletebook 1 

//SEE
                      //name
//node index.js seebook metamorfose

//UPDATE
                         //id name       author  data_publish
//node index.js updatebook 1  evangelion hideaki 1994