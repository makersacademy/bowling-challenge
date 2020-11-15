'use strict';

describe('Bowling', function() {

  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });


  var rollMany = function (pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      bowling.roll(pins);
    }
  };


  it('calculates the score of gutters', function() {
    rollMany(0, 20);
    expect(bowling.score()).toEqual(0);
  });


  it('calculates the score of 1 per frame', function() {
    rollMany(1, 20);
    expect(bowling.score()).toEqual(20);
  });



  // it('calculates the score of 3', function() {
  //   for (var i = 0; i < 20; i++) {
  //     bowling.roll(1);
  //     console.log(bowling.score())
  //   }
  //   expect(bowling.score()).toEqual(3);
  // });


    it('calculates the score of 3 from one frame', function() {
        bowling.roll(3, 20);
      expect(bowling.score()).toEqual(3);
    });

    it('calculates the score of 15 from three frames', function() {
        bowling.roll(15, 3);
      expect(bowling.score()).toEqual(15);
    });



});
