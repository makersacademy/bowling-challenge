'use strict';

describe("Feature test:", function () {
  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  })

  it("totle score is 0 in gutter game",function(){
    for(var i = 0; i< 20; i++){
      bowling.knock(0);
    }
    expect(bowling.totlescore).toBe(0)
  })
    
  });