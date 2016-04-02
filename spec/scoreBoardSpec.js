describe('Score Board', function(){

  var testScoreBoard;

  beforeEach(function(){
    testScoreBoard = new ScoreBoard();
  });

  describe('Object status', function(){
    describe('#scoreBoard', function(){
      it('is initiated with 10 nested arrays', function(){
        expect(testScoreBoard.reveal).toEqual([[],[],[],[],[],
                                               [],[],[],[],[]]);
      });
    });
  });
});
