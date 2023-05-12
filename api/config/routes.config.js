const express = require('express');
const router = express.Router();
const storage = require('./storage.config');

// Controllers
const communities = require('../controllers/communities.controllers');
const users = require('../controllers/users.controllers');
const claims = require('../controllers/claims.controllers');
const reservations = require('../controllers/reservations.controllers');
const events = require('../controllers/events.controllers');
const forumComments = require('../controllers/forumComments.controllers');
const forumTopics = require('../controllers/forumTopics.controllers');
const contacts = require('../controllers/contacts.controllers');

// Middlewares
const communitiesMid = require('../middlewares/communities.mid');
const usersMid = require('../middlewares/users.mid');
const claimsMid = require('../middlewares/claims.mid');
const reservationsMid = require('../middlewares/reservations.mid');
const eventsMid = require('../middlewares/events.mid');
const forumTopicsMid = require('../middlewares/forumTopics.mid');
const forumCommentsMid = require('../middlewares/forumComments.mid');
const contactsMid = require('../middlewares/contacts.mid');
const secure = require('../middlewares/secure.mid');

/// Communities
router.get('/communities', communities.list);
// secure.checkRole('admin')
router.get('/communities/:id/neighbours', communitiesMid.exists, communities.usersList);
router.post('/communities', communities.create);
router.post('/communities/join', communities.join);
router.get('/communities/:id', communitiesMid.exists, communities.detail);
router.patch('/communities/:id', storage.single('image'), communitiesMid.exists, communitiesMid.checkManager, communities.update);
router.delete('/communities/:id', communitiesMid.exists, communitiesMid.checkManager, communities.delete);
// secure.checkRole('admin')

// Users
router.get('/users', users.list);
// secure.checkRole('admin')
router.post('/users', users.create);
router.get('/users/:id/confirm', usersMid.exists, users.confirm);
router.get('/users/me', usersMid.exists, users.me);
router.get('/communities/:id/users/:userId', usersMid.exists, users.detail);
router.patch('/communities/:id/users/:userId', storage.single('image'), users.update);
router.delete('/communities/:id/users/:userId', users.delete);
router.post('/login', users.login);

// Event
router.get('/communities/:id/events/:eventsDate', communitiesMid.exists, events.list);
router.post('/communities/:id/events', communitiesMid.exists, events.create);
router.get('/communities/:id/events/:eventId', communitiesMid.exists, eventsMid.exists, events.detail);
router.patch('/communities/:id/events/:eventId', communitiesMid.exists, eventsMid.exists, events.update);
router.delete('/communities/:id/events/:eventId', communitiesMid.exists, eventsMid.exists, events.delete);

// Claims
router.get('/communities/:id/claims', communitiesMid.exists, claims.list);
router.post('/communities/:id/claims', communitiesMid.exists, claims.create);
router.get('/communities/:id/claims/:claimId', communitiesMid.exists, claimsMid.exists, claims.detail);
router.patch('/communities/:id/claims/:claimId', communitiesMid.exists, claimsMid.exists, claims.update);
router.delete('/communities/:id/claims/:claimId', communitiesMid.exists, claimsMid.exists, claimsMid.checkAuthor, claims.delete);

// Forum Topic
router.get('/communities/:id/forumTopics', communitiesMid.exists, forumTopics.list);
router.post('/communities/:id/forumTopics', communitiesMid.exists, forumTopics.create);
router.get('/communities/:id/forumTopics/:forumTopicId', communitiesMid.exists, forumTopicsMid.exists, forumTopics.detail);
router.patch('/communities/:id/forumTopics/:forumTopicId', communitiesMid.exists, forumTopicsMid.exists, forumTopics.update);
router.delete('/communities/:id/forumTopics/:forumTopicId', communitiesMid.exists, forumTopicsMid.exists, forumTopics.delete);

// Forum comments
router.get('/communities/:id/forumTopics/:forumTopicId/forumComments', communitiesMid.exists, forumComments.list);
router.post('/communities/:id/forumTopics/:forumTopicId/forumComments', communitiesMid.exists, forumComments.create);
router.delete('/communities/:id/forumTopics/:forumTopicId/forumComments/:forumCommentId', communitiesMid.exists, forumCommentsMid.exists, forumComments.delete);

// Reservations
router.get('/communities/:id/reservations', communitiesMid.exists, reservations.list);
router.get('/communities/:id/reservations/:reservationId', communitiesMid.exists, reservationsMid.exists, reservations.detail);
router.post('/communities/:id/reservations', communitiesMid.exists, reservations.create);
router.delete('/communities/:id/reservations/:reservationId', communitiesMid.exists, reservationsMid.exists, reservationsMid.checkAuthor, reservations.delete);

// Contacts
router.get('/communities/:id/contacts', communitiesMid.exists, contacts.list);
router.post('/communities/:id/contacts', communitiesMid.exists, contacts.create);
router.get('/communities/:id/contacts/:contactId', communitiesMid.exists, contactsMid.exists, contacts.detail);
router.patch('/communities/:id/contacts/:contactId', communitiesMid.exists, contactsMid.exists, contacts.update);
router.delete('/communities/:id/contacts/:contactId', communitiesMid.exists, contactsMid.exists, contacts.delete);

module.exports = router;


