describe("Game", function() {
  var player;
  var game;
  var rollScoreFive;
  var randomPinsUnderFive;
  var strikeRoll;
  var rollThree;
  var rollSeven;


  beforeEach( function(){
    player = jasmine.createSpyObj('player', ['playerGame']);
    game = new Game(player);
    randomPinsUnderFive = Math.floor(Math.random() * (5));
    strikeRoll = 10;
    rollScoreFive = 5;
    rollThree = 3
    rollSeven = 7
  });

  it("has a hash of 10 empty arrays for the scoresheet", function(){
    expect(game.scoreSheet).toEqual(jasmine.objectContaining([]));
  });

  it("records the name of the current player", function(){
    expect(game.player).toEqual(player)
  });

  it("has laid out 10 pins for the first ever roll", function(){
    expect(game.currentPinsAvailable).toEqual(10)
  });

  it("has 1 as the current Frame number", function(){
    expect(game.currentFrameNumber).toEqual(0)
  });

  it("has 0 as the number of consecutiveStrikes", function(){
    expect(game.consecutiveStrikes).toEqual(0)
  });


  describe("#newFrame", function(){

    beforeEach( function(){
      spyOn(game, 'spareRollOwed')
      spyOn(game, 'wipePins')
      game.newFrame(randomPinsUnderFive);
    });


    it("adds a score to the currentFrame", function(){
      expect(game.scoreSheet[game.currentFrameNumber].length).toEqual(1);
    });

    it("adds this roll score to the currentFrame", function(){
      expect(game.scoreSheet[game.currentFrameNumber]).toContain(randomPinsUnderFive);
    });

    it("wipes away the pins that were bowled over", function(){
      expect(game.wipePins).toHaveBeenCalledWith(randomPinsUnderFive)
    });

    it("asserts that I spare roll can't be owed on first ever roll", function(){
      expect(game.spareRollOwed).not.toHaveBeenCalledWith(randomPinsUnderFive)
    });

    it("checks if a spare roll has been owed", function(){
      game.finishFrame(randomPinsUnderFive);
      game.newFrame(randomPinsUnderFive);
      expect(game.spareRollOwed).toHaveBeenCalledWith(randomPinsUnderFive);
    });
  });

  describe("#spareRollOwed", function(){

    // beforeEach( function(){
    //   game.newFrame(rollThree);
    //   game.finishFrame(rollSeven);
    // });

    it("will update the frame before with the next roll", function(){
      game.newFrame(rollThree);
      game.finishFrame(rollSeven);
      game.newFrame(rollScoreFive)
      expect(game.scoreSheet[1]).toEqual([3, 12])

    });
  });

  describe("#wipePins", function(){

    it("reduces the number of available pins", function(){
      game.wipePins(randomPinsUnderFive);
      expect(game.currentPinsAvailable).toEqual(10 - randomPinsUnderFive);
    });

  });


  describe("#updateScoreSheet", function(){

    it("updates the new score into the score sheet", function(){
      game.newFrame(randomPinsUnderFive);
      expect(game.scoreSheet[1]).toEqual(jasmine.objectContaining([randomPinsUnderFive]));
    });

    it("updates the scoresheet with 'X' if strike rolled", function(){
      game.newFrame(strikeRoll);
      expect(game.scoreSheet[1]).toEqual(jasmine.objectContaining(['X']));
    });

    it("pends the second score when strike rolled", function(){
      game.newFrame(strikeRoll);
      expect(game.scoreSheet[1])
          .toEqual(jasmine.objectContaining(['X', 'pending']));
    });

    it("does not include a spare '/' in its calculations", function(){
      game.newFrame(strikeRoll);
      game.newFrame(randomPinsUnderFive)
      expect(game.scoreSheet[1])
        .not.toEqual(jasmine.objectContaining(['X', 'pending', '/']));
    });

    it("increments consecutiveStrikes by one for each strike", function(){
      game.newFrame(strikeRoll);
      expect(game.consecutiveStrikes).toEqual(1);
    });


    it("updates the scoresheet with '/' if spare rolled", function(){
      game.newFrame(rollScoreFive);
      game.finishFrame(rollScoreFive);
      expect(game.scoreSheet[1])
        .toEqual(jasmine.objectContaining([rollScoreFive, '/']));
    });



    it("checks if it is the right time to tot up any bonus scores", function(){
      spyOn(game, 'isReadyForBonusScore')
      game.newFrame(strikeRoll);
      game.newFrame(rollScoreFive);
      game.finishFrame(randomPinsUnderFive);
      expect(game.isReadyForBonusScore).toHaveBeenCalled();
    });

  });

  describe("#finishFrame", function(){

    beforeEach(function(){
      game.newFrame(randomPinsUnderFive);
      game.finishFrame(randomPinsUnderFive);
    });

    it("updates the current frame with a second roll score", function(){
      expect(game.scoreSheet[game.currentFrameNumber].length).toEqual(2);
    });

    it("updates the current frame with the second roll score", function(){
      expect(game.scoreSheet[game.currentFrameNumber])
        .toEqual([randomPinsUnderFive, randomPinsUnderFive]);
    });

    it("resets the number of available pins to 10", function(){
      expect(game.currentPinsAvailable).toEqual(10);
    });


  });

  describe("#frameScore", function(){
    it("Returns the frame score for the current frame", function(){
      game.newFrame(randomPinsUnderFive);
      game.finishFrame(rollScoreFive);
      expect(game.frameScore(game.currentFrameNumber))
        .toEqual(randomPinsUnderFive + rollScoreFive);
    });

  });

  describe("#factorInStrikes", function(){

    it("updates the previous frame with the current frame score", function(){
      game.newFrame(strikeRoll);
      game.newFrame(rollScoreFive);
      game.finishFrame(0);
      expect(game.scoreSheet[game.currentFrameNumber -1])
        .toEqual([10, rollScoreFive]);
    });

    it("updates the previous two frames after two consecutiveStrikes", function(){
      game.newFrame(strikeRoll);
      game.newFrame(strikeRoll);
      game.newFrame(rollScoreFive);
      game.finishFrame(0);
      expect(game.scoreSheet[game.currentFrameNumber -2])
        .toEqual([10, rollScoreFive + 10]);
    });

    it("updates the previous three frames after three consecutiveStrikes", function(){
      game.newFrame(strikeRoll)
      game.newFrame(strikeRoll);
      game.newFrame(strikeRoll);
      game.newFrame(rollScoreFive);
      game.finishFrame(0);
      expect(game.scoreSheet[game.currentFrameNumber -3])
        .toEqual([10, 20]);
    });
  });

  describe("#isSpare", function(){
    it("returns true if there are no pins left", function(){
      game.newFrame(rollScoreFive);
      expect(game.isSpare(rollScoreFive)).toBeTruthy();
    });

    it("does not confuse no pins left after a strike with after a spare", function(){
      expect(game.isSpare('pending')).toBeFalsy();
    });
  });

  describe("#isStrike", function(){


    it("returns true if rollScore is 10", function(){
      expect(game.isStrike(strikeRoll)).toBeTruthy();
    });

    it("returns false if rollScore is 10", function(){
      expect(game.isStrike(randomPinsUnderFive)).toBeFalsy()
    });

  });

  describe("#isReadyForBonusScore", function(){

    it("checks that there are no pending scores in this frame", function (){
      game.newFrame(strikeRoll);
      game.newFrame(randomPinsUnderFive);
      expect(game.isReadyForBonusScore()).toBeFalsy();
    });

    it("checks that there has been at least 1 bonus to calculate", function (){
      game.newFrame(randomPinsUnderFive);
      expect(game.isReadyForBonusScore()).toBeFalsy();
    });

  });




});
