describe('ScoreCard', function() {
   var scoreCard;

   beforeEach(function() {
      scoreCard = new ScoreCard();
   });

   describe('Defaults', function() {
      it('does not have frames by default', function() {
         expect(scoreCard.frames.length).toEqual(0)
      });
   });

   describe('Creating new frame', function() {
      it('records score on a new frame when game starts', function() {
         scoreCard.recordScore(1);

         expect(scoreCard.frames.length).toEqual(1);
         expect(scoreCard.frames[0].getTotalScore()).toEqual(1);
      });

      it('records score on a new frame when previous frame ended with a strike', 
      function() {
         scoreCard.recordScore(10);

         expect(scoreCard.frames.length).toEqual(1);

         scoreCard.recordScore(1);

         expect(scoreCard.frames.length).toEqual(2);
         expect(scoreCard.frames[1].getTotalScore()).toEqual(1);
      });

      it('records score on a new frame when previous frame ended after two rolls', 
      function() {
         scoreCard.recordScore(1);
         scoreCard.recordScore(2);

         expect(scoreCard.frames.length).toEqual(1);

         scoreCard.recordScore(4);

         expect(scoreCard.frames.length).toEqual(2);
         expect(scoreCard.frames[1].getTotalScore()).toEqual(4);
      });

      it('adds score to final frame after the ninth frame ended', function() {
         for(var i = 0; i < 9; i++) {
            scoreCard.recordScore(10);
         }

         scoreCard.recordScore(1);

         expect(scoreCard.frames.length).toEqual(10);
         expect(scoreCard.frames[9]._isFinalFrame).toEqual(true);
      });
   });

   describe('Applying bonus', function() {
      it('adds first roll as bonus to the previous frame if it ended with a spare',
      function() {
         scoreCard.recordScore(5);
         scoreCard.recordScore(5);
         scoreCard.recordScore(8);

         expect(scoreCard.frames[0].getTotalScore()).toEqual(18);
      });

      it('does not add second roll as bonus to the previous frame if it ended with a spare',
      function() {
         scoreCard.recordScore(5);
         scoreCard.recordScore(5);
         scoreCard.recordScore(8);

         expect(scoreCard.frames[0].getTotalScore()).toEqual(18);

         scoreCard.recordScore(1);

         expect(scoreCard.frames[0].getTotalScore()).toEqual(18);
      });

      it('adds first and second rolls as bonus to the previous frame if it ended with a strike',
      function() {
         scoreCard.recordScore(10);
         scoreCard.recordScore(5);

         expect(scoreCard.frames[0].getTotalScore()).toEqual(15);

         scoreCard.recordScore(2);

         expect(scoreCard.frames[0].getTotalScore()).toEqual(17);
      });
   });

   describe('End of game', function() {
      it('ends when all 10 frames ended', function() {
         for(var i = 0; i < 20; i++) {
            scoreCard.recordScore(1);
         }

         expect(scoreCard.isGameEnded()).toEqual(true);
      });

      it('is not ended when last frame is not ended', function() {
         for(var i = 0; i < 19; i++) {
            scoreCard.recordScore(1);
         }

         expect(scoreCard.isGameEnded()).toEqual(false);
      });

      it('is not allowed to roll after game ended', function() {
         for(var i = 0; i < 20; i++) {
            scoreCard.recordScore(1);
         }

         expect(function() { scoreCard.recordScore(1) }).toThrowError('Game already ended');
      });
   });

   describe('Perfect game', function() {
      it('returns a total score of 300 after a perfect game', function() {
         for(var i = 0; i < 12; i++) {
            scoreCard.recordScore(10);
         }
   
         expect(scoreCard.isGameEnded()).toEqual(true);
         expect(scoreCard.getTotalScore()).toEqual(300);
      });
   });
});