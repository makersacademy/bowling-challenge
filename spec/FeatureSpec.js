describe('Features', function() {

  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('Player can bowl a ball', function(){
    expect(bowling.bowl(5)).toEqual(5);
    expect(bowling.bowl(3)).toEqual(3);
    expect(bowling._frames).toEqual([5, 3]);
    expect(bowling._frameCounter).toEqual(1);
  });

  it('throws an error if player attempts to play after 10 frames', function () {
    for (var i = 1; i < 10; i++) {
      bowling._frameCounter += 1;
    }
      expect(function(){ bowling.bowl(); }).toThrowError('Game over!!');
  });

  describe('Player DOES roll strike', function() {

    it('sets strike to true and adds 2 to  strike bonus count', function() {
      bowling.bowl(10);
      expect(bowling._isStrike).toEqual(true);
      expect(bowling.getBonusCounter()).toEqual(2);
    });

    it('adds points from following 2 rolls to bonus', function() {
      bowling.bowl(10);
      bowling.bowl(5);
      bowling.bowl(2);
      expect(bowling.getBonusCounter()).toEqual(0);
      expect(bowling._bonusPoints).toEqual(7);
      expect(bowling._isStrike).toEqual(false);
    });
  });

  describe('Player DOES roll spare', function() {

    it('adds points from following roll to bonus', function() {
      bowling.bowl(8);
      bowling.bowl(2);
      expect(bowling.getBonusCounter()).toEqual(1);
      expect(bowling._isSpare).toEqual(true);
    });
  });
});
