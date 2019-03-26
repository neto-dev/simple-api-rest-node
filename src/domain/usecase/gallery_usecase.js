var galleryRepostory = require('../../data/repository/gallery_repository.js')

module.exports = {
    get: (DB) => {
        return galleryRepostory.get(DB);
    },

    getByID: (DB, id) => {
        return galleryRepostory.getByID(DB, id);
    },

    create: (DB, params) => {
        return galleryRepostory.create(DB, params);
    },

    update: async (DB, id, params) => {
        return galleryRepostory.update(DB, id, params);
    },

    delete: async (DB, id) => {
        return galleryRepostory.delete(DB, id);
    }
};
