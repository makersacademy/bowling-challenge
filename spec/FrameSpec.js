'use strict';

describe("A frame of bowling", function(){

  // beforeEach(function(){
  //   var frame = new Frame();
  // })
  var frame;

  it("calculates a total for two rolls", function(){
    var frame = new Frame(6,2)
    expect(frame.total()).toEqual(8);
  });

  it("calculates a total for a spare", function(){
    var frame = new Frame(5,5)
    var next = new Frame(2,4)
    expect(frame.total(next)).toEqual(12)
  });

  it("calculates a total for a strike", function(){
    var frame = new Frame(10)
    var next = new Frame(2,4)
    expect(frame.total(next)).toEqual(16)
  });

  it("only allows one roll if strike", function(){
    var frame = new Frame(10,2)
    expect(frame.rolls.length).toEqual(1)
  });

  describe("multiple bonuses", function(){

    it("calculates a total for two strikes", function(){
      var frame = new Frame(10)
      var next = new Frame(10)
      var next2 = new Frame(4,2)
      expect(frame.total(next, next2)).toEqual(26)
    });

    it("calculates a total for three strikes", function(){
      var frame = new Frame(10)
      var next = new Frame(10)
      var next2 = new Frame(10)
      expect(frame.total(next, next2)).toEqual(30)
    });

    it("calculates a total for a strike and a spare", function(){
      var frame = new Frame(10)
      var next = new Frame(5,5)
      var next2 = new Frame(4,0)
      expect(frame.total(next, next2)).toEqual(24)
    });

  });


});
