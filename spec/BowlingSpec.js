describe ("Bowling", function() {
	var bowling;

	beforeEach (function(){
		bowling = new Bowling();
	});

	it('starts with a total of 0', function() {
		expect(bowling.total).toEqual(0);
	});

  it('can roll a gutter game', function() {
    for(var i=0; i<21; i++) {
			bowling.roll(0)
		}
    expect(bowling.total).toEqual(0);
  });
});
