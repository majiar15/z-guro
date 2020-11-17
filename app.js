require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const epsRouter = require('./router/epsRouter');



app.set('port', process.env.PORT || 3000);

const mongoDB = process.env.MONGO_URI;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', err =>{
    console.log("conexion con errores ", err);
});
db.once('open', () =>{
    console.log("conexion exitosa");
})


app.use('/api', epsRouter)

app.listen(app.get('port'), ()=>{
    console.log("server corriendo");
});