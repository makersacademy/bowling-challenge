describe("Frame", function() {
    // var game;
    var frame;
  
    beforeEach(function() {
    //   game = new Game();
      frame = new Frame();
    });
  
    it("creates a new frame with an initial score of 0", function() {
      expect(frame.score).toEqual(0);
    });

    it("score updates after first bowl", function() {
        frame.add(5);
        expect(frame.score).toEqual(5);
    });

    it("saves the first bowl", function() {
        frame.add(5);
        expect(frame.first).toEqual(5);
    });

    it("score updates after first bowl", function() {
        frame.add(5);
        frame.add(3);
        expect(frame.score).toEqual(8);
    });

    it("saves the second bowl", function() {
        frame.add(5);
        frame.add(3);
        expect(frame.second).toEqual(3);
    });

  });
  