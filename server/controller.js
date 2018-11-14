const getAllVolumes = (req, res, next) => {
  const dbInstance = req.app.get("db");
  dbInstance
    .get_all_volumes()
    .then(volumes => res.status(200).send(volumes))
    .catch(() => res.status(500).send());
};
const getLatestNews = (req, res, next) => {
  const dbInstance = req.app.get("db");
  dbInstance
    .get_latest_news()
    .then(news => res.status(200).send(news))
    .catch(() => res.status(500).send());
};
const getAllNews = (req, res, next) => {
  const dbInstance = req.app.get("db");
  dbInstance
    .get_all_news()
    .then(news => res.status(200).send(news))
    .catch(() => res.status(500).send());
};
const getComicNumbers = (req, res, next) => {
  const dbInstance = req.app.get("db");
  const { params } = req;
  dbInstance
    .get_comic_numbers([params.id])
    .then(comicnumbers => {
      console.log(comicnumbers, "cake"), res.status(200).send(comicnumbers);
    })
    .catch(() => res.status(500).send());
};
const getComic = (req, res, next) => {
  const dbInstance = req.app.get("db");
  dbInstance
    .get_comic([params.id])
    .then(comic => res.status(200).send(comic[0]))
    .catch(() => res.status(500).send());
};

module.exports = {
  getAllVolumes,
  getAllNews,
  getComicNumbers,
  getComic,
  getLatestNews
};
