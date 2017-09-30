'use strict';

describe ('Bowling scorecard does the following', function() {

  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('starts with default score of 0', function() {
    expect(bowling.currentScore()).toEqual(0);
  });

});
