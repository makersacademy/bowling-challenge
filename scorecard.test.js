const Scorecard = require('./scorecard');

describe('Scorecard', () => {

    it ('can rolls pins', () => {
      const scorecard = new Scorecard();
      scorecard.roll(3);
      scorecard.roll(4); 
      expect(scorecard.frames[0]).toEqual ([3,4,7]);
    });

    it ('can tally a frame', () => {
        const scorecard = new Scorecard();
        scorecard.roll(3);
        scorecard.roll(4); 
        scorecard.tallyScore();
        expect(scorecard.runningTotal).toEqual (7);
      });

      it ('can roll a gutter game', () => {
        const scorecard = new Scorecard();
        var times = 20;
        for(var i = 0; i < times; i++){
            scorecard.roll(0);
        }
        scorecard.tallyScore();
        expect(scorecard.runningTotal).toEqual (0);
      });

      it ('can roll a standard game', () => {
        const scorecard = new Scorecard();
        var times = 20;
       
        for(var i = 0; i < times; i++){
            scorecard.roll(4);
        }
        expect(scorecard.runningTotal).toEqual (80);
      });

      it ('can roll a strike', () => {
        const scorecard = new Scorecard();
        scorecard.roll(10); 
        expect(scorecard.runningTotal).toEqual (10);
      });

      it ('can roll two strikes', () => {
        const scorecard = new Scorecard();
        scorecard.roll(10); 
        scorecard.roll(10); 
       // scorecard.tallyScore(); 
        expect(scorecard.runningTotal).toEqual (30);
      });

      it ('can roll three strikes', () => {
        const scorecard = new Scorecard();
        scorecard.roll(10); 
        scorecard.roll(10); 
        scorecard.roll(10);
        expect(scorecard.runningTotal).toEqual (60);
      });

      it ('can roll four strikes', () => {
        const scorecard = new Scorecard();
        scorecard.roll(10); 
        scorecard.roll(10); 
        scorecard.roll(10);
        scorecard.roll(10);
        expect(scorecard.runningTotal).toEqual (90);
      });

      it ('can roll a 10 strikes', () => {
        const scorecard = new Scorecard();
        var times = 10;
        for(var i = 0; i < times; i++){
            scorecard.roll(10);
        }
        expect(scorecard.runningTotal).toEqual (270);
      });


      it ('can roll a 3 strikes and a standard roll', () => {
        const scorecard = new Scorecard();
        var times = 3;
        for(var i = 0; i < times; i++){
            scorecard.roll(10);
        }
        scorecard.roll(3);
        scorecard.roll(2);
        expect(scorecard.runningTotal).toEqual (73);
      });

      it ('can roll 2 strikes and a standard roll', () => {
        const scorecard = new Scorecard();
        var times = 2;
        for(var i = 0; i < times; i++){
            scorecard.roll(10);
        }
        scorecard.roll(3);
        scorecard.roll(2);
        expect(scorecard.runningTotal).toEqual (43);
      });

      it ('can roll a spare', () => {
        const scorecard = new Scorecard();
        scorecard.roll(9);
        scorecard.roll(1);
        scorecard.roll(2);
        scorecard.roll(2);
        expect(scorecard.runningTotal).toEqual (16);
      }); 

      it ('can roll two spares', () => {
        const scorecard = new Scorecard();
        scorecard.roll(9);
        scorecard.roll(1);
        scorecard.roll(9);
        scorecard.roll(1);
        expect(scorecard.runningTotal).toEqual (29);
      }); 

      it ('can roll 10 spares', () => {
        const scorecard = new Scorecard();
        var times = 10;
        for(var i = 0; i < times; i++){
            scorecard.roll(1);
            scorecard.roll(9);
        }
        expect(scorecard.runningTotal).toEqual (109);
      }); 

      it ('can roll 5 spares and two strikes and 1 standard roll', () => {
        const scorecard = new Scorecard();
        var times = 5;
        for(var i = 0; i < times; i++){
            scorecard.roll(1);
            scorecard.roll(9);
        }
        scorecard.roll(10);
        scorecard.roll(10);
        scorecard.roll(1);
        scorecard.roll(1);
        expect(scorecard.runningTotal).toEqual (99);
      }); 

      it ('can roll 12 strikes - two bonus balls', () => {
        const scorecard = new Scorecard();
        var times = 12;
        for(var i = 0; i < times; i++){
            scorecard.roll(10);
        }
        expect(scorecard.runningTotal).toEqual (300);
      }); 

      it ('can roll 10 spares - one bonus ball', () => {
        const scorecard = new Scorecard();
        var times = 10;
        for(var i = 0; i < times; i++){
            scorecard.roll(1);
            scorecard.roll(9);
        }
        scorecard.roll(9);
        expect(scorecard.runningTotal).toEqual (118);
      }); 

    }); 
