describe("Bowling Frame", function(){

  describe("Normal Frame", function(){
    it("Each frame is an array of two rolls", function(){
      var frame
      frame = new Frame([3,4])
      expect(frame._frame).toEqual([3,4]);
    });

    it("Responds false to the method .isSpare", function(){
      var frame
      frame = new Frame([3,4])
      expect(frame.isSpare()).toBe(false);
    });

    it("Responds false to the method .isStrike", function(){
      var frame
      frame = new Frame([3,4])
      expect(frame.isStrike()).toBe(false);
    });

    it("Frame total is equal to 7", function(){
      var frame
      frame = new Frame([3,4])
      expect(frame.frameTotal()).toEqual(7);
    });
  });

 describe("Strike", function(){
   it("When scoring a strike, 10 pins are knocked in first roll", function(){
     var frame
     frame = new Frame([10,0])
     expect(frame.firstRoll()).toEqual(10);
   });

   it("When scoring a strike, no pins are knocked in second roll", function(){
     var frame
     frame = new Frame([10,0])
     expect(frame.secondRoll()).toEqual(0);
   });

   it("Responds true to the method .isStrike", function(){
     var frame
     frame = new Frame([10,0])
     expect(frame.isStrike()).toEqual(true);
   });

   it("Frame total is equal to 10", function(){
     var frame
     frame = new Frame([10,0])
     expect(frame.frameTotal()).toEqual(10);
   });
 });

 describe("Spare", function(){
   it("When scoring a spare, pins are knocked in second roll", function(){
     var frame
     frame = new Frame([4,6])
     expect(frame.secondRoll()).toEqual(6);
   });

   it("Responds true to the method .isSpare", function(){
     var frame
     frame = new Frame([4,6])
     expect(frame.isSpare()).toBe(true);
   });

   it("Responds false if a strike is scored", function(){
     var frame
     frame = new Frame([10,0])
     expect(frame.isSpare()).toBe(false);
   });

   it("Frame total is equal to 10", function(){
     var frame
     frame = new Frame([4,6])
     expect(frame.frameTotal()).toEqual(10);
   });
 });

});
