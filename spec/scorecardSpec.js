describe('Scorecard', function(){
  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard;
  });

  function testAddScore(num1,num2){
    scorecard.addScore(num1)
    scorecard.addScore(num2)
  }

  describe('Defaults', function(){
    it('Can be an instance of scorecard', function(){
      expect(scorecard).toBeInstanceOf(Scorecard);
    });

    it('Has default amount of rolls set to 2', function(){
      expect(scorecard.rolls).toEqual(2);
    });

    it('Has a total score set to 0', function(){
      expect(scorecard.totalScore).toEqual(0);
    });

    it('Has an array of played frames which are empty', function(){
      expect(scorecard.frames).toEqual([]);
    });

    it('Has counter for what number frame it is on', function(){
      expect(scorecard.frameCounter).toEqual(1);
    });
  });

  describe('Add score', function(){
    it('On start new instance of frame is created', function(){
      scorecard.addScore(2);
      expect(scorecard.currentFrame).toBeInstanceOf(Frame);
    });

    it('Will set the frames score to the total score on scorecard', function(){
      scorecard.addScore(2);
      expect(scorecard.totalScore).toEqual(2);
    });

    it('Will take 2 scores and set the total score to the total score of the frame', function(){
      scorecard.addScore(2);
      scorecard.addScore(2);
      expect(scorecard.totalScore).toEqual(4);
    });

    it('Will take in 4 scores, from 2 frames and set the total score accordingly', function(){
      scorecard.addScore(2);
      scorecard.addScore(2);
      scorecard.addScore(2);
      scorecard.addScore(2);
      expect(scorecard.totalScore).toEqual(8);
    });

    it('Will add completed frame into frames array', function(){
      scorecard.addScore(2);
      scorecard.addScore(2);
      expect(scorecard.frames.length).toEqual(1);
    });

    it('Is able to add multiple completed frames into array', function(){
      scorecard.addScore(2);
      scorecard.addScore(2);
      scorecard.addScore(2);
      scorecard.addScore(2);
      expect(scorecard.frames.length).toEqual(2);
    });

    it('Is able to add a frame which was complete by a strike', function(){
      scorecard.addScore(10);
      expect(scorecard.frames.length).toEqual(1);
    });

    it('Will add 10 frames to the array', function(){
      for(var i = 0; i < 10; i++){
        testAddScore(2,3)
      }
      expect(scorecard.frames.length).toEqual(10);
    });

    it('Will throw error if 11 frames are tried to put into the array', function(){
      for(var i = 0; i < 10; i++){
        testAddScore(2,3)
      }
      expect(function() { scorecard.addScore(2); }).toThrowError('Game is over, 10 frames have been exceeded')
    });

  });
});