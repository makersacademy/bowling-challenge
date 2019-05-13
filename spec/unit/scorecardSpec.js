describe('Scorecard', function() {
  var Scorecard = require('../../src/scorecard');
  var scorecard, gameMock, frameMockOne, frameMockTwo;

  beforeEach(function() {
    scorecard = new Scorecard();
    frameMockOne = jasmine.createSpyObj('frame', ['score']);
    frameMockTwo = jasmine.createSpyObj('frame', ['score']);
    gameMock = jasmine.createSpyObj('game', ['frames']);
  });

  describe('#score', function() {
    it('scores a game of bowling', function() {
      gameMock.frames.and.returnValue( [frameMockOne, frameMockTwo] );
      frameMockOne.score.and.returnValue(5);
      frameMockTwo.score.and.returnValue(3);
      expect(scorecard.score(gameMock)).toEqual(8);
    });
  });
});
