describe("Bowling", function(){
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
    frame = new Frame();
  });

  

    it("Player can make rolls", function() {
      bowling.roll(2)
      expect(bowling.CurrentFrame).toEqual([2])
      bowling.roll(3)
      expect(bowling.CurrentFrame).toEqual([2, 3])
    });

    it("knows, when a frame is full", function() {
      bowling.roll(2)
      bowling.roll(3)
      bowling.roll(6)
      expect(bowling.CurrentFrame).toEqual([6])
      expect(bowling.TotalScore).toEqual([[2, 3]])
    });

    it("Adds next frame's first roll as bonus to past frame's score when spare", function() {
      bowling.roll(2)
      bowling.roll(8)
      bowling.roll(5)
      expect(bowling.TotalScore).toEqual([[2, 8, 5]])
      expect(bowling.CurrentFrame).toEqual([5])
    });

});

 

 

