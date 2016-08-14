'use strict';
describe('ScoreGame:', function(){

  describe('Scores:', function(){
    var scoreGame = new ScoreGame();
    it('A score(points) should be added to a frame when he/she rolls a ball.', function(){
      scoreGame.getScore();
      expect(scoreGame.game[0][0][0]).toBeGreaterThan(-1);
      expect(scoreGame.game[0][0][0]).toBeLessThan(11);
    });
    it('If user scores 7 points, 7 points should be added to the frame.', function(){
      scoreGame.resetGame();
      scoreGame.getScore(7);
      expect(scoreGame.game[0][0][0]).toEqual(7);
    });
  });
  describe('Frame:', function(){
    var scoreGame = new ScoreGame();
    it('User should be able to roll 2nd ball (get another score) if the first score is less than 10 in the frame.', function(){
      scoreGame.getScore(6);
      scoreGame.getScore(2);
      expect(scoreGame.game[0][0][0]).toEqual(6);
      expect(scoreGame.game[0][0][1]).toEqual(2);
    });
    it('There are only 10 pins that a user can score within a frame.', function(){
      scoreGame.resetGame();
      scoreGame.getScore(7);
      scoreGame.getScore();

      expect(scoreGame.game[0][0][0]+scoreGame.game[0][0][1]).toBeLessThan(11);
    });
    it('After user rolls 2 balls, which total less than 10 points in the current frame, the total should be immediately recored within the frame ', function(){
      scoreGame.resetGame();
      scoreGame.getScore(3);
      scoreGame.getScore(5);
      expect(scoreGame.game[0][1]).toEqual(8);
    });
    it('User rolls in the next frame after he rolls max 2 balls in the current frame.', function(){
      scoreGame.resetGame();
      scoreGame.getScore(2);
      scoreGame.getScore(4);
      scoreGame.getScore(8);
      expect(scoreGame.game[1][0][0]).toEqual(8);
    });
  });

  describe("Spare", function(){
    var scoreGame = new ScoreGame();
    it("If user's two tries in a frame total 10 points, he/she is awarded 'spare'.", function(){
      scoreGame.getScore(4);
      scoreGame.getScore(6);
      expect(scoreGame.bonus).toEqual('spare');
    });
    it("After user gets his first score in the subsequent frame, 10 points and this score as bonus points are added to the total in the previous frame.", function(){
      scoreGame.getScore(5);
      expect(scoreGame.game[0][1]).toEqual(10+scoreGame.game[1][0][0]);
    });
  });

  describe("Strike", function(){
    var scoreGame = new ScoreGame();
    it("If user knocks down all 10 pins (10 scores) at his/her first try in a frame, he/she is awarded 'strike'.", function(){
      scoreGame.getScore(10);
      expect(scoreGame.bonus).toEqual('strike');
    });
    it("After a strike in a frame, there is no more pin left in the frame, so user rolls in the next frame.", function(){
      scoreGame.resetGame();
      scoreGame.getScore(10);
      scoreGame.getScore(3);
      expect(scoreGame.game[1][0][0]).toEqual(3);
    });
  });
    // describe('Spare', function(){
    //   var scoreGame = new ScoreGame();
    //   it("User is awarded 'Spare' if he/she knocks down all the remaining pins (total of 10 pins) at his 2nd throw within the frame.", function(){
    //     scoreGame.getScore(2);
    //     scoreGame.getScore(8);
    //
    //   });
    // });

    // it('User gets 2nd ball (get another score) within the same frame if the first score is 10 in the frame.', function(){
    //   scoreGame.getScore(10);
    //   scoreGame.getScore();
    //   expect(scoreGame.getScore()).toEqual("Spare!");
    // });
  // });

});
