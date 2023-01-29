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
        frameCount: 1,
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
  let spy;

  beforeEach(() => {
    game = new Game();
    ui = new UserInterface(game);
    app = new Application();
    app.game = game;
    app.UI = ui;
    spy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    spy.mockRestore();
  });

  test('run method should call the expected methods the expected number of times and log the expected output', () => {
    app.run();
    expect(spy.mock.calls[8]).toContain('\nYou are on frame 1'.yellow.bold);
    expect(ui.getRollOne.mock.calls.length).toBe(10);
    expect(ui.getRollTwo.mock.calls.length).toBe(10);
    expect(ui.getRollThree.mock.calls.length).toBe(10);
    expect(ui.game.add.mock.calls.length).toBe(10);
    expect(ui.game.calculateGrandTotal.mock.calls.length).toBe(1);
    expect(spy.mock.calls[18][0]).toContain('Your total score is: 90');
  });
});
