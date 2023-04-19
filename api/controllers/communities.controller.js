const Community = require("../models/community.model");

const todo = 

module.exports.list = (req, res, next) => {
  Community.find()
    .then((communities) => {
      res.json(communities);
    })
    .catch(next);
};

module.exports.detail = (req, res, next) => res.json(req.community);

module.exports.create = (req, res, next) => {
  Community.create(req.body)
  .then((community) => res.status(201).json(community))
  .catch(next);
};

//TODO
module.exports.join = (req, res, next) => {

}

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