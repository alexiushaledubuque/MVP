module.exports = function (app, express) {

 // serve all asset files from necessary directories
  app.use(express.static(__dirname + '/../client')); 

};