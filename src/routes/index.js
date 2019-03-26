import gallery from '../presentation/handler/gallery_handler.js';
import review from '../presentation/handler/review_handler.js';


module.exports = (app, DB) => {
    gallery.newGalleryHandler(app, DB);
    review.newReviewHandler(app, DB);
};
