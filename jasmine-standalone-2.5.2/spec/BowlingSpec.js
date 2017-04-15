'use strict';

describe('Bowling', function() {
  var bowling;

  bowling = new Bowling;

  it('User can input one roll', function(){
    bowling.throw(3);
    expect(bowling.currentScore).toEqual(3);
  });

});
