describe("Player:", function() {
  var player;
  var number;

  beforeEach(function(){
    player = new Player();
    number = 5;
  });

  describe("Rolling and Bowling!", function(){
    it("can roll", function(){
      expect(player.roll()).toBeDefined();
    });
    it("returns a number of knocked over pins", function(){
      expect(player.roll(number)).toBeTruthy();
    });
    it("returns a random number between 0 and a defined number", function(){
      spyOn(Math, "random").and.returnValue(0.6);
      expect(player.roll(number)).toEqual(3);
    });
  });
});
