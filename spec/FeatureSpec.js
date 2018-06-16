'use strict';
//
// As a player
// So that I can play
// I want to be able to bowl a ball
//
// As a player
// So that I know how I am doing
// I want to know my score from 1 to 10

describe('bowling',function(){
  var bowling

  it('bowling the ball generates the first score', function(){
    bowling = new Bowling();
    spyOn(Math,'floor').and.returnValue(8);
    bowling.bowl()
    expect(bowling.score).toEqual(8)
  });

});
// describe('Weather',function(){
//   var weather;
//   beforeEach(function(){
//     weather = new Weather();
//   });
//   it('gives stormy sometimes', function(){
//     spyOn(Math,'random').and.returnValue(1);
//     expect(weather.isStormy()).toBeTruthy();
//   });
//   it('gives not stormy other times', function(){
//     spyOn(Math,'random').and.returnValue(0);
//     expect(weather.isStormy()).toBeFalsy();
//   });
// });
