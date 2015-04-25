describe('Bowling', function(){

  var bowling;

  beforeEach(function(){
    bowling = new Bowling;

  });

  describe('ball thrown', function(){

    describe('is one, ', function(){

      it('pins knocked down are less or equal to 10', function(){
        expect(bowling.pinsKnocked(11)).toBeLessThan(11);
      });

      beforeEach(function(){
      });

      it('and pins knocked down are 10, player makes Strike', function(){
        spyOn(bowling, 'pinsKnocked').and.returnValue(10);
        expect(bowling.rolling()).toEqual('Strike');
      });

      it('points in this frame are 10', function(){
        spyOn(bowling, 'rolling').and.returnValue('Strike');
        // bowling.rolling();
        expect(bowling.frameScore()).toEqual(10);
      });

      it('Frame ends and next frame starts'),function(){
        expect(bowling.bowFrame).toBe(2);
      };

    });

    describe('is two,', function(){
      beforeEach(function(){
        var pinsDown = spyOn(bowling, 'pinsKnocked').and.returnValue(5);
        this.pins = bowling.pinsLeft - bowling.pinsKnocked();
      });

      // afterEach(function(){
      //   bowling.pinsKnocked(this.pins).reset();
      // });

      it('pins knocked down are less or equal than pins left on first ball', function(){
        expect(bowling.pinsKnocked(this.pins)).toBeLessThan(6);
      });

      it('and sum of pins down in ball 1 plus ball 2, makes 10', function(){
        spyOn(bowling, 'pinsKnocked').and.returnValue(5)
        expect(bowling.rolling()).toEqual('Spare');
      });

      it('frame stops and player pass to next frame', function(){
        bowling.rolling();
        expect(bowling.bowFrame).toBe(2);
      });
    });
  });
});