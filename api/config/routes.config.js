const express = require("express");
const router = express.Router();

// Controllers
const communities = require("../controllers/communities.controllers");
const users = require("../controllers/users.controllers");
const claims = require("../controllers/claims.controllers");
const reservations = require("../controllers/reservations.controllers");
const events = require('../controllers/events.controllers');
const forumComments = require('../controllers/forumComments.controllers');
const forumTopics = require('../controllers/forumTopics.controllers');
const contacts = require('../controllers/contacts.controllers');

// Middlewares
const communitiesMid = require("../middlewares/communities.mid");
const usersMid = require("../middlewares/users.mid");
const claimsMid = require("../middlewares/claims.mid");
const reservationsMid = require("../middlewares/reservations.mid");
const eventsMid = require('../middlewares/events.mid');
const forumTopicsMid = require('../middlewares/forumTopics.mid');
const forumCommentsMid = require('../middlewares/forumComments.mid');
const contactsMid = require('../middlewares/contacts.mid');
const secure = require("../middlewares/secure.mid");

// Communities
router.get('/communities', communities.list);
router.get('/communities/:id', communitiesMid.exists, communities.detail);
router.post('/communities/', secure.auth, communities.create);
router.patch('/communities/:id', secure.auth, communitiesMid.exists, communitiesMid.checkManager, communities.update);
router.delete('/communities/:id', secure.auth, communitiesMid.exists, communitiesMid.checkManager, communities.delete);

// Users
router.get("/users", users.list);
router.post("/users", users.create);
router.get("/users/:id", usersMid.exists, users.detail);
router.get("/users/:id/confirm", usersMid.exists, users.confirm);
router.patch("/users/:id", secure.auth, users.update);
router.delete("/users/:id", secure.auth, users.delete);
router.post("/login", users.login);

// Claims
router.get("/communities/:id/claims", communitiesMid.exists, claims.list);
router.get("/communities/:id/claims/:claimId", secure.auth, communitiesMid.exists, claimsMid.exists, claims.detail);
router.post("/communities/:id/claims", secure.auth, communitiesMid.exists, claims.create);
router.delete("/communities/:id/claims/:claimId", communitiesMid.exists, claimsMid.exists, claimsMid.checkAuthor, claims.delete);

// Reservations
router.get("/communities/:id/reservations", secure.auth, communitiesMid.exists, reservations.list);
router.get("/communities/:id/reservations/:reservationId", secure.auth, communitiesMid.exists, reservationsMid.exists, reservations.detail);
router.post("/communities/:id/reservations", secure.auth, communitiesMid.exists, reservations.create);
router.delete("/communities/:id/reservations/reservationId", secure.auth, communitiesMid.exists, reservationsMid.exists, reservations.delete);

// Events
router.get('/communities/:id/events', secure.auth, communitiesMid.exists, events.list);
router.post('/communities/:id/events', secure.auth, communitiesMid.exists,  events.create);
router.get('/communities/:id/events/:eventId', secure.auth, communitiesMid.exists, eventsMid.exists, events.detail);
router.patch('/communities/:id/events/:eventId', secure.auth, communitiesMid.exists, eventsMid.exists, events.update);
router.delete('/communities/:id/events/:eventId', secure.auth, communitiesMid.exists, eventsMid.exists, events.delete);

// Forum Topics
router.get('/communities/:id/forumTopics', secure.auth, communitiesMid.exists, forumTopics.list);
router.post('/communities/:id/forumTopics', secure.auth, communitiesMid.exists,  forumTopics.create);
router.get('/communities/:id/forumTopics/:forumTopicId', secure.auth, communitiesMid.exists, forumTopicsMid.exists, forumTopics.detail);
router.patch('/communities/:id/forumTopics/:forumTopicId', secure.auth, communitiesMid.exists, forumTopicsMid.exists, forumTopics.update);
router.delete('/communities/:id/forumTopics/:forumTopicId', secure.auth, communitiesMid.exists, forumTopicsMid.exists, forumTopics.delete);

// Forum Comments
router.get('/communities/:id/forumTopics/:forumTopicId/forumComments', secure.auth, communitiesMid.exists, forumComments.list);
router.post('/communities/:id/forumTopics/:forumTopicId/forumComments', secure.auth, communitiesMid.exists,  forumComments.create);
router.delete('/communities/:id/forumTopics/:forumTopicId/forumComments/:forumCommentId', secure.auth, communitiesMid.exists, forumCommentsMid.exists, forumComments.delete);

router.get('/communities/:id/contacts', contactsMid.exists, contacts.list);
router.post('/communities/:id/contacts', secure.auth, contacts.create);
router.get('/communities/:id/contacts/:contactId', secure.auth, communitiesMid.exists, contactsMid.exists, contacts.detail);
router.patch('/communities/:id/contacts/:contactId', secure.auth, communitiesMid.exists, contactsMid.exists, contacts.update);
router.delete('/communities/:id/contacts/:contactId', secure.auth, communitiesMid.exists, contactsMid.exists, contacts.delete);


module.exports = router;