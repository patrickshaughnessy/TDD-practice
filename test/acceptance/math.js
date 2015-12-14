'use strict';

var chai = require('chai');
var chaiHTTP = require('chai-http');
var assert = require('assert');
var expect = chai.expect;
chai.use(chaiHTTP);

var app = require('../../app')

describe('/maths', function(){
  describe('/sum', function(){
    it('should add two numbers', function(done){
     chai.request(app)
      .get('/maths/sum/4/23')
      .end(function(err, res){
        expect(res.body.result).to.eql(27);
        done();
      })
    })
  });

  describe('/product', function(){
    it('should multiply two numbers', function(done){
      chai.request(app)
        .get('/maths/product/4/5')
        .end(function(err, res){
          expect(res.body.result).to.eql(20);
          done();
        })
    })
  })

});
