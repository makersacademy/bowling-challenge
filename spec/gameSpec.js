'use strict';

describe('Game', function() {
	var game;

	beforeEach(function() {
		game = new Game();
	});

	it('starts at frame 0', function() {
		expect(game.currentframenumber).toEqual(0);
	});

	it('Starting a game puts a frame in the array', function() {
		game.newFrame();
		expect(game.currentframe instanceof Frame).toBeTruthy();
		expect(game.frames.length).toEqual(1);
	});

  it('10 strikes is 10 frames', function() {
		for (var i = 0; i < 10; i++) {
			game.enterRoll(10);
		}
		expect(game.currentframenumber).toEqual(10);
	});

  it('11 strikes is not 11 frames', function() {
		for (var i = 0; i < 11; i++) {
			game.enterRoll(10);
		}
		expect(game.currentframenumber).toEqual(10);
	});

  it('gets current pin score after 3 rolls', function() {
		for (var i = 0; i < 3; i++) {
			game.enterRoll(2);
		}
		expect(game.getCurrentPinsScore()).toEqual(6);
	});

  it('gets current pin score after 10 rolls', function() {
    for (var i = 0; i < 3; i++) {
      game.enterRoll(2);
      game.enterRoll(3);
      game.enterRoll(4);
    }
    game.enterRoll(5);
    expect(game.getCurrentPinsScore()).toEqual(32);
  });

  it('gets current pin score after 3 rolls including strikes', function() {
		game.enterRoll(10);
		for (var i = 0; i < 2; i++) {
			game.enterRoll(2);
		}
		expect(game.getCurrentPinsScore()).toEqual(14);
	});

  it('final frame pin index of previous frame is 1 after 3 rolls - no strikes', function() {
		for (var i = 0; i < 3; i++) {
			game.enterRoll(2);
		}
		// console.log(game.previousframe)
		expect(game.previousframe.finalIndexOfFrame).toEqual(1);
	});

	it('final frame pin index of previous frame is 0 after 3 rolls - 1 strike', function() {
		game.enterRoll(10);
		game.enterRoll(1);
		game.enterRoll(1);
		// console.log(game.previousframe)
		expect(game.previousframe.finalIndexOfFrame).toEqual(0);
	});

  it('calculates the bonus for frame 1 as 5 (frame 1 as a strike)', function() {
		game.enterRoll(10);
		game.enterRoll(2);
		game.enterRoll(3);
		expect(game.getFrameBonus(game.frames[0])).toEqual(5);
	});

  it('calculates the bonus for frame 1 as 5 (frame 1 as a spare)', function() {
    for (var i = 0; i < 3; i++) {
			game.enterRoll(5);
		}
		expect(game.getFrameBonus(game.frames[0])).toEqual(5);
	});

  it('gutter game = 0', function() {
		for (var i = 0; i < 10; i++) {
			game.enterRoll(0);
		}
		expect(game.calculateGameTotalScore()).toEqual(0);
	});

  it('perfect game = 300', function() {
    for (var i = 0; i < 12; i++) {
      game.enterRoll(10);
    }
    console.log(game.frames);
    // console.log("frame 1 bonus", game.frames[0].frame_bonus)
    expect(game.calculateGameTotalScore()).toEqual(300);
  });

  it('random with spare at end', function() {
		for (var i = 0; i < 18; i++) {
			game.enterRoll(2);
		}
    game.enterRoll(5);
    game.enterRoll(5);
    game.enterRoll(5);
		expect(game.calculateGameTotalScore()).toEqual(51);
	});
});
