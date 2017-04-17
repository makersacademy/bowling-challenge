
describe('FrameTerminator', function(){

  // HELPERS
  function spare(){
    frameState.throw1 = 5;
    frameState.throw2 = 5;
  }
  function strike(){
    frameState.throw1 = 10;
  }
  function normalThrow(){
    frameState.throw1 = 3;
    frameState.throw2 = 5;
  }
  beforeEach(function(){
    frameTerminator = new FrameTerminator();

    frameState = {
      framesFinished: 0,
      throwsMade: 0,
      throw1: 0,
      throw2: 0,
      throw3: 0
    }
  });


  describe('#isFrameOver',function(){

    it('receives a state object and stores them all in attributes for class wide use', function(){
      frameState.framesFinished = 2;
      frameState.throwsMade = 2;
      frameState.throw1 = 2;
      frameState.throw2 = 2;
      frameState.throw3 = 2;

      frameTerminator.isFrameOver(frameState);

      expect(frameTerminator.framesFinished).toEqual(2);
      expect(frameTerminator.throwsMade).toEqual(2);
      expect(frameTerminator.throw1).toEqual(2);
      expect(frameTerminator.throw2).toEqual(2);
      expect(frameTerminator.throw3).toEqual(2);

    })

    describe('Context: Rounds 1 - 9', function(){
      it('ends the round after two throws', function(){
        frameState.throwsMade = 2;
        expect(frameTerminator.isFrameOver(frameState)).toEqual(true);
      });

      it('ends the round after a strike in throw 1', function(){
        frameState.throwsMade = 1;
        frameState.throw1 = 10;
        expect(frameTerminator.isFrameOver(frameState)).toEqual(true);

      });
      it("doesn't end the round after non-strike throw 1", function(){
        frameState.throwsMade=1;
        frameState.throw1 =5;
        expect(frameTerminator.isFrameOver(frameState)).toEqual(false)
      });

    });

    describe('Context: Frame 10', function(){
      beforeEach(function(){
        frameState.framesFinished = 9
      });
      describe('Context: Throw 1:', function(){
        beforeEach(function(){
          frameState.throwsMade=1;
        });

        it("Doesn't end the round after throw 1 with strike",function(){
          frameState.throw1=10;
          expect(frameTerminator.isFrameOver(frameState)).toEqual(false)
        });
        it("Doesn't end the round after throw 1 without strike",function(){
          frameState.throw1=5;
          expect(frameTerminator.isFrameOver(frameState)).toEqual(false)
        });
      });
      describe('Context: Throw 2:', function(){

        beforeEach(function(){
          frameState.throwsMade=2;
        });

        it("Ends round after two throws if there are no strikes or spares", function(){
          frameState.throw1=5;
          frameState.throw2=3;
          expect(frameTerminator.isFrameOver(frameState)).toEqual(true);
        });

        it("Doesn't end if there is a spare", function(){
          frameState.throw1=5;
          frameState.throw2=5;
          expect(frameTerminator.isFrameOver(frameState)).toEqual(false);
        });


        it("Doesn't end if there is a strike", function(){
          frameState.throw1=0;
          frameState.throw2=10;
          expect(frameTerminator.isFrameOver(frameState)).toEqual(false);
        });

        it("Ends on throw 3 always", function(){
          frameState.throwsMade=3;
          frameState.throw1=5;
          frameState.throw2=5;
          frameState.throw3=5
          expect(frameTerminator.isFrameOver(frameState)).toEqual(true);
        });
    });
    });
  });


});
