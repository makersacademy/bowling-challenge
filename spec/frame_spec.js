'use strict';

describe('Frame', function() {
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it('keeps score of the turn', function() {
    frame.addScore(8);
    expect(frame.score).toEqual(8);
  });

  it('knows when it is not over', function() {
    frame.addScore(5);
    expect(frame.isOver).toEqual(false);
  });

  it('knows when it is over', function() {
    frame.addScore(3);
    frame.addScore(3);
    expect(frame.isOver).toEqual(true);
  });

  it("can't take a third shot", function() {
    frame.addScore(3);
    frame.addScore(3);
    frame.addScore(3);
    expect(frame.score).toEqual(6);
  });

  it("knows it wasn't a strike", function() {
    frame.addScore(3);
    expect(frame.isStrike).toEqual(false);
  });

  it("knows it was a strike", function() {
    frame.addScore(10);
    expect(frame.isStrike).toEqual(true);
  });

  it("total score cannot be over 10", function() {
    frame.addScore(8);
    expect(function() { frame.addScore(4); }).toThrowError('Illegal Score')
  });

  it("knows it is not a spare", function() {
    frame.addScore(7);
    frame.addScore(2);
    expect(frame.isSpare).toEqual(false);
  });

  it("knows it is a spare", function() {
    frame.addScore(7);
    frame.addScore(3);
    expect(frame.isSpare).toEqual(true);
  });

});
