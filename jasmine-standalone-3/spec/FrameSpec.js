describe('Frame', function() {

  var frame1;

  beforeEach(function() {
    frame1 = new Frame(0);
  });

  it('returns frame number', function() {
    expect(frame1.framenumber).toBe(0);
  });

  it('starts with roll number zero', function() {
    expect(frame1.rollnumber).toBe(0);
  });

  describe('addroll', function() {

    beforeEach(function() {
      frame1.addroll(6);
    });

    it('now has scoreroll1 of 6', function() {
      expect(frame1.scoreroll1).toBe(6);
    });

    it('now has roll number 1', function() {
      expect(frame1.rollnumber).toBe(1);
    });
  });

  describe('adding second role', function() {

    beforeEach(function() {
      frame1.addroll(6);
      frame1.addroll(3);
    });

    it('now has roll number 2', function() {
      expect(frame1.rollnumber).toBe(2);
    });

    it('now has scoreroll2 of 3', function() {
      expect(frame1.scoreroll2).toBe(3);
    });

    it('returns Frame complete if add 3rd roll', function() {
      expect(frame1.addroll(1)).toBe('Frame Complete');
    });
  });

  describe('when strike rolled', function() {

    beforeEach(function() {
      frame1.addroll(10);
    });

    it('now has roll number 2', function() {
      expect(frame1.rollnumber).toBe(2);
    });

  });

  describe('tenth frame behavior', function() {

    var frame10

    beforeEach(function() {
      frame10 = new Frame(9);
    });

    it("allows second roll if strike is rolled", function() {
      frame10.addroll(10);
      frame10.addroll(8);
      expect(frame10.scoreroll2).toBe(8);
    });

    it("second roll can proceed if no strike rolled", function() {
     frame10.addroll(2);
     frame10.addroll(4);
     expect(frame10.scoreroll2).toBe(4);
    });

    it("allows third roll if two strikes are rolled", function() {
      frame10.addroll(10);
      frame10.addroll(10);
      frame10.addroll(10);
      expect(frame10.scoreroll3).toBe(10);
    });

    it("allows third roll if half strike", function() {
      frame10.addroll(5);
      frame10.addroll(5);
      frame10.addroll(10);
      expect(frame10.scoreroll3).toBe(10);
    });

    it("returns frame complete if rolls finished", function() {
      frame10.addroll(7);
      frame10.addroll(2);
      expect(frame10.addroll(4)).toBe('Frame Complete');
    });
  });
});
