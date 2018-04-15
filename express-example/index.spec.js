const should = require('should');
const request = require('supertest');
const app = require('./index');

describe('GET /users 는', () => {
  describe('성공시', () => {
    it('유저 객체를 담은 배열로 응답한다.', done => {
      request(app)
        .get('/users')
        .end((err, res) => {
          res.body.should.be.instanceOf(Array);
          done();
        });
    });
  });
});