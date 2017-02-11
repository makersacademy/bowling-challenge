// Count and sum the scores of a bowling game for one player (in JavaScript).
// A bowling game consists of 10 frames in which the player tries to knock down
// the 10 pins. In every frame the player can roll one or two times.
// The actual number depends on strikes and spares. The score of a frame is the
// number of knocked down pins plus bonuses for strikes and spares.
// After every frame the 10 pins are reset.

describe('Game', function() {
  var game;
    beforeEach(function() {
      game = new Game();
    });

  var frame = jasmine.createSpy('frame')

  it("exists", function(){
    expect(game).toBeDefined();
  });

  it("has 1 frame", function(){
    expect(game.frame).toBeDefined();
  });

  it("has 10 frames", function(){
    expect(game.frame1).toBeDefined();
    expect(game.frame2).toBeDefined();
    expect(game.frame3).toBeDefined();
    expect(game.frame4).toBeDefined();
    expect(game.frame5).toBeDefined();
    expect(game.frame6).toBeDefined();
    expect(game.frame7).toBeDefined();
    expect(game.frame8).toBeDefined();
    expect(game.frame9).toBeDefined();
    expect(game.frame10).toBeDefined();
  });
  it("has a score, roll1, roll2 and strikeType value for each frame, and a total score for all frames in 1 game", function(){
    var _f1Score;
    var _f2Score;
    var _f3Score;
    var _f4Score;
    var _f5Score;
    var _f6Score;
    var _f7Score;
    var _f8Score;
    var _f9Score;
    var _f10Score;
    var _totalScore;
    var _f1Roll1;
    var _f1Roll2;
    var _f1StrikeType;
    expect(game._f1Score).toBeDefined();
    expect(game._f2Score).toBeDefined();
    expect(game._f3Score).toBeDefined();
    expect(game._f4Score).toBeDefined();
    expect(game._f5Score).toBeDefined();
    expect(game._f6Score).toBeDefined();
    expect(game._f7Score).toBeDefined();
    expect(game._f8Score).toBeDefined();
    expect(game._f9Score).toBeDefined();
    expect(game._f10Score).toBeDefined();
    expect(game._f1Roll1).toBeDefined();
    expect(game._f1Roll2).toBeDefined();
    expect(game._f1StrikeType).toBeDefined();
    expect(game._totalScore).toBeDefined();

    });

  describe('#frame1', function() {
    var game;
      beforeEach(function() {
        game = new Game();
      });
    var frame1 = jasmine.createSpy('frame')
    it ('returns the score for the 1st frame', function() {
      var _f1Score;
      var a;
      a = game.frame1();
      expect(frame1._f1Score).toEqual(a);
    });
    it ('finishes if a strike is made on the 1st roll', function() {
      spyOn(frame1, 'getStrikeType').and.returnValue("strike");
      expect(frame1._roll2).toEqual(0);
    });


  });

  describe('#frame2', function() {
    var game;
      beforeEach(function() {
        game = new Game();
      });

    var frame2 = jasmine.createSpy('frame')

    it ('returns the score for the 2nd frame', function() {
      var _f2Score;
      var b;
      b = game.frame2();
      expect(frame2._f2Score).toEqual(b);
    });
    it ('player receives bonus in previous game if strike is made', function() {
      spyOn(frame2, 'getStrikeType').and.returnValue("strike");
      expect(game._f1Score).toEqual(game._f1Score + 10);
    });

    it ('player receives bonus in previous game if half-strike is made', function() {
      spyOn(frame2, 'getStrikeType').and.returnValue("strike");
      expect(game._f1Score).toEqual(game._f1Score + frame2._f2Score);
    });

  });

  describe('#frame3', function() {
    var game;
      beforeEach(function() {
        game = new Game();
      });

    var frame3 = jasmine.createSpy('frame')

    it ('returns the score for the 3rd frame', function() {
      var _f3Score;
      var c;
      b = game.frame3();
      expect(frame3._f3Score).toEqual(c);
    });
    it ('player receives bonus in the previous and the previous, previous game if strike is made', function() {
      spyOn(frame3, 'getStrikeType').and.returnValue("strike");
      expect(game._f2Score).toEqual(game._f2Score + 10);
      expect(game._f1Score).toEqual(game._f1Score + 10);
    });

    it ('player receives bonus in previous game if half-strike is made', function() {
      spyOn(frame2, 'getStrikeType').and.returnValue("strike");
      expect(frame2._f1Score).toEqual(frame2._f1Score + frame2._f2Score);
    });

  });









}); //end of entire test
