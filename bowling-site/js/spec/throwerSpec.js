describe('Thrower',function(){
  var thrower;
  var normalThrowScore = 7
  beforeEach(function(){
    thrower = new Thrower();
  });

  describe('Initalize',function(){
    it('defaults to full frame',function(){
      expect(thrower.pinsLeft).toEqual(10);
    });
  });

  describe('#go', function(){
    it('uses Math.random to return a number between 1 and 10', function(){
      spyOn(Math,'random');
      thrower.throw();
      expect(Math.random).toHaveBeenCalled();
    });
    it("Can't return a number greater than the amount of pins left", function(){
      spyOn(Math,'random').and.returnValue(0.99);
      thrower.pinsLeft = normalThrowScore
      expect(thrower.throw()).toEqual(normalThrowScore);
    });
  });

  describe('#updatePins',function(){
    it('changes the number of pins when called',function(){
        thrower.updatePins(normalThrowScore)
        expect(thrower.pinsLeft).toEqual(10-normalThrowScore)
    });
  });

  describe('#resetPins',function(){
    it('sets the pins back to 10',function(){
      this.pinsLeft = 5
      thrower.resetPins()
      expect(thrower.pinsLeft).toEqual(10);
    });
  });

});
