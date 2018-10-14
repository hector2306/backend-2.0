// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;


// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ============================
//  Bases de datos
// ============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/usuarios'

} else {
    urlDB = 'mongodb://usuario:abc123@ds241059.mlab.com:41059/fire_extinguisher';

}
process.env.URLDB = urlDB;