const express = require('express');
const Usuario = require('../models/usuario'); // esquema(tabla)
const app = express();

const MYSQL = require('./MysqlClass');
let dbConfig = require('./config.json');


app.get('/usuario', function(req, res) {

    let myConnectMySql = new MYSQL(dbConfig);

    myConnectMySql.getUser('user', resulData => {
        res.json({
            ok: true,
            data: resulData
        });
    });

    myConnectMySql.closeConnection();
});

app.post('/usuario', function(req, res) {

    let body = req.body;

    let usuario = new Usuario({
        name: body.name,
        age: body.age,
        career: body.career,
        semester: body.semester,
        gender: body.gender

    }); //objeto de tipo usuario

    let myConnectMySql = new MYSQL(dbConfig);

    //myConnectMySql.addUser('user', usuario.name, usuario.age, usuario.career, usuario.semester, usuario.gender);

    myConnectMySql.addUser('user', usuario.name, usuario.age, usuario.career, usuario.semester, usuario.gender, resulData => {
        myConnectMySql.closeConnection();
        return res.json({
            ok: true,
            data: resulData
        });
    });
});

app.put('/usuario/:id', function(req, res) {

    let id = req.params.id;

    res.json({
        id
    });
});

app.delete('/usuario', function(req, res) {
    res.json('delete Usuario');
});

module.exports = app;