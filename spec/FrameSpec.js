describe ("Frame", function() {
  var frame;

  beforeEach(function() {
  frame = new Frame();
  frame = jasmine.createSpyObj('frame',['clearForLanding']);
  });

})
