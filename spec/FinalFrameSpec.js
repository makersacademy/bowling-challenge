describe("FinalFrame", function() {

  beforeEach(function() {
    frame = new FinalFrame(roll, 9);
    Fakeroll1 = function(parameter) { return 10; };
    Fakeroll2 = function(parameter) { return 5; };
    Fakeroll3 = function(Paramter) { return 3; }
   });

   it("records the total score for the frame in question", function() {
     expect(frame.finalFrameScore).toEqual(0);
   });

   it("records the score after a first throw", function() {
     frame.takeTurn()
     expect(frame.rollOne).toEqual(jasmine.any(Number));
   });

   it("Records a strike if ten pins knocked down on the first throw", function() {
      frame = new FinalFrame(Fakeroll1, 9);
      frame.takeTurn()
      expect(frame.isStrike).toBe(true)
   });

   it("Records a spare if ten pins are knocked down over two throws", function() {
     frame = new FinalFrame(Fakeroll2, 9);
     frame.takeTurn(); frame.takeTurn();
     expect(frame.isSpare).toBe(true)
   });

   it("Records a final frame score after the second ball if total score is under 10", function() {
     frame = new FinalFrame(Fakeroll3, 9);
     frame.takeTurn(); frame.takeTurn();
     expect(frame.finalFrameScore).toEqual(6);
   });

   it("records the score after a third throw", function() {
     frame = new FinalFrame(Fakeroll2, 9);
     frame.takeTurn(); frame.takeTurn();frame.takeTurn()
     expect(frame.rollThree).toEqual(jasmine.any(Number));
   });

});
