describe("Bowl", function () {

  var bowl;

  beforeEach(function(){
    bowl = new Bowl();
  });

  describe('throw', function(){
    it('should return 6 with input 11', function(){
      expect(bowl.throw(11)).toEqual(5);
    });
    it('should return 7 with input -13', function(){
      expect(bowl.throw(-13)).toEqual(6);
    });
    it('should return 0 with input 20', function(){
      expect(bowl.throw(20)).toEqual(0);
    });
    it('should return 0 with input 0', function(){
      expect(bowl.throw(3)).toEqual(2);
    });
  });

  describe('knockDown', function() {
    it('should push pins to the hit pins array', function() {
      spyOn(Math, 'random').and.returnValue(0.5);
      bowl.knockDown(0);
      expect(bowl.pins[1]).toEqual('X');
    });
  });

  describe('domino', function() {
    it('should push pins to array and return score', function() {
      spyOn(Math, 'random').and.returnValue(0.5);
      bowl.throw(0);
      bowl.domino();
      expect(bowl.score()).toEqual(10);
    });
  });

  describe('runninng throw twice', function() {
    it('should be able to return score after two throws', function() {
      bowl.throw(0);
      spyOn(Math, 'random').and.returnValue(0.5);
      bowl.throw(5);
      bowl.domino();
      expect(bowl.score()).toEqual(10);
    });
  });

});
