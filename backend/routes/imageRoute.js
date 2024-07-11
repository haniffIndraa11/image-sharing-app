    const express = require('express');
    const router = express.Router();
    const imageController = require('../controllers/imageController');
    const { authentication } = require('../middleware/auth');
    const upload = require('../middleware/upload');

    // Routes for images
    router.get('/', imageController.getAllImages);
    router.get('/user-images', authentication, imageController.getUserImages);
    router.get('/:id', imageController.getImageById);
    router.post('/', authentication, upload.single('image'), imageController.createImage);
    router.put('/:id', authentication, upload.single('image'), imageController.updateImage);
    router.delete('/:id', authentication, imageController.deleteImage);

    module.exports = router;