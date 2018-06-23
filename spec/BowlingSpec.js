'use strict';

describe('Bowling', function(){

	var bowling;
	beforeEach(function(){
		bowling = new Bowling();
	});

	it('adds the scores together in the scorecard', function() {
		rollMultiple(4, 20)
		expect(bowling.score()).toEqual(80);
	});

	it('adds each individual score to a cumalativescore array', function() {
		rollMultiple(2, 4)
		expect(bowling.cumalativescore).toEqual([2, 2, 2, 2]);
	});

	it('awards a spare bonus if the player knocks down all 10 pins in one frame', function() {
		rollMultiple(5, 3)
		rollMultiple(0, 17)
		expect(bowling.score()).toEqual(20);
	});

	it('awards a strike bonus if the player knocks down all 10 pins in first turn of frame', function() {
		bowling.roll(10);
		rollMultiple(4, 2);
		rollMultiple(0, 16)
		expect(bowling.score()).toEqual(26)

	});

	var rollMultiple = function (number, rolls) {
		for(var i=0; i < rolls; i++){
    	bowling.roll(number);
		}
	};
});
