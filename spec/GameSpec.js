describe('Game', function() {
  
  var frame1;
  var game;
  
  beforeEach(function() {
    frame1 = new Frame();
    game = new Game(frame1);
  });

  it('knows the current frame', function() {
    expect(game.currentFrame()).toEqual(frame1);
  });

  it('knows the previous frame', function() {
    frame2 = new Frame();
    frame3 = new Frame();
    game.frameRecord.push(frame2, frame3);
    expect(game.previousFrame()).toEqual(frame2);
  });

  it('knows the frame before last', function() {
    frame2 = new Frame();
    frame3 = new Frame();
    game.frameRecord.push(frame2, frame3);
    expect(game.frameBeforeLast()).toEqual(frame1);
  });

  it('can add new frames when not in progress', function() {
    frame1.roll(10);
    var frame2 = new Frame();
    game.newFrame(frame2);
    expect(game.currentFrame()).toEqual(frame2);
  });

  it('cannot add new frames when in progress', function() {
    var frame2 = new Frame();
    expect(function() {game.newFrame(frame2)}).toThrow('the frame is still in progress');
  });

   it('knows the overall score', function() {
    frame1.roll(2);
    frame1.roll(7);
    var frame2 = new Frame();
    game.newFrame(frame2);
    frame2.roll(2);
    frame2.roll(7);
    expect(game.overallScore()).toEqual(18);
  });

  describe('can calculate bonuses for', function() {
    it('a spare', function() {
      frame1.roll(3);
      frame1.roll(7);
      game.calculateBonuses();
      var frame2 = new Frame();
      game.newFrame(frame2);
      frame2.roll(4);
      frame2.roll(4);
      game.calculateBonuses();
      expect(frame1.bonusRecord).toEqual([4]);
    });

    it('a strike', function() {
      frame1.roll(10);
      game.calculateBonuses();
      var frame2 = new Frame();
      game.newFrame(frame2);
      frame2.roll(4);
      frame2.roll(4);
      game.calculateBonuses();
      expect(frame1.bonusRecord).toEqual([4,4]);
    });

    it('two strikes', function() {
      frame1.roll(10);
      game.calculateBonuses();
      var frame2 = new Frame();
      game.newFrame(frame2);
      frame2.roll(10);
      game.calculateBonuses();
      var frame3 = new Frame();
      game.newFrame(frame3);
      frame3.roll(2);
      frame3.roll(2);
      game.calculateBonuses();
      expect(frame1.bonusRecord).toEqual([10, 2]);
      expect(frame2.bonusRecord).toEqual([2, 2]);
    });

    it('three strikes', function() {
      frame1.roll(10);
      game.calculateBonuses();
      var frame2 = new Frame();
      game.newFrame(frame2);
      frame2.roll(10);
      game.calculateBonuses();
      var frame3 = new Frame();
      game.newFrame(frame3);
      frame3.roll(10);
      game.calculateBonuses();
      expect(frame1.bonusRecord).toEqual([10, 10]);
      expect(frame2.bonusRecord).toEqual([10]);
    });
  });
   // knowing when the whole game is complete is untested as of yet - and its used in new frame method.
   // havent tested the calculate bonuses function although it is called in tests.
});

