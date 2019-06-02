describe('Frame', function() {
   var frame;

   beforeEach(function() {
      frame = new Frame();
   });

   describe('Defaults', function() {
      it("has a default total score of 0", function(){
         expect(frame.getTotalScore()).toEqual(0);
      })

      it("does not have stike by default", function(){
         expect(frame.hasStrike()).toEqual(false);
      })

      it("does not have spare by default", function(){
         expect(frame.hasSpare()).toEqual(false);
      })

      it('is not ended by default', function() {
         expect(frame.isEnded()).toEqual(false);
      })
   });
});