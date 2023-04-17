require("dotenv").config();

const express = require("express");
const logger = require("morgan");
const createError = require("http-errors");

//** Load configuration */
require('./config/db.config');

const app = express();

app.use(logger("dev"));

//** Error handling */

app.use((req, res, next) => next(createError(404, "Route not found")));

app.use((error, req, res, next) => {
  console.error(error);

  if (!error.status) {
    error = createError(500, error);
  }
  const data = {
    message: error.message
  };

  res.status(error.status).json(data);

});

const port = process.env.PORT || 3002;
app.listen(port, () => console.info(`Application is running at port ${port}`));

