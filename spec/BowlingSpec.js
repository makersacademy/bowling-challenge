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

	it('can know there are two rounds in a frame', function() {
		bowling.roll(1);
		bowling.roll(8);
		bowling.roll(1);
		bowling.roll(3);
		bowling.roll(5);
		expect(bowling.framescore()).toEqual(5);
		expect(bowling.currentFrame()).toEqual(3);
	});

	it('ends the game when 10 frames have been played', function() {
		var times = 20;
		for(var i=0; i < times; i++){
    	bowling.roll(1);
		}
		expect(function(){bowling.roll(1);}).toThrowError("Game finished: Your final score is ");
	});

	it('awards a spare bonus if the player knocks down all 10 pins in one frame', function() {
		bowling.roll(6);
		bowling.roll(4);
		bowling.roll(4);
		bowling.roll(4);
		expect(bowling.currentTotalScore()).toEqual(18);
	});
});
