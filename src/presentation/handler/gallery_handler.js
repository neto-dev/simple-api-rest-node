import responses from '../../utils/responses.js';
var galleryUsecase = require('../../domain/usecase/gallery_usecase.js');

module.exports = {
   get: function (app, DB) {
       app.get('/galleries', (req, res) => {
           galleryUsecase.get(DB)
           .then((data) => {
               res.json(responses.respondJson(data));
           });
       });
   },

   getByID: function(app, DB) {
        app.get('/galleries/:id', (req, res) => {
           galleryUsecase.getByID(DB, req.params.id)
           .then((data) => {
               if (data) {
                   res.json(data);
               }
               else {
                    res.json(responses.respondErrorJson(400, "Record Find Failure", "Record Find Failure"));
               }
           })
           .catch((err) => {
               console.log("Error", err);
               res.json(responses.respondErrorJson(400, "Record Find Failure", err))
           })
       });
   },

   create: function(app, DB){
       app.post('/galleries', (req, res) => {
           galleryUsecase.create(DB, req.body)
               .then((data) => {
                   console.log("REQ BODY: ", req.body);
                   console.log(data);
                   res.json(data);
               })
               .catch((err) => {
                   console.log("Error", err);
                   res.json(responses.respondErrorJson(500, "Record Create Failure", err))
               })
       })
   },

   update: function(app, DB){
       app.put('/galleries/:id', (req, res) => {
           galleryUsecase.update(DB, req.params.id, req.body)
               .then((response) => {
                   console.log(response);
                   res.json(response);
               })
               .catch((err) => {
                   console.log("Error", err);
                   res.json(responses.respondErrorJson(500, "Record Create Failure", err))
               })

       })
   },

   newGalleryHandler: function (app, DB) {
       this.get(app, DB);
       this.getByID(app, DB);
       this.create(app, DB);
       this.update(app, DB);
   }

};
