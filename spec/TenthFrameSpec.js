describe('TenthFrame', function(){
  var tenthFrame;

  beforeEach(function(){
    tenthFrame = new TenthFrame();
  });

  it('The tenth frame is initialized as incomplete', function(){
    expect(tenthFrame.isFrameFinished()).toEqual(false);
  });
  it('The tenth frame begins with 10 pinsStanding', function(){
    expect(tenthFrame.getPinsStanding()).toEqual(10);
  });
  it('The tenth frame begins with roll 1', function(){
    expect(tenthFrame.getRollNumber()).toEqual(1);
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
    it('Increments the roll number to 2 after roll 1', function(){
      tenthFrame.rollOne();
      expect(tenthFrame.getRollNumber()).toEqual(2);
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
      it('Increments the roll number to 3 if a strike or spare is rolled', function(){
        spyOn(Math, "random").and.returnValue(0.99);
        tenthFrame.rollTwo();
        expect(tenthFrame.getRollNumber()).toEqual(3);
      });
    });

    describe('#rollThree', function(){
      it('Updates the number of knocked over pins after roll', function(){
        spyOn(Math, "random").and.returnValue(0.49);
        tenthFrame.rollThree();
        expect(tenthFrame.knockedPinsThree).toEqual(5);
      });
    });
  });


  // describe('#playTenthFrame', function(){
  //   it('Returns the pins knocked down in "all three" frames when opening with two strikes', function(){
  //     spyOn(Math, "random").and.returnValue(0.99);
  //     expect(frame.playTenthFrame()).toEqual([10,10,10]);
  //   });
  //   it('Returns the pins knocked down in "all three" frames when opening with a spare', function(){
  //     spyOn(Math, "random").and.returnValue(0.49);
  //     expect(frame.playTenthFrame()).toEqual([5,2,0]);
  //   });
  // });

});
