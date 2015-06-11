describe('BowlingCalcController', function() {
  beforeEach(module('BowlingCalc'));

  var bowl;

  beforeEach(inject(function($controller) {
    bowl = $controller('BowlingCalcController');
  }));

  it('initialises with an empty array of frames', function() {
	  expect(bowl.searchResult).toBeUndefined();
	  expect(bowl.searchTerm).toBeUndefined();
	});


});