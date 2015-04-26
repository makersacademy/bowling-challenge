describe("game", function() {

it("totals ten frames with ten spares", function() {


    game = new Game();

    spareDouble = jasmine.createSpyObj(['isSpare', 'knockedDown', 'bowled']);

    spareDouble.isSpare.and.callFake(function() {
      return true;
    });

    spareDouble.bowled = [1,9];

    spareDouble.knockedDown.and.callFake(function() {
      return 10;
    });

    game.addFrames( spareDouble, spareDouble, spareDouble, spareDouble, spareDouble, spareDouble, spareDouble, spareDouble, spareDouble, spareDouble, spareDouble );

    expect(game.score()).toEqual(110);
  });

it("totals ten frames with different ten spares", function() {
    game = new Game();

    spareDouble = jasmine.createSpyObj(['isSpare', 'knockedDown', 'bowled']);

    spareDouble.isSpare.and.callFake(function() {
      return true;
    });

    spareDouble.bowled = [6,4];

    spareDouble.knockedDown.and.callFake(function() {
      return 10;
    });

    game.addFrames( spareDouble, spareDouble, spareDouble, spareDouble, spareDouble, spareDouble, spareDouble, spareDouble, spareDouble, spareDouble, spareDouble );

    expect(game.score()).toEqual(160);
  });

it("totals a game with no bonuses", function() {
  game = new Game();

  frameDouble = jasmine.createSpyObj(['isSpare', 'knockedDown', 'bowled', 'isStrike']);

    frameDouble.isSpare.and.callFake(function() {
      return false;
    });

    frameDouble.isStrike.and.callFake(function() {
      return false;
    });

    frameDouble.bowled = [2,2];

    frameDouble.knockedDown.and.callFake(function() {
      return 4;
    });

    game.addFrames( frameDouble, frameDouble, frameDouble, frameDouble, frameDouble, frameDouble, frameDouble, frameDouble, frameDouble, frameDouble );
  expect(game.score()).toEqual(40);
});

it("totals 12 strikes", function() {

    game = new Game()

    strikeDouble = jasmine.createSpyObj(['isSpare', 'knockedDown', 'bowled', 'isStrike']);

    strikeDouble.isSpare.and.callFake(function() {
      return false;
    });

    strikeDouble.isStrike.and.callFake(function() {
      return true;
    });

    strikeDouble.bowled = [10,0];

    strikeDouble.knockedDown.and.callFake(function() {
      return 10;
    });

    bonusRolls = jasmine.createSpyObj(['bowled', 'knockedDown']);

    bonusRolls.knockedDown.and.callFake(function() {
      return 20;
    });

    bonusRolls.bowled = [10,10];

    game.addFrames( strikeDouble, strikeDouble, strikeDouble, strikeDouble, strikeDouble, strikeDouble, strikeDouble, strikeDouble, strikeDouble, strikeDouble, bonusRolls);

    expect(game.score()).toEqual("PERFECT GAME!");
  });

it("throws error if given bonuses which arent expected", function() {
  game = new Game()

  frameDouble = jasmine.createSpyObj(['isSpare', 'knockedDown', 'bowled', 'isStrike']);

    frameDouble.isSpare.and.callFake(function() {
      return false;
    });

    frameDouble.isStrike.and.callFake(function() {
      return false;
    });

    frameDouble.bowled = [2,2];

    frameDouble.knockedDown.and.callFake(function() {
      return 4;
    });

    game.addFrames( frameDouble, frameDouble, frameDouble, frameDouble, frameDouble, frameDouble, frameDouble, frameDouble, frameDouble, frameDouble, frameDouble );

  expect(function() {
        game.score() } ).toThrowError("You cannot add bonuses as you did not strike or spare in your final frame!");
});

it("returns GUTTER if no pins hit", function() {


    game = new Game();

    spareDouble = jasmine.createSpyObj(['isSpare', 'knockedDown', 'bowled', 'isStrike']);

    spareDouble.isSpare.and.callFake(function() {
      return false;
    });

    spareDouble.isStrike.and.callFake(function() {
      return false;
    });

    spareDouble.bowled = [0,0];

    spareDouble.knockedDown.and.callFake(function() {
      return 0;
    });

    game.addFrames( spareDouble, spareDouble, spareDouble, spareDouble, spareDouble, spareDouble, spareDouble, spareDouble, spareDouble, spareDouble );

    expect(game.score()).toEqual("GUTTER GAME!");
  });

});