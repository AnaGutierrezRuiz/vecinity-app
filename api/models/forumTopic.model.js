const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const forumTopicSchema = new Schema({
  title: {
    type: String,
    required: 'Title is required',
    minlength: [2, 'Title needs at least 2 chars'],
    maxlength: [40, 'Claim title max 40 chars'],
  },
  description: {
    type: String,
    required: 'Description is required',
    minlength: [20, 'Description needs at least 20 chars'],
    maxlength: [140, 'Description max 240 chars'],
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  community: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Community',
  },

}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: function (doc, ret) {
      delete ret.__v;
      ret.id = ret._id;
      delete ret._id;
      return ret;
    }
  }
});

const ForumTopic = mongoose.model('ForumTopic', forumTopicSchema);
module.exports = ForumTopic;