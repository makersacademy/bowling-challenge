describe('Bowling interface', function() {

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
  });

  it('allows adding of a player', function() {
    $("#new-player-name").val("James");
    $("#btn-add-player").trigger("click");
    expect($("body")).toContainText("James");
  });

  it('does not have the roll buttons when first opened', function() {
    expect($(".roll-buttons")).toBeHidden();
  });

  it('does not have the ready button when first opened', function() {
    expect($("#btn-ready")).toBeHidden();
  });

  it('does have the ready button when a player has been added', function() {
    $("#new-player-name").val("James");
    $("#btn-add-player").trigger("click");
    expect($("#btn-ready")).toBeVisible();
  });

  it('lets you indicate that you are ready to bowl', function() {
    $("#new-player-name").val("James");
    $("#btn-add-player").trigger("click");
    $("#btn-ready").trigger("click");
    expect($(".add-player")).toBeHidden();
  });

  describe('Multiplayer game', function() {

    beforeEach(function() {
      $("#new-player-name").val("James");
      $("#btn-add-player").trigger("click");
      $("#new-player-name").val("Valerie");
      $("#btn-add-player").trigger("click");
      $("#new-player-name").val("Hamish");
      $("#btn-add-player").trigger("click");
      $("#new-player-name").val("Gloria");
      $("#btn-add-player").trigger("click");
      $("btn-ready").trigger("click");
    });


    it('allows adding of several players', function() {
      expect($("body")).toContainText("James");
      expect($("body")).toContainText("Valerie");
      expect($("body")).toContainText("Hamish");
      expect($("body")).toContainText("Gloria");
    });

    it('shows the players\' scores as 0 at beginning', function() {
      expect($("#player-1-running-total")).toHaveText("0");
      expect($("#player-2-running-total")).toHaveText("0");
      expect($("#player-3-running-total")).toHaveText("0");
      expect($("#player-4-running-total")).toHaveText("0");
    });

  });

});