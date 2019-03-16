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
      expect(scoreCard.frames).toEqual([frame1,frame2,frame3,frame4,frame5,frame6,frame7,frame8,frame9,frame10]);
    });

  });

});
