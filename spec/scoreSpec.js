describe('Score', function() {
  beforeEach(function() {
    regular_frame = jasmine.createSpyObj('regular_frame', ['roll1', 'roll2', 'bonusScore', 'totalScore']);
    regular_frame.roll1 = 4;
    regular_frame.roll2 = 3;
    regular_frame.bonusScore = 0;

    spare_frame = jasmine.createSpyObj('spare_frame', ['roll1', 'roll2', 'isSpare', 'bonusScore', 'totalScore']);
    spare_frame.roll1 = 5;
    spare_frame.roll2 = 5;
    spare_frame.isSpare = true;

    strike_frame = jasmine.createSpyObj('strike_frame', ['roll1', 'roll2', 'isStrike', 'bonusScore', 'totalScore']);
    strike_frame.roll1 = 10;
    strike_frame.roll2 = undefined;
    strike_frame.isStrike = true;

    strike_frame2 = jasmine.createSpyObj('strike_frame', ['roll1', 'roll2', 'isStrike', 'bonusScore']);
    strike_frame2.roll1 = 10;
    strike_frame2.roll2 = undefined;
    strike_frame2.isStrike = true;

    strike_frame3 = jasmine.createSpyObj('strike_frame', ['roll1', 'roll2', 'isStrike', 'bonusScore']);
    strike_frame3.roll1 = 10;
    strike_frame3.roll2 = undefined;
    strike_frame3.isStrike = true;

    strike_frame_tenth = jasmine.createSpyObj('strike_frame', ['roll1', 'roll2', 'isStrike', 'bonusScore']);
    strike_frame_tenth.roll1 = 10;
    strike_frame_tenth.roll2 = 10;
    strike_frame_tenth.roll3 = 10;
    strike_frame_tenth.isStrike = true;

    zero_frame = jasmine.createSpyObj('zero_frame', ['roll1', 'roll2'])
    zero_frame.roll1 = 0;
    zero_frame.roll2 = 0;
  });

  describe('calculateFrameScores', function() {
    beforeEach(function() {
      score = new Score();

      score.array.push(regular_frame, spare_frame, strike_frame, strike_frame2, strike_frame3, regular_frame, regular_frame);
      score.calculateFrameScore();
    });

    it('sets the score for an open frame', function() {
      expect(score.array[0].baseScore).toEqual(7);
    });

    it('does not duplicate the score for an open frame', function() {
      score.calculateFrameScore();
      expect(score.array[0].baseScore).toEqual(7);
    });

    it('sets the score for a spare frame', function() {
      expect(score.array[1].baseScore).toEqual(10);
    });

    it('sets the score for a strike frame', function() {
      expect(score.array[2].baseScore).toEqual(10);
    });
  });

  describe('calculateBonus', function() {
    beforeEach(function() {
      score = new Score();

      score.array.push(regular_frame, spare_frame, strike_frame, strike_frame2, strike_frame3, regular_frame, regular_frame);
      score.calculateBonus();
    });

    it('calculates the bonus score for a spare frame', function() {
      expect(score.array[1].bonusScore).toEqual(10);
    });

    it('calculates the bonus score for a strike frame', function() {
      expect(score.array[4].bonusScore).toEqual(7);
    });

    it('calculates the bonus score for 2 strike frames in a row', function() {
      expect(score.array[3].bonusScore).toEqual(14);
      expect(score.array[4].bonusScore).toEqual(7);
    });

    it('calculates the bonus score for 3 strike frames in a row', function() {
      expect(score.array[2].bonusScore).toEqual(20);
      expect(score.array[3].bonusScore).toEqual(14)
      expect(score.array[4].bonusScore).toEqual(7);
    });
  });

  describe('frameTotalScore', function() {
    beforeEach(function() {
      score = new Score();

      score.array.push(regular_frame, spare_frame, strike_frame)
      score.calculateFrameScore();
      score.calculateBonus();
      score.frameTotalScore();
    });

    it('returns the total score for all frames', function() {
      expect(score.array[1].frameScore).toEqual(20);
    });
  });

  describe('gameTotalScore', function() {
    beforeEach(function() {
      gameTotal = new Game();
      for (var i = 0; i < 12; i++) {
        gameTotal.addScore(10);
      }
      gameTotal.calculateFrameScore();
      gameTotal.calculateBonus();
      gameTotal.frameTotalScore();
    });

    it('returns the total score for a perfect game', function() {
      gameTotal.gameTotalScore();
      expect(gameTotal.gameScore).toEqual(300);
    });
  });

  describe('isGutterGame', function() {
    beforeEach(function() {
      gutter_game_true = new Score();
      gutter_game_false = new Score();

      // Create a score array with 10 frames
      gutter_game_true.array.push(zero_frame, zero_frame, zero_frame, zero_frame, zero_frame, zero_frame, zero_frame, zero_frame, zero_frame, zero_frame)
      gutter_game_false.array.push(zero_frame, zero_frame, zero_frame, zero_frame, zero_frame, zero_frame, zero_frame, zero_frame, zero_frame, regular_frame)
    });

    it('returns true if 0 pins are knocked down across all frames', function() {
      expect(gutter_game_true.isGutterGame()).toEqual(true);
    });

    it('returns false if at least 1 pin is knocked down', function() {
      expect(gutter_game_false.isGutterGame()).toEqual(false);
    });
  });

  describe('isPerfectGame', function() {
    beforeEach(function() {
      perfect_game_true = new Score();
      perfect_game_false = new Score();

      // Create a score array with 10 frames
      perfect_game_true.array.push(strike_frame, strike_frame, strike_frame, strike_frame, strike_frame, strike_frame, strike_frame, strike_frame, strike_frame, strike_frame_tenth)
      perfect_game_false.array.push(strike_frame, strike_frame, strike_frame, strike_frame, strike_frame, strike_frame, strike_frame, strike_frame, strike_frame, regular_frame)
    });

    it('returns true if all frames are strikes', function() {
      expect(perfect_game_true.isPerfectGame()).toEqual(true);
    });

    it('returns false if at least 1 frame is not a strike', function() {
      expect(perfect_game_false.isPerfectGame()).toEqual(false);
    });
  });
});
