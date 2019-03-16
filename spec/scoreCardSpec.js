describe('ScoreCard', function(){

  var scoreCard

  describe('Initial setup state', function(){

    beforeEach(function(){
       scoreCard = new ScoreCard();
     })

    it('Has an internal array called Frames', function(){
      expect(scoreCard.frames).toEqual([f1,f2,f3,f4,f5,f6,f7,f8,f9,f10]);
    });

  });

});
