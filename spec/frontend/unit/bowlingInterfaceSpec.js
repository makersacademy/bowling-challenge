fdescribe('Bowling Interface', () => {
  let bowlingInterface = require('../../../app/public/js/bowlingInterface');
  let interface;
  let game;
  let mockElement;
  let mockFrame = require('../../helpers/mockFrame');
  let mockGame = require('../../helpers/mockGame');
  let mockCompleteGame = require('../../helpers/mockCompleteGame');

  beforeEach(() => {
    mockElement = {}
    mockElement.innerHTML = jasmine.createSpyObj('mock element innerHTML', ['append']);
    mockFrameWithMiss = new mockFrame(0, 1);
    mockFrameRegular = new mockFrame(2, 3);
    mockFrameSpare = new mockFrame(6, 4, 3);
    mockFrameStrike = new mockFrame(10, undefined, 4);
  })
  
  it('renders user controls', () => {
    game = new mockGame([]);
    interface = new bowlingInterface(mockElement, game);

    expect(mockElement.innerHTML.append).toHaveBeenCalledWith(`<form><input type='text' id='next-roll'><label for='next-roll'><button type='submit', onclick='interface.newRoll()'>Add Roll</button></form>`)
  });

  it('renders html scorecard', () => {
    game = new mockGame([mockFrameWithMiss, mockFrameRegular]);
    interface = new bowlingInterface(mockElement, game);

    let expectedHeaderRow = "<tr><td colspan='2'>1</td><td colspan='2'>2</td></tr>";
    let expectedRollsRow = "<tr><td>0</td><td>1</td><td>2</td><td>3</td></tr>"
    let expectedTotalsRow = "<tr><td colspan='2'>1</td><td colspan='2'>6</td></tr>";
    
    expect(mockElement.innerHTML.append).toHaveBeenCalledWith(`<table>${expectedHeaderRow + expectedRollsRow + expectedTotalsRow}</table>`)
  });
  
  it('passes a new roll into the game', () => {
    game = new mockGame([]);
    interface = new bowlingInterface(mockElement, game);

    interface.newRoll("4")
    expect(game.roll).toHaveBeenCalledWith(4)
  });

  it('renders scorecard when new roll received', ()=> {
    game = new mockGame([]);
    interface = new bowlingInterface(mockElement, game);
    spyOn(interface, 'renderScorecard')

    interface.newRoll("4")
    expect(interface.renderScorecard).toHaveBeenCalled()
  })
});