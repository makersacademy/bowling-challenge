describe('BowlingCalcController', function() {
  beforeEach(module('BowlingCalc'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('BowlingCalcController');
  }));

  it('initialises with an empty array of frames', function() {
	  expect(ctrl.searchResult).toBeUndefined();
	  expect(ctrl.searchTerm).toBeUndefined();
	});


});