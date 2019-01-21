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

  it('starts with score zero', function() {
    expect(frame1.score).toBe(0);
  });

  describe('_addrollnumber', function() {

    it('can add add to roll number', function() {
      frame1._addrollnumber();
      expect(frame1.rollnumber()).toBe(1);
    });
  });

  /*describe('addroll'), function() {

    beforeEach(function() {
      frame1.addroll;
    });

  it('now has score of 1', function() {
    expet


  });*/

});
