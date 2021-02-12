"use strict";

describe('FrameTen', function() {
  let frameTen;
  
  beforeEach(function() {
    frameTen = new FrameTen();
  });

  describe("rollThree", function() {
    it('returns null at first', function() {
      expect(frameTen._rollThree).toEqual(null);
    });
  });

  describe("update", function() {
    it('updates rollOne at first (testing for successful inheritance)', function() {
      frameTen.update(5);
      expect(frameTen._rollOne).toEqual(5);
    });
  });

});