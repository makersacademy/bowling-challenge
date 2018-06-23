'use strict';

describe('Bowling', function(){

	var bowling;
	beforeEach(function(){
		bowling = new Bowling();
	});

	it('starts a new frame with 10 pins', function() {
		expect(bowling.pins()).toEqual(10);
	});

	it('user rolls a ball and knocks down pins', function() {
		bowling.roll(4);
		expect(bowling.pins()).toEqual(6);
	})

	it('adds the scores together in the scorecard', function() {
		rollMultiple(4, 2)
		expect(bowling.score()).toBe(8);
		expect(function(){bowling.roll(11);}).toThrowError("Not possible!")
	});

	it('adds each individual score to a _cumalativescore array', function() {
		rollMultiple(2, 4)
		expect(bowling._cumalativescore).toEqual([2, 2, 2, 2]);
	});

	it('can know there are two rounds in a frame', function() {
		rollMultiple(4, 5)
		expect(bowling.framescore()).toEqual(4);
		expect(bowling.currentFrame()).toEqual(3);
	});

	it('ends the game when 10 frames have been played', function() {
		rollMultiple(1, 20)
		expect(function(){bowling.roll(1);}).toThrowError("Game finished: Your final score is ");
	});

	it('awards a spare bonus if the player knocks down all 10 pins in one frame', function() {
		rollMultiple(5, 3)
		rollMultiple(0, 17)
		expect(bowling.score()).toEqual(20);
	});

	var rollMultiple = function (number, rolls) {
		for(var i=0; i < rolls; i++){
    	bowling.roll(number);
		}
	};
});
