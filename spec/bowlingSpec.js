'use strict';

describe('Bowling', function(){
  var bowling;
  
  beforeEach(function(){
    bowling = new Bowling;
  })

  it('can roll a gutter game', function(){
    rollMany(0, 20);
    expect(bowling.score()).toEqual(0);
  })

  it('can roll all 2s', function(){
    rollMany(2, 20);
    expect(bowling.score()).toEqual(40);
  })

  var rollMany = function(pins, rolls){
    for(var i = 0; i < rolls; i++){
      bowling.pinsDown(pins);
    }
  }
})