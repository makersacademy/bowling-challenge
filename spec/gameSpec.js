/* eslint-env jasmine */
const Game = require('../src/game');

describe('Game', () => {
  let game;
  let frame;
  let frameTwo;
  let frameThree;
  let boardMock;

  beforeEach(() => {
    boardMock = [];
    frame = jasmine.createSpyObj('Frame', {
      score: 10, view: [10], isFinished: false,
    });
    frameTwo = jasmine.createSpyObj('Frame', {
      score: 9, view: [4, 5], isFinished: true,
    });
    frameThree = jasmine.createSpyObj('Frame', {
      score: 0, view: [], isFinished: false,
    });
    for (let i = 0; i < 10; i += 1) { boardMock.push(frame); }
  });

  describe('Score', () => {
    it('checks the score of a frame when score is called', () => {
      spyOn(Game.prototype, 'setUpBoard').and.returnValue(boardMock);
      game = new Game();
      game.score();

      expect(frame.score).toHaveBeenCalledWith();
    });

    it('should return a score of 100 for 10 frames with 10', () => {
      spyOn(Game.prototype, 'setUpBoard').and.returnValue(boardMock);
      game = new Game();

      expect(game.score()).toEqual(100);
    });

    it('when it has three frames, it gives the total score of those three', () => {
      boardMock = [];
      boardMock.push(frame, frameTwo, frameThree);
      spyOn(Game.prototype, 'setUpBoard').and.returnValue(boardMock);
      game = new Game();

      expect(game.score()).toEqual(19);
    });

    it('should return a score of 300 for 10 frames with 30 score', () => {
      boardMock = [];
      frame = jasmine.createSpyObj('Frame', { score: 30 });
      for (let i = 0; i < 10; i += 1) { boardMock.push(frame); }
      spyOn(Game.prototype, 'setUpBoard').and.returnValue(boardMock);
      game = new Game();

      expect(game.score()).toEqual(300);
    });

    it('should return a score of 19 despite the fact some frames have no score', () => {
      boardMock = [];
      frameThree = jasmine.createSpyObj('Frame', { score: 0 });
      boardMock.push(frame, frameTwo, frameThree);
      spyOn(Game.prototype, 'setUpBoard').and.returnValue(boardMock);
      game = new Game();

      expect(game.score()).toEqual(19);
    });
  });

  describe('runningScores', () => {
    it('checks the score of a frame when runningScores is called', () => {
      spyOn(Game.prototype, 'setUpBoard').and.returnValue(boardMock);
      game = new Game();
      game.runningScores();

      expect(frame.score).toHaveBeenCalledWith();
    });

    it('should return array with all the scores of each frame', () => {
      spyOn(Game.prototype, 'setUpBoard').and.returnValue(boardMock);
      game = new Game();
      let expectedResult = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]

      expect(game.runningScores()).toEqual(expectedResult);
    })

    it('should return array with different scores for each frame', () => {
      boardMock = [];
      for (let i = 0; i < 3; i += 1) { boardMock.push(frame, frameTwo, frameThree); }
      boardMock.push(frame);
      spyOn(Game.prototype, 'setUpBoard').and.returnValue(boardMock);
      game = new Game();
      let expectedResult = [10, 9, 0, 10, 9, 0, 10, 9, 0, 10]

      expect(game.runningScores()).toEqual(expectedResult);
    });

    it('should return array with 5 values when there are 5 frames', () => {
      boardMock = [];
      boardMock.push(frame, frameTwo, frameThree, frame, frame);
      spyOn(Game.prototype, 'setUpBoard').and.returnValue(boardMock);
      game = new Game();
      let expectedResult = [10, 9, 0, 10, 10];

      expect(game.runningScores()).toEqual(expectedResult);
    });
  });

  describe('views', () => {
    it('checks the view of a frame when views is called', () => {
      spyOn(Game.prototype, 'setUpBoard').and.returnValue(boardMock);
      game = new Game();
      game.view();

      expect(frame.view).toHaveBeenCalledWith();
    });

    it('should return array with all the views of the frames in it', () => {
      spyOn(Game.prototype, 'setUpBoard').and.returnValue(boardMock);
      game = new Game();
      let expectedResult = [[10], [10], [10], [10], [10], [10], [10], [10], [10], [10]]

      expect(game.view()).toEqual(expectedResult);
    })

    it('should return array with different views lengths for each frame', () => {
      boardMock = [];
      for (let i = 0; i < 3; i += 1) { boardMock.push(frame, frameTwo, frameThree); }
      boardMock.push(frame);
      spyOn(Game.prototype, 'setUpBoard').and.returnValue(boardMock);
      game = new Game();
      let expectedResult = [[10], [4, 5], [], [10], [4, 5], [], [10], [4, 5], [], [10]]

      expect(game.view()).toEqual(expectedResult);
    });

    it('should return array with 5 views when there are 5 frames', () => {
      boardMock = [];
      boardMock.push(frame, frameTwo, frameThree, frame, frame);
      spyOn(Game.prototype, 'setUpBoard').and.returnValue(boardMock);
      game = new Game();
      let expectedResult = [[10], [4, 5], [], [10], [10]];

      expect(game.view()).toEqual(expectedResult);
    });
  });
});
