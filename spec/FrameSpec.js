describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('starts with 10 pins standing', function() {
    expect(frame.pinCount).toEqual(10);
  });

  it('has 2 rolls per frame', function() {
    frame.knockDown(7);
    frame.knockDown(2);
    expect(frame.totalOfRolls).toEqual([7, 2]);
  });

  it('each roll has a number of knocked down pins', function() {
    frame.knockDown(9);
    expect(frame.totalOfRolls[0]).toEqual(9);
  });

  it('doesn\'t allow more than 2 rolls', function() {
    frame.knockDown(1);
    frame.knockDown(1);
    expect(function() { frame.knockDown(1); }).toThrowError('Not allowed to throw again!');
  });

  describe('when player hits a strike:', function() {

    it('there are no pins standing', function() {
      frame.knockDown(10);
      expect(frame.pinCount).toEqual(0);
    });

    it('scores 10 points', function() {
      frame.knockDown(10);
      expect(frame.score).toEqual(10);
    });

    it('they are only allowed one roll', function() {
      frame.knockDown(10);
      expect(function() { frame.knockDown(2); }).toThrowError('All the pins are down!');
    });

  });

});
