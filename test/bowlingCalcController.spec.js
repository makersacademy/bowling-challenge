describe('BowlingCalcController', function() {
  beforeEach(module('BowlingCalc'));

  var bowl;

  beforeEach(inject(function($controller) {
    bowl = $controller('BowlingCalcController');
  }));
  
  describe('adding rolls', function(){

    it('initializes with no frames bowled', function(){
      expect(bowl.framesBowled).toEqual([])
    });

    it('entering rolls correctly populates the framesBowled', function(){
      bowl.addRoll(1)
      bowl.addRoll(1)
      bowl.addRoll(5)
      bowl.addRoll(5)
      bowl.addRoll(4)
      bowl.addRoll(2)
      expect(bowl.framesBowled).toEqual([{'roll1':1, 'roll2':1, 'score':2},
                                         {'roll1':5, 'roll2':5, 'score':16},
                                         {'roll1':4, 'roll2':2, 'score':22}])
    });
  });

  describe('handling bonuses', function(){

    it('adds a place holder for the score if a strike is bowled', function(){
      bowl.addRoll(10)
      expect(bowl.framesBowled).toEqual([{'roll1':10, 'score':'...'}])
    });

    it('adds a place holder for the score if a spare is bowled', function(){
      bowl.addRoll(5)
      bowl.addRoll(5)
      expect(bowl.framesBowled).toEqual([{'roll1':5, 'roll2':5, 'score':'...'}])
    });

    describe('on the next roll it removes the place holder ', function(){
      
      it('and scores correctly for a strike', function(){
        bowl.addRoll(10)
        bowl.addRoll(5)
        bowl.addRoll(4)
        bowl.addRoll(2)
        bowl.addRoll(3)
        expect(bowl.framesBowled).toContain({'roll1':10, 'score':19})
      });

      it('and scores correctly for a spare', function(){
        bowl.addRoll(7)
        bowl.addRoll(3)
        bowl.addRoll(4)
        bowl.addRoll(3)
        expect(bowl.framesBowled).toContain({'roll1':7,'roll2':3, 'score':14})
      });

    });
  });

});