const { BASE_URL } = require('./index');

function generateSwagger() {
  const swagger = {
    swaggerDefinition: {
      openapi: '3.0.3',
      info: {
        version: '1.0.0',
        title: 'APIs Documentation for Bloggerly',
      },
      servers: [
        {
          url: `${BASE_URL}/api/`,
        },
      ],
      security: [
        {
          bearerAuth: ['read', 'write'],
        },
      ],
    },
    apis: ['./src/modules/**/**.swagger.js', './src/modules/**/**.swagger.yaml'],
  };

  return swagger;
}

module.exports = generateSwagger();
