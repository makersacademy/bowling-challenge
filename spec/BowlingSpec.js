describe('Bowling', function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  // describe('number of frame', function() {
  //   it('has 1 frame', function() {
  //     expect(bowling.frameNumber).toBe(1);
  //   });
  // });

  describe('number of ball', function() {
    describe('is One', function() {
      it('then number of pins knocked down has to be less than 11', function() {
        expect(bowling.pinsKnocked(10)).toBeLessThan(11);
      });

      describe('and number of pins down is 10', function(){

        it('then pins left are 0', function(){
          spyOn(bowling, 'pinsKnocked').and.returnValue(10);
          expect(bowling.ballOne()).toBe(0);
        });

        it('roll is Strike and score is 10', function(){
          spyOn(bowling, 'ballOne').and.returnValue(0);
          expect(bowling.firstPart()).toEqual("Strike, frame is over");
          expect(bowling.frameScore()).toEqual(10);
        });
      });

      describe('and number of pins down is less than 10', function(){
        it('the frame continues', function(){
            spyOn(bowling, 'ballOne').and.returnValue(5);
            expect(bowling.firstPart()).toEqual("Frame continues, go for next ball");
        });
      });
    });

    describe('is 2', function() {

      beforeEach(function(){
        spyOn(bowling, 'ballOne').and.returnValue(6);
      });

      it('then number of pins knocked down has to be less than pins left in ball 1', function() {
        pinsLeft = 10 - bowling.ballOne();
        expect(bowling.pinsKnocked(pinsLeft)).toBeLessThan(5);
      });

      beforeEach(function(){
        spyOn(bowling, 'firstPart').and.returnValue("Frame continues, go for next ball");
      });

      describe('and number of pins knocked down plus number of pins knocked by ball 1 is 10,', function(){

        beforeEach(function() {
          spyOn(bowling, 'secondPart').and.returnValue(0);
        });

        it('roll is a Spare', function() {
          expect(bowling.thirdPart()).toEqual("Spare, frame is over");
        });

        it('frame score is 10', function() {
          expect(bowling.frameScore()).toEqual(10);
        });
      });

      describe('and number of pins knocked down plus number of pins knocked by ball 1, is less than 10', function(){

        beforeEach(function() {
          spyOn(bowling, 'secondPart').and.returnValue(3);
        });

        it('roll is open frame', function(){
          expect(bowling.thirdPart()).toEqual("Open Frame, frame is over");
        });

        it('frame score is the sum of pins knocked down in both balls', function(){
          expect(bowling.frameScore()).toEqual(7);
        });
      });
    });
  });
});
