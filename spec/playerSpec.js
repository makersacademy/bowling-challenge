describe("Player", function() {
  var player;

  beforeEach(function(){
     player = new Player("Eddie");
  })

  it ("has a name", function () {
    expect(player.addName()).toEqual("Eddie");
  });
});
