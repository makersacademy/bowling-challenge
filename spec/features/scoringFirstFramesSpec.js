describe('Scoring first few frames', function() {

  var game;

  beforeEach(function() {
    game = new Game(Frame);
  });

  describe('first frame gutter', function() {
    it('gutter-gutter-gutter roll', function() {
      game.addRoll(0);
      expect(game.totalScore).not.toContain(0);
      game.addRoll(0);
      expect(game.totalScore).toContain(0);
      game.addRoll(0);
      expect(game.totalScore).not.toEqual([0,0]);
    });

    it('gutter-normal-normal roll', function() {
      game.addRoll(0);
      expect(game.totalScore).not.toContain(0);
      game.addRoll(1);
      expect(game.totalScore).toContain(1);
      game.addRoll(2);
      expect(game.totalScore).not.toEqual(3);
    });

    it('gutter-spare-gutter roll', function() {
      game.addRoll(0);
      expect(game.totalScore).not.toContain(0);
      game.addRoll(10);
      expect(game.totalScore).not.toContain(10);
      game.addRoll(0);
      expect(game.totalScore).toEqual([10]);
    });

    it('gutter-spare-normal roll', function() {
      game.addRoll(0);
      expect(game.totalScore).not.toContain(0);
      game.addRoll(10);
      expect(game.totalScore).not.toContain(10);
      game.addRoll(1);
      expect(game.totalScore).toEqual([11]);
    });
  });

  describe('first frame spare', function() {
    it('spare-normal', function() {
      game.addRoll(9);
      expect(game.totalScore).not.toContain(9);
      game.addRoll(1);
      expect(game.totalScore).not.toContain(10);
      game.addRoll(1);
      expect(game.totalScore).toEqual([11]);
    });

    it('spare-gutter', function() {
      game.addRoll(9);
      expect(game.totalScore).not.toContain(9);
      game.addRoll(1);
      expect(game.totalScore).not.toContain(10);
      game.addRoll(0);
      expect(game.totalScore).toEqual([10]);
    });

    it('spare-strike', function() {
      game.addRoll(9);
      expect(game.totalScore).not.toContain(9);
      game.addRoll(1);
      expect(game.totalScore).not.toContain(10);
      game.addRoll(10);
      expect(game.totalScore).toContain(20);
      expect(game.totalScore).not.toContain(10);
    });
  });

  describe('first frame strike', function () {
    it('strike-gutter-gutter', function() {
      game.addRoll(10);
      expect(game.totalScore).not.toContain(10);
      game.addRoll(0);
      expect(game.totalScore).not.toContain(10);
      game.addRoll(0);
      expect(game.totalScore).toEqual([10, 10]);
    });

    it('strike-gutter-normal', function() {
      game.addRoll(10);
      expect(game.totalScore).not.toContain(10);
      game.addRoll(0);
      expect(game.totalScore).not.toContain(10);
      game.addRoll(1);
      expect(game.totalScore).toEqual([11, 12]);
    });

    it('strike-spare', function() {
      game.addRoll(10);
      expect(game.totalScore).not.toContain(10);
      game.addRoll(9);
      expect(game.totalScore).not.toContain(19);
      game.addRoll(1);
      expect(game.totalScore).toContain(20);
      expect(game.totalScore).not.toContain(10);
    });

    it('strike-strike-strike', function() {
      game.addRoll(10);
      expect(game.totalScore).not.toContain(10);
      game.addRoll(10);
      expect(game.totalScore).not.toContain(20);
      expect(game.totalScore).not.toContain(10);
      game.addRoll(10);
      expect(game.totalScore).toContain(30);
      expect(game.totalScore).not.toContain(20);
      expect(game.totalScore).not.toContain(10);
    });
  });
});
