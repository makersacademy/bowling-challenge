describe("ScoreCard", function() {

  beforeEach(function() {
    scorecard = new ScoreCard("Yannick");
  });

  describe("before the game starts", function() {

    it("should know the player's name", function() {
      expect(scorecard.name).toBe("Yannick");
    });

    it("should have a score of 0", function() {
      expect(scorecard.currentScore()).toEqual(0);
    });
  });

  describe("during the game", function() {

    it("should allow player to enter his roll score", function() {
      scorecard.addScore(1);
      expect(scorecard.currentScore()).toEqual(1);
    });

    it("should move on to the next frame if a player rolls a strike", function() {
      scorecard.addScore(10);
      expect(scorecard.frameNo).toEqual(1);
    });

    it("should move on to the next frame if a player rolls twice", function() {
      scorecard.addScore(5);
      scorecard.addScore(5);
      expect(scorecard.frameNo).toEqual(1);
    });

    it("should alert the player if he enters a total score more than 10 for a roll", function() {
      spyOn(scorecard, "_scoreCheck");
      scorecard.addScore(11);
      expect(scorecard._scoreCheck).toHaveBeenCalled();
    });

    it("should alert the player if he enters a total score more than 10 within one frame", function() {
      spyOn(scorecard, "_scoreCheck");
      scorecard.addScore(5);
      scorecard.addScore(6);
      expect(scorecard._scoreCheck).toHaveBeenCalled();
    });

    it("should have a total score of 90 if the player rolls 10 4-5s", function() {
        spyOn(scorecard, "_alertGameIsFinished");
        regulars(10);
        expect(scorecard.currentScore()).toEqual(90);
      });

    it("should know the game has ended after the player rolls his 20th ball on a game of 9 strikes and 1-1 on the 10th frame", function() {
        spyOn(scorecard, "_alertGameIsFinished");
        strikes(9);
        scorecard.addScore(1);
        scorecard.addScore(1);
        expect(scorecard._alertGameIsFinished).toHaveBeenCalled();
    });

    describe("properly accounting for strikes:", function() {    

      it("should have a total score of 30 after a player rolls two consecutive strikes", function() {
        strikes(2);
        expect(scorecard.currentScore()).toEqual(30);
      });

      it("should have a total score of 60 after a player rolls three consecutive strikes", function() {
        strikes(3);
        expect(scorecard.currentScore()).toEqual(60);
      });

      it("should have a max score of 300", function() {
        spyOn(scorecard, "_alertGameIsFinished");
        strikes(12);
        expect(scorecard.currentScore()).toEqual(300);
      });

      it("should know the game has ended after the player rolls his 12th ball if has a perfect game", function() {
        spyOn(scorecard, "_alertGameIsFinished");
        strikes(12);
        expect(scorecard._alertGameIsFinished).toHaveBeenCalled();
      });

    });   

    describe("properly account for spares:", function() {

      it("should have a total score of 25 after a player rolls two consecutive 5/5 spares", function() {
        spares(2);
        expect(scorecard.currentScore()).toEqual(25);
      });

      it("should have a total score of 40 after a player rolls three consecutive 5/5 spares", function() {
        spares(3);
        expect(scorecard.currentScore()).toEqual(40);
      });

      it("should have a final score of 150 with 10 5/5 and 5 on the extra ball", function() {
        spyOn(scorecard, "_alertGameIsFinished");
        spares(10);
        scorecard.addScore(5);
        expect(scorecard.currentScore()).toEqual(150);
      });

      it("should know the game has ended after the player rolls his 21st ball if he spares the 10th frame", function() {
        spyOn(scorecard, "_alertGameIsFinished");
        spares(10);
        scorecard.addScore(5);
        expect(scorecard._alertGameIsFinished).toHaveBeenCalled();
      });

    });



  });

  function strikes(number) {
    for (i = 0; i < number; i++) {scorecard.addScore(10)};
  };

  function spares(number) {
    for (i = 0; i < number; i++) {
      scorecard.addScore(5);
      scorecard.addScore(5);
    };
  };

  function regulars(number) {
    for (i = 0; i < number; i++) {
      scorecard.addScore(4);
      scorecard.addScore(5);
    };
  };
  


});





