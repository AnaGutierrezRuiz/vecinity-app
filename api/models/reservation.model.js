const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  facility: {
    type: String,
    required: 'Facility is required',
  },
  date: {
    type: Date,
    required: 'Please select a date'
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

const Reservation = mongoose.model('Reservation', reservationSchema);
module.exports = Reservation;