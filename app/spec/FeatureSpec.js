var selenium = require('selenium-webdriver');
var base_url = "http://localhost:3000/";


describe("FEATURES:", function(){

  beforeEach(function(done){
    this.driver = new selenium.Builder().
      withCapabilities(selenium.Capabilities.chrome()).
      build();
    this.driver.get(base_url).then(done);
  });

  afterEach(function(done){
    this.driver.quit().then(done);
  });

  it("DELETE LATER Body has id body",function(done){
    var element = this.driver.findElement(selenium.By.id("body"));
    element.getAttribute('id').then(function(id) {
            console.log(id);
            expect(id).toBe('body');
            done();
        });
  });

  it("DELETE LATER title is express",function(done){
    this.driver.getTitle().then(function(title) {
      console.log('Page title is: ' + title);
      expect(title).toContain("Express");
    });
    done();
  });

  describe("Enter rolls onto scoreboard", function(){

    it("Can enter roll into form and submit",function(done){
      var field = this.driver.findElement(selenium.By.name('roll'));
      field.sendKeys('3');
      var link = this.driver.findElement(selenium.By.id('submit-roll'));
      link.click();
      var scores = this.driver.findElement(selenium.By.id('scores-table'));
      expect(scores.getText()).toContain("3");
      done();
    });
  });
});
