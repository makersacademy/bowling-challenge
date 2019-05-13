describe('Scorecard', function() {
  var Scorecard = require('../../src/scorecard');
  var scorecard, gameMock, frameMockOne, frameMockTwo;

  beforeEach(function() {
    scorecard = new Scorecard();
    frameMockOne = jasmine.createSpyObj('frame', ['score']);
    frameMockOne.score(3);
    frameMockTwo = jasmine.createSpyObj('frame', ['score']);
    frameMockTwo.score(5);
    gameMock = jasmine.createSpyObj('game', ['frames']);
    gameMock.frames([frameMockOne, frameMockTwo]);
    // spyOn(gameMock, 'frames').and.returnValue([5, 3])
  });

  describe('#score', function() {
    it('scores a game of bowling', function() {
      // var array = [5, 3];
      // gameMock.frames.and.returnValue([ { score: 5 }, { score: 3 } ]);
      expect(scorecard.score(gameMock)).toEqual(8);
    });
  });

  // describe('#record', function() {
  //   it('records the number of pins knocked down', function() {
  //     expect(scorecard.total()).toEqual(0);
  //     scorecard.record(2);
  //     expect(scorecard.total()).toEqual(2);
  //   });
  // });
  //
  // describe('#total', function() {
  //   it('sums the number of pins knocked down for the game', function() {
  //     scorecard.record(2);
  //     scorecard.record(5);
  //     expect(scorecard.total()).toEqual(7);
  //   });
  // });
  //
  // describe('#isComplete', function() {
  //   it('returns false if a full 10 frame game has not been completed', function() {
  //     expect(scorecard.isComplete()).toBe(false);
  //     for (var i = 0; i < 19; i++) {
  //       scorecard.record(0);
  //     };
  //     expect(scorecard.isComplete()).toBe(false);
  //   });
  //   it('returns true if a full 10 frame game has been completed', function() {
  //     for (var i = 0; i < 20; i++) {
  //       scorecard.record(0);
  //     };
  //     expect(scorecard.isComplete()).toBe(true);
  //   });
  // });
});
