const Application = require('../app');
const Game = require('../lib/game');
const UserInterface = require('../lib/userInterface');

jest.mock('../lib/userInterface', () => {
  return jest.fn().mockImplementation(() => {
    return {
      getRollOne: jest.fn().mockReturnValue(3),
      getRollTwo: jest.fn().mockReturnValue(5),
      getRollThree: jest.fn().mockReturnValue(0),
      game: {
        frameCount: 0,
        add: jest.fn(),
        calculateGrandTotal: jest.fn().mockReturnValue(90),
      },
    };
  });
});

describe('Application', () => {
  let app;
  let game;
  let ui;

  beforeEach(() => {
    game = new Game();
    ui = new UserInterface(game);
    app = new Application();
    app.game = game;
    app.UI = ui;
  });

  test('run method should call the expected methods and log the expected output', () => {
    console.log = jest.fn();
    app.run();
    expect(console.log.mock.calls[0][0]).toBe('You are on frame 0');
    expect(console.log.mock.calls[10][0]).toBe('Your total score is: 90');
    expect(ui.getRollOne.mock.calls.length).toBe(10);
    expect(ui.getRollTwo.mock.calls.length).toBe(10);
    expect(ui.getRollThree.mock.calls.length).toBe(10);
    expect(ui.game.add.mock.calls.length).toBe(10);
    expect(ui.game.calculateGrandTotal.mock.calls.length).toBe(1);
  });
});
