describe('Bowling', function() {
  it('Gutter game', function() {
    const bowling = new Bowling();

    const times = 20;
    for (let i=0; i < times; i++) {
      bowling.roll(0);
    };

    expect(bowling.result()).toEqual(0);
  });
});
