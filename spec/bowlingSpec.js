describe ("Bowling", function() {
  var bowling;
  var frame;
  var roll;

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe("#knockDown", function() {
    it("knocks the specified number of pins", function() {
      bowling.knockDown(5);
      expect(bowling.getCurrentFrame()).toBe(5);
    });

    it("generates an open frame", function() {
      bowling.knockDown(5);
      bowling.knockDown(4);
      expect(bowling.getCurrentFrame()).toBe(9);
    });

    it("generates a spare", function() {
      bowling.knockDown(6);
      bowling.knockDown(4);
      expect(bowling.getCurrentFrame()).toBe(10);
    });

    it("generates a strike", function() {
      bowling.knockDown(10);
      expect(bowling.getCurrentFrame()).toBe(10);
    });

    it("validates that a frame does not go over 10", function() {
      bowling.knockDown(8);
      expect(function() {
        bowling.knockDown(4);
      }).toThrowError('Invalid number of pins');
    });
  });
});
