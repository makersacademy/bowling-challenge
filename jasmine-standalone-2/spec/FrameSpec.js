describe("Frame", function(){
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe("#roll", function(){
  	it("adds the roll to the score when appropriate", function(){
  	  frame.roll(5);
  	  expect(frame.score()).toEqual(5);
  	  frame.roll(4);
  	  expect(frame.score()).toEqual(9);
  	});
  	it("will not add extra score after extra rolls", function(){
  	  frame.roll(5);
  	  frame.roll(4);
  	  frame.roll(7);
  	  expect(frame.score()).toEqual(9);
  	});
  	it("correctly scores strikes", function(){
  	  frame.roll(10);
  	  frame.roll(10);
  	  frame.roll(7);
  	  expect(frame.score()).toEqual(27);
  	});
  	it("correctly scores spares", function(){
      frame.roll(8);
      frame.roll(2);
      frame.roll(7);
      expect(frame.score()).toEqual(17);
  	});
  });

  describe("#isComplete", function(){
  	it("returns true if a strike is rolled", function() {
  	  frame.roll(10);
  	  expect(frame.isComplete()).toEqual(true);
  	});
  	it("returns true after two rolls", function() {
  	  frame.roll(1);
  	  frame.roll(2);
  	  expect(frame.isComplete()).toEqual(true);
  	});
  });
});