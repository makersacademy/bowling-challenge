describe('Frame', function() {

  var frame1;

  beforeEach(function() {
    frame1 = new Frame(1);
  });

  it('returns frame number', function() {
    expect(frame1.framenumber).toBe(1);
  });

  it('starts with roll number zero', function() {
    expect(frame1.rollnumber()).toBe(0);
  });


  describe('_addrollnumber', function() {

    it('can add to roll number', function() {
      frame1._addrollnumber();
      expect(frame1.rollnumber()).toBe(1);
    });
  });

  describe('_addscorerole1', function() {

    it('can add to score', function() {
      frame1._addscorerole1(6);
      expect(frame1.scorerole1()).toBe(6);
    });
  });

  describe('_addscorerole2', function() {

    it('can add to score', function() {
      frame1._addscorerole2(3);
      expect(frame1.scorerole2()).toBe(3);
    });
  });

  describe('addroll', function() {

    beforeEach(function() {
      frame1.addroll(6);
    });

    it('now has scorerole1 of 6', function() {
      expect(frame1.scorerole1()).toBe(6);
    });

    it('now has roll number 1', function() {
      expect(frame1.rollnumber()).toBe(1)
    });
  });

  describe('adding second role', function() {

    beforeEach(function() {
      frame1.addroll(3);
      frame1.addroll(6);
    });

    it('now has roll number 2', function() {
      expect(frame1.rollnumber()).toBe(2)
    });

  });

});
