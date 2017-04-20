describe ("Game", function() {

  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe('starting a new game', function() {

    it('starts a game with a new frame', function(){
      expect(game._frames.length).toEqual(1);
    });

    it('can add a new frame to a game', function() {
      game.bowl();
      game.bowl();
      game.bowl();
      expect(game._frames.length).toEqual(2);
    });

    it('can initiate play on a new frame',function() {
      spyOn(Math, 'random').and.returnValue(0.7);
      expect(game.bowl()).toEqual(7);
    });
  });

  describe('completing a normal frame and starting another', function() {
    beforeEach(function(){
      spyOn(Math, 'random').and.returnValues(0.5, 0.5, 0.5);
      //0.5first bowl = 5pins    0.5 second bowl = 3 pins
      game.bowl();
      game.bowl();
      game.bowl();
    });

    it('can begin new frame once current frame complete', function(){
      expect(game._frames.length).toEqual(2);
    });

    it('can calculate score of frame and add to currentScore', function() {
      expect(game.currentScore).toEqual(8);
    })

  });

  describe('bowling a spare', function() {
    beforeEach(function(){
      spyOn(Math, 'random').and.returnValues(0.5, 0.9, 0.5, 0.5, 0.5);
      //0.5first bowl = 5pins;  0.9second bowl = 5pins;  0.5second bowl = 3 pins
      game.bowl(); //5pins
      game.bowl(); //5pins
      game.bowl(); //5pins
      game.bowl(); //3pins
      game.bowl(); //5pins
    });

    it('can calculate score of spare bowled in first frame', function() {
      expect(game.currentScore).toEqual(23);
    });

  });

  describe('bowling a strike', function() {
    beforeEach(function(){
      spyOn(Math, 'random').and.returnValues(0.99, 0.5, 0.5, 0.5);
      game.bowl(); //10pins
      game.bowl(); //5pins
      game.bowl(); //3pins
      game.bowl(); //5pins
    });

    it('can calculate score of strike bowled in first frame', function() {
      expect(game.currentScore).toEqual(26)
    });
  });

  describe('bowling a strike then a spare', function() {
    beforeEach(function(){
      spyOn(Math, 'random').and.returnValues(0.99, 0.5, 0.9, 0.5, 0.5, 0.5);
      game.bowl(); //10pins
      game.bowl(); //5pins
      game.bowl(); //5pins
      game.bowl(); //5pins
      game.bowl(); //3pins
      game.bowl();
    });

    it('can calculate score when there is a strike then spare frame', function() {
      expect(game.currentScore).toEqual(43)
    });
  });

describe('end of game', function() {
  it('can check is a game is over', function() {
    spyOn(Math, 'random').and.returnValue(0.5);
    for(var i = 0; i < 20; i++) {
      game.bowl();
    }
    expect(game.gameOver()).toEqual(true);
  });

  it('there is a Tenthframe added to _frames', function() {
    spyOn(Math, 'random').and.returnValue(0.5);
    for(var i = 0; i < 20; i++) {
      game.bowl();
    }
    expect(game._frames).toContain(Object({firstBowl: 5, secondBowl: 3, thirdBowl: null}));
  })
})



});
