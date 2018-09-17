'use strict';

describe("Bowling", function() {
  var game;
  beforeEach(function(){
    game = new BowlingGame;
  });
  it("should calculate perfect game", function() {
    for (var i = 0; i < 12; i++) { 
      game.addPoints(10);
    }
    expect(game.total()).toEqual(300);
  });
  it("should correctly calculate sample game 1", function() {
    var sample1 = [9, 1, 10, 9, 1, 9, 1, 9, 1, 10, 9, 1, 9, 1, 10, 10, 9, 1]
    for (var i = 0; i < sample1.length; i++) {
      game.addPoints(sample1[i]);
    } 
    expect(game.total()).toEqual(206);
  });
  it("should correctly calculate sample game 2", function() {
    var sample2 = [10, 5, 5, 3, 4, 10, 7, 2, 1, 0, 10, 2, 8, 5, 2, 6, 4, 10]
    for (var i = 0; i < sample2.length; i++) {
      game.addPoints(sample2[i]);
    } 
    expect(game.total()).toEqual(131);
  });
  it("should correctly calculate sample game 3", function() {
    var sample3 = [0, 1, 10, 1, 2, 3, 4, 5, 5, 10, 9, 1, 10, 0, 9, 0, 10, 5]
    // [0, 1 | 10 | 1, 2 | 3, 4 | 5, 5 | 10 | 9,1 | 10 | 0, 9 | 0, 10 | 5]
    // [0, 1, 10, 2, 4, 3, 4, 5, 5, 20, 18, 2, 20, 0, 18, 0, 10, 5]
    // [1, 14, 17, 24, 44, 64, 84, 103 , 112, 127]
    for (var i = 0; i < sample3.length; i++) {
      game.addPoints(sample3[i]);
    } 
    expect(game.total()).toEqual(127);
    console.log(game.scores)
    console.log(game.pinLog)
    console.log(game.display)
  });

  it("should correctly calculate sample game 4", function() {
    var sample4 = [10, 0, 10, 3, 4, 10, 7, 2, 1, 0, 10, 2, 8, 5, 2, 6, 4, 10]
    for (var i = 0; i < sample4.length; i++) {
      game.addPoints(sample4[i]);
    } 
    expect(game.total()).toEqual(131);
  });
});