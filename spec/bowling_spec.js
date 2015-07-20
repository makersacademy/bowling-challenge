describe('Bowling Game', function() {

  var bowlingGame;

  beforeEach(function() {
    bowlingGame = new BowlingGame();
  });

  describe('can recieve a "roll"', function(){

    //don't really know if I've stubbed all these correctly..
    it('which returns a number', function(){
      spyOn(Math, 'random').and.returnValue(0.2);
      expect(bowlingGame.roll()).toEqual(2);
    });

  });

  describe ('a new game can be started', function(){

    it('and if you roll 10, you get a STRIKE', function(){
      spyOn(Math, 'random').and.returnValue(1);
      expect(bowlingGame.startFrame()).toMatch('STRIKE!');
    });

    it('and if you roll a number below 10, you are told to roll again', function(){
      spyOn(Math, 'random').and.returnValue(0.2);
      expect(bowlingGame.startFrame()).toMatch('You knocked down 2 pins. You can roll again.');
    });

  });

  describe ('when you take a second turn', function(){

    it('you receive a sum of the first roll and another roll', function(){
      spyOn(Math, 'random').and.returnValue(0.4);
      expect(bowlingGame.rollAgain(bowlingGame.roll())).toMatch('Your first roll knocked down 4 pins. Your second roll knocked down 2 pins. Your total is 6!');
    });

    it('returns SPARE if the total of your two rolls is 10', function(){
      spyOn(Math, 'random').and.returnValue(0.8);
      expect(bowlingGame.rollAgain(bowlingGame.roll())).toMatch('Your first roll knocked down 8 pins. Your second roll knocked down 2 pins. SPARE!')
    });
  });

  describe ('there is a running total of your score', function(){

    it('which increases each turn by adding total from the turn', function(){
      spyOn(Math, 'random').and.returnValue(0.8);
      bowlingGame.rollAgain(bowlingGame.roll());
      expect(bowlingGame.runningTotal).toEqual(10)
    });
  });

  describe ('end of game', function(){

    it('when the frame count reaches 10, the game will be ended', function(){
      bowlingGame.frameCount = 9;
      bowlingGame.rollAgain(bowlingGame.roll());
      expect(bowlingGame.isEnded).toBe(true);
    });
  });

});