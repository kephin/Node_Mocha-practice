const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

describe('Server', () => {
  describe('Get /', () => {
    it('should return hello world response', (done) => {
      request(app)
        .get('/')
        .expect(200)
        .expect('Hello world!')
        .end(done);
    });

    it('should return page not found response', (done) => {
      request(app)
        .get('/bad')
        .expect(404)
        .expect((res) => {
          //Here! We are utilizing the expect library
          expect(res.body).toInclude({
            error: 'Page not found!',
          });
        })
        .end(done);
    });
  });

  describe('GET /users', () => {
    it('should return users', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Kevin',
            age: 29,
          });
        })
        .end(done);
    });
  });
});
