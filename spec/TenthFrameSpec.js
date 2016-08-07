describe('TenthFrame', function(){
  var tenthFrame;

  beforeEach(function(){
    tenthFrame = new TenthFrame();
  });

  it('The tenth frame begins with 10 pinsStanding', function(){
    expect(tenthFrame.getPinsStanding()).toEqual(10);
  });

  describe('#rollOne', function(){
    it('Updates the number of knocked over pins after roll', function(){
      spyOn(Math, "random").and.returnValue(0.49);
      tenthFrame.rollOne();
      expect(tenthFrame.knockedPinsOne).toEqual(5);
    });
    it('Updates the number of standing pins after roll with no strike', function(){
      spyOn(Math, "random").and.returnValue(0.49);
      tenthFrame.rollOne();
      expect(tenthFrame.getPinsStanding()).toEqual(5);
    });
    it('Resets the pinsStanding to 10 if a strike is rolled', function(){
      spyOn(Math, "random").and.returnValue(0.99);
      tenthFrame.rollOne();
      expect(tenthFrame.getPinsStanding()).toEqual(10);
    });

    describe('#rollTwo', function(){
      it('Updates the number of knocked over pins after roll', function(){
        spyOn(Math, "random").and.returnValue(0.49);
        tenthFrame.rollTwo();
        expect(tenthFrame.knockedPinsTwo).toEqual(5);
      });
      it('Updates the number of standingPins after roll', function(){
        spyOn(Math, "random").and.returnValue(0.49);
        tenthFrame.rollTwo();
        expect(tenthFrame.getPinsStanding()).toEqual(5);
      });
    });

    describe('#rollThree', function(){
      it('Resets the pins so 10 are standing again', function(){
        tenthFrame.rollTwo();
        spyOn(Math, "random").and.returnValue(0);
        tenthFrame.rollThree();
        expect(tenthFrame.getPinsStanding()).toEqual(10);
      });
      it('Updates the number of knocked over pins after roll', function(){
        spyOn(Math, "random").and.returnValue(0.49);
        tenthFrame.rollThree();
        expect(tenthFrame.knockedPinsThree).toEqual(5);
      });
    });
  });

  describe('#playTenthFrame', function(){
    it('Returns the pins knocked down in "all three" frames when opening with two strikes', function(){
      spyOn(Math, "random").and.returnValue(0.99);
      expect(tenthFrame.playTenthFrame()).toEqual([10,10,10]);
    });
    it('Returns the pins knocked down in "all three" frames even if no 3rd roll is played', function(){
      spyOn(Math, "random").and.returnValue(0.49);
      expect(tenthFrame.playTenthFrame()).toEqual([5,2,0]);
    });
  });

});
