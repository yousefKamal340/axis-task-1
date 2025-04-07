const express = require('express');
const router = express.Router();
const controller = require('../controllers/accountController');

router.post('/open', controller.openAccount);
router.post('/:accountId/deposit', controller.deposit);
router.post('/:accountId/withdraw', controller.withdraw);
router.get('/:accountId/balance', controller.getBalance);

// Export the router correctly
module.exports = router;
