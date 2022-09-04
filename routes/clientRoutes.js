const express = require('express')
const router = express.Router();

const clientController = require('../controllers/client')

router.get('/', clientController.getHomePage );

router.post('/shorturl', clientController.postUrl);

router.get('/:shorturl', clientController.getUrl);

module.exports = router;