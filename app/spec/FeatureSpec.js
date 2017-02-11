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

  describe("Enter rolls onto scoreboard", function(){

    it("Can enter roll into form and submit",function(done){
      var field = this.driver.findElement(selenium.By.name('roll'));
      field.sendKeys('3');
      field.submit();
      var scores = this.driver.findElement(selenium.By.id('score-table'));
      scores.getText().then(function(text){
        expect(text).toContain("3");
       });
      done();
    });
  });
});
