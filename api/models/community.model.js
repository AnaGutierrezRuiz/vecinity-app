const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const communitySchema = new Schema({
  name: {
    type: String,
    maxLenght: [20, "Community name should not be longer that 20 characters"],
    address: {
      type: String,
    },
    image: {
      type: String
    },
    // manager: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User"
    // },
   facilities: [{
      type: String,
      minLength: [5, "The facility shoud be at least 5 characters"]
   }]
  }
}, {timestamps: true}
);

const Community = mongoose.model('Community', communitySchema);
module.exports = Community; 