casper.test.begin("Testing Bowling Card", function(test){
  casper.start("http://localhost:9292", function() {
    test.assertHttpStatus(200);
    test.assertTitle("Bowling Score Card", "Title as expected");
    test.assertElementCount('td', 30);
    test.assertExists('#smashedPins');
    test.assertSelectorHasText('#smashedPins', 5);
  });

  casper.run(function() {
    test.done();
  });

});

