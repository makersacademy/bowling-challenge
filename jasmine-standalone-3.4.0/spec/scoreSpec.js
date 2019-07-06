
it("calculates a gutter game", function() {
  generateFrames([0,0]);
  expect(game.score()).toEqual(0);
});
