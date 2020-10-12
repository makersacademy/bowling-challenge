'use strict';

describe("Roll", function() {

  it("doesn't throw an error when number of pins is 0-10", function() {
    expect(function() { new Roll(0) }).not.toThrow();
    expect(function() { new Roll(10) }).not.toThrow();
  });

  it("throws an error when number of pins is < 0", function() {
    expect(function() { new Roll(-1) }).toThrow();
  });

  it("throws an error when number of pins is > 10", function() {
    expect(function() { new Roll(11) }).toThrow();
  });
});
