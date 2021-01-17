'use strict';

describe('Scorecard', function() {
  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it('starts with empty scorecard', function() {
    expect(scorecard.getFrames()).toEqual([]);
  });

  it('hold rolls in current frame until frame complete', function() {
    scorecard.roll(3)

    expect(scorecard.getCurrentFrame()).toEqual([3])
  });

  it('saves rolls as frames and stores together', function() {
    scorecard.roll(3)
    scorecard.roll(4)
    scorecard.roll(2)
    scorecard.roll(5)

    expect(scorecard.getFrames()).toEqual([[3, 4], [2, 5]])
  });

  it('adds points to total once frame is complete', function() {
    scorecard.roll(3)
    scorecard.roll(4)
    scorecard.roll(2)
    scorecard.roll(5)

    expect(scorecard.getTotal()).toEqual(14)
  });

  it('saves strike in frame alone', function() {
    scorecard.roll(10)

    expect(scorecard.getFrames()).toEqual([[10]])
  })

  it('gives bonus for one strike - next two rolls doubled', function() {
    scorecard.roll(10)
    scorecard.roll(2)
    scorecard.roll(6)

    expect(scorecard.getTotal()).toEqual(26)
  });

  it('gives bonus for spare - next roll doubled', function() {
    scorecard.roll(5)
    scorecard.roll(5)
    scorecard.roll(2)
    scorecard.roll(6)

    expect(scorecard.getTotal()).toEqual(20)
  })

  it('gives bonus for double strike - two rolls after strikes doubles', function() {
    scorecard.roll(10)
    scorecard.roll(10)
    scorecard.roll(2)
    scorecard.roll(6)

    expect(scorecard.getTotal()).toEqual(48)
  })

  it('works with ten frames', function() {
    scorecard.roll(1)
    scorecard.roll(4)
    scorecard.roll(4)
    scorecard.roll(5)
    scorecard.roll(6)
    scorecard.roll(4)
    scorecard.roll(5)
    scorecard.roll(5)
    scorecard.roll(10)
    scorecard.roll(0)
    scorecard.roll(1)
    scorecard.roll(7)
    scorecard.roll(3)
    scorecard.roll(6)
    scorecard.roll(4)
    scorecard.roll(10)
    scorecard.roll(2)
    scorecard.roll(4)

    expect(scorecard.getTotal()).toEqual(119)
  })

  it('gives 0 for gutterball', function() {
    scorecard.roll(0)
    scorecard.roll(0)
    scorecard.roll(0)
    scorecard.roll(0)
    scorecard.roll(0)
    scorecard.roll(0)
    scorecard.roll(0)
    scorecard.roll(0)
    scorecard.roll(0)
    scorecard.roll(0)
    scorecard.roll(0)
    scorecard.roll(0)
    scorecard.roll(0)
    scorecard.roll(0)
    scorecard.roll(0)
    scorecard.roll(0)
    scorecard.roll(0)
    scorecard.roll(0)
    scorecard.roll(0)
    scorecard.roll(0)

    expect(scorecard.getTotal()).toEqual(0)
  })

  it('tenth frame bonus - test with spare', function() {
    scorecard.roll(1)
    scorecard.roll(4)
    scorecard.roll(4)
    scorecard.roll(5)
    scorecard.roll(6)
    scorecard.roll(4)
    scorecard.roll(5)
    scorecard.roll(5)
    scorecard.roll(10)
    scorecard.roll(0)
    scorecard.roll(1)
    scorecard.roll(7)
    scorecard.roll(3)
    scorecard.roll(6)
    scorecard.roll(4)
    scorecard.roll(10)
    scorecard.roll(2)
    scorecard.roll(8)
    scorecard.roll(6)

    expect(scorecard.getTotal()).toEqual(133)
  })

  it('tests a perfect game', function() {
    scorecard.roll(10)
    scorecard.roll(10)
    scorecard.roll(10)
    scorecard.roll(10)
    scorecard.roll(10)
    scorecard.roll(10)
    scorecard.roll(10)
    scorecard.roll(10)
    scorecard.roll(10)
    scorecard.roll(10)
    scorecard.roll(10)
    scorecard.roll(10)

    expect(scorecard.getTotal()).toEqual(300)
  })
})
