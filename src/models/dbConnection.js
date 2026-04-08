import Database from 'better-sqlite3';
const dbPath = '../data/database.db'

//dbConnection in Memory
const db = new Database(dbPath);
console.log('Connect with sucesfully into DBInMemory \n')


//dbCOnnection in PhysicalFile
// const db = new Database(dbPath, { verbose: console.log });
//db.pragma('journal_mode = WAL');
// console.log("Banco de dados rodando em memoria fisica ");



export default db;