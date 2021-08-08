
describe ("Score", () => {

  beforeEach( () => {
    score = new Score();
  });


  it ('initial test to confirm Jasmine is working', () => {
    expect(score.test).toEqual(5);
  });


});