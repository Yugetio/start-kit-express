const path = require('path');

const PORT = process.env.PORT || 3000;
const PROJECT_NAME = process.env.PROJECT_NAME || 'name';

const mongodbParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  BASE_URL: process.env.BASE_URL || `http://localhost:${PORT}`,
  PORT: PORT,
  MONGO_URL: process.env.MONGO_URL || `mongodb://localhost:27017/${PROJECT_NAME}`,
  MONGO_PARAMS: mongodbParams,
  STATIC_PATH: process.env.STATIC_PATH || path.resolve(__dirname, '..', '..', `${PROJECT_NAME}-uploads`),
  SECRET: process.env.SECRET || 'some_secret_phase',
  REFRESH_TOKET_SECRET: process.env.REFRESH_TOKET_SECRET || 'some_secret_phase_for_refresh_token',
  TOKEN_LIFE: process.env.TOKEN_LIFE || 3600000000,
};
