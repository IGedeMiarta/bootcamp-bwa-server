// import router from express
const express = require('express');
const router = express();

// import controller
const { create,index,find,update,destroy } = require('./controller');

router.post('/categories',create);
router.get('/categories',index);
router.get('/categories/:id',find);
router.put('/categories/:id',update);
router.delete('/categories/:id',destroy);
// export router
module.exports = router;