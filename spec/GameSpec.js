describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("beginning frames", function() {
    beforeEach(function() {
      frame = jasmine.createSpyObj('Frame', ['isComplete', 'record']);
      frame.isComplete.and.returnValue(false);
      game = new Game(frame);
    });

    it("creates a new frame if none exists", function() {
      expect(game.frames().length).toEqual(0);
      game.record(1);
      expect(game.frames().length).toEqual(1);
    });

    it("calls the frame record method", function() {
      game.record(1);
      expect(frame.record).toHaveBeenCalledWith(1);
    });

    it("starts a new frame after completing one", function() {
      game.record(1);
      frame.isComplete.and.returnValue(true);
      game.record(1);
      expect(game.frames().length).toEqual(2);
    });
  });

  describe("", function() {
    beforeEach(function() {
      game = new Game();

      for(var i=0; i<20;i++) {
        game.record(1);
      }

    });

    it("total frames limited to 10 -- no spares or strikes", function() {
      expect(game.frames().length).toEqual(10);
      game.record(1);
      expect(game.frames().length).toEqual(10);
    });
  });

  describe("calculate a simple score", function() {
    beforeEach(function() {
      game = new Game();

      frame1 = jasmine.createSpyObj('Frame', ['total'])
      frame1.total.and.returnValue([1,2]);

      game.log = [frame1];
      // Query what is correct/better method - stubbing variable or method
      // spyOn(game, 'frames').and.returnValue([frame1]);
    });

    it("returns the calculated score", function() {
      expect(game.score()).toEqual(3);
    });
  });

  describe("calculate a score with a strike", function() {
    beforeEach(function() {
      game = new Game();

      frame1 = jasmine.createSpyObj('Frame', ['total'])
      frame1.total.and.returnValue([10,0]);

      frame2 = jasmine.createSpyObj('Frame', ['total'])
      frame2.total.and.returnValue([3,6]);

      game.log = [frame1, frame2];
    });

    xit("returns the calculated score", function() {
      expect(game.score()).toEqual(28);
    });
  });
});
