const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const communitySchema = new Schema({
  name: {
    type: String,
    maxLenght: [20, "Community name should not be longer that 20 characters"],
  },
  address: {
    type: String,
    required: "Address is required"
  },
  imageUrl: {
    type: String,
    match: [/^https?:\/\/.+\.(jpg|jpeg|png)$/, "Image URL must be valid"]
  },
  manager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  facilities: [{
    type: String,
    enum: ["Paddle court", "Multipurpose room", "Gym"],
    minLength: [5, "The facility shoud be at least 5 characters"]
  }]
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

communitySchema.virtual("claims", {
  ref: "Claim",
  localField: "_id",
  foreignField: "community",
  justOne: false
});

communitySchema.virtual("neighbours", {
  ref: "User",
  localField: "_id",
  foreignField: "community",
  justOne: false
});



const Community = mongoose.model('Community', communitySchema);
module.exports = Community; 