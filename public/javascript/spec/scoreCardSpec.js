'use strict';

describe('Scorecard', function() {

  var scorecard;
  var first;
  var second

  beforeEach(function() {
    scorecard = new Scorecard();
    first = new Frame();
    second = new Frame();
  })

  it('gets an empty scorecard', function() {
    expect(scorecard.getCurrentTotal()).toEqual(0)
  })

  it('adds a score from one frame and updates total', function() {
    first.add(5, 3)
    scorecard.add(first)
    expect(scorecard.getCurrentTotal()).toEqual(8)
  })

  it('is frame one by default', function() {
    expect(scorecard.frame).toEqual(1)
  })

  it('knows which frame it is in', function() {
    first.add(5, 3)
    scorecard.add(first)
    expect(scorecard.getCurrentTotal()).toEqual(8)
    expect(scorecard.frame).toEqual(2)
    second.add(2, 6)
    scorecard.add(second)
    expect(scorecard.getCurrentTotal()).toEqual(16)
    expect(scorecard.frame).toEqual(3)
  })

  it('adds the relevant bonus if player gets a strike', function() {
    first.add(10, 0)
    scorecard.add(first)
    expect(scorecard.getCurrentTotal()).toEqual(10)
    expect(scorecard.frame).toEqual(2)
    second.add(2, 6)
    scorecard.add(second)
    expect(scorecard.getCurrentTotal()).toEqual(26)
    expect(scorecard.frame).toEqual(3)
  })

  it('adds the relevant bonus if player gets a spare', function() {
    first.add(8, 2)
    scorecard.add(first)
    expect(scorecard.getCurrentTotal()).toEqual(10)
    expect(scorecard.frame).toEqual(2)
    second.add(2, 6)
    scorecard.add(second)
    expect(scorecard.getCurrentTotal()).toEqual(20)
    expect(scorecard.frame).toEqual(3)
  })
});
