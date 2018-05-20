describe('Scoring', function(){
  var scoring;
  beforeEach(function(){
    bowl = jasmine.createSpyObj('bowl', ['roll', 'isSpare', 'isStrike'],);
    bowl.isSpare.and.callFake(function() {
    return false;
      });
    bowl.isStrike.and.callFake(function() {
      return false;
      });
    bowl.roll1 = 2
    bowl.roll2 = 5
    strike = jasmine.createSpyObj('strike', ['roll', 'isSpare', 'isStrike'],);
    strike.isSpare.and.callFake(function() {
    return false;
      });
    strike.isStrike.and.callFake(function() {
    return true;
      });
    strike.roll1 = 10
    strike.roll2 = 0
    spare = jasmine.createSpyObj('spare', ['roll', 'isSpare', 'isStrike'],);
    spare.isSpare.and.callFake(function() {
    return true;
      });
    spare.isStrike.and.callFake(function() {
        return false;
      });
    spare.roll1 = 5
    spare.roll2 = 5
    scoring = new Scoring(bowl);
  });



  describe('scoreArray', function(){
    it('starts with a empty array', function(){
      expect(scoring.scoreArray).toEqual([])
    });
  });

  describe('rollArray', function(){
    it('starts with a empty array', function(){
      expect(scoring.scoreArray).toEqual([])
    });
  });

  describe('#turn', function(){
    it('pushes the roll into the rollArray', function(){
      scoring.turn(2,5)
      expect(scoring.rollArray.length).toEqual(1)
    });

    it('expect first score to be 7', function(){
      scoring.turn(3,5)
      expect(scoring.scoreArray[0]).toEqual(7)
    });
  });
  describe('#reset', function(){
    it('resets the roll object', function(){
      scoring.reset('newroll')
      expect(scoring.bowl).toEqual('newroll')
    });
    it('resets', function(){
      scoring.reset(spare)
      scoring.reset(bowl)
      expect(scoring.bowl.roll1).toEqual(2)
    });
  });
  describe('spare score check', function(){
    it('scores the first score adding the first roll', function(){
      scoring.reset(spare)
      scoring.turn()
      scoring.reset(bowl)
      scoring.turn()
      expect(scoring.scoreArray[0]).toEqual(12)
      expect(scoring.scoreArray[1]).toEqual(7)
    });
    it('checking various rolls', function(){
      scoring.reset(spare)
      scoring.turn()
      scoring.turn()
      scoring.turn()
      scoring.reset(bowl)
      scoring.turn()
      expect(scoring.scoreArray[0]).toEqual(15)
      expect(scoring.scoreArray[1]).toEqual(15)
      expect(scoring.scoreArray[2]).toEqual(12)
      expect(scoring.scoreArray[3]).toEqual(7)
    });
  });

  describe('strike score check', function(){
    it('checks for score after one strike', function(){
      scoring.reset(strike)
      scoring.turn()
      scoring.reset(bowl)
      scoring.turn()
      expect(scoring.scoreArray[0]).toEqual(17)
    });
    it('checks for score after two strikes', function(){
      scoring.reset(strike)
      scoring.turn()
      scoring.turn()
      scoring.reset(bowl)
      scoring.turn()
      expect(scoring.scoreArray[0]).toEqual(22)
      expect(scoring.scoreArray[1]).toEqual(17)
    });
    it('checks for score after three strikes', function(){
      scoring.reset(strike)
      scoring.turn()
      scoring.turn()
      scoring.turn()
      scoring.reset(spare)
      scoring.turn()
      expect(scoring.scoreArray[0]).toEqual(30)
      expect(scoring.scoreArray[1]).toEqual(25)
      expect(scoring.scoreArray[2]).toEqual(20)
    });
    it('checks for score after four strikes', function(){
      scoring.reset(strike)
      scoring.turn()
      scoring.turn()
      scoring.turn()
      scoring.turn()
      scoring.reset(spare)
      scoring.turn()
      expect(scoring.scoreArray[0]).toEqual(30)
      expect(scoring.scoreArray[1]).toEqual(30)
      expect(scoring.scoreArray[2]).toEqual(25)
      expect(scoring.scoreArray[3]).toEqual(20)
    });
  });
});
