describe('Frame', function () {

  var frame

  beforeEach(function () {
    frame = new Frame();
  });

  describe('object is constructed with', function () {
    it('a roll counter of 0', function () {
      expect(frame.rollCounter).toEqual(0);
    });

    it('a roll score of 0', function () {
      expect(frame.rollScore).toEqual(0);
    });
  });

  describe('increments on each roll', function () {
    it('the roll counter', function () {
      frame.recordRolls(2);
      expect(frame.rollCounter).toEqual(1);
    });

    it('the frame score', function () {
      frame.recordRolls(3);
      frame.recordRolls(4);
      expect(frame.rollScore).toEqual(7);
    });
  });

  describe('will not allow', function () {
    it('more than 2 rolls per frame', function () {
      frame.recordRolls(3);
      frame.recordRolls(4);
      expect(frame.recordRolls()).toEqual('2 rolls per frame');
    });

    it('a rollScore > 10', function () {
      frame.recordRolls(5);
      console.log(frame.rollScore);
      expect(frame.recordRolls(7)).toEqual('Score can not be greater than 10')
console.log(frame.rollScore);
    });

  });



});
