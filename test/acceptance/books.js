'use strict';

var chai = require('chai');
var chaiHTTP = require('chai-http');
var assert = require('assert');
var expect = chai.expect;
chai.use(chaiHTTP);

var app = require('../../app');

describe('/books', function(){
  describe('/get', function(){

    it('should return a list of books', function(done){
      chai.request(app)
        .get('/books')
        .end(function(err, res){
          var dataKeys;
          if (res.body.length){
            dataKeys = ['title', 'author']
          } else {
            dataKeys = [];
          }
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          res.body.forEach(function(book){
            expect(Object.keys(book)).to.deep.eql(dataKeys);
          })
          done();
        });
    });
  });
});
