describe('Scoring last few frames', function() {

  var game;

  beforeEach(function() {
    game = new Game();
    for (var i = 0; i < 18; i++) { game.addRoll(0); }
  });

  describe('final frame gutter', function () {
    it('gutter-gutter', function() {
      game.addRoll(0);
      expect(game.totalScore[9]).not.toEqual(0);
      game.addRoll(0);
      expect(game.totalScore[9]).toEqual(0);
      expect(function() { game.addRoll(0); }).toThrowError("Max frames");
      expect(function() { game.addRoll(10); }).toThrowError("Max frames");
    });

    it('gutter-normal', function() {
      game.addRoll(0);
      expect(game.totalScore[9]).not.toEqual(0);
      game.addRoll(1);
      expect(game.totalScore[9]).toEqual(1);
      expect(function() { game.addRoll(0); }).toThrowError("Max frames");
    });

    it('gutter-spare', function() {
      game.addRoll(0);
      expect(game.totalScore[9]).not.toEqual(0);
      game.addRoll(10);
      expect(game.totalScore[9]).not.toEqual(10);
      game.addRoll(1);
      expect(game.totalScore[9]).toEqual(11);
      expect(function() { game.addRoll(0); }).toThrowError("Max frames");
    });
  });

  describe('final frame spare', function () {
    it('spare-normal', function() {
      game.addRoll(9);
      expect(game.totalScore[9]).not.toEqual(9);
      game.addRoll(1);
      expect(game.totalScore[9]).not.toEqual(10);
      game.addRoll(0);
      expect(game.totalScore[9]).toEqual(10);
      expect(function() { game.addRoll(0); }).toThrowError("Max frames");
    });

    it('spare-strike', function() {
      game.addRoll(9);
      expect(game.totalScore[9]).not.toEqual(9);
      game.addRoll(1);
      expect(game.totalScore[9]).not.toEqual(10);
      game.addRoll(10);
      expect(game.totalScore[9]).toEqual(20);
      expect(function() { game.addRoll(0); }).toThrowError("Max frames");
    });
  });

  describe('final frame strike', function () {
    it('strike-strike-strike', function() {
      game.addRoll(10);
      expect(game.totalScore[9]).not.toEqual(10);
      game.addRoll(10);
      expect(game.totalScore[9]).not.toEqual(20);
      game.addRoll(10);
      expect(game.totalScore[9]).toEqual(30);
      expect(function() { game.addRoll(0); }).toThrowError("Max frames");
    });

    it('strike-strike-normal', function() {
      game.addRoll(10);
      expect(game.totalScore[9]).not.toEqual(10);
      game.addRoll(10);
      expect(game.totalScore[9]).not.toEqual(20);
      game.addRoll(0);
      expect(game.totalScore[9]).toEqual(20);
      expect(function() { game.addRoll(0); }).toThrowError("Max frames");
    });

    it('strike-normal-normal', function() {
      game.addRoll(10);
      expect(game.totalScore[9]).not.toEqual(10);
      game.addRoll(1);
      expect(game.totalScore[9]).not.toEqual(11);
      game.addRoll(0);
      expect(game.totalScore[9]).toEqual(11);
      expect(function() { game.addRoll(0); }).toThrowError("Max frames");
    });

    it('strike-spare', function() {
      game.addRoll(10);
      expect(game.totalScore[9]).not.toEqual(10);
      game.addRoll(9);
      expect(game.totalScore[9]).not.toEqual(19);
      game.addRoll(1);
      expect(game.totalScore[9]).toEqual(20);
      expect(function() { game.addRoll(0); }).toThrowError("Max frames");
    });

    it('strike-gutter-gutter', function() {
      game.addRoll(10);
      expect(game.totalScore[9]).not.toEqual(10);
      game.addRoll(0);
      expect(game.totalScore[9]).not.toEqual(10);
      game.addRoll(0);
      expect(game.totalScore[9]).toEqual(10);
      expect(function() { game.addRoll(0); }).toThrowError("Max frames");
    });

    it('strike-gutter-strike', function() {
      game.addRoll(10);
      expect(game.totalScore[9]).not.toEqual(10);
      game.addRoll(0);
      expect(game.totalScore[9]).not.toEqual(10);
      game.addRoll(10);
      expect(game.totalScore[9]).toEqual(20);
      expect(function() { game.addRoll(0); }).toThrowError("Max frames");
    });
  });
});
