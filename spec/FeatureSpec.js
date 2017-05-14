describe('Bowling', function() {

  var bowling;
  var frames;

  beforeEach(function(){
    bowling = new Bowling();
    frames = new Frames();
  });

  it('returns score of all frames including any bonus points', function () {
    bowling.bowl(2);
    bowling.bowl(7);
    bowling.bowl(5);
    bowling.bowl(3);
    bowling.bowl(9);
    bowling.bowl(1);
    bowling.bowl(10);
    bowling.bowl(5);
    bowling.bowl(1);
    expect(bowling.finalScore()).toEqual('Final score is! 59');
  });

  it('returns "Gutter game!" if score is 0', function() {
    expect(bowling.finalScore()).toEqual('Gutter game! Better luck next time...');
  });

  describe('Player DOESN\'T roll a strike or spare', function() {
    it('Player can bowl a ball', function(){
      expect(bowling.bowl(5)).toEqual(5);
      expect(bowling.bowl(3)).toEqual(3);
      expect(bowling.frames._frames).toEqual([5, 3]);
      expect(bowling.frames._frameCounter).toEqual(1);
    });

    it('throws an error if player attempts to play after 10 frames', function () {
      for (var i = 1; i < 10; i++) {
        bowling.frames._frameCounter += 1;
      }
        expect(function(){ bowling.bowl(); }).toThrowError('Game over!!');
    });
  });

  describe('Player DOES roll strike', function() {

    it('sets strike to true and adds 2 to  strike bonus count', function() {
      bowling.bowl(10);
      expect(bowling.frames._isStrike).toEqual(true);
      expect(bowling.frames._bonusCounter).toEqual(2);
    });

    it('adds points from following 2 rolls to bonus', function() {
      bowling.bowl(bowling.STRIKE);
      bowling.bowl(5);
      bowling.bowl(2);
      expect(bowling.frames._bonusCounter).toEqual(0);
      expect(bowling.frames._bonusPoints).toEqual(7);
      expect(bowling.frames._isStrike).toEqual(false);
    });
  });

  describe('Player DOES roll spare', function() {

    it('adds points from following roll to bonus', function() {
      bowling.bowl(8);
      bowling.bowl(2);
      expect(bowling.frames._bonusCounter).toEqual(1);
      expect(bowling.frames._isSpare).toEqual(true);
    });
  });
});
