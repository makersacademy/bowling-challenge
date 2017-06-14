describe("roll", function() {
  it('knocks down a random number of remaining pins', function() {
    expect(roll(10) >= 0 && roll(10) <= 10).toBeTruthy();
  });
});
