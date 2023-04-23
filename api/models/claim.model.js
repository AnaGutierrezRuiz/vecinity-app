const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const claimSchema = new Schema({
  title: {
    type: String,
    required: "Title is required",
    minLength: [2, "Name needs at least 2 chars"],
    maxLength: [20, "Clain title max 20 chars"]

  },
  description: {
    type: String,
    required: "Lastname is required",
    minLength: [20, "Name needs at least 2 chars"],
    maxLength: [140, "Clain title max 20 chars"]
  },
  community: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Community"
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  state: {
    type: String,
    enum: ["Pending", "Solved"],
    default: "Pending"
  }

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
}
);

claimSchema.virtual("claims", {
  ref: "Claim",
  localField: "_id",
  foreignField: "user",
  justOne: false
});

const Claim = mongoose.model('Claim', claimSchema);
module.exports = Claim; 