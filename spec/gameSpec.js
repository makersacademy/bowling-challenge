describe("The Bowling Game", function() {
  var game;
  var testframe;
});

beforeEach(function(){
  game = new Game();
  testframe = new Frame(); testframe.bowl(3) ; testframe.bowl(4); testframe.saveScore();
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

  it ('adds the score of the first frame to the scoresheet', function() {
    game._frame = testframe;
    console.log(game.frames());
    game.addToScores();
    expect(game.scores()[0]).toEqual(7);
  });
