'use strict';

describe('Bowling', function(){

	var bowling;
	beforeEach(function(){
		bowling = new Bowling();
	});

	it('starts a new game with 10 pins', function() {
		expect(bowling.pins()).toEqual(10);
	});

	it('user rolls a ball and knocks down pins', function() {
		bowling.roll(4);
		expect(bowling.pins()).toEqual(6);
	})

	it('adds pins knocked down to a scorecard', function() {
		bowling.roll(3);
		expect(bowling._score).toEqual(3);
	});

	it('adds the scores together in the scorecard', function() {
		bowling.roll(2);
		bowling.roll(5);
		expect(bowling._score).toEqual(7);
	});

	it('does not allow you to add a score more than there are available pins', function () {
		expect(function(){bowling.roll(11);}).toThrowError("Not possible!")
	});


});
