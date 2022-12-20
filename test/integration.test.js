Frame = require('../lib/frame')
Scoreboard = require('../lib/scoreboard')

describe('gutter game, 10 frames with 0 points', () => {
  it('adds all frames with a score of 0', () => {
    const frame = new Frame (0, 0)
    const scoreboard = new Scoreboard
    scoreboard.add_frame(frame)
    scoreboard.add_frame(frame)
    scoreboard.add_frame(frame)
    scoreboard.add_frame(frame)
    scoreboard.add_frame(frame)
    scoreboard.add_frame(frame)
    scoreboard.add_frame(frame)
    scoreboard.add_frame(frame)
    scoreboard.add_frame(frame)
    scoreboard.add_frame(frame)
    expect(scoreboard.total()).toBe (0)
    expect(scoreboard.total_frames()).toBe (10)
  });

});

describe('a game with no spare or strikes, 10 frames with more than 0 points each roll', () => {
  it('adds all frames with a score of 50', () => {
    const frame = new Frame (2, 3)
    const scoreboard = new Scoreboard
    scoreboard.add_frame(frame)
    scoreboard.add_frame(frame)
    scoreboard.add_frame(frame)
    scoreboard.add_frame(frame)
    scoreboard.add_frame(frame)
    scoreboard.add_frame(frame)
    scoreboard.add_frame(frame)
    scoreboard.add_frame(frame)
    scoreboard.add_frame(frame)
    scoreboard.add_frame(frame)
    expect(scoreboard.total()).toBe (50)
    expect(scoreboard.total_frames()).toBe (10)
  });

});

describe('a game with no spare or strikes and every frame has a different score', () => {
  it('adds all frames with a score of 50', () => {
    const scoreboard = new Scoreboard
    let frame = new Frame(2, 3)
    scoreboard.add_frame(frame)
    frame = new Frame(5, 4)
    scoreboard.add_frame(frame)
    frame = new Frame(2, 1)
    scoreboard.add_frame(frame)
    frame = new Frame(7, 1)
    scoreboard.add_frame(frame)
    frame = new Frame(6, 2)
    scoreboard.add_frame(frame)
    frame = new Frame(8, 1)
    scoreboard.add_frame(frame)
    frame = new Frame(9, 0)
    scoreboard.add_frame(frame)
    frame = new Frame(4, 4)
    scoreboard.add_frame(frame)
    frame = new Frame(5, 1)
    scoreboard.add_frame(frame)
    frame = new Frame(1, 7)
    scoreboard.add_frame(frame)
    expect(scoreboard.total()).toBe (73)
    expect(scoreboard.total_frames()).toBe (10)
  });

});
