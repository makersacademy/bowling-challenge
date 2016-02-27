describe('Game', function() {
  var game;
  var frame1;
  var score1 = 5;
  var score2 = 3;

  beforeEach(function() {
    game = new Game();
    frame1 = jasmine.createSpyObj('frame1', ['checkRoll', 'isSpare', 'isStrike']);
    frame2 = jasmine.createSpyObj('frame2', ['checkRoll', 'isSpare', 'isStrike']);
    frame1.checkRoll.and.returnValue([0,0]);
  });

  describe('-> starting a new game', function() {

    it('-> initialises with an empty frames', function() {
      expect(game.frames).toEqual([])
    });

    it('-> initialises with empty scores', function() {
      expect(game._scores).toEqual([])
    });

    it('-> initialises on frame 0', function() {
      expect(game._frameNumber).toEqual(0)
    });
  });

  describe('-> adding a frame', function() {

    it('-> adds a new frame to the game upon start', function(){
      expect(game.frames).toEqual([])
    });

    it('-> prevents the player from playing more than 10 frames', function() {
      for (var i = 0; i < 10; i ++) {
        game.addFrame(frame1);
      };
      expect(function() {
        game.addFrame(frame1)}).toThrowError('10 frames per match only!')
    });
  });

  describe('-> it calculates scores', function() {

    it('-> calculates the correct score if not striking/sparing', function() {
      frame1.checkRoll.and.returnValue([3,5])
      game.addFrame(frame1)
      frame1.checkRoll.and.returnValue([1,5])
      game.addFrame(frame1)
      expect(game._scores).toContain(8)
      expect(game._scores).toContain(6)
    });

    it('-> calcualates a spare score correctly', function() {
      frame1.checkRoll.and.returnValue([9,1]);
      frame1.isSpare.and.returnValue(true);
      game.addFrame(frame1)
      game.addFrame(frame1)
      expect(game._scores).toContain(19)
    });

    it('-> calculates a strike bonus correctly after one strike', function() {
      frame1.checkRoll.and.returnValue([10])
      frame1.isStrike.and.returnValue(true)
      game.addFrame(frame1)
      game.addFrame(frame1)
      expect(game._scores).toContain(20)
    });

    it('-> calculates three strikes in a row correctly', function() {
      frame1.checkRoll.and.returnValue([10])
      frame1.isStrike.and.returnValue(true)
      game.addFrame(frame1)
      game.addFrame(frame1)
      game.addFrame(frame1)
      expect(game._scores).toContain(30)
      expect(game._scores).toContain(20)
    });
  });

  describe('-> calculating the total score', function() {
    it('-> calculates the total score correctly', function() {
      frame1.checkRoll.and.returnValue([1,2]);
      game.addFrame(frame1)
      game.addFrame(frame1)
      expect(game.totalScore).toEqual(6)
    });
  });
});
