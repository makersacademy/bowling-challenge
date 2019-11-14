$("#submit").click(function () {
  array = []
  for (let i = 0; i < 22; i++) {
    array.push(parseInt($(`#value${i}`).val(), 10))
  }

  game = new Game(chunkArray(array, 2))
  $("#result").html(`Your score is ${game.play()}`);

})

function chunkArray(myArray, chunk_size) {
  var index = 0;
  var arrayLength = myArray.length;
  var newArray = [];

  for (index = 0; index < arrayLength; index += chunk_size) {
    myChunk = myArray.slice(index, index + chunk_size);
    newArray.push(myChunk);
  }

  return newArray;
}

[1, 2, 3, 4]

[[, 1, 2], [3, 4]]




