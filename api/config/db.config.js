const mongoose = require("mongoose");

const MONGODB_URI  = process.env.MONGODB_URI || "mongodb://localhost/vida-vecinal";

mongoose.connect(MONGODB_URI)
  .then(() => console.info('Successfully connected to database'))
  .catch((error) => console.error('An error occurred trying to connect to database', error));