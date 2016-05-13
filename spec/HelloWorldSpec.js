describe("Hello World", function(){
  var x = 4;
  var y = 5;

  // Making my own matcher
  beforeEach(function(){
    jasmine.addMatchers({
      toBeDivisibleByTwo: function(){
        return (this.actual % 2) === 0;
      }
    }); 
  });

  // Equal matcher
  it("says hello", function(){
    expect(helloWorld()).toEqual("Hello World!");    
  }); 
  
  // Test if the string contains the word
  it("says hello", function(){
    expect(helloWorld()).toContain("World!");    
  });
  
  it("test inequality", function(){
    expect(x).not.toEqual(y);        
  });
  
  it("is divisible by two", function(){
    expect(4).toBeDivisibleByTwo();
  });
}); 