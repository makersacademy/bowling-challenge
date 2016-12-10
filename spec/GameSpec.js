'use strict';
describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("should return an empty array when score is initialized", function(){
    expect(game.score).toEqual([]);
  });

});
