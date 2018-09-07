// const axios = require("axios");
// const secret = require("./secrets.js");
 
// const getVolumes = (req,res,next) => {
//   const db = req.app.get("db");
//   db.getAllVolumes()
//     .then( volumes => res.status(200).send(volumes) )
//     .catch( () => res.status(500).send() );
// }
 
// module.exports = {
//   getVolumes
// };

 

module.exports = {
  getAllVolumes: function(req, res, next){
    const dbInstance = req.app.get('db');
    dbInstance.get_all_volumes()
    .then( volumes => res.status(200).send(volumes) )
    .catch( () => res.status(500).send() );
  },
  getAllNews: function(req, res, next){
    const dbInstance = req.app.get('db');
    dbInstance.get_all_news()
    .then( news => res.status(200).send(news) )
    .catch( () => res.status(500).send() );
  },
  getComicNumbers: function(req, res, next){
    const dbInstance = req.app.get('db');
    const {params} = req;
    dbInstance.get_comic_numbers([params.id])
    .then( comicnumbers => {console.log(comicnumbers, "cake"), res.status(200).send(comicnumbers) })
    .catch( () => res.status(500).send() );
  },
  getComic: function(req, res, next){
    const dbInstance = req.app.get('db');
    dbInstance.get_comic([params.id])
    .then( comic => res.status(200).send(comic[0]) )
    .catch( () => res.status(500).send() );
  },
}