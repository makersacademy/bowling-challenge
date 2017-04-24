describe("Bowl", function () {

  var bowl;

  beforeEach(function(){
    bowl = new Bowl();
  });

  describe('throw', function(){
    it('should return 6 with input 11', function(){
      spyOn(window, "prompt").and.returnValue("11");
      expect(bowl.throw()).toEqual(5);
    });
    it('should return 7 with input -13', function(){
      spyOn(window, "prompt").and.returnValue("-13");
      expect(bowl.throw()).toEqual(6);
    });
    it('should return 0 with input 0', function(){
      spyOn(window, "prompt").and.returnValue("0");
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
      spyOn(Math, 'random').and.returnValue(0.5);
      spyOn(window, "prompt").and.returnValue("0");
      bowl.throw();
      bowl.domino();
      expect(bowl.score()).toEqual(10);
    });
  });

  describe('runninng throw twice', function() {
    it('should be able to return score after two throws', function() {
      spyOn(window, "prompt").and.returnValue("0");
      bowl.throw();
      bowl.throw();
      spyOn(Math, 'random').and.returnValue(0.5);
      bowl.domino();
      expect(bowl.score()).toEqual(10);
    });
  });

});
