const express = require("express");
const router = express.Router();
const communities = require("../controllers/communities.controller");
const users = require("../controllers/users.controller");
const claims = require("../controllers/claims.controller");
const communitiesMid = require("../middlewares/communities.mid");
const usersMid = require("../middlewares/users.mid");
const claimsMid = require("../middlewares/claims.mid");

router.get('/communities', communities.list);
router.get('/communities/:id', communitiesMid.exists, communities.detail);
router.post('/communities/', communities.create);
router.patch('/communities/:id', communitiesMid.exists, communities.update);
router.delete('/communities/:id', communitiesMid.exists, communities.delete);

router.get("/users", users.list);
router.post("/users", users.create);
router.get("/users/:id", usersMid.exists, users.detail);
router.get("/users/:id/confirm", usersMid.exists, users.confirm);
router.patch("/users/:id", usersMid.exists, users.update);
router.delete("/users/:id", usersMid.exists, users.delete);
router.post("/login", users.login);

router.get("/communities/:id/claims", communitiesMid.exists, claims.list);
router.get("/communities/:id/claims/:claimId", communitiesMid.exists, claimsMid.exists, claims.detail);
router.post("/communities/:id/claims", communitiesMid.exists, claims.create);
router.delete("/communities/:id/claims/:claimId", communitiesMid.exists, claimsMid.exists, claims.delete);


module.exports = router;