import swaggerJsdoc from 'swagger-jsdoc';

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.1.0',
    info: {
      title: 'Edvisto IntechMom',
      version: '1.0.0',
      description: '',
      license: {
        name: 'Apache 2.0',
        url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
      },
    },
  },
  basePath: '/api',
  apis: ['./src/app.js', './src/api/documentation/users.js'],
};

export default swaggerJsdoc(swaggerOptions);
