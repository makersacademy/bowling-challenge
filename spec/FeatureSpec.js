describe('BowlingApp',function(){

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
  });

  it("displays score in table when a button is clicked", function() {
    $("button[data-pins=2]").click();
    expect("#scores").toContainText(2);
  });

  it("displays scores from each frame in the correct place", function() {
    $("button[data-pins=3]").click();
    $("button[data-pins=5]").click();
    $("button[data-pins=4]").click();
    $("button[data-pins=2]").click();
    expect("td[id=1]").toContainText(3);
    expect("td[id=1]").toContainText(5);
    expect("td[id=2]").toContainText(4);
    expect("td[id=2]").toContainText(2);
  });

  it("hides disallowed buttons after first selection", function() {
    $("button[data-pins=3]").click();
    expect("button[data-pins=8]").toBeHidden();
    expect("button[data-pins=9]").toBeHidden();
    expect("button[data-pins=10]").toBeHidden();
  });

  it("shows hidden buttons again after second selection", function() {
    $("button[data-pins=1]").click();
    $("button[data-pins=5]").click();
    expect("button[data-pins=10]").toBeVisible();
  });

  it("shows the total for each frame", function() {
    $("button[data-pins=4]").click();
    $("button[data-pins=2]").click();
    expect("#totals").toContainText(6);
  });

  it("shows a running total", function() {
    $("button[data-pins=8]").click();
    $("button[data-pins=1]").click();
    $("button[data-pins=0]").click();
    $("button[data-pins=5]").click();
    expect("#running_total").toContainText(14);
  });

  it("shows an X for a strike", function() {
    $("button[data-pins=10]").click();
    expect("td[id=1]").toContainText("X");
  });

  it("does not display frame total immediately after a strike", function() {
    $("button[data-pins=10]").click();
    expect("#totals td:first").toBeEmpty();
  });

  it("adds bonus to strike score and displays correct totals", function() {
    $("button[data-pins=10]").click();
    $("button[data-pins=0]").click();
    $("button[data-pins=5]").click();
    expect("#totals td:first").toContainText(15);
    expect("#totals td:nth-child(2)").toContainText(5);
    expect("#running_total").toContainText(20);
  });

  it("shows / for a spare", function() {
    $("button[data-pins=4]").click();
    $("button[data-pins=6]").click();
    expect("td[id=1]").toContainText("/");
  });

  it("does not display frame total immediately after a spare", function() {
    $("button[data-pins=3]").click();
    $("button[data-pins=7]").click();
    expect("#totals td:first").toBeEmpty();
  });

  it("adds bonus to spare score and displays correct totals", function() {
    $("button[data-pins=8]").click();
    $("button[data-pins=2]").click();
    $("button[data-pins=7]").click();
    expect("#totals td:first").toContainText(17);
    expect("td[id=2]").toContainText(7);
    expect("#running_total").toContainText(24);
  });
});