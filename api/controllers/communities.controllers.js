const Community = require("../models/community.model");

module.exports.list = (req, res, next) => {
  console.log('hola');
  Community.find()
    .populate("claims")
    .populate("neighbours")
    .populate("manager")
    .then((communities) => {
      res.json(communities);
    })
    .catch(next);
};

module.exports.detail = (req, res, next) => res.json(req.community);

module.exports.create = (req, res, next) => {
  req.body.manager = req.user.id;
  Community.create(req.body)
  .then((community) => res.status(201).json(community))
  .catch(next);
};

module.exports.update = (req, res, next) => {
  Object.assign(req.community, req.body);
  req.community.save()
    .then((community) => res.json(community))
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Community.deleteOne({ _id: req.community.id })
    .then(() => res.status(204).send())
    .catch(next);
};
