/* eslint-env jasmine */
const Game = require('../src/game');

describe('Initialise game', () => {
  let game;
  let frame;

  beforeEach(() => {
    frame = jasmine.createSpyObj('Frame', { score: 10 });
    function Frame() { return frame; }
    game = new Game(Frame);
  });

  it('initialises with 10 frames', () => {
    expect(game.board.length).toEqual(10);
  });

  it('it stores frames in the board', () => {
    expect(game.board).toContain(frame);
  });

  // it('sets the final frames max length to three', () => {
  //   expect(game.board).toContain(frame);
  // });  Need to test this
});

describe('Game', () => {
  let game;
  let frame;
  let frameTwo;
  let frameThree;
  let boardMock;

  beforeEach(() => {
    boardMock = [];
    frame = jasmine.createSpyObj('Frame', { score: 10 });
    frameTwo = jasmine.createSpyObj('Frame', { score: 9 });
    frameThree = jasmine.createSpyObj('Frame', { score: 0 });
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

  })
});
