'use strict';
// import chai, declare expect variable
const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function () {

//test normal cases

  it('fizzbuzzer returns appropriate results', function () {

    const normalCases = [
      [15,'fizz-buzz'],
      [5, 'buzz'],
      [3,'fizz'],
      [1,1],
    ];

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input[0]);
      expect(answer).to.equal(input[1]);
    });
  });

  it('should throw error if arg not a number', function() {

    const edgeCases = [
      ['string']
    ];

    edgeCases.forEach(function(input){
      expect(function() {
        fizzBuzzer(input[0]);
      }).to.throw(Error);
    });

  });

  


});