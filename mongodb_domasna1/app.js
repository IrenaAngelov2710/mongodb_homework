//* Vo terminal prvo
// npm init -y
// npm install express
// npm install mongoose

//? ZA DOMASNA DA SE KREIRA DATABAZA BLOGOVI
//? ime na kolekcija blogs
//? da ima create i get all funkcionlanost
//? shemata da e naslov, opis, ocenka, vreme, avtor
//? na ruta "/blogs" da se povikuva i da se kreira blog
//? i da ima najmalce 10 bloga

// Go povikuvame express modulot
const express = require("express");
// Kreirame nova express aplikacija
const app = express();
// Go povikuvame mongoose modulot
const mongoose = require("mongoose");
// Mongoose e biblioteka za Node.js koja ovozmozuva komunikacija so MongoDB bazi na podatoci i olesnuva modeliranje i manipulacija na podatocite

// Go povikuvame kontrolerot
const blogController = require("./controllers/blogController");

// Se persiraat informaciite sto gi prakame od forma od frontend
// Middleware funkcija vo Express.js
app.use(express.urlencoded({ extended: true }))

// Se koristi za obrabotka na HTTP baranja koi imaat telo vo JSON format, middleware ot go obrabotuva toa baranje i go parsira JSON teloto vo Javascript objekt
// Middleware funkcija vo Express.js
// app.use(express.json());

// So metodot connect vospostavuvame konekcija so bazata na podatoci MongoDB
// 1 prviot argument e urlto do nasata data baza
// 2 vtoriot argument e konfiguracijata za taa data baza
mongoose
  .connect(
    "mongodb+srv://kitanovskairena93:IrenaAngelov@cluster0.ivregad.mongodb.net/bazaBlogovi?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    // se povikuva den metodot so koj metod ako e uspesno povrzana konzorime suscc
    console.log("Succesful connection!");
  })
  .catch((err) => {
    // ili ako ima greska go pisuvame metodot catch so koj metod kje konzolirame greskata
    console.log(err);
  });

   // Ruta za dobivanje na site blog zapisi
app.get("/blogs", blogController.getAllBlogs);
    // Ruta za kreiranje na blog zapis
app.post("/blogs", blogController.createBlog);
   
  // Startuvanje i slusanje na web serverot
app.listen(10000, () => {
    console.log("Application running");
  });