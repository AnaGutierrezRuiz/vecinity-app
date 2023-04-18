const express = require("express");
const router = express.Router();
const communities = require("../controllers/communities.controller");

router.get('/communities', communities.list);
router.get('/communities/:id', communities.detail);
router.post('/communities/', communities.create);
router.patch('/communities/:id', communities.update);
router.delete('/communities/:id', communities.delete);

module.exports = router;