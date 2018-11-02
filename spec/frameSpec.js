describe("Frame", function() {
  var frameOne;

  beforeEach(function() {
    standardFrame = new Frame([4,5]);
    spareFrame = new Frame([5,5]);
    strikeFrame = new Frame([10]);
    gutterFrame = new Frame([]);
  });

  it("totals the score from the two bowls in a single frame.", function() {

    expect(standardFrame.frameScore).toEqual(9);
    expect(spareFrame.frameScore).toEqual(10);
    expect(strikeFrame.frameScore).toEqual(10);
    expect(gutterFrame.frameScore).toEqual(0);
  });

  it("throws an error if more than 10 pins are knocked down in a standard frame.", function() {

    expect( function(){ new Frame([9,9]); } ).toThrowError('Cannot knock down more than 10 pins in a single frame');
  });

  it("throws an error if there is more than two bowls in a standard frame", function() {

    expect( function(){ new Frame([1,1,3]); } ).toThrowError('Cannot have more than two bowls in a standard frame');
  });

  it("should calculate the the bonus for a spare", function() {
    spareFrame.calculateBonus(standardFrame, standardFrame)
    expect(spareFrame.bonus).toEqual(4)
    spareFrame.calculateBonus(strikeFrame, strikeFrame)
    expect(spareFrame.bonus).toEqual(10)
    spareFrame.calculateBonus(gutterFrame, gutterFrame)
    expect(spareFrame.bonus).toEqual(0)
  });

  it("should calculate the the bonus for a strike", function() {
    strikeFrame.calculateBonus(standardFrame, standardFrame)
    expect(strikeFrame.bonus).toEqual(9)
    strikeFrame.calculateBonus(strikeFrame, strikeFrame)
    expect(strikeFrame.bonus).toEqual(20)
    strikeFrame.calculateBonus(gutterFrame, gutterFrame)
    expect(strikeFrame.bonus).toEqual(0)
  });




});
