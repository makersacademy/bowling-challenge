'use strict';

describe("BowlingScorekeeper", function() {
  var bowlingScorekeeper;

  beforeEach(function(){
    bowlingScorekeeper = new BowlingScorekeeper();
  });

  it("allows a player to enter their name", function() {
    bowlingScorekeeper.addName("Ollie")
    expect(bowlingScorekeeper._playerName).toEqual("Ollie")
  });

  it("starts with a current score of zero", function() {
    expect(bowlingScorekeeper._currentScore).toEqual(0)
  });

  it("starts with an empty current frame array to store the rolls in a given frame", function() {
    expect(bowlingScorekeeper._currentFrame).toEqual([])
  });

  it("starts with an empty array of frame results", function() {
    expect(bowlingScorekeeper._arrayOfFrames).toEqual([])
  });

  // it("starts with an empty scoreProgression array", function() {
  //   expect(bowlingScorekeeper.scoreProgression()).toEqual([])
  // });

  describe("#addRollScore", function(){

    it("saves a roll score as it is inputted", function() {
      bowlingScorekeeper.addRollScore(5)
      expect(bowlingScorekeeper._currentFrame).toEqual([5])
    });

    it("pushes each frame into an array of frames", function(){
      bowlingScorekeeper.addRollScore(5)
      bowlingScorekeeper.addRollScore(4)
      bowlingScorekeeper.addRollScore(5)
      bowlingScorekeeper.addRollScore(4)
      expect(bowlingScorekeeper._arrayOfFrames).toEqual([[5, 4], [5, 4]])
    });

    it("clears the current frame array after a frame of 2 rolls is complete", function(){
      bowlingScorekeeper.addRollScore(5)
      bowlingScorekeeper.addRollScore(4)
      expect(bowlingScorekeeper._currentFrame).toEqual([])
    });

    it("concludes a frame early if a strike is scored", function(){
      bowlingScorekeeper.addRollScore(10)
      expect(bowlingScorekeeper._arrayOfFrames).toEqual([[10]])
    });

    it("clears the frame array after a strike", function(){
      bowlingScorekeeper.addRollScore(10)
      expect(bowlingScorekeeper._currentFrame).toEqual([])
    });

    it("throws an error if an 11th frame is started", function() {
      var tenFrames = [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [0, 9], [1, 0]]
      bowlingScorekeeper._arrayOfFrames = tenFrames
      expect( function(){ bowlingScorekeeper.addRollScore(5); }).toThrow("No more goes allowed: game has finished")
    });

    it("automatically calculates the current score after each frame", function() {
      bowlingScorekeeper.addRollScore(5)
      bowlingScorekeeper.addRollScore(4)
      bowlingScorekeeper.addRollScore(5)
      bowlingScorekeeper.addRollScore(4)
      expect(bowlingScorekeeper._currentScore).toEqual(18)
    });

    it("automatically adds the calculated score to the score progression array after each frame", function() {

    });

    it("automatically bonus adds the next roll score to the current score after a spare is achieved", function() {
      bowlingScorekeeper.addRollScore(4)
      bowlingScorekeeper.addRollScore(6)
      bowlingScorekeeper.addRollScore(9)
      bowlingScorekeeper.addRollScore(1)
      bowlingScorekeeper.addRollScore(1)
      bowlingScorekeeper.addRollScore(1)
      expect(bowlingScorekeeper._currentScore).toEqual(32)
    });

    it("automatically bonus adds the next 2 roll scores to the current score after a strike is achieved", function() {

    });

    it("automatically bonus adds the next 2 roll scores to the current score after a strike is achieved twice", function() {

    });

    it("automatically bonus adds the next 2 roll scores to the current score after a strike is achieved 3 times", function() {

    });

    it("automatically adds correct bonuses for strike then spare", function() {

    });
  });
});
