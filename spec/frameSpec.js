 describe('Frame', function(){
var frame;

beforeEach(function() {
    frame = new Frame();
});

it('can hold 10 pins', function(){
   expect(frame.startingPins).toEqual(10);
});

it('can record a bowl', function(){
  frame.bowl(3);
  expect(frame.outstandingPins()).toEqual(7);
});

it('can record a roll (two bowls)', function(){
   frame.bowl(2);
   frame.bowl(3);
   expect(frame.outstandingPins()).toEqual(5);
});

it('can record a strike', function(){
  frame.bowl(10);
  expect(frame.frameStrike()).toEqual(true);
});

it('can record a spare', function(){
  frame.bowl(0);
  frame.bowl(10);
  expect(frame.frameSpare()).toEqual(true);
});

it('is over after 2 bowls', function(){
  frame.bowl(2);
  frame.bowl(3);
  expect(frame.isOver()).toEqual(true);
});

it('is NOT over after one bowl if not a strike or a spare', function(){
  frame.bowl(2);
  expect(frame.isOver()).toEqual(false);
});

it('is over when bowl is a strike', function(){
  frame.bowl(10);
  expect(frame.isOver()).toEqual(true);
});

it('accepts only one roll', function(){
  frame.bowl(2);
  frame.bowl(3);
  expect(frame.bowl(1)).toEqual("This frame is over");
});

it('can calculate a score after one bowl', function(){
  frame.bowl(5);
  frame.bowl(2);
  expect(frame.bothRolls[0]).toEqual(5);

});

it('can calculate total score frame score', function(){
  frame.bowl(2);
  frame.bowl(5);
  expect(frame.totalFrameScore()).toEqual(7);
});

});



