describe('bowlingScore', function (){

  beforeEach(function(){
    frame1 = new frame();
    });

  describe('a frame',function(){
   
      it('can keep track of a score that isnt a strike',function(){
        frame1.scoreInput(3);
        expect(frame1.total).toBe(3);
      });

      it('can keep track of multiple scores', function() {
        frame1.scoreInput(3);
        frame1.scoreInput(7);
        expect(frame1.total).toBe(10);
      });

      it('returns "strike" when a score of 10 is entered', function(){
        expect(frame1.scoreInput(10)).toBe("strike!");
        expect(frame1.total).toBe(10);
      });

      it('has a strike status when a stike is scored', function() {
        frame1.scoreInput(10);
        expect(frame1.strike).toBe(true);
      });
    });

});

  
