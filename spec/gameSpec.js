'use strict';

describe("game", function(){
  var game;
  beforeEach(function(){
    game = new Game();
  });

  it("responds to a score method", function(){
    expect(game.score).not.toBeUndefined()
  });

  it("has a rolling total", function(){
    expect(game.score).toEqual(0);
  });

  it("can bowl a ball and return a value between 1 & 10", function(){
    expect(game.bowl()).toBeLessThan(11);
  });

  it("score takes rolls into account", function(){
    spyOn(Math,'random').and.returnValue(0.2);
    (game.bowl());    
    expect(game.score).toEqual(3);
  });
});
