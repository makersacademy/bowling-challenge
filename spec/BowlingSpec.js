describe ('Bowling', function() {

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe ('#bowling_rules', function(){
    it ('game starts with 0', function() {
      expect(bowling.total).toEqual(0);
    });

    it ('has 10 frames per game', function() {
      bowling.rolls();
      expect(bowling.totalFrames).toEqual(10);
    });

    it ('stores the number of fallen pins', function() {
      bowling.rolls(0,7,0);
      expect(bowling.totalFrame(0)).toEqual(7);
    });
  })

  describe ('#bowling bonus', function(){
      it ('can check if you have a strike', function() {
        bowling.rolls(10, 0, 1);
        expect(bowling.totalFrame(1)).toEqual(10);
      })

      it ('can check if you have a spare', function() {
        bowling.rolls(4, 6, 0);
        expect(bowling.totalFrame(0)).toEqual(10);
      })

      it ('bonus when you strike', function() {
        bowling.rolls(10, 0, 0);
        bowling.rolls(3, 2, 1);
        expect(bowling.strikeBonus(0)).toBe(15);
      });

      it ('bonus when you spare', function() {
        bowling.rolls(5, 5, 0);
        bowling.rolls(2, 0, 1);
        expect(bowling.spareBonus(0)).toEqual(12);
      });

      it ('bonus when strike on 10th frame', function() {
        bowling.rolls(10, 0, 0);
        bowling.rolls(6, 0, 1);
        expect(bowling.strikeBonus(10)).toEqual(16);
      });
  })

  describe ('#bowling total', function(){
      it ('counts first few frames', function() {
        bowling.rolls(5, 3, 1);
        bowling.rolls(2, 3, 2);
        expect(bowling.addScores(2)).toEqual(13);
      })
  });

  describe ('#max games and gutter ball', function(){
      it ('has max scores of 300', function() {
         bowling.rolls(10, 0, 1);
         bowling.rolls(10, 0, 2);
         bowling.rolls(10, 0, 3);
         bowling.rolls(10, 0, 4);
         bowling.rolls(10, 0, 5);
         bowling.rolls(10, 0, 6);
         bowling.rolls(10, 0, 7);
         bowling.rolls(10, 0, 8);
         bowling.rolls(10, 0, 9);
         bowling.rolls(10, 0, 10);
         bowling.rolls(10, 0, 11);
         bowling.rolls(10, 0, 12);
         expect(bowling.addScores(12)).toEqual(120);
        //  test
       })

       it ('has a gutter game', function() {
          bowling.rolls(0, 0, 0);
          bowling.rolls(0, 0, 1);
          bowling.rolls(0, 0, 2);
          bowling.rolls(0, 0, 3);
          bowling.rolls(0, 0, 4);
          bowling.rolls(0, 0, 5);
          bowling.rolls(0, 0, 6);
          bowling.rolls(0, 0, 7);
          bowling.rolls(0, 0, 8);
          bowling.rolls(0, 0, 9);
          expect(bowling.totalFrame(9)).toEqual(0);
        })

        it ('has a random game score', function() {
           bowling.rolls(2, 4, 1);
           bowling.rolls(2, 4, 2);
           bowling.rolls(2, 4, 3);
           bowling.rolls(2, 4, 4);
           bowling.rolls(2, 4, 5);
           bowling.rolls(2, 4, 6);
           bowling.rolls(2, 4, 7);
           bowling.rolls(2, 4, 8);
           bowling.rolls(2, 4, 9);
           bowling.rolls(2, 4, 10);
           expect(bowling.addScores(10)).toEqual(60);
         })
    });
});
