'use strict';

describe("Lanes", function(){
  var lanes;
  // var bowlingBall;

  beforeEach(function(){
    // bowlingBall = jasmine.createSpy('bowlingBall');
    lanes = new Lanes;
  });

  function rollingN (n,pins) {
    for (var i = 0; i < n; i++){
      lanes.rolling(pins)
    }
  }

  function rollingSpare() {
    lanes.rolling(5);
    lanes.rolling(5);
  }

  function rollingStrike() {
    lanes.rolling(10);
  }

  it('has a scorecard of 0 by default', function(){
    expect(lanes.bowlingBalls()).toEqual([]);
  });

  it('allows user to register score in gutter', function() {
    rollingN(10,0);
    expect(lanes.total()).toEqual(0);
  });

  it('can handle ones', function() {
    rollingN(2,1);
    expect(lanes.total()).toEqual(2);
  });

  it('can handle one spare', function() {
    rollingSpare();
    lanes.rolling(4);
    rollingN(16,0);
    expect(lanes.total()).toEqual(10);
  });

  it('can handle one strike', function() {
    rollingStrike()
    lanes.rolling(3);
    lanes.rolling(4);
    rollingN(16,0);
    expect(lanes.total()).toEqual(13);
  });

  it('can register max score of 300', function() {
    rollingN(145,145);
    expect(lanes.total()).toEqual(300);
  });


});
