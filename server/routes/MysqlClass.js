const MYSQL = require('mysql');

module.exports = class MysqlConnect {

    constructor(dbConfig) {
        this.endpoint = dbConfig.endpoint;
        this.user = dbConfig.user;
        this.password = dbConfig.password;
        this.port = dbConfig.port;
        this.schema = dbConfig.schema;

        this.connection = MYSQL.createConnection({
            host: this.endpoint,
            user: this.user,
            password: this.password,
            port: this.port,
            database: this.schema
        });

        this.createConnect();
    }

    createConnect() {
        this.connection.connect((err) => {
            if (err) throw err;
            console.log("Connected!");
        });
    }

    getUser(table, resultData) {
        let query = `select * from ${table}`;
        this.connection.query(query, (err, result) => {
            if (err) console.log(err);
            else resultData(result);
        });
    }

    addUser(table, nombre, edad, carrera, semestre, sexo, resultData) {
        let col = '(`nombre`, `edad`, `carrera`, `semestre`, `sexo`)';
        let insert = `insert into ${table} ${col}
        values ('${nombre}', ${edad}, ${carrera}, ${semestre}, ${sexo})`;
        this.connection.query(insert, (err, result) => {
            if (err) console.log(err);
            else resultData(result);
        });
    }

    closeConnection() {
        this.connection.end();
        console.log('close connection');
    }
}