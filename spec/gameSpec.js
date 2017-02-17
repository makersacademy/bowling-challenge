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
  it("has a playFrame3 method", function(){
    expect(game.playFrame3).toBeDefined();
  });
  it("has a playFrame4 method", function(){
    expect(game.playFrame4).toBeDefined();
  });
  it("has a playFrame5 method", function(){
    expect(game.playFrame5).toBeDefined();
  });
  it("has a playFrame6 method", function(){
    expect(game.playFrame6).toBeDefined();
  });
  it("has a playFrame7 method", function(){
    expect(game.playFrame7).toBeDefined();
  });
  it("has a playFrame8 method", function(){
    expect(game.playFrame8).toBeDefined();
  });
  it("has a playFrame9 method", function(){
    expect(game.playFrame9).toBeDefined();
  });
  it("has a getFinalBonus method", function(){
    expect(game.getFinalBonus).toBeDefined();
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

  describe('#frame2', function() {
    var game;
    beforeEach(function() {
      game = new Game();
    });

    it ('sets the pins knocked down in the 2nd frame', function() {
      game.playFrame2(1,2);
      expect(game._frame2._roll1).toEqual(1);
      expect(game._frame2._roll2).toEqual(2);
    });
    it ('will add a bonus to frame 1 if frame 1 received a strike (X)', function() {
      game.playFrame1(10,0);
      game.playFrame2(1,2);
      expect(game._frame1._frameScore).toEqual(20);
    });
    it ('will add a bonus to frame 1 if frame 1 received a spare (/)', function() {
      game.playFrame1(5,5);
      game.playFrame2(4,5);
      expect(game._frame1._frameScore).toEqual(14);
    });
  });

  describe('#frame3', function() {
    var game;
    beforeEach(function() {
      game = new Game();
    });

    it ('sets the pins knocked down in the 3rd frame', function() {
      game.playFrame3(1,2);
      expect(game._frame3._roll1).toEqual(1);
      expect(game._frame3._roll2).toEqual(2);
    });
    it ('will add a bonus to frame 2 if frame 2 received a strike (X)', function() {
      game.playFrame2(10,0);
      game.playFrame3(1,2);
      expect(game._frame2._frameScore).toEqual(20);
    });
    it ('will add a bonus to frame 2 if frame 2 received a spare (/)', function() {
      game.playFrame2(5,5);
      game.playFrame3(4,5);
      expect(game._frame2._frameScore).toEqual(14);
    });
    it ('will add a bonus to frame 1 if frame 1 received a strike (X)', function() {
      game.playFrame1(10,0);
      game.playFrame2(10,0);
      game.playFrame3(1,2);
      expect(game._frame2._frameScore).toEqual(20);
      expect(game._frame1._frameScore).toEqual(30);
    });
  });

  describe('#frame4', function() {
    var game;
    beforeEach(function() {
      game = new Game();
    });

    it ('sets the pins knocked down in the 4th frame', function() {
      game.playFrame4(1,2);
      expect(game._frame4._roll1).toEqual(1);
      expect(game._frame4._roll2).toEqual(2);
    });
    it ('will add a bonus to frame 3 if frame 3 received a strike (X)', function() {
      game.playFrame3(10,0);
      game.playFrame4(1,2);
      expect(game._frame3._frameScore).toEqual(20);
    });
    it ('will add a bonus to frame 3 if frame 3 received a spare (/)', function() {
      game.playFrame3(5,5);
      game.playFrame4(4,5);
      expect(game._frame3._frameScore).toEqual(14);
    });
    it ('will add a bonus to frame 2 if frame 2 received a strike (X)', function() {
      game.playFrame2(10,0);
      game.playFrame3(10,0);
      game.playFrame4(1,2);
      expect(game._frame3._frameScore).toEqual(20);
      expect(game._frame2._frameScore).toEqual(30);
    });
  });

  describe('#frame5', function() {
    var game;
    beforeEach(function() {
      game = new Game();
    });

    it ('sets the pins knocked down in the 5th frame', function() {
      game.playFrame5(1,2);
      expect(game._frame5._roll1).toEqual(1);
      expect(game._frame5._roll2).toEqual(2);
    });
    it ('will add a bonus to frame 4 if frame 4 received a strike (X)', function() {
      game.playFrame4(10,0);
      game.playFrame5(1,2);
      expect(game._frame4._frameScore).toEqual(20);
    });
    it ('will add a bonus to frame 4 if frame 4 received a spare (/)', function() {
      game.playFrame4(5,5);
      game.playFrame5(4,5);
      expect(game._frame4._frameScore).toEqual(14);
    });
    it ('will add a bonus to frame 3 if frame 3 received a strike (X)', function() {
      game.playFrame3(10,0);
      game.playFrame4(10,0);
      game.playFrame5(1,2);
      expect(game._frame4._frameScore).toEqual(20);
      expect(game._frame3._frameScore).toEqual(30);
    });
  });

  describe('#frame6', function() {
    var game;
    beforeEach(function() {
      game = new Game();
    });

    it ('sets the pins knocked down in the 6th frame', function() {
      game.playFrame6(1,2);
      expect(game._frame6._roll1).toEqual(1);
      expect(game._frame6._roll2).toEqual(2);
    });
    it ('will add a bonus to frame 5 if frame 5 received a strike (X)', function() {
      game.playFrame5(10,0);
      game.playFrame6(1,2);
      expect(game._frame5._frameScore).toEqual(20);
    });
    it ('will add a bonus to frame 5 if frame 5 received a spare (/)', function() {
      game.playFrame5(5,5);
      game.playFrame6(4,5);
      expect(game._frame5._frameScore).toEqual(14);
    });
    it ('will add a bonus to frame 4 if frame 4 received a strike (X)', function() {
      game.playFrame4(10,0);
      game.playFrame5(10,0);
      game.playFrame6(1,2);
      expect(game._frame5._frameScore).toEqual(20);
      expect(game._frame4._frameScore).toEqual(30);
    });
  });

  describe('#frame7', function() {
    var game;
    beforeEach(function() {
      game = new Game();
    });

    it ('sets the pins knocked down in the 7th frame', function() {
      game.playFrame7(1,2);
      expect(game._frame7._roll1).toEqual(1);
      expect(game._frame7._roll2).toEqual(2);
    });
    it ('will add a bonus to frame 6 if frame 6 received a strike (X)', function() {
      game.playFrame6(10,0);
      game.playFrame7(1,2);
      expect(game._frame6._frameScore).toEqual(20);
    });
    it ('will add a bonus to frame 6 if frame 6 received a spare (/)', function() {
      game.playFrame6(5,5);
      game.playFrame7(4,5);
      expect(game._frame6._frameScore).toEqual(14);
    });
    it ('will add a bonus to frame 5 if frame 5 received a strike (X)', function() {
      game.playFrame5(10,0);
      game.playFrame6(10,0);
      game.playFrame7(1,2);
      expect(game._frame6._frameScore).toEqual(20);
      expect(game._frame5._frameScore).toEqual(30);
    });
  });

  describe('#frame8', function() {
    var game;
    beforeEach(function() {
      game = new Game();
    });

    it ('sets the pins knocked down in the 8th frame', function() {
      game.playFrame8(1,2);
      expect(game._frame8._roll1).toEqual(1);
      expect(game._frame8._roll2).toEqual(2);
    });
    it ('will add a bonus to frame 7 if frame 7 received a strike (X)', function() {
      game.playFrame7(10,0);
      game.playFrame8(1,2);
      expect(game._frame7._frameScore).toEqual(20);
    });
    it ('will add a bonus to frame 7 if frame 7 received a spare (/)', function() {
      game.playFrame7(5,5);
      game.playFrame8(4,5);
      expect(game._frame7._frameScore).toEqual(14);
    });
    it ('will add a bonus to frame 6 if frame 6 received a strike (X)', function() {
      game.playFrame6(10,0);
      game.playFrame7(10,0);
      game.playFrame8(1,2);
      expect(game._frame7._frameScore).toEqual(20);
      expect(game._frame6._frameScore).toEqual(30);
    });
  });

  describe('#frame9', function() {
    var game;
    beforeEach(function() {
      game = new Game();
    });

    it ('sets the pins knocked down in the 9th frame', function() {
      game.playFrame9(1,2);
      expect(game._frame9._roll1).toEqual(1);
      expect(game._frame9._roll2).toEqual(2);
    });
    it ('will add a bonus to frame 8 if frame 8 received a strike (X)', function() {
      game.playFrame8(10,0);
      game.playFrame9(1,2);
      expect(game._frame8._frameScore).toEqual(20);
    });
    it ('will add a bonus to frame 8 if frame 8 received a spare (/)', function() {
      game.playFrame8(5,5);
      game.playFrame9(4,5);
      expect(game._frame8._frameScore).toEqual(14);
    });
    it ('will add a bonus to frame 7 if frame 7 received a strike (X)', function() {
      game.playFrame7(10,0);
      game.playFrame8(10,0);
      game.playFrame9(1,2);
      expect(game._frame8._frameScore).toEqual(20);
      expect(game._frame7._frameScore).toEqual(30);
    });
  });

  describe('#getFinalBonus', function() {
    var game;
    beforeEach(function() {
      game = new Game();
    });
    it ('adds a bonus to the previous frame if the previous frame had a strike (X)', function() {
      game._frame1.setRoll1(10);
      game._frame1.setRoll2(0);
      game.getFinalBonus(game._frame1, 10, 0)
      expect(game._frame1._strikeType).toEqual("X");
      expect(game._frame1._frameScore).toEqual(20);
    });
    it ('adds a bonus to the previous frame if the previous frame had a spare (X)', function() {
      game._frame1.setRoll1(5);
      game._frame1.setRoll2(5);
      game._frame2.setRoll1(5);
      game._frame2.setRoll2(5);
      game.getFinalBonus(game._frame1, 5, 5)
      expect(game._frame1._strikeType).toEqual("/");
      expect(game._frame1._frameScore).toEqual(15);
    });
  });




}); //end of entire test
