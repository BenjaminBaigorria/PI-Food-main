/* eslint-disable import/no-extraneous-dependencies */
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');

const agent = session(app);
const recipe = {
  title: 'Milanesa a la napolitana',
};

describe('Recipe routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Recipe.sync({ force: true})
    .then(() => Recipe.create(recipe)));
  describe('GET /recipe', () => {
    it('should get 200', () =>
      agent.get('/recipe').expect(200)
    );
  });
  describe('GET /types', () => {
    it('should get 200', () =>
      agent.get('/types').expect(200)
    );
  });
});
