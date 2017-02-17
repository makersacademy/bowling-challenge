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

  //1. Game Constructor attributes
  it("has 10 frames", function(){
    expect(game._frame1).toBeDefined();
    expect(game._frame2).toBeDefined();
    expect(game._frame3).toBeDefined();
    expect(game._frame4).toBeDefined();
    expect(game._frame5).toBeDefined();
    expect(game._frame6).toBeDefined();
    expect(game._frame7).toBeDefined();
    expect(game._frame8).toBeDefined();
    expect(game._frame9).toBeDefined();
    expect(game._frame10).toBeDefined();
  });

  it("keeps score for each frame", function(){
    expect(game._frameTotal).toBeDefined();
  });
  it("has an overall game score", function(){
    expect(game._gameTotal).toBeDefined();
  });

  //2. Frame Methods

  it("has a playFrame1 method", function(){
    expect(game.playFrame1).toBeDefined();
  });
  it("has a getBonus method", function(){
    expect(game.getBonus).toBeDefined();
  });
  it("has a playFrame2 method", function(){
    expect(game.playFrame2).toBeDefined();
  });

  // 3. Detail of each Frame method


  describe('#frame1', function() {
    var game;
      beforeEach(function() {
        game = new Game();
      });
    it ('sets the pins knocked down in the 1st frame', function() {
      game.playFrame1(1,2);
      expect(game._frame1._roll1).toEqual(1);
      expect(game._frame1._roll2).toEqual(2);
    });
  });

  describe('#getBonus', function() {
    var game;
      beforeEach(function() {
        game = new Game();
      });

      it ('adds a bonus of 10 to the previous frame if the previous frame had a strike (X)', function() {
        game._frame1.setRoll1(10);
        game._frame1.setRoll2(0);
        game._frame1.addBonus(10);
        expect(game._frame1._strikeType).toEqual("X");
        expect(game._frame1._frameScore).toEqual(20);
      });
      it ("adds a bonus of this frame's 1st roll score to the previous frame if the previous frame had a spare (/)", function() {
        game._frame1.setRoll1(5);
        game._frame1.setRoll2(5);
        game._frame2.setRoll1(4);
        game._frame2.setRoll2(5);
        game._frame1.addBonus(4);
        expect(game._frame1._strikeType).toEqual("/");
        expect(game._frame1._frameScore).toEqual(14);
      });
  });

  // describe('#frame2', function() {
  //   var game;
  //   beforeEach(function() {
  //     game = new Game();
  //   });
  //
  //   it ('sets the pins knocked down in the 2nd frame', function() {
  //     game.playFrame2(1,2);
  //     expect(game._frame2._roll1).toEqual(1);
  //     expect(game._frame2._roll2).toEqual(2);
  //   });
  //   it ('can add a bonus to the previous frame received a strike (X)', function() {
  //     game.playFrame1(10,0);
  //     game.playFrame2(1,2);
  //     // game.getBonus(game._frame1, 1);
  //     console.log("it is " + game._frame1._frameScore);
  //     expect(game._frame1._frameScore).toEqual(20);
  //   });
  //
  //
  // });

  // describe('#frame3', function() {
  //   var game;
  //     beforeEach(function() {
  //       game = new Game();
  //     });
  //
  //   var frame3 = jasmine.createSpy('frame')
  //
  //   it ('returns the score for the 3rd frame', function() {
  //     var _f3Score;
  //     var c;
  //     b = game.frame3();
  //     expect(frame3._f3Score).toEqual(c);
  //   });
  //   it ('player receives bonus in the previous and the previous, previous game if strike is made', function() {
  //     spyOn(frame3, 'getStrikeType').and.returnValue("strike");
  //     expect(game._f2Score).toEqual(game._f2Score + 10);
  //     expect(game._f1Score).toEqual(game._f1Score + 10);
  //   });
  //
  //   it ('player receives bonus in previous game if half-strike is made', function() {
  //     spyOn(frame2, 'getStrikeType').and.returnValue("strike");
  //     expect(frame2._f1Score).toEqual(frame2._f1Score + frame2._f2Score);
  //   });
  //
  // });
  //
  // describe('#frame4', function() {
  //   var game;
  //     beforeEach(function() {
  //       game = new Game();
  //     });
  //
  //   var frame4 = jasmine.createSpy('frame')
  //
  //   it ('returns the score for the 3rd frame', function() {
  //     var _f4Score;
  //     var d;
  //     b = game.frame4();
  //     expect(frame4._f4Score).toEqual(d);
  //   });
  //   it ('player receives bonus in the previous and the previous, previous game if strike is made', function() {
  //     spyOn(frame4, 'getStrikeType').and.returnValue("strike");
  //     expect(game._f3Score).toEqual(game._f3Score + 10); //previous
  //     expect(game._f2Score).toEqual(game._f2Score + 10); //previous-previous
  //   });
  //
  //   it ('player receives bonus in previous game if half-strike is made', function() {
  //     spyOn(frame4, 'getStrikeType').and.returnValue("strike");
  //     expect(frame3._f1Score).toEqual(frame3._f1Score + frame3._f2Score); //previous only
  //   });
  // });


  // it ('finishes if a strike is made on the 1st roll', function() {
  //   spyOn(frame1, 'getStrikeType').and.returnValue("strike");
  //   expect(frame1._roll2).toEqual(0);
  // });





}); //end of entire test
