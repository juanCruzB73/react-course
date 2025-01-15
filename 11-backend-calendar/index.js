const express = require("express");
const { dbConection } = require("./database/config");
const cors = require("cors")
require("dotenv").config();

const app = express();

//DB CONECTION
dbConection();

//CORS
app.use(cors());
//DIRECTORIO PUBLICO
app.use(express.static("public"));

//lLECTURA Y PARSEO DE BODY
app.use(express.json());

//rutas:  crear // login // renew //
app.use("/api/auth",require("./routes/auth"))
app.use("/api/events",require("./routes/events"))

//crud de eventos



app.listen(process.env.PORT,()=>console.log(`servidor corriendo en el puerto ${process.env.PORT}`))