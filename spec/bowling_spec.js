describe('Bowling Game', function() {

  var bowlingGame;

  beforeEach(function() {
    bowlingGame = new BowlingGame();
  });

  describe('can recieve a "roll"', function(){

    //don't really know if I've stubbed all these correctly..
    it('which returns a number', function(){
      spyOn(Math, 'random').and.returnValue(0.2);
      expect(bowlingGame.roll()).toEqual(2)
    });

    it ('and "rollAgain" and receive a sum of the first roll and another roll', function(){
      spyOn(Math, 'random').and.returnValue(0.4);
      expect(bowlingGame.rollAgain(bowlingGame.roll())).toEqual(6)
    });
  });

  describe ('a new game can be started', function(){

    it('and if you roll 10, you get a STRIKE', function(){
      spyOn(Math, 'random').and.returnValue(1);
      expect(bowlingGame.startGame()).toMatch('STRIKE!')
    });

    it('and if you roll a number below 10, you are told to roll again', function(){
      spyOn(Math, 'random').and.returnValue(0.2);
      expect(bowlingGame.startGame()).toMatch('You knocked down 2 pins. You can roll again!')
    });

  });

});