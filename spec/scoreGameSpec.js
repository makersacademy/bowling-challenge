'use strict';
describe('ScoreGame:', function(){

  describe('Scores:', function(){
    var scoreGame = new ScoreGame();
    it('A score(points) should be added to a frame when he/she rolls a ball.', function(){
      scoreGame.getScore();
      expect(scoreGame.game[1][0][0]).toBeGreaterThan(-1);
      expect(scoreGame.game[1][0][0]).toBeLessThan(11);
    });
    it('If player scores 7 points, 7 points should be added to the frame.', function(){
      scoreGame.resetGame();
      scoreGame.getScore(7);
      expect(scoreGame.game[1][0][0]).toEqual(7);
    });
  });

  describe('Frames:', function(){
    var scoreGame = new ScoreGame();
    it('player should be able to roll 2nd ball (get another score) if the first score is less than 10 in the frame.', function(){
      scoreGame.getScore(6);
      scoreGame.getScore(2);
      expect(scoreGame.game[1][0][0]).toEqual(6);
      expect(scoreGame.game[1][0][1]).toEqual(2);
    });
    it('There are only 10 pins that a player can score within a frame.', function(){
      scoreGame.resetGame();
      scoreGame.getScore(7);
      scoreGame.getScore();

      expect(scoreGame.game[1][0][0]+scoreGame.game[1][0][1]).toBeLessThan(11);
    });
    it('After player rolls 2 balls, which total less than 10 points in the current frame, the total should be immediately recored within the frame ', function(){
      scoreGame.resetGame();
      scoreGame.getScore(3);
      scoreGame.getScore(5);
      expect(scoreGame.game[1][1]).toEqual(8);
    });
    it('player rolls in the next frame after he rolls max 2 balls in the current frame.', function(){
      scoreGame.resetGame();
      scoreGame.getScore(2);
      scoreGame.getScore(4);
      scoreGame.getScore(8);
      expect(scoreGame.game[2][0][0]).toEqual(8);
    });
    it('Each frame should display a cumulative total of its and previous frames after its scoring is complete.', function(){
      scoreGame.resetGame();
      scoreGame.getScore(1);
      scoreGame.getScore(2);
      expect(scoreGame.game[1][1]).toEqual(3);
      scoreGame.getScore(3);
      scoreGame.getScore(4);
      expect(scoreGame.game[2][1]).toEqual(10);
      scoreGame.getScore(5);
      scoreGame.getScore(2);
      expect(scoreGame.game[3][1]).toEqual(17);
    });
  });

  describe("Spare", function(){
    var scoreGame = new ScoreGame();
    it("If player's two tries in a frame total 10 points, he/she is awarded 'spare'.", function(){
      scoreGame.getScore(4);
      scoreGame.getScore(6);
      expect(scoreGame.bonus).toEqual('spare');
    });
    it("After player gets his first score in the subsequent frame, 10 points and this score as bonus points are added to the total in the previous frame.", function(){
      scoreGame.getScore(5);
      expect(scoreGame.game[1][1]).toEqual(10+scoreGame.game[2][0][0]);
    });
  });

  describe("Strike:", function(){
    var scoreGame = new ScoreGame();
    it("If player knocks down all 10 pins (10 scores) at his/her first try in a frame, he/she is awarded 'strike'.", function(){
      scoreGame.getScore(10);
      expect(scoreGame.strikeFrames[1]).toEqual(true);
    });
    it("After a strike in the current frame, there is no more pin left in the frame, so player rolls in the next frame.", function(){
      scoreGame.getScore(4);
      expect(scoreGame.game[2][0][0]).toEqual(4);
    });
    it("After player finishes all his/her tries in the next frame, 10 points and all the points from these tries are added to the total in the frame he/she got strike.", function(){
      scoreGame.getScore(5);
      expect(scoreGame.game[2][0][1]).toEqual(5);
      expect(scoreGame.game[1][1]).toEqual(19);
    });
    it("If player got a strike in the previous frame and gets another strike in the current frame, 20 points plus the score from the next try are added to the total in the frame player got the strick.", function(){
      scoreGame.resetGame();
      scoreGame.getScore(10);
      scoreGame.getScore(10);
      scoreGame.getScore(3);
      expect(scoreGame.game[1][0][0]).toEqual(10);
      expect(scoreGame.game[2][0][0]).toEqual(10);
      expect(scoreGame.game[3][0][0]).toEqual(3);
      expect(scoreGame.game[1][1]).toEqual(23);
    });
  });

  describe("10th Frame: ", function(){
    var scoreGame = new ScoreGame();
    it('Player can roll only twice if he/she does not get a spare or strike at the 10th frame.', function(){
      scoreGame.frameNth = 10;
      scoreGame.getScore(3);
      scoreGame.getScore(4);
      console.log(scoreGame.game[10][0][0]);
      console.log(scoreGame.game[10][0][1]);
      expect(scoreGame.game[10][0][0]).toEqual(3);
      expect(scoreGame.game[10][0][1]).toEqual(4);
      expect(scoreGame.getScore(5)).toEqual("Your game is finished.");
    });
    it('allows player to throw additional ball(try) if he/she knocks down all 10 pins with the first two tries (spare) in the 10th frame.', function(){
      scoreGame.resetGame();
      scoreGame.frameNth = 10;
      scoreGame.getScore(4);
      scoreGame.getScore(6);
      scoreGame.getScore(7);
      console.log(scoreGame.game[10][0][0]);
      console.log(scoreGame.game[10][0][1]);
      console.log(scoreGame.game[10][0][2]);
      console.log(scoreGame.game[10][1]);
      expect(scoreGame.game[10][0][0]).toEqual(4);
      expect(scoreGame.game[10][0][1]).toEqual(6);
      expect(scoreGame.game[10][0][2]).toEqual(7);
      expect(scoreGame.game[10][1]).toEqual(17);
    });
    it('allows player to get strikes three times if he/she knocks down all 10 pins with each try in the 10th frame.', function(){
      scoreGame.resetGame();
      scoreGame.frameNth = 10;
      scoreGame.getScore(10);
      scoreGame.getScore(10);
      scoreGame.getScore(10);
      console.log(scoreGame.game[10][0][0]);
      console.log(scoreGame.game[10][0][1]);
      console.log(scoreGame.game[10][0][2]);
      console.log(scoreGame.game[10][1]);
      expect(scoreGame.game[10][0][0]).toEqual(10);
      expect(scoreGame.game[10][0][1]).toEqual(10);
      expect(scoreGame.game[10][0][2]).toEqual(10);
      expect(scoreGame.game[10][1]).toEqual(30);
    });
  });

  describe("Perfect Game:", function(){
    var scoreGame = new ScoreGame();
    it("Player receives 300 points when he/she rolls 12 strikes in the game.", function(){
      for (var i=1;i<=12;i++) {
        scoreGame.getScore(10);
      }
      expect(scoreGame.game[10][1]).toEqual(300);

    });
  });
  describe("Gutter Game:", function(){
    var scoreGame = new ScoreGame();
    it("A Gutter Game is when the player never hits a pin (20 zero scores).", function(){
      for (var i=1;i<=20;i++) {
        scoreGame.getScore(0);
      }
      expect(scoreGame.game[10][1]).toEqual(0);

    });
  });
});
