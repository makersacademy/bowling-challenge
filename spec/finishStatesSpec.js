describe('Finish States', function() {
  it('returns 0 for unfinished', function() {
    expect(FinishStates().unfinished).toEqual(0);
  });
});