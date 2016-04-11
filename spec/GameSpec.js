describe("Game", function() {

  var Game;

  beforeEach(function() {
    Game = new Game();
  });

  describe("frame handler", function() {
    beforeEach(function() {
      frame = jasmine.createSpyObj('Frame', ['isComplete', 'record']);
      frame.isComplete.and.returnValue(false);
      Game = new Game(frame);
    });

    it("creates a new frame if none exists", function() {
      expect(Game.frames().length).toEqual(0);
      Game.record(1);
      expect(Game.frames().length).toEqual(1);
    });

    it("calls the frame record method", function() {
      Game.record(1);
      expect(frame.record).toHaveBeenCalledWith(1);
    });

    it("starts a new frame after completing one", function() {
      Game.record(1);
      frame.isComplete.and.returnValue(true);
      Game.record(1);
      expect(Game.frames().length).toEqual(2);
    });
  });

  describe("calculate a simple score", function() {
    beforeEach(function() {
      Game = new Game();

      frame1 = jasmine.createSpyObj('Frame', ['total'])
      frame1.total.and.returnValue([1,2]);

      Game.log = [frame1];
      // Query what is correct/better method - stubbing variable or method
      // spyOn(Game, 'frames').and.returnValue([frame1]);
    });

    it("returns the calculated score", function() {
      expect(Game.score()).toEqual(3);
    });
  });

  describe("calculate a score with a strike", function() {
    beforeEach(function() {
      Game = new Game();

      frame1 = jasmine.createSpyObj('Frame', ['total'])
      frame1.total.and.returnValue([10,0]);

      frame2 = jasmine.createSpyObj('Frame', ['total'])
      frame2.total.and.returnValue([3,6]);

      Game.log = [frame1, frame2];
    });

    xit("returns the calculated score", function() {
      expect(Game.score()).toEqual(28);
    });
  });
});
