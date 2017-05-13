describe('Bowling', function() {

  var bowling;

  beforeEach(function() {
    bowling = new Bowling()
  })

  describe('default state', function() {

    it('has a default game array', function() {
      expect(bowling.game).toEqual({
        frame1: [],
        frame2: [],
        frame3: [],
        frame4: [],
        frame5: [],
        frame6: [],
        frame7: [],
        frame8: [],
        frame9: [],
        frame10: []
      });
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

    it('gives 3 balls to tenth frame', function() {
      bowling.currentFrame = 10
      bowling.nextBall();
      bowling.nextBall();
      expect(bowling.currentBall).toEqual(3);
    })
  })

  describe('adding scores', function() {

    it('can record 2 frames', function() {
      bowling.bowl(5);
      bowling.bowl(3);
      bowling.bowl(6);
      bowling.bowl(1);
      expect(bowling.game).toEqual({
        frame1: [5, 3],
        frame2: [6, 1],
        frame3: [],
        frame4: [],
        frame5: [],
        frame6: [],
        frame7: [],
        frame8: [],
        frame9: [],
        frame10: []
      });
    });
  })
});
