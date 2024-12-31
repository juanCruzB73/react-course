const express = require("express");
const { dbConection } = require("./database/config");
require("dotenv").config();

const app = express();

//DB CONECTION
dbConection();

//lectura y parseo de body
app.use(express.json());

//rutas:  crear // login // renew //
app.use("/api/auth",require("./routes/auth"))

//crud de eventos

app.use(express.static("public"));

app.listen(process.env.PORT,()=>console.log(`servidor corriendo en el puerto ${process.env.PORT}`))