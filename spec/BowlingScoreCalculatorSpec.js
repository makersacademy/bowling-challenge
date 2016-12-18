'use strict'

describe('BowlingScoreCalculator', function() {
	var calculator;

	beforeEach(function() {
		calculator = new BowlingScoreCalculator();	
	});

	it('should start with a score of 0', function() {
		expect(calculator.score).toEqual(0);
	});

	it('should add two rolls together to score a single frame', function() {
		calculator.calculateFrame(3,3);
		expect(calculator.score).toEqual(6);
	});

});

