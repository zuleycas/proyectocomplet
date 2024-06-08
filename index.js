const express = require("express");
const mysql = require("mysql");
const path = require("path");


const app = express();

let conexion = mysql.createConnection({
    host: "localhost",
    database: "registro2",
    user: "root",
    password: ""
});

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Configuración para servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req,res){
    res.render("registro");
     
});

 
app.post("/validar", function(req,res){
        const datos = req.body;
    
        let cedula = datos.ced;
        let nombre = datos.nom;
        let apellido = datos.apell;
        let usuario = datos.usuar;
        let password = datos.pass; 
    
         
    
        let registrar = "INSERT INTO tabla_usuarios (ced, nombre, apellido, usuario, contrasenia) VALUES ('"+cedula +"', '"+nombre +"', '"+apellido +"', '"+usuario +"', '"+password +"' )";
    
        conexion.query(registrar, function(error){
            if(error){
                throw error;  
            }else{
                console.log("Datos almacenados correctamente");
    
                res.redirect("/home.html");
                
                
            }
            
        });
    
    });

// Ruta GET para servir la página home.html
app.get("/home.html", function(req, res) {
    res.sendFile(path.join(__dirname,  "home.html"));
});

app.get("/registro", function(req, res) {
    res.render("registro");
});

// Ruta GET para servir la página index.html
app.get("/index.html", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Ruta GET para servir la página servicios.html
app.get("/servicios.html", function(req, res) {
    res.sendFile(path.join(__dirname, "servicios.html"));
});

// Ruta GET para servir el archivo PDF
app.get("/preciosedeq.pdf", function(req, res) {
    res.sendFile(path.join(__dirname, "preciosedeq.pdf"));
});

// Ruta GET para servir la página chatenlinea.html
app.get("/chatenlinea.html", function(req, res) {
    res.sendFile(path.join(__dirname, "chatenlinea.html"));
});

// Ruta GET para servir la página PQR.html
app.get("/PQR.html", function(req, res) {
    res.sendFile(path.join(__dirname, "PQR.html"));
});

// Ruta GET para servir la página usuario.html
app.get("/usuario.html", function(req, res) {
    res.sendFile(path.join(__dirname, "usuario.html"));
});

 

app.listen(3000, function(){
    console.log("servidor creado http://localhost:3000");
});