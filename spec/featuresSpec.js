describe('Bowling Challenge Features', function(){

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
  });

  describe('Starting a new game', function() {
    it('has a "Start New Game" button', function() {
      expect('button.NewGame').toContainText('Start a New Game');
    });

    it('generates the scoreCardTable', function() {
      $('button.NewGame').click();
      expect('table.scoreCardTable').toExist();
      expect('table.scoreCardTable').toBeVisible();
    });

    it('displays the scoring buttons', function() {
      $('button.NewGame').click();
      expect('button.scoring#10').toExist();
    });

    it('starts with a clear display', function() {
      $('button.NewGame').click();
      expect('td[frame=1][roll=1]').toBeEmpty();
    });

    it('clears the display when re-starting', function() {
      $('button.NewGame').click();
      $('button.scoring[pins=1]').click();
      $('button.scoring[pins=1]').click();
      $('button.NewGame').click();
      expect('td[frame=1][roll=1]').toBeEmpty();
    });

  });

  describe('taking turns', function() {

    beforeEach(function(){
      $('button.NewGame').click();
    });

    it('scoreCard displays correct initial frame score', function(){
      $('button.scoring#1').click();
      expect('td[frame=1][roll=1]').toContainText('1');
    });

    it('scoreCard displays correct second frame score', function(){
      $('button.scoring#1').click();
      $('button.scoring#1').click();
      $('button.scoring#1').click();
      $('button.scoring#1').click();
      expect('td[frame=2][roll=2]').toContainText('1');
    });
  });

  describe('info display', function() {

    beforeEach(function(){
      $('button.NewGame').click();
      $('button.scoring#10').click();
      $('button.scoring#6').click();
      $('button.scoring#4').click();
      $('button.scoring#2').click();
    });

    it('Displays "Pins sent to meet their maker:" with the correct number', function(){
      expect('article.pins').toContainText('22');
    });

    it('Displays "Brucey bonus:" with the correct number', function(){
      expect('article.bonus').toContainText('12');
    });

    it('Displays "Total points:" with the correct number', function(){
      expect('article.total').toContainText('34');
    });
  });

  describe('compliance', function() {
    beforeEach(function(){
      $('button.NewGame').click();
    });
  // invalid pin selection couldn't be tested due to fadeOut; Jasmine tests
  // the button before it has finished fading & the test therefore fails.
    it('correctly scores the perfect game', function() {
      $('button.scoring#10').click();
      $('button.scoring#10').click();
      $('button.scoring#10').click();
      $('button.scoring#10').click();
      $('button.scoring#10').click();
      $('button.scoring#10').click();
      $('button.scoring#10').click();
      $('button.scoring#10').click();
      $('button.scoring#10').click();
      $('button.scoring#10').click();
      expect('article.total').toContainText('300');
    });

    it('correctly scores the makers repo game', function() {
      $('button.scoring#1').click();
      $('button.scoring#4').click();
      $('button.scoring#4').click();
      $('button.scoring#5').click();
      $('button.scoring#6').click();
      $('button.scoring#4').click();
      $('button.scoring#5').click();
      $('button.scoring#5').click();
      $('button.scoring#10').click();
      $('button.scoring#0').click();
      $('button.scoring#1').click();
      $('button.scoring#7').click();
      $('button.scoring#3').click();
      $('button.scoring#6').click();
      $('button.scoring#4').click();
      $('button.scoring#10').click();
      $('button.scoring#2').click();
      $('button.scoring#8').click();
      $('button.scoring#6').click();
      expect('article.total').toContainText('133');
    });

  });


});
