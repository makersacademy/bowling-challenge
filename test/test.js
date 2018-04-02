const Browser = require('zombie');
const expect = require('chai').expect;

Browser.localhost('localhost', 3000)

describe ("As a user, So that I can keep track of my bowling score,", function(){
  const browser = new Browser();

  before(function() {
    return browser.visit('/');
  });

  describe("I want to see my individual roll scores.", function() {
    before(function() {
      browser
        .fill('roll1', '4')
        .fill('roll2', '5');
      browser.pressButton('submit_rolls');
      browser
        .fill('roll1', '7')
        .fill('roll2', '3');
      return browser.pressButton('submit_rolls');
    });

    it('Should be successful', function() {
      browser.assert.success();
    });

    it('Should add the scores to the first frame column', function(){
      browser.assert.text('td[id=row_roll1_1]', '4');
      browser.assert.text('td[id=row_roll2_1]', '5');
    });

    it('Should add the scores to the second frame column', function(){
      browser.assert.text('td[id=row_roll1_2]', '7');
      browser.assert.text('td[id=row_roll2_2]', '3');
    });
  });

  describe("I want to see my bonus scores for a spare.", function() {
    before(function() {
      browser
        .fill('roll1', '4')
        .fill('roll2', '5');
      browser.pressButton('submit_rolls');
      browser
        .fill('roll1', '10')
        .fill('roll2', '0');
      return browser.pressButton('submit_rolls');
    });

    it('Should not add a bonus to the frame which scored < 10', function(){
      browser.assert.text('td[id=row_bonus_1]', '0');
    });
    it('Should add the one-roll bonus to the frame which scored a spare', function(){
      browser.assert.text('td[id=row_bonus_2]', '4');
    });
  });


  describe("I want to see my bonus scores for a strike.", function() {
    before(function() {
      browser
        .fill('roll1', '4')
        .fill('roll2', '5');
      browser.pressButton('submit_rolls');
      browser
        .fill('roll1', '10')
        .fill('roll2', '0');
      return browser.pressButton('submit_rolls');
    });

    it('Should add the two-roll bonus to the frame which scored a strike', function(){
      browser.assert.text('td[id=row_bonus_4]', '9');
    });
  });

  describe("I want to see my bonus scores for a double-strike.", function() {
    before(function() {

      browser
        .fill('roll1', '10')
        .fill('roll2', '0');
      browser.pressButton('submit_rolls');
      browser
        .fill('roll1', '4')
        .fill('roll2', '5');
      browser.pressButton('submit_rolls');
      browser
        .fill('roll1', '4')
        .fill('roll2', '5');
      return browser.pressButton('submit_rolls');
    });

    it('Should add frame+1, roll_1 and frame+2, roll_1 for the first strike', function(){
      browser.assert.text('td[id=row_bonus_6]', '14');
    });

    it('Should add frame+1, roll_1 and frame+1, roll_2 for the second strike', function(){
      browser.assert.text('td[id=row_bonus_7]', '9');
    });

  });

});
