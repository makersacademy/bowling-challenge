describe('Game', function () {

  var game;

  beforeEach(function () {
    game = new Game
    frame = jasmine.createSpyObj('frame', {
      // rolls [3,4]
      'score': 7,
      'isStrike': false,
      'isSpare': false,
      'firstRoll': 3
    })
    spareFrame = jasmine.createSpyObj('spareFrame', {
      // rolls [3,7]
      'score': 10,
      'isStrike': false,
      'isSpare': true,
      'firstRoll': 3,
      'lastFrameBonusRoll': 5
    })
    strikeFrame = jasmine.createSpyObj('strikeFrame', {
      // rolls [10,-]
      'score': 10,
      'isStrike': true,
      'isSpare': false,
      'firstRoll': 10,
      'lastFrameBonusRoll': 5
    })
  });

  it('starts with an empty set of frames', function () {
    expect(game.getFrames()).toEqual([]);
  });

  it('can add a frame', function () {
    game.addFrame(frame)
    expect(game.getFrames()).toContain(frame)
  });

  it('a 10-frame game is scored correctly', function () {
    for (let i = 0; i < 10; i++) {
      game.addFrame(frame)
    }
    expect(game.score()).toEqual(70);
  });

  describe('special frame followed by a normal frame', function () {
    it('a spare has bonus points added correctly', function () {
      game.addFrame(spareFrame) // 10 + 3 bonus
      game.addFrame(frame) // 7
      expect(game.score()).toEqual(20);
    });

    it('a strike has bonus points added correctly', function () {
      game.addFrame(strikeFrame)
      game.addFrame(frame)
      expect(game.score()).toEqual(24);
    });
  });

  describe('special frame followed by a special frame', function() {
    it('a spare has bonus points added correctly', function(){
      game.addFrame(strikeFrame) // 10 + 10 bonus
      game.addFrame(spareFrame) // 10 + 3 bonus
      game.addFrame(frame) // 7
      expect(game.score()).toEqual(40); 
    });

    it('a strike has bonus points added correctly', function(){
      game.addFrame(spareFrame) // 10 + 10 bonus
      game.addFrame(strikeFrame) // 10 + 7 bonus
      game.addFrame(frame) // 7
      expect(game.score()).toEqual(44); 
    });
  });

  describe('special 10th frame', function() {
    it('bonus still added for strike 10th frame', function () {
      for (let i = 0; i < 9; i++) {
        game.addFrame(frame)
      }
      game.addFrame(strikeFrame)
      expect(game.score()).toEqual(70);
    });
  

    it('bonus still added for strike 10th frame', function () {
      for (let i = 0; i < 9; i++) {
        game.addFrame(frame) // 63
      }
      game.addFrame(spareFrame) 
      expect(game.score()).toEqual(70);
    });
  
  });



});
