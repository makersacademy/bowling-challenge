var Scorecard = require('../src/Scorecard.js');


describe('FinalFrame', function() {
  var scorecard;
  var fakeCallable = jasmine.createSpyObj('fakeCallable', ['call'])
  function fakeFrame() {
    jasmine.createSpyObj('fakeFrame', { 'rolls': null, 'roll': fakeCallable });
  };
  function fakeFinalFrame() {
    jasmine.createSpyObj('fakeFinalFrame', ['calculateScore']);
  };

  beforeEach(function() {
    scorecard = new Scorecard(fakeFrame, fakeFinalFrame);
  });

  it('has an array of frames', function() {
    expect(scorecard.frames instanceof Array).toEqual(true)
  });

  it('has frame instances for the first 9 entries', function() {
    output = true;
    for (var i = 0; i < 9; i++) {
      output = output && (scorecard.frames[i] instanceof fakeFrame)
    }
    expect(output).toEqual(true)
  });

  it('has a finalFrame instance for the last entry', function() {
    expect(scorecard.frames[9] instanceof fakeFinalFrame).toEqual(true)
  });

  it('has a current frame which starts at zero', function() {
    expect(scorecard.currentFrame).toEqual(0)
  });

  it('takes a number rolled and puts it into a frame', function() {
    spyOn(scorecard, 'enterRoll')
    scorecard.roll(3)
    expect(scorecard.enterRoll).toHaveBeenCalledWith(3)
  });

  it("tells the final frane to calculate its own score", function() {
    scorecard.frames[9] = jasmine.createSpyObj('fakeFinalFrame', ['calculateScore']);
    scorecard.calculateFinalFrame()
    expect(scorecard.frames[9].calculateScore).toHaveBeenCalled()
  });

  it("calculates all the frame scores", function() {
    for (var i = 0; i < 9; i++) {
      scorecard.frames[i].rolls = [3,3]
    };
    scorecard.frames[9] = jasmine.createSpyObj('fakeFinalFrame', { 'calculateScore': 6 });
    expect(scorecard.allFrameScores()).toEqual([6,6,6,6,6,6,6,6,6,6])
  });

  it('calculates the score on a strike', function() {
    scorecard.frames[1].rolls = [3,3]
    expect(scorecard.calculateStrikeScore(0)).toEqual(16)
  });

  it('calculates the score on a spare', function() {
    scorecard.frames[1].rolls = [3,3]
    expect(scorecard.calculateSpareScore(0)).toEqual(13)
  });

  it('knows when a strike has been scored', function() {
    scorecard.frames[0].strike = true;
    spyOn(scorecard, 'calculateStrikeScore');
    scorecard.calculateFrameScore(0);
    expect(scorecard.calculateStrikeScore).toHaveBeenCalledWith(0);
  });

  it('knows when a spare has been scored', function() {
    scorecard.frames[0].spare = true;
    spyOn(scorecard, 'calculateSpareScore');
    scorecard.calculateFrameScore(0);
    expect(scorecard.calculateSpareScore).toHaveBeenCalledWith(0);
  });

  it('updates the current frame when the current frame ends', function() {
    scorecard.frames[0].over = true;
    scorecard.updateCurrentFrame()
    expect(scorecard.currentFrame).toEqual(1)
  });

  it('knows when the game has ended', function() {
    scorecard.currentFrame = 9
    scorecard.frames[9].over = true;
    scorecard.updateCurrentFrame()
    expect(scorecard.gameOver).toEqual(true)
  });

  it('throws an error when the player tries to roll if the game is over', function() {
    scorecard.gameOver = true;
    expect(function() {
      scorecard.roll(5)
    }).toThrowError('The game has ended.')
  });

  it('updates the current frame when a roll is entered', function() {
    scorecard.frames[0] = jasmine.createSpyObj('fakeFrame', { 'roll': true });
    spyOn(scorecard, 'updateCurrentFrame')
    scorecard.enterRoll(4)
    expect(scorecard.updateCurrentFrame).toHaveBeenCalled()
  });

  it('calculates strike score correctly for strikes in the 8th frame', function() {
    scorecard.frames[9].rolls = [5,5,5];
    expect(scorecard.calculateStrikeScore(8)).toEqual(20);
  });

  it('calculates the score correctly for consecutive strikes', function() {
    scorecard.frames[1].strike = true;
    scorecard.frames[2].rolls = [1,2];
    expect(scorecard.calculateStrikeScore(0)).toEqual(21)
  })
});
