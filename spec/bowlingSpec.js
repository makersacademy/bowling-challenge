'use strict';
describe('Player', function () {
  var player;
  var frames = 9;

  beforeEach(function () {
    player = new Player();
  });

  it('should be able to bowl the first roll and score 1 point', function () {
    player.roll1(1);
    expect(player.roll1Score).toEqual(1);
  });

  it('should be able to bowl the second roll and score 2 points', function () {
    player.roll1(1);
    player.roll2(2);
    expect(player.frameScore).toEqual(3);
  });

  it('should be able to bowl 2 rolls together', function () {
    player.bowl(1);
    expect(player.frameScore).toEqual(2);
  });

  it('should be able to bowl 2 turns together', function () {
    player.bowl(1);
    player.bowl(1);
    expect(player.score).toEqual(4);
  });

  it('should be able to bowl a spare', function () {
    player.bowl(5);
    expect(player.frameScore).toEqual(15);
    expect(player.spareFrameScore).toEqual(10);
    expect(player.score).toEqual(25);
  });


  it('should be able to bowl a strike', function () {
    player.bowl(10);
    expect(player.frameScore).toEqual(10);
    expect(player.strikeFrameScore).toEqual(40);
    expect(player.score).toEqual(50);
  });

  it('should reduce the number of frames by 1 when bowl method called', function () {
    player.bowl(1);
    expect(player.frames).toEqual(9);
  });

  it('expects the game to end when the frames === 0', function () {
    for (var i = 0; i <= 9; i++) {
      player.bowl(1);
    }

    expect(player.frames).toEqual(0);
    expect(player.finish()).toBe(true);
  });
});
