'use strict';


describe('Buttons', function() {

  beforeEach(function() {
    buttons = new Buttons();
  });

  it('showing buttons status when thems are showed ', function() {
    buttons.statusButtons(3);
    expect(hidden_status).toEqual(0);
   });

  it('showing buttons status when thems are hidded ', function() {
    buttons.statusButtons(3);
    expect(hidden_status).toEqual(1);
   });

});
