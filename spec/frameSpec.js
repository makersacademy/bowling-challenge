 describe('Frame', function(){
var frame;

beforeEach(function() {
    frame = new Frame();
});

it('can hold 10 pins', function(){
   expect(frame.startingPins).toEqual(10);
});

it('can record a roll', function(){
  frame.bowl(3);
  expect(frame.bothRolls[0]).toEqual(3);
});

it('can record two rolls', function(){
   frame.bowl(2);
   frame.bowl(3);
   expect(frame.bothRolls).toEqual([2, 3]);
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

it('recognises rolls [4, 6] as a spare', function(){
  frame.bowl(4);
  frame.bowl(6);
  expect(frame.frameSpare()).toEqual(true);
});

it('is over after 2 rolls', function(){
  frame.bowl(2);
  frame.bowl(3);
  expect(frame.isOver()).toEqual(true);
});

it('is NOT over after one bowl if not a strike or a spare', function(){
  frame.bowl(2);
  expect(frame.isOver()).toEqual(false);
});

it('is over when frame is a strike', function(){
  frame.bowl(10);
  expect(frame.isOver()).toEqual(true);
});

it('accepts only two roll', function(){
  frame.bowl(2);
  frame.bowl(3);
  expect(frame.bowl(1)).toEqual("This frame is over");
});

it('can calculate a score after one roll', function(){
  frame.bowl(5);
  frame.bowl(2);
  expect(frame.bothRolls[0]).toEqual(5);

});

it('can calculate total frame score', function(){
  frame.bowl(2);
  frame.bowl(5);
  expect(frame.totalFrameScore()).toEqual(7);
});

});



