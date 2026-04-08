import db from '../models/dbConnection.js';
const currentTable = 'books'

function createBook(nameBook, author, data_publish){
    try{
        const stmt = db.prepare(`INSERT INTO ${currentTable} (name, author, data_publish) VALUES (?, ?, ?)`);
        stmt.run(nameBook, author, data_publish);
    }catch(err){
        if(err.message.includes('UNIQUE')){
            console.log(`This ${currentTable} already exists`);
        }else{
            console.log(err.message);
        }
    }
}
function readAllBooks(){
    try{
        const stmt = db.prepare(`SELECT * FROM ${currentTable}`);
        const books = stmt.all();

        console.log(`Found ${books.length} ${currentTable}`);
        console.table(books);

    }catch(err){
        console.log('Error in find books \n'+err.message);
    }
}


function readBook(nameBook){
    try{
        console.log(nameBook);
        const stmt = db.prepare(`SELECT id, name, author, data_publish FROM ${currentTable} WHERE name LIKE ?`);
        const book = stmt.all(`%${nameBook}%`);

        if(book){
            console.table(book);
        }else{
            console.log('Dont exists none book with this name')
        }
    }catch(err){
        console.log(`Error in see this book \n${err.message}`)
    }
}
function updateBook(idBook, newName, newAuthor, newData_publish){
    try{
        const stmt = db.prepare(`UPDATE books SET name = ?, author = ?, data_publish = ? WHERE id = ?`);
        const book = stmt.run(newName, newAuthor, newData_publish, idBook);

        if(book.changes > 0){
            console.log(`Book updated with sucess`);
        }else{  
            console.log(`This id:${idBook} not exists`);
        }   
    }catch(err){
        console.log(`Error in update this book \n${err.message}`);
    }
}
function deleteBook(idBook){
    try{
        const stmt = db.prepare(`DELETE FROM ${currentTable} WHERE id = ?`);
        const book = stmt.run(idBook);

        if(book.changes > 0){
            console.log(`Book deleted with sucess`);
        }else{  
            console.log(`This id:${idBook} not exists`);
        }       
    }catch(err){
        console.log(`Error in delete this book \n${err.message}`)
    }
}

export {createBook, readAllBooks, readBook, updateBook, deleteBook}
