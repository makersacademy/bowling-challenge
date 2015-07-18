describe ('Tenth Frame',function(){
  
  beforeEach(function(){
    frame10 = new tenthFrame;
    });
    it('can keep track of a score that isnt a strike',function(){
        frame10.scoreInput(3);
        expect(frame10.total).toBe(3);
      });

      it('can keep track of multiple scores', function() {
        frame10.scoreInput(3);
        frame10.scoreInput(6);
        expect(frame10.total).toBe(9);
      });

      it('returns "strike" when a score of 10 is entered', function(){
        expect(frame10.scoreInput(10)).toBe("strike!");
        expect(frame10.total).toBe(10);
      });

      it('has a strike status when a stike is scored', function() {
        frame10.scoreInput(10);
        expect(frame10.strike).toBe(true);
      });

      it('wont allow any more than two scores to be entered', function(){
        frame10.scoreInput(4);
        frame10.scoreInput(5);
        expect( function(){ frame10.scoreInput(6); } ).toThrow(new Error("The Frame is Full"));      
      });

      it('records the scores in the frame', function() {
        frame10.scoreInput(4);
        frame10.scoreInput(5);
        expect(frame10.scores).toEqual([4,5]);
      });

      it ('is full if a strike occurs', function() {
        frame10.scoreInput(10);
        expect(frame1.full).toBe(true);
      })

      it(' if all pins are knocked down in two balls, the spare status is true', function(){
        frame10.scoreInput(9);
        frame10.scoreInput(1);
        expect(frame10.strike).toBe(false);
        expect(frame10.spare).toBe(true);

    })


  it('allows a player to roll again after scoring a spair',function(){
    frame10.scoreInput(6);
    frame10.scoreInput(4);
    frame10.scoreInput(5);
    expect(frame10.total).toBe(15);
  });


});