describe("The Bowling Game", function() {
  var game;
  var testframeOne;
  var testframeTwo;
  var gutterframe;
  var strikeFrame;
});

beforeEach(function(){
  game = new Game();
  testframeOne = new Frame(); testframeOne.bowl(3) ; testframeOne.bowl(4); testframeOne.saveScore();
  testframeTwo = new Frame(); testframeTwo.bowl(5) ; testframeTwo.bowl(4); testframeTwo.saveScore();
  testSpareOne = new Frame(); testSpareOne.bowl(3) ; testSpareOne.bowl(7); testSpareOne.saveScore();
  strikeFrame = new Frame(); strikeFrame.bowl(10); strikeFrame.bowl(0); strikeFrame.saveScore();
  gutterframe = new Frame(); gutterframe.bowl(0) ; gutterframe.bowl(0); gutterframe.saveScore(0);
});

 it('is initialised with a frames array', function() {
  expect(game.frames.length).toEqual(0);
});

 it('is initialised with a frame object set to frame', function() {
    expect(game.frame()).toEqual(jasmine.objectContaining({}));
  });

  it ('has a FrameNo function to return the current FrameNo', function() {
    expect(game.FrameNo()).toEqual(1);
  });


 it ('has a function to check if frame is the first frame', function() {
   expect (game.isFirstFrame()).toBe(true);
 });

 it ('has a function to provide the frame index', function() {
   expect(game.FrameIndex()).toEqual(0);
 });

  it ('has a function to push the frame to the frames array', function() {
    game.saveFrame();
    expect(game.frames()[0]).toEqual(jasmine.any(Frame));
  });

//discuss this with a coach
//how to create the conditions to test a function
//which relies on the condition of another object being correct.

  it ('adds the score of an open frame to the scoresheet', function() {
    game._frame = testframeOne;
    game.addToScores();
    expect(game.scores()[1]).toEqual(7);
  });

it ('has a total score for the game', function() {
  game._frame = testframeOne; game.addToScores(); game.saveFrame();
  game._frame = testframeTwo; game.addToScores(); game.saveFrame();
  expect(game._totalScore).toEqual(16);
});

it ('can score a Gutter Game at zero', function() {
  gutterGame();
  expect(game._totalScore).toEqual(0);
});

it ('can pass the bonus roll to the score from Spare frame', function() {
  game._frame = testSpareOne; game.addToScores(); game.saveFrame();
  game._frame = testframeTwo; game.addToScores(); game.saveFrame();
  expect(game.scores()[1]).toEqual(15);
});

it ('can pass the bonus roll to the score from Strike frame', function () {
  game._frame = strikeFrame; game.addToScores(); game.saveFrame();
  game._frame = game._frame = testframeTwo; game.addToScores(); game.saveFrame();
  expect(game.scores()[1]).toEqual(19);
});

var gutterGame = function () {
  for (var i = 0; i < 10; i++) {
  game._frame = gutterframe; game.addToScores(); game.saveFrame();
    }
  };
