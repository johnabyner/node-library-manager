import db from './dbConnection.js';

const initMmemoryDB = () => {
    //create table
    db.exec(`
            CREATE TABLE IF NOT EXISTS books(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                author TEXT NOT NULL,
                data_publish TEXT NOT NULL,
                UNIQUE(name, author)
            )
        `);
            
    //insert example data if not exists id 1
    db.exec(`
            INSERT OR IGNORE INTO books (id, name, author, data_publish) VALUES (1, 'metamorfose', 'franzKafka', '1915');        
        `);
};

export default initMmemoryDB;