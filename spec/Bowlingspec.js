describe('Bowling', function() {

var scoresheet;

  describe('Scoresheet', function() {

    it('can store scores', function() {
      scoresheet = new Scoresheet();
      var frame = [1,2]
      scoresheet.addFrame(frame);
      expect(scoresheet.board[0]).toBe(frame);
    });

    it('can store multiple scores', function() {
      scoresheet = new Scoresheet();
      var frame_1 = [1,2];
      var frame_2 = [2,3];
      scoresheet.addFrame(frame_1);
      scoresheet.addFrame(frame_2);
      expect(scoresheet.board[0]).toBe(frame_1);
      expect(scoresheet.board[1]).toBe(frame_2);
    });

    it('can score a whole board', function() {
      scoresheet = new Scoresheet();
      scoresheet.board = [[1,1], [1,1],
                          [1,1], [1,1],
                          [1,1], [1,1],
                          [1,1], [1,1],
                          [1,1], [1,1,1]];
      scoresheet.scoreFrames();
      scoresheet.sum();
      expect(scoresheet.total).toBe(21)
    });

    it('can score a single strike correctly', function() {
      scoresheet = new Scoresheet();
      scoresheet.board = [[10,0], [1,1],
                          [1,1], [1,1],
                          [1,1], [1,1],
                          [1,1], [1,1],
                          [1,1], [1,1,1]];
      scoresheet.update();
      expect(scoresheet.total).toBe(31)
    });

    it('can score a single spare correctly', function() {
      scoresheet = new Scoresheet();
      scoresheet.board = [[1,9], [5,3],
                          [1,1], [1,1],
                          [1,1], [1,1],
                          [1,1], [1,1],
                          [1,1], [1,1,1]];
      scoresheet.update();
      expect(scoresheet.total).toBe(40)
    });

    it('can score a two strikes correctly', function() {
      scoresheet = new Scoresheet();
      scoresheet.board = [[10,0], [10,0],
                          [2,0], [1,0],
                          [1,0], [1,0],
                          [1,0], [1,0],
                          [1,0], [1,0,0]];
      scoresheet.scoreFrames();
      scoresheet.strikeCalc();
      scoresheet.sum();
      expect(scoresheet.total).toBe(43)
    });

    it('can score a three strikes correctly', function() {
      scoresheet = new Scoresheet();
      scoresheet.board = [[10,0], [10,0],
                          [10,0], [2,0],
                          [1,0], [1,0],
                          [1,0], [1,0],
                          [1,0], [1,0,0]];
      scoresheet.scoreFrames();
      scoresheet.strikeCalc();
      scoresheet.sum();
      expect(scoresheet.total).toBe(72)
    });

    it('can score a four strikes correctly', function() {
      scoresheet = new Scoresheet();
      scoresheet.board = [[10,0], [10,0],
                          [10,0], [10,0],
                          [2,0], [1,0],
                          [1,0], [1,0],
                          [1,0], [1,0,0]];
      scoresheet.scoreFrames();
      scoresheet.strikeCalc();
      scoresheet.sum();
      expect(scoresheet.total).toBe(101)
    });

    it('can score a strike spare combination correctly', function() {
      scoresheet = new Scoresheet();
      scoresheet.board = [[10,0], [1,9],
                          [5,1], [1,0],
                          [1,0], [1,0],
                          [1,0], [1,0],
                          [1,0], [1,0,0]];
      scoresheet.scoreFrames();
      scoresheet.strikeCalc();
      scoresheet.sum();
      expect(scoresheet.total).toBe(48)
    });

    it('can score a perfect game correctly', function() {
      scoresheet = new Scoresheet();
      scoresheet.board = [[10,0], [10,0],
                          [10,0], [10,0],
                          [10,0], [10,0],
                          [10,0], [10,0],
                          [10,0], [10,10,10]];
      scoresheet.scoreFrames();
      scoresheet.strikeCalc();
      scoresheet.sum();
      expect(scoresheet.total).toBe(300)
    });

    it('can score a running tally', function() {
      scoresheet = new Scoresheet();
      var frame_1 = [10,0];
      var frame_2 = [2,3];
      scoresheet.addFrame(frame_1);
      scoresheet.scoreFrames();
      scoresheet.strikeCalc();
      scoresheet.sum();
      expect(scoresheet.total).toBe(10)
      scoresheet.addFrame(frame_2);
      scoresheet.scoreFrames();
      scoresheet.strikeCalc();
      scoresheet.sum();
      expect(scoresheet.total).toBe(20)
    });

  });
});