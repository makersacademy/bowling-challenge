describe('Bowling', function(){

  beforeEach(function(){
    bowling = new Bowling()
    array = [0,1,2,3,4,5,6,7,8,9,10];
    spyOn(Math,'random').and.returnValue(0.5);
  })

  describe('randomBowl', function(){
    it('produces a number from 0 to 10', function(){
      expect(array).toContain(_randomBowl())
    });
  });

  // describe('Bowling', function(){
  //   it('it is initiated with four variables with a value of zero', function(){
  //
  //     expect(bowling.firstBowl).toEqual(0)
  //     expect(bowling.secondBowl).toEqual(0)
  //     expect(bowling.extraBowl).toEqual(0)
  //     expect(bowling.strikeBowl).toEqual(0)
  //   });
  // });

  describe('#frame', function(){
    it('sets firstBowl to a random number', function(){
      bowling.frame()
      expect(array).toContain(bowling.firstBowl)
    });

    it('sets the secondBowl to random number', function(){
      bowling.frame()
      expect(array).toContain(bowling.secondBowl)
    });
  });

  // describe('#frameScoreCheck', function(){
  //   it('checks the status of a frame', function(){
  //     expect(_frameScoreCheck()).toEqual('spare')
  //   });
  // });
});
