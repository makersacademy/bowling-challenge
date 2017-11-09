describe('game', function() {

});

  var testGame;
  var testFrameOne;
  var testFrameTwo;
  var testFrameThree;
  var testFrameFour;
  var testFrameFive;
  var testFrameSix;
  var testFrameSeven;
  var testFrameEight;
  var testFrameNine;
  var testFrameTen;
  var frames;
//
  beforeEach(function() {
    testGame = new game();
    testFrameOne = new frame();
    testFrameTwo = new frame();
    testFrameThree = new frame();
    testFrameFour = new frame();
    testFrameFive = new frame();
    testFrameSix = new frame();
    testFrameSeven = new frame();
    testFrameEight = new frame();
    testFrameNine = new frame();
    testFrameTen = new frame();

    testFrameOne.firstRollScore(1);
    testFrameOne.secondRollScore(4);
    testFrameTwo.firstRollScore(4);
    testFrameTwo.secondRollScore(5);
    testFrameThree.firstRollScore(6);
    testFrameThree.secondRollScore(4);
    testFrameFour.firstRollScore(5);
    testFrameFour.secondRollScore(5);
    testFrameFive.firstRollScore(10);
    testFrameSix.firstRollScore(0);
    testFrameSix.secondRollScore(1);
    testFrameSeven.firstRollScore(7);
    testFrameSeven.secondRollScore(3);
    testFrameEight.firstRollScore(6);
    testFrameEight.secondRollScore(4);
    testFrameNine.firstRollScore(10);
    testFrameTen.firstRollScore(2);
    testFrameTen.secondRollScore(8);
    testFrameTen.thirdRollScore(6);
  });



describe('Frame Score', function() {
  it('calculates the post bonus score', function() {
    frames = [testFrameOne, testFrameTwo, testFrameThree, testFrameFour, testFrameFive, testFrameSix, testFrameSeven, testFrameEight, testFrameNine, testFrameTen];
    expect(testGame.frameScoreWithBonus(frames, 1)).toEqual(5);
    expect(testGame.frameScoreWithBonus(frames, 2)).toEqual(9);
    expect(testGame.frameScoreWithBonus(frames, 6)).toEqual(1);
  });
  it('calculates the post bonus score of a Strike', function() {
    frames = [testFrameOne, testFrameTwo, testFrameThree, testFrameFour, testFrameFive, testFrameSix, testFrameSeven, testFrameEight, testFrameNine, testFrameTen];
    expect(testGame.frameScoreWithBonus(frames, 5)).toEqual(11);
    expect(testGame.frameScoreWithBonus(frames, 9)).toEqual(20);
  });
  it('calculates the post bonus score of a Spare', function() {
    frames = [testFrameOne, testFrameTwo, testFrameThree, testFrameFour, testFrameFive, testFrameSix, testFrameSeven, testFrameEight, testFrameNine, testFrameTen];
    expect(testGame.frameScoreWithBonus(frames, 3)).toEqual(15);
    expect(testGame.frameScoreWithBonus(frames, 4)).toEqual(20);
    expect(testGame.frameScoreWithBonus(frames, 7)).toEqual(16);
    expect(testGame.frameScoreWithBonus(frames, 8)).toEqual(20);
  });
  it('calculates the post bonus score on the last roll', function() {
    frames = [testFrameOne, testFrameTwo, testFrameThree, testFrameFour, testFrameFive, testFrameSix, testFrameSeven, testFrameEight, testFrameNine, testFrameTen];
    expect(testGame.frameScoreWithBonus(frames, 10)).toEqual(16);
  });
});

describe('Game Score', function() {
  it('calculates the game score', function() {
    frames = [testFrameOne, testFrameTwo, testFrameThree, testFrameFour, testFrameFive, testFrameSix, testFrameSeven, testFrameEight, testFrameNine, testFrameTen];
    expect(testGame.gameScore(frames)).toEqual(133);
  });
});
