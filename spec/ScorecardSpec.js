describe('Scorecard', function(){

  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard();
  });

  describe('can see scores', function(){

    it('running total starts at zero', function(){
        expect(scorecard.runningTotal).toBeNull();
    });

    it('frame total starts at zero', function(){
        expect(scorecard.frameTotal).toBeNull();
    });

    it('frame total can be updated', function(){
        scorecard.roll(1, 1)
        expect(scorecard.frameTotal).toBe(2);
    });

    it('cannot score more than 10 points for first roll', function(){
        expect(function() { scorecard.roll(11, 0) }).toThrow(new Error("can't score more than 10!"));
    });

    it('cannot score more than 10 points for second roll', function(){
        expect(function() { scorecard.roll(0, 11) }).toThrow(new Error("can't score more than 10!"));
    });

    it('frame total is null if player roll total is 10 or player has a strike', function(){
        scorecard.roll(1, 9)
        expect(scorecard.frameTotal).toBeNull();
    });

    it('', function(){

    });
  });
});
