const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  title: { 
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    minlength: [20, 'Contact description needs at least 20 chars'],
    maxlength: [140, 'Contact description max 140 chars']
  },
  phoneNumber: {
    type: Number,
  },
  email: {
    type: String,
    required: "Email is required",
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "User email must be valid"],
  },
  contactUrl: {
    type: String,
    match: [/^https?:\/\/.+\.(jpg|jpeg|png)$/, "Image URL must be valid"],
    default: "https://www.iprcenter.gov/image-repository/blank-profile-picture.png/@@images/image.png"
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

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;