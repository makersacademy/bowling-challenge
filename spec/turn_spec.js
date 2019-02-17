"use strict";

describe("Turn", function() {
  var turnofones;
  var striketurn;
  var spareturn;
  var anotherturn;

  beforeEach(function() {
    turnofones = new Turn(1, 1);
    striketurn = new Turn(10);
    spareturn = new Turn(7, 3);
    anotherturn = new Turn (4, 2);
  });

  it('should confirm if it\'s a strike', function(){
    expect(striketurn.isStrike()).toEqual(true)
    expect(spareturn.isStrike()).toEqual(false)
    expect(anotherturn.isStrike()).toEqual(false)
    expect(striketurn.printStrike()).toEqual('X')
  });

  it('should confirm if it\'s a spare', function(){
    expect(spareturn.isSpare()).toEqual(true)
    expect(turnofones.isSpare()).toEqual(false)
    expect(striketurn.isSpare()).toEqual(false)
    expect(spareturn.printSpare()).toEqual('/')
  });

});
