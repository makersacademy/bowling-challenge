const Browser = require('zombie');

Browser.localhost('localhost', 3000);

describe('scorecard', function() {
  const browser = new Browser();

  describe('User can visit homepage', function() {

    beforeEach((done) => {
      browser.visit('/', done);
    });

    it('should be successful', function() {
      browser.assert.success()
    });

    it('should see title', function() {
      // browser.assert.text('h1', 'Bowling Scorecard')
      expect(browser.html('h1')).toContain('Bowling Scorecard');
    });
  });

  describe('can enter name', function() {
    beforeEach((done) => {
      browser.visit('/', done);
    });

    it('should be successful', function() {
      browser.assert.success()
    });

    it('can see name in table', function() {
      browser.fill('nameInput', 'Claudia')
      browser.pressButton('Submit')
      expect(browser.html('table')).toContain('Claudia');
    });
  });

  describe('can enter rolls', function() {
    beforeEach((done) => {
      browser.visit('/', done);
    });

    it('can enter roll1', function() {
      browser.fill('rollOne', '4')
      browser.pressButton('Submit')
      expect(browser.html('.f1r1')).toContain('4');

      // browser.assert.text('.f1r1', '4')
    })
  })
});
