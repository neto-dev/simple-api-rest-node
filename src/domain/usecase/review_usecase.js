var reviewRepostory = require('../../data/repository/review_repository.js')

module.exports = {
    get: (DB) => {
        return reviewRepostory.get(DB);
    },

    getByID: (DB, id) => {
        return reviewRepostory.getByID(DB, id);
    },

    create: (DB, params) => {
        return reviewRepostory.create(DB, params);
    },

    update: async (DB, id, params) => {
        return reviewRepostory.update(DB, id, params);
    },

    delete: async (DB, id) => {
        return reviewRepostory.delete(DB, id);
    }
};
