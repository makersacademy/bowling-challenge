describe('Bowling interface', function() {

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
  });

  it('should allow adding of players', function() {
    $("#new-player-name").val("James");
    $("#btn-add-player").trigger("click");
    expect($("body")).toContainText("James");
  });

});