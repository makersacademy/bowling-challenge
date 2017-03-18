'use strict';

describe ("Frame", function() {
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  describe("Scoring", function() {

    it("is saved into the frame", function() {
      frame.inputScore(6, 2)
      expect(frame.totalFrame).toEqual([[6, 2]]);
    });
  });
});
