describe('Bowling calculator', function() {

  beforeEach(function(){
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Bowling Calculator');
  });

  it('can score a regular game', function(){
    element(by.id('0')).click();
    element(by.id('1')).click();
    element(by.id('2')).click();
    element(by.id('3')).click();
    element(by.id('4')).click();
    element(by.id('5')).click();
    expect(element(by.css('.list-holder')).getText()).toEqual('Frame 1\nroll : 0\nroll : 1\nscore: 1\nFrame 2\nroll : 2\nroll : 3\nscore: 6\nFrame 3\nroll : 4\nroll : 5\nscore: 15')
  });

  it('wont let you enter invalid frames', function(){
    element(by.id('5')).click();
    element(by.id('6')).click();
    expect(element(by.css('.list-holder')).getText()).toEqual('Frame 1\nroll : 5')
  });

  describe('it indicates its waiting for the next frame to complete', function(){

    it('after a spare', function(){
      element(by.id('7')).click();
      element(by.id('3')).click();
      expect(element(by.css('.list-holder')).getText()).toEqual('Frame 1\nroll : 7\nroll : 3\nscore: ...')
    });

    it('after a strike', function(){
      element(by.id('10')).click();
      expect(element(by.css('.list-holder')).getText()).toEqual('Frame 1\nroll : 10\n\nscore: ...')
    });
  });

  describe('the frames score is updated after future rounds', function(){

    it('after a strike', function(){
      element(by.id('10')).click();
      element(by.id('9')).click();
      element(by.id('0')).click();
      element(by.id('8')).click();
      element(by.id('2')).click();
      expect(element(by.css('.list-holder')).getText()).toContain('Frame 1\nroll : 10\n\nscore: 19')
    });

    it('after a spare', function(){
      element(by.id('7')).click();
      element(by.id('3')).click();
      element(by.id('1')).click();
      element(by.id('8')).click();
      expect(element(by.css('.list-holder')).getText()).toContain('Frame 1\nroll : 7\nroll : 3\nscore: 11')
    });

  });

});