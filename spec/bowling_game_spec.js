'use strict';

describe("Play Bowling - Frame Logic", function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling_score();
  });

  it('It initializes on frame one and starting points of 0', function () {
    expect(bowling.score).toEqual(0)
    expect(bowling.frame).toEqual(1)
  });

  it('goes to next frame upon frame record', function() {
    bowling.record_frame_result()
    expect(bowling.frame).toEqual(2)
  });

  it('resets frame roll to 1 after frame', function() {
    bowling.current_roll = 10
    bowling.reset_frame()
    expect(bowling.current_roll).toEqual(1)
  });

  it('completes frame 1 after two rolls', function () {
    bowling.process_roll(3)
    bowling.process_roll(4)
    expect(bowling.frame).toEqual(2)
  });

  it('records roll results into array each frame', function() {
    bowling.process_roll(3)
    expect(bowling.frame_roll_results[0]).toEqual(3)
  });

  it('records results after two rolls on first frame', function () {
    bowling.process_roll(3)
    bowling.process_roll(4)
    expect(bowling.game_results[0].roll_results[0]).toEqual(3)
    expect(bowling.game_results[0].roll_results[1]).toEqual(4)
  });

  it('allows max of 7 pins to be rolled if 3 in previous roll', function () {
    bowling.process_roll(3)
    expect(bowling.pins_available).toEqual(7)
  });

});

describe("Play Bowling - Bonuse (strike/spare) logic", function() {
  var bowling;

    beforeEach(function() {
      bowling = new Bowling_score();
    });

  it('finsihes frame if strike is returned', function () {
    bowling.process_roll(10)
    expect(bowling.frame).toEqual(2)
  });

  it("records spare if all pins are rolled", function () {
    bowling.process_roll(3)
    bowling.process_roll(7)
    expect(bowling.game_results[0].bonus).toEqual('spare')
  });
});

describe("Play Bowling - Round logic", function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling_score();
  });

  it('game does not go beyond 10 rounds', function () {
    for (var i=0; i < 20; i++ ) {
      bowling.process_roll(3)
    }
    expect(bowling.finish).toEqual(true)
  });
});

describe("10th Round Mechanics Logic", function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling_score();
    for (var i=0; i < 10; i++ ) {
      bowling.process_roll(10)
    }
  });

  it('Allows play of two rolls (3 in total) on strike on 10th', function () {
    bowling.process_roll(10)
    expect(bowling.frame_rolls).toEqual(3)
  });

  it('Will not end frame if roll two strikes on 10th round', function () {
    bowling.process_roll(10)
    expect(bowling.finish).toEqual(false)
    expect(bowling.frame_rolls).toEqual(3)
  });

});
