'use strict';

describe('Game', () => {
  let game;
  let frame;
  let frameClass;

  beforeEach(() => {
    frameClass = jasmine.createSpy('frameClass');
    frame = jasmine.createSpyObj('frame', ['addRoll']);
    game = new Game(frameClass);
  });

  describe('frames', () => {
    it('starts with 1 frame', () => {
      expect(game.frames.length).toBe(1)
    });
  });

  describe('addRoll', () => {
    it('adds roll to current frame', () => {
      game.frames.push(frame);
      game.addRoll(9);
      expect(frame.addRoll).toHaveBeenCalledWith(9);
    });
  });
});


// describe('Plane',function(){
//   var plane;
//   var airport;
//   beforeEach(function(){
//     plane = new Plane();
//     airport = jasmine.createSpyObj('airport',['clearForLanding']);
//   });
//   it('can land at an airport', function(){
//     plane.land(airport);
//     expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
//   });
// });

// describe('Airport', function(){
//   var airport;
//   var plane;
//   beforeEach(function(){
//     airport = new Airport();
//     plane = jasmine.createSpy('plane',['land']);
//   });
//   it('has no planes by default', function(){
//     expect(airport.planes()).toEqual([]);
//   });
//   it('can clear planes for landing', function(){
//     airport.clearForLanding(plane);
//     expect(airport.planes()).toEqual([plane]);
//   });
// });
