describe("Feature", function(){
  var bowling;
  var score;

  beforeEach(function(){
    score = new Score;
    bowling = new Bowling(score);
  });

  describe("score patterns:", function(){

    it("strike, strike", function(){
      bowling.pinsHit(10);
      bowling.pinsHit(10);
      expect(bowling.calculateScore()).toEqual(0);
    });

    it("strike, strike, normal", function(){
      bowling.pinsHit(10);
      bowling.pinsHit(10);
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      expect(bowling.calculateScore()).toEqual(49);
    });

    it("strike, strike, strike, normal", function(){
      bowling.pinsHit(10);
      bowling.pinsHit(10);
      bowling.pinsHit(10);
      bowling.pinsHit(5);
      bowling.pinsHit(2);
      expect(bowling.calculateScore()).toEqual(79);
    });

  });

});
