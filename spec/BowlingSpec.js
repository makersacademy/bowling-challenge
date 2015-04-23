describe('Bowling', function(){

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe('Basic Scoring', function() {

    it('knows which frame it is on', function() {
      expect(bowling.bowlingFrame).toEqual(1);
    });

    it('can read back the scores for all frames', function() {
      array = bowling.allFramesScore();
      expect(array).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    });

    it('can give a final score', function(){
      expect(bowling.finalScore()).toEqual(0);
    });

  });

  describe('Frames', function() {
    it('there should be ten frames made', function() {
      var framesNumber = Object.keys(bowling.frames).length
      var failures = 0
      for (i = 1; i <= framesNumber; i++) {
        if(bowling.frames[i] instanceof Frame){
          continue;
        } else {
          failures++;
        };
      };
      expect(failures).toEqual(0);
      expect(framesNumber).toEqual(10);
    });

    it('should be able to bowl twice and incorporate the score', function() {
      bowling.bowl(5);
      bowling.bowl(4);
      expect(bowling.finalScore()).toEqual(9);
    });

    it('should be able to move on to the next frame when there have been two rolls', function() {
      for (i = 0; i <= 2; i++) {
        bowling.bowl(4);
      }
      expect(bowling.bowlingFrame).toEqual(2)
    });

    it('should move onto the next frame when a strike is bowled', function() {
      bowling.bowl(10);
      expect(bowling.bowlingFrame).toEqual(2);
    });

    it('can record a bonus score when the last frame was a spare', function() {
      bowling.bowl(5);
      bowling.bowl(5);
      bowling.bowl(3);
      expect(bowling.allFramesScore()).toEqual([13, 3, 0, 0, 0, 0, 0, 0, 0, 0])
    });

    xit('can record a bonus score when the last frame was a strike', function() {
      bowling.bowl(10);
      bowling.bowl(3);
      bowling.bowl(4);
      expect(bowling.frames[1].score).toEqual(17);
    });

    xit('records the correct bonus when multiple strikes are strung together', function(){
      bowling.bowl(10);
      bowling.bowl(10);
      bowling.bowl(3);
      bowling.bowl(3);
      expect(bowling.bowlingFrame).toEqual(4);
      expect(bowling.frames[1].score).toEqual(23);
      expect(bowling.frames[2].score).toEqual(16);
      expect(bowling.allFramesScore()).toEqual([23, 16, 6, 0, 0, 0, 0, 0, 0, 0])
    });

  });

  describe('Final Scores', function() {
    it('can end the game when there have been 10 frames', function() {
      for (i = 1; i < 21; i++) {
        bowling.bowl(3);
      };
      expect( function(){ bowling.bowl(1); } ).toThrow(new Error('it is the end of the game'));
    });

    it('can play a game without any spares or strikes', function() {
      for (i = 1; i < 21; i++) {
        bowling.bowl(4);
      };
      expect( function(){ bowling.bowl(1); } ).toThrow(new Error('it is the end of the game'));
      expect(bowling.finalScore()).toEqual(80);
    });

    xit('can play a game with a strike and a spare, non-sequential', function() {
      bowling.bowl(10);
      for (i = 1; i < 15; i++) {
        bowling.bowl(4);
      };
      bowling.bowl(5);
      bowling.bowl(5);
      bowling.bowl(4);
      bowling.bowl(4);
      expect( function(){ bowling.bowl(1); } ).toThrow(new Error('it is the end of the game'));
      expect(bowling.finalScore()).toEqual(96)
    });

    it('can play a game with all spares except for last round', function() {
      for(i = 1; i < 19; i++) {
        bowling.bowl(5);
      };
      bowling.bowl(4)
      bowling.bowl(4)
      expect( function(){ bowling.bowl(1); } ).toThrow(new Error('it is the end of the game'));
      expect(bowling.finalScore()).toEqual(142)
    });

  });

});