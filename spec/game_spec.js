'use strict'

describe('Frame of Bowling test score system', function(){
  var game;

  beforeEach(function() {
    game = new Scorecard();
  });

  it('can roll a ball', function() {
		game.roll
		expect(game.score()).toEqual(10);
	});

  it('add store frame score', function() {
		//rollPins(10, 0);
		expect(game.score()).toEqual(10);
	});

  it('should handle strike', function() {
		//rollPins(10, 0);
		expect(game.score()).toEqual(10);
	});

  it('should handle spare', function() {
		//rollPins(10, 0);
		expect(game.score()).toEqual(10);
	});


});
