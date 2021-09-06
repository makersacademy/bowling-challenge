describe('Bowling', function() {

  var bowling;
 
  beforeEach(function() {
  bowling = new Bowling();
  });
 
  describe('before each game starts', function() {
 
      it('starts with a score of 0', function() {
         expect(bowling.getScore()).toEqual([]);
      });
 
      it('starts with a frame count of 0', function() {
          expect(bowling.checkFrameCount()).toEqual(0);
      });
 
  });
 
  describe('for each new frame played', function() {
 
      it('increments the frame count by one', function() {
          bowling.newFrame(3,2);
          expect(bowling.checkFrameCount()).toEqual(1);
      });
 
 
      it('should add each roll to the score', function(){
          bowling.newFrame(3,2);
          expect(bowling.getScore()).toEqual([[3,2]]);
      });
 
      it('should not allow a frame to be played if the total for both rolls is greater than 10', function(){
          expect(bowling.checkPins(8,3)).toEqual('Impossible score!');
      });
 
      it('should add the first roll from the current frame to the previous frame if the previous frame was a spare', function()  {
          bowling.newFrame(5,5)
          bowling.newFrame(6,2)
          expect(bowling.totalScore()).toEqual(24);
      });
  });
 
  it('should give a total score', function() {
      bowling.newFrame(4,5);
      bowling.newFrame(3,2);
      expect(bowling.totalScore()).toEqual(14);
 
  });
 
  it('should return true if the rolls in a frame total 10', function(){
      expect(bowling.isSpare(5,5)).toBe(true);
 
  });
 
  it('should return true if the first roll in a frame is 10', function() {
      expect(bowling.isStrike(10,0)).toBe(true);
  });
});