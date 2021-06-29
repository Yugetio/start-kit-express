const express = require('express');

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerConfig = require('../config/swagger');
const swaggerSpecs = swaggerJsdoc(swaggerConfig);

const app = express();

app.use('/api/docs/', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

module.exports = app;
