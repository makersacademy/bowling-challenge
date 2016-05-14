describe("Frame",function() {
  "use strict"
  var frame;



  describe('On Gutter frame, ',function(){
    it('rolls 1 and 2 are zero',function() {
      frame = new Frame(0,0);
      expect(frame.getRoll(1)).toEqual(0);
      expect(frame.getRoll(2)).toEqual(0);
    });
  });

  describe('Other games', function(){
    it("strike score is 10", function(){
      frame = new Frame(10);
      expect(frame.getScore()).toEqual(10);
    });
  });

  // describe('Rolls can be set, ',function(){
  //   it('roll 1 can be set to 7',function() {
  //     frame.addRoll(1,7);
  //     expect(frame.getRoll(1)).toEqual(7);
  //   });
  // });


});