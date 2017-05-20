describe('Bowling', function(){

});

beforeEach(function() {
  game = new Bowling();
  frame = new Frame();
});

it('adds frames when you play', function(){
  game.addFrame(frame);
  expect(game.frames).toContain(frame);
});
