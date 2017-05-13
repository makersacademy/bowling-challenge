describe('Bowling', function() {
  var bowling;

  beforeEach(function() {
    var fakeGameCard = {
      frame1: [],
      frame2: [],
      frame3: [],
      frame10: []
    };
    bowling = new Bowling(fakeGameCard);
  })

  describe('default state', function() {

    it('knows it is the first frame', function() {
      expect(bowling.currentFrame).toEqual(1);
    })

    it('knows it is the first ball', function() {
      expect(bowling.currentBall).toEqual(1);
    })
  })

  describe('progressing the game', function() {

    it('moves to the 2nd ball', function() {
      bowling.nextBall();
      expect(bowling.currentBall).toEqual(2);
    })

    it('moves back to the 1st ball', function() {
      bowling.nextBall();
      bowling.nextBall();
      expect(bowling.currentBall).toEqual(1);
    })

    it('progresses to the next frame', function() {
      bowling.nextBall();
      bowling.nextBall();
      expect(bowling.currentFrame).toEqual(2);
    })

    describe('tenth-frame logic', function() {

      it('gives 3 balls to tenth frame strikes', function() {
        bowling.currentFrame = 10
        bowling.bowl(10);
        bowling.bowl(10);
        expect(bowling.currentBall).toEqual(3);
      })

      it('gives 3 balls to tenth frame spare', function() {
        bowling.currentFrame = 10
        bowling.bowl(7);
        bowling.bowl(3);
        expect(bowling.currentBall).toEqual(3);
      })

      it('stops after 2 non-strikes in tenth frame', function() {
        bowling.currentFrame = 10
        bowling.bowl(5);
        bowling.bowl(3);
        expect(bowling.currentBall).toEqual(2);
      })
    })
  })
  describe('adding scores', function() {

    it('can record a gutterball', function() {
      bowling.bowl(0);
      expect(bowling.game).toEqual({
        frame1: [0],
        frame2: [],
        frame3: [],
        frame10: []
      });
    });

    it('can record gutterball and spare', function() {
      bowling.bowl(0);
      bowling.bowl(10);
      expect(bowling.game).toEqual({
        frame1: [0, 10],
        frame2: [],
        frame3: [],
        frame10: []
      });
    });

    it('can record 2 frames', function() {
      bowling.bowl(5);
      bowling.bowl(3);
      bowling.bowl(6);
      bowling.bowl(1);
      expect(bowling.game).toEqual({
        frame1: [5, 3],
        frame2: [6, 1],
        frame3: [],
        frame10: []
      });
    });

    it('recognises a strike', function() {
      bowling.bowl(10);
      expect(bowling.currentFrame).toEqual(2);
    });

    it('can record a strike, followed by next ball in frame 2', function() {
      bowling.bowl(10);
      bowling.bowl(3);
      bowling.bowl(6);
      bowling.bowl(1);
      expect(bowling.game).toEqual({
        frame1: [10],
        frame2: [3, 6],
        frame3: [1],
        frame10: []
      });
    });
  })
});
