'use script';

describe('Bowling', function() {

  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe('initially', function() {
    it('starts at 0 points', function() {
      expect(bowling.getCurrentScore()).toEqual(0);
    });

    it('starts at frame 1', function() {
      expect(bowling.getCurrentFrame()).toEqual(1);
    })
  });

  it('increases score with add()', function() {
    bowling.add(1);
    expect(bowling.getCurrentScore()).toEqual(1);
  });
});
