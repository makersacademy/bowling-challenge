describe('Bowling', function() {

var scoresheet;

  describe('Scoresheet', function() {

    it('can store scores', function(){
      scoresheet = new Scoresheet();
      var frame = [1,2]
      scoresheet.score(frame);
      expect(scoresheet.board[0]).toBe(frame);
    });

    it('can store multiple scores', function(){
      scoresheet = new Scoresheet();
      var frame_1 = [1,2];
      var frame_2 = [2,3];
      scoresheet.score(frame_1);
      scoresheet.score(frame_2);
      expect(scoresheet.board[0]).toBe(frame_1);
      expect(scoresheet.board[1]).toBe(frame_2);
    });

    it('can score a whole board', function(){
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
  });

});