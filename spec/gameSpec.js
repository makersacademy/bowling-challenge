describe("The Bowling Game", function() {
  var game;
  var testframeOne;
  var testframeTwo;
});

beforeEach(function(){
  game = new Game();
  testframeOne = new Frame(); testframeOne.bowl(3) ; testframeOne.bowl(4); testframeOne.saveScore();
  testframeTwo = new Frame(); testframeTwo.bowl(5) ; testframeTwo.bowl(4); testframeTwo.saveScore();
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
