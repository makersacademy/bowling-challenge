describe('Bowling', function(){

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe('Basic Scoring', function() {
    it('should have a starting score of zero', function(){
      expect(bowling.score).toEqual(0);
    });

    it('knows which frame it is on', function() {
      expect(bowling.bowlingFrame).toEqual(1);
    });

    it('can read back the scores for all frames', function() {
      array = bowling.allFramesScore();
      expect(array).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
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

    it('should be able to bowl thrice and incorporate the score', function() {
      bowling.bowl(5);
      bowling.bowl(4);
      bowling.bowl(3);
      expect(bowling.score).toEqual(9);
    });

    it('should be able to move on to the next frame when there have been two rolls', function() {
      for (i = 0; i <= 3; i++) {
        bowling.bowl(4);
      }
      expect(bowling.bowlingFrame).toEqual(2)
    });

  });

  describe('Final Scores', function() {
    it('can end the game when there have been 10 frames', function() {
      for (i = 1; i < 22; i++) {
        bowling.bowl(3);
      };
      expect( function(){ bowling.bowl(1); } ).toThrow(new Error('it is the end of the game'));
    });

    it('can play a game without any spares or strikes', function() {
      for (i = 1; i < 22; i++) {
        bowling.bowl(4);
      };
      expect( function(){ bowling.bowl(1); } ).toThrow(new Error('it is the end of the game'));
      expect(bowling.score).toEqual(80);
    });

  });

});