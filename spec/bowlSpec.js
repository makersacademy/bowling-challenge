describe("Bowl", function () {

  var bowl;

  beforeEach(function(){
    bowl = new Bowl();
  });

  describe('throw', function(){
    it('should return 6 with input 11', function(){
      spyOn(Math, 'random').and.returnValue(1);
      expect(bowl.throw()).toEqual(9);
    });
    it('should return 7 with input -13', function(){
      spyOn(Math, 'random').and.returnValue(0.475);
      expect(bowl.throw()).toEqual(0);
    });
    it('should return 0 with input 0', function(){
      spyOn(Math, 'random').and.returnValue(0.501);
      expect(bowl.throw()).toEqual(0);
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
      spyOn(Math, 'random').and.returnValue(0);
      bowl.throw();
      bowl.domino();
      expect(bowl.score()).toEqual(1);
    });
  });

  describe('runninng throw twice', function() {
    it('should be able to return score after two throws', function() {
      spyOn(Math, 'random').and.returnValue(0);
      bowl.throw();
      bowl.throw();
      bowl.domino();
      expect(bowl.score()).toEqual(1);
    });
  });

});
