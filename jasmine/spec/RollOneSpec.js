describe('RollOne', function(score) {
  var rollOne;
  var score;

  beforeEach(function(){
    rollOne = new RollOne();
    // score = 7;
    //
    // rollTwo = {
    //   roll: function() {
    //     rolled = true;
    //   },
    //   scoreTwo: function() {
    //     score = 2;
    //   }
    // }
    // spyOn(rollTwo, 'roll');
  });

  it('returns rollOne score', function() {
    rollOne.roll(7);
    expect(rollOne.score(score)).toEqual(score);
  });
  // it('sends the score to the scoreCard', function(){
  //   rollOne.roll();
  //   expect(scoreCard.rollOneScore).toEqual(score);
  // });
  // it('calls rollTwo', function() {
  //   expect(rollTwo.roll.calls.any()).toEqual(false);
  //   rollOne.roll();
  //   expect(rollTwo.rollcalls.any()).toEqual(true);
  // });

});
//
// 'use strict'
//
// describe('Airport', function(){
//
//   var airport, plane, landed, weather;
//
//
//   it('starts with an empty hangar', function(){
//     expect(airport.hangar).toEqual([]);
//   });
//
//   it('can accept planes for landing', function(){
//     airport.land(plane)
//     expect(airport.hangar).toEqual([plane]);
//   });
//
//   it('instructs plane to land', function(){
//     expect(plane.land.calls.any()).toEqual(false);
//     airport.land(plane)
//     expect(plane.land.calls.any()).toEqual(true);
//   });
//
//   it('allows planes to take off', function(){
//     airport.land(plane);
//     airport.takeOff(plane);
//     expect(airport.hangar).not.toContain(plane);
//   });
//
//   it('instructs a plane to takeoff', function() {
//     expect(plane.takeOff.calls.any()).toEqual(false);
//     airport.takeOff(plane);
//     expect(plane.takeOff.calls.any()).toEqual(true);
//   })
//
//   it('does not allow a plane to takeoff when weather stormy', function() {
//     airport.land(plane);
//     airport.takeOff(plane);
//     expect(airport.hangar).toContain(plane);
//   })
// });
