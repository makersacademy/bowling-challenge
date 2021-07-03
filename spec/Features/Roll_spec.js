// describe("Roll", function() {
//   game = new Game();
//   var frame = new Frame();
//   it("A roll records a score for the frame", function() {
//     $(document).ready(function() {
//       $('#roll1').click();
//       console.log(frame);
//     });
//     expect(frame._pinScore).toEqual(10);
//   });
// });

describe("Roll", function() {
  it("A roll records a score for the frame", function() {
    loadFixtures('fixtures.html');
    $('#roll1').click();
    expect(frame._pinScore).toEqual(1);
  });
});
