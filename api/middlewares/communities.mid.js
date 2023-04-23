const Community = require("../models/community.model");
const createError = require("http-errors");

module.exports.exists = (req, res, next) => {
  const communityId = req.params.communityId || req.params.id;
  Community.findById(communityId)
    .populate("claims")
    .populate("neighbours")
    .populate("manager")
    .then((community) => {
      if (community) {
        req.community = community;
        next();
      } else {
        next(createError(404, "Community not found"));
      }
    });
};

module.exports.checkManager = (req, res, next) => {
  console.log(req.community.manager, req.user.id);
  if (req.community.manager.id !== req.user.id) {
    next(createError(403, "Forbidden"));
  } else {
    next();
  }
};