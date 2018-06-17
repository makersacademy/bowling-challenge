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

	it('adds the scores together in the scorecard', function() {
		bowling.roll(2);
		bowling.roll(5);
		expect(bowling.currentTotalScore()).toEqual(7);
		expect(function(){bowling.roll(11);}).toThrowError("Not possible!")
	});

	it('adds each individual score to a _cumalativescore array', function() {
		bowling.roll(1);
		bowling.roll(2);
		bowling.roll(3);
		bowling.roll(2);
		expect(bowling._cumalativescore).toEqual([1, 2, 3, 2]);
	});

	it('can know there are two rounds in a frame and 10 frames in a game', function() {
		bowling.roll(1);
		bowling.roll(8);
		bowling.roll(1);
		bowling.roll(3);
		bowling.roll(5);
		expect(bowling.framescore()).toEqual(5);
		expect(bowling.currentFrame()).toEqual(3);
	});

});
