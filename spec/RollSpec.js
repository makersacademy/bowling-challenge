'use strict';

describe("Roll", function() {

  var roll;

  beforeEach(function() {
    roll = new Roll();
  });

  it("knocks down the number of pins specified by the user", function() {
    expect(roll.makeRoll(2)).toEqual(2);
  });

  it("knocks down at least 0 pins", function() {
    expect(function(){ roll.makeRoll(-1); }).toThrow(new Error("Can not knock down a negative number of pins"));
  });

  it("knocks down at most 10 pins", function(){
    expect(function(){ roll.makeRoll(11); }).toThrow(new Error("Can not knock down more than 10 pins"));
  });

});
