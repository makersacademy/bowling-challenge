"use strict";

describe("Features - BowlingGame", function() {
  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  it("can play a normal game without bonuses", function() {
    game.play(3, 4);
    expect(game.score).toEqual(7)
    game.play(1, 1);
    expect(game.score).toEqual(9)
    game.play(0, 9);
    expect(game.score).toEqual(18)
    game.play(8, 1);
    expect(game.score).toEqual(27)
    game.play(3, 0);
    expect(game.score).toEqual(30)
    game.play(3, 6);
    expect(game.score).toEqual(39)
    game.play(0, 4);
    expect(game.score).toEqual(43)
    game.play(1, 7);
    expect(game.score).toEqual(51)
    game.play(5, 2);
    expect(game.score).toEqual(58)
    game.play(5, 0);
    expect(game.score).toEqual(63)
  });

  it("can play a game with spares and strikes keeping the hidden score - tenth frame without bonus", function() {
    game.play(3, 7);
    expect(game.score).toEqual(10)
    game.play(1, 1);
    expect(game.score).toEqual(13)
    game.play(10);
    expect(game.score).toEqual(23)
    game.play(10);
    expect(game.score).toEqual(43)
    game.play(3, 4);
    expect(game.score).toEqual(60)
    game.play(10);
    expect(game.score).toEqual(70)
    game.play(8, 0);
    expect(game.score).toEqual(86)
    game.play(3, 7);
    expect(game.score).toEqual(96)
    game.play(10);
    expect(game.score).toEqual(116)
    game.play(2, 4);
    expect(game.score).toEqual(128)
  });

  it("can play a perfect game", function() {
    game.play(10);
    expect(game.score).toEqual(10)
    game.play(10);
    expect(game.score).toEqual(30)
    game.play(10);
    expect(game.score).toEqual(60)
    game.play(10);
    expect(game.score).toEqual(90)
    game.play(10);
    expect(game.score).toEqual(120)
    game.play(10);
    expect(game.score).toEqual(150)
    game.play(10);
    expect(game.score).toEqual(180)
    game.play(10);
    expect(game.score).toEqual(210)
    game.play(10);
    expect(game.score).toEqual(240)
    game.play(10, 10, 10);
    expect(game.score).toEqual(300)
  });

  it("can play a spare in tenth frame with first and second bowls", function() {
    game.play(10);
    expect(game.score).toEqual(10)
    game.play(10);
    expect(game.score).toEqual(30)
    game.play(10);
    expect(game.score).toEqual(60)
    game.play(10);
    expect(game.score).toEqual(90)
    game.play(10);
    expect(game.score).toEqual(120)
    game.play(10);
    expect(game.score).toEqual(150)
    game.play(10);
    expect(game.score).toEqual(180)
    game.play(10);
    expect(game.score).toEqual(210)
    game.play(10);
    expect(game.score).toEqual(240)
    game.play(3, 7, 10);
    expect(game.score).toEqual(273)
  });

  it("can play a spare in tenth frame with second and third bowl", function() {
    game.play(10);
    expect(game.score).toEqual(10)
    game.play(10);
    expect(game.score).toEqual(30)
    game.play(10);
    expect(game.score).toEqual(60)
    game.play(10);
    expect(game.score).toEqual(90)
    game.play(10);
    expect(game.score).toEqual(120)
    game.play(10);
    expect(game.score).toEqual(150)
    game.play(10);
    expect(game.score).toEqual(180)
    game.play(10);
    expect(game.score).toEqual(210)
    game.play(10);
    expect(game.score).toEqual(240)
    game.play(10, 7, 3);
    expect(game.score).toEqual(287)
  });

  // describe('#scorecard', () => {
  //   it('should print the points correctly', function() {
  //     game.play(7, 3)
  //     expect(game.scorecard[0]).toEqual(null)
  //     game.play(10)
  //     expect(game.scorecard[0]).toEqual(20)
  //     expect(game.scorecard[1]).toEqual(null)
  //     game.play(3, 5)
  //     expect(game.scorecard[1]).toEqual(38)
  //   });
  // });

});
