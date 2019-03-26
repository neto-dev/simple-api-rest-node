
module.exports = {
  get: async (DB) => {
      return new Promise((resolve, reject) => {
          DB.review.find()
              .then((rows) => {
                  resolve(rows);
              })
              .catch((err) => {
                  console.log("Error: ", err.message)
                  reject(err)
              });
      });
  },
  getByID: (DB, id) => {
      return new Promise((resolve, reject) => {
           DB.review.findOne({
              id: id
            })
              .then((row) => {
                  resolve(row);
              })
              .catch((err) => {
                  console.log("Error: ", err.message);
                  reject(err);
              });
      });
  },
  create: (DB, params) => {
      return new Promise((resolve, reject) => {
          DB.review.create(params).fetch()
              .then((row) => {
                  resolve(row);
              })
              .catch((err) => {
                  console.log("Error: ", err.message);
                  reject(err);
              });
      });
  },
  update: (DB, id, params) => {
      return new Promise((resolve, reject) => {
          DB.review.updateOne({
              id: id
          })
              .set(params)
              .then((row) => {
                  resolve(row);
              })
              .catch((err) => {
                  console.log("Error: ", err.message);
                  reject(err);
              });
      });
  },
  delete: (DB, id) => {
      return new Promise((resolve, reject) => {
          DB.review.updateOne({
              id: id
          })
              .then((row) => {
                  resolve(row);
              })
              .catch((err) => {
                  console.log("Error: ", err.message);
                  reject(err);
              });
      });
  }

};
