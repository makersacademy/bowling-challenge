'use strict'

describe('Frame', function(){
  var frame;

beforeEach (function(){
  frame = new Frame(1);
});

it('has an ID', function(){
  expect(frame.getID()).toEqual(1);
});

it('set firstRoll to zero', function(){
  expect(frame.getFirstRoll()).toEqual(0);
});

it('set firstRoll', function(){
  frame.setFirstRoll(6);
  expect(frame.getFirstRoll()).toEqual(6);
});

it('Throw error if firstRoll set to more than 10 pins', function(){
  frame.setFirstRoll(11);
  expect(function(){frame.checkPinsExceeded(11)}).toThrowError('A roll cannot exceed maximum of 10 pins');
});
});
