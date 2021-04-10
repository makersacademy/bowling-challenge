describe("Bowling", function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe('roll', function() {
    it("creates a new frame for the first frame", function() {
      bowling.roll(2);
      expect(bowling.frames).not.toEqual([])
    });
    it("updates the number of pins knocked down in the Frame's score", function() {
      bowling.roll(2);
      expect(bowling.frames[0].scores).toEqual([2])
    });
    it("creates a new frame after two rolls on the first frame", function() {
      bowling.roll(2);
      bowling.roll(2);
      expect(bowling.frames[0].scores).toEqual([2,2])
      bowling.roll(2);
      expect(bowling.frames[1].scores).toEqual([2])
    });
    it('Updates bonus points, if the previous frame is a spare', () => {
      bowling.roll(5);
      bowling.roll(5);
      expect(bowling.frames[0].scores).toEqual([5,5])
      bowling.roll(4);
      bowling.roll(4);
      expect(bowling.frames[0].scores).toEqual([5,5,4])
    });
    it('Strikes create a new frame', () => {
      bowling.roll(10);
      bowling.roll(5);
      expect(bowling.frames[0].scores).toEqual([10, 5])
      expect(bowling.frames[1].scores).toEqual([5])
    });
    it('Updates bonus points for strikes', () => {
      bowling.roll(10);
      bowling.roll(5);
      bowling.roll(2);
      expect(bowling.frames[0].scores).toEqual([10, 5, 2])
    });
    it('Updates bonus scores for strikes and spares', () => {
      bowling.roll(5);
      bowling.roll(5);
      bowling.roll(10);
      bowling.roll(5);
      bowling.roll(5);
      expect(bowling.frames[0].scores).toEqual([5, 5, 10])
      expect(bowling.frames[1].scores).toEqual([10, 5, 5])
    });
    it('Updates the score for consecuitive strikes', () => {
      bowling.roll(10);
      bowling.roll(10);
      bowling.roll(10);
      bowling.roll(10);
      bowling.roll(10);
      expect(bowling.frames[0].scores).toEqual([10, 10, 10])
      expect(bowling.frames[1].scores).toEqual([10, 10, 10])
      expect(bowling.frames[2].scores).toEqual([10, 10, 10])
    });
  });
});
