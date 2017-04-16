describe("Bowl", function () {

  var bowl;

  beforeEach(function(){
    bowl = new Bowl();
  });

  describe('throw', function(){
    it('should return 6 with input 11', function(){
      expect(bowl.throw(11, bowl.hitPinsRound1)).toEqual(6);
    });
    it('should return 7 with input -13', function(){
      expect(bowl.throw(-13, bowl.hitPinsRound1)).toEqual(7);
    });
    it('should return 0 with input 20', function(){
      expect(bowl.throw(20, bowl.hitPinsRound1)).toEqual(0);
    });
  });

  describe('knockDown', function() {
    it('should push pins to the hit pins array', function() {
      spyOn(Math, 'random').and.returnValue(0.5);
      bowl.knockDown(1, bowl.hitPinsRound1);
      expect(bowl.hitPinsRound1).toEqual([2, 3]);
    });
  });

  describe('domino', function() {
    it('should push pins to array and return score', function() {
      spyOn(Math, 'random').and.returnValue(0.5);
      bowl.throw(0, bowl.hitPinsRound1);
      bowl.domino(bowl.hitPinsRound1);
      expect(bowl.score(bowl.hitPinsRound1)).toEqual(10);
    });
  });

  describe('runninng throw twice', function() {
    it('should be able to return score after two throws', function() {
      bowl.throw(0, bowl.hitPinsRound1);
      spyOn(Math, 'random').and.returnValue(0.5);
      bowl.throw(5, bowl.hitPinsRound2);
      bowl.domino(bowl.hitPinsRound2);
      expect(bowl.score(bowl.hitPinsRound2)).toEqual(6);
    });
  });

});
