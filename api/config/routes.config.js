const express = require("express");
const router = express.Router();
const communities = require("../controllers/communities.controller");
const communitiesMid = require("../middlewares/communities.mid");

router.get('/communities', communities.list);
router.get('/communities/:id', communitiesMid.exists, communities.detail);
router.post('/communities/', communities.create);
router.patch('/communities/:id', communitiesMid.exists, communities.update);
router.delete('/communities/:id', communitiesMid.exists, communities.delete);

module.exports = router;