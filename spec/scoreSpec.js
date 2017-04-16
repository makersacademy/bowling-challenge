describe("Score", function(){

  var score;
  beforeEach(function() {
    score = new Score();
  });

  describe('roll counting', function(){

    it('it can roll', function(){
      expect(score.rolls.length).not.toEqual(0);
    });

    it('it can hit pins', function(){
      score.rolls[0].ball(4)
      expect(score.isNormal()).toEqual(4);
    });

    it('it can total pins hit', function(){
      score.rolls[0].ball(4)
      score.rolls[1].ball(3)
      expect(score.isNormal()).toEqual(7);
    });

    it('knows if it is a strike', function(){
      score.rolls[0].ball(10)
      expect(score.isStrike()).toBe(true);
    });

    it('knows if it is a spare', function(){
      score.rolls[0].ball(5)
      score.rolls[1].ball(5)
      expect(score.isSpare()).toBe(true);
    });
  });
});