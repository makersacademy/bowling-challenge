describe('ScoreCard', function(){

  var scoreCard

  describe('Initial setup state', function(){

    beforeEach(function(){
       scoreCard = new ScoreCard();
    })

    it('Has an internal array called frames', function(){
      expect(scoreCard.frames).toEqual([f1,f2,f3,f4,f5,f6,f7,f8,f9,f10]);
    });

  });

  describe('Play the game', function(){

    beforeEach(function(){
       scoreCard = new ScoreCard();
    })

    it('Can be passed two rolls and adds them to consecutive frames', function(){
      scoreCard.frameRolls(1,3);
      scoreCard.frameRolls(9,1);
      scoreCard.frameRolls(4,3);
      scoreCard.frameRolls(1,1);
      expect(scoreCard.frames[0].myRolls).toEqual([1,3]);
      expect(scoreCard.frames[3].myRolls).toEqual([1,1]);
    });

    it('Will tell you what the current total score is', function(){
      scoreCard.frameRolls(1,3);
      scoreCard.frameRolls(9,1);
      scoreCard.frameRolls(4,3);
      scoreCard.frameRolls(1,1);
      expect(scoreCard.score()).toEqual(23);

    });

    it('ScoreCard correctly updates the Frame number', function(){
      scoreCard.frameRolls(1,3);
      scoreCard.frameRolls(9,1);
      scoreCard.frameRolls(4,3);
      scoreCard.frameRolls(1,1);
      expect(scoreCard.frames[3].whichFrame).toEqual(4)
    });

  });

});
