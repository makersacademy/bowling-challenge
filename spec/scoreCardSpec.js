describe('scoreCard', function(){

  var scoreCard

  describe('Initialization check', function(){

    it('Is actually a class', function(){
      scoreCard = new ScoreCard();
    });

  });

  describe('Internal array of Frame objects', function(){

    it('Has an internal array called Frames', function(){
      scoreCard = new ScoreCard();
      expect(scoreCard.frames).toEqual([]);
    });

  });

});
