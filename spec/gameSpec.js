describe("The Bowling Game", function() {
  var game;
});

beforeEach(function(){
  game = new Game();
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
