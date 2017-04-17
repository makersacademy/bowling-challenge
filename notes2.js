it ('message to be "Unlucky" when score is 0', function() {
  game.firstRollMessage(0);
  expect(game.message).toEqual("Unlucky");
});
it ('message to be "Better luck next time!" when score is between 1 and 3', function() {
  for (var number = 1; number < 4; number++) {
    game.firstRollMessage(number);
  } expect(game.message).toEqual("Better luck next time!");
});

it ('message to be "Good job"!" when score is between 4 and 7', function() {
  for (var number = 4; number < 8; number++) {
    game.firstRollMessage(number);
  } expect(game.message).toEqual("Good job!");
});

it ('message to be "Awesome!" when score is between 8 and 10', function() {
  for (var number = 8; number < 10; number++) {
    game.firstRollMessage(number);
  } expect(game.message).toEqual("Awesome!");
});
