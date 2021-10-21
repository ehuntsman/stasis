const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const massive = require('massive');


const ctrl = require("./controller.js");

const app = express();
app.use(cors());
app.use(json());


// var connectionString = process.env['CONNECTION_STRING']
const secrets = require('./secrets.js');
var connectionString = secrets.connectionString

massive(connectionString)
  .then(db => {
    app.set("db", db);
  })
  .catch(console.log);

 
const PORT = 3001;

app.get('/api/volumes', ctrl.getAllVolumes);
app.get('/api/news', ctrl.getAllNews);
app.get('/api/latestnews', ctrl.getLatestNews);

app.get('/api/comicnumbers/:id', ctrl.getComicNumbers);
app.get('/api/comic/:id', ctrl.getComic);

// app.get("/api/articles", ctrl.getArticles);
// app.get('/api/getSaved', ctrl.getSaved);
// app.post('/api/add', ctrl.saveArticle);
// app.delete('/api/delete/:id', ctrl.deleteArticle);
// app.put('/api/changeTitle/:id', ctrl.changeTitle);
 
app.listen(PORT || 3001, () => {
  console.log(`App listening on port ${PORT || 3001}!`);
});