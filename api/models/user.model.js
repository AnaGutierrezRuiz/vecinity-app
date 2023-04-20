const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  name: {
    type: String,
    required: "Name is required",
    minLength: [2, "Name needs at least 2 chars"]

  },
  lastName: {
    type: String,
    required: "Lastname is required",
    minLength: [2, "Name needs at least 2 chars"]
  },
  home: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: "Email is required",
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "User email must be valid"],
  },
  confirm: {
    type: Boolean,
    default: process.env.USER_CONFIRMATION_REQUIRED
  },
  password: {
    type: String,
    required: "Password is required",
    minLength: [8, "Password needs at least 8 chars"]
  },
  community: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Community "
  },
  phoneNumber: {
    type: Number
  },
  imageUrl: {
    type: String,
    match: [/^https?:\/\/.+\.(jpg|jpeg|png)$/, "Image URL must be valid"],
    default: "https://www.iprcenter.gov/image-repository/blank-profile-picture.png/@@images/image.png"
  },
  role: {
    type: String,
    enum: ["admin", "guest"],
    default: "guest"
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: function (doc, ret) {
      delete ret.__v;
      ret.id = ret._id;
      delete ret._id;
      delete ret.password;
      return ret;
    }
  }
}
);

userSchema.pre('save', function (next) {
  const user = this;

  if (user.isModified('password')) {
    bcrypt
      .genSalt(10)
      .then((salt) => {
        return bcrypt.hash(user.password, salt).then((hash) => {
          user.password = hash;
          next();
        });
      })
      .catch((error) => next(error));
  } else {
    next();
  }
});

userSchema.virtual("claims", {
  ref: "Claim",
  localField: "_id",
  foreignField: "user",
  justOne: false
});

const User = mongoose.model('User', userSchema);
module.exports = User; 