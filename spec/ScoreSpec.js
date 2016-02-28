describe('Score', function(){
  var score;

  beforeEach(function(){
    score = new Score();
  });

  describe('#notify', function(){
    it('notifies of scoring a strike', function(){
      var notice = "Congratulations! You scored a strike!";
      expect(score.notify("strike")).toBe(notice);
    });
  });

  describe('#score', function(){
    it('calculates the score for a strike and 2 normal rolls', function(){
      this.rolls = [10, 3, 3];
      expect(score.score(3)).toBe(22);
    }); 
    it('calculates the score for a spare and 2 normal rolls', function(){
      this.rolls = [5, 5, 3, 3];
      expect(score.score(3)).toBe(19);
    }); 
    it('calculates the score for 2 normal rolls', function(){
      this.rolls = [5, 3];
      expect(score.score(2)).toBe(8);
    }); 
  });
});
