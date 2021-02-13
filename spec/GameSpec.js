describe('Game', function() {
  let game;

  beforeEach(function() {
    game = new Game ();
  })

  describe('roll', function() {
    it('can take a roll and pass it to the total score', function() {
      game.roll(4);
      expect(game.totalScore()).toEqual(4);
    })
  })

  describe('totalScore', function() {
    it('calculates the total score of 2 rolls', function() {
      for(i = 0; i < 4; i++) {
        game.roll(3);
      }
      expect(game.totalScore()).toEqual(12);
    })
  })
  describe('newFrame', function() {
    it('creates a new Frame instance', function() {
      game.roll(4);
      expect(game.frames.length).toEqual(1);
    })

    it('creates a new Frame when needed', function() {
      game.roll(10);
      game.roll(4);
      expect(game.frames.length).toEqual(2)
    })

    it('stops creating frames after 10 frames', function () {
      for(i = 1; i < 21; i++) {
        game.roll(5);
      }
      expect(function() {
        game.roll(5)
      }).toThrow(new Error('game complete'))
    })
  })
})