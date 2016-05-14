/*globals Frame */
describe("Frame",function() {
  "use strict"
  var frame;



  describe('Access to rolls on a frame, ',function(){
    it('On gutter frame, rolls 1 and 2 are zero',function() {
      frame = new Frame(0,0);
      expect(frame.getRoll(1)).toEqual(0);
      expect(frame.getRoll(2)).toEqual(0);
    });
  });

  describe('Scores, ', function(){
    it("strike score is 10", function(){
      frame = new Frame(10);
      expect(frame.getScore()).toEqual(10);
    });

    it("first roll 3, second roll 5 gives score of 8",function(){
      frame  = new Frame(3,5);
      expect(frame.getScore()).toEqual(8);
    });
  });

  describe('Frame type, ', function(){
    it("with first roll 10, frame is strike", function(){
      frame = new Frame(10);
      expect(frame.getType()).toEqual('strike');
    });

    it("first roll 3, second roll 7, frame is spare",function(){
      frame  = new Frame(3,7);
      expect(frame.getType()).toEqual('spare');
    });
  });
});