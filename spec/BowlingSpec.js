'use strict';

describe('Bowling', function(){

	var bowling;
	beforeEach(function(){
		bowling = new Bowling();
	});

	it('starts a new game with 10 pins', function() {
		expect(bowling.pins()).toEqual(10)
	});

	it('user rolls a ball and knocks down pins', function() {
		bowling.roll(4)
		expect(bowling.pins()).toEqual(6)
	})


});
