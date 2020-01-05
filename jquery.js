$(document).ready(function() {
  let bowling = new Bowling
  $('#score').text(`${bowling.score()}`)
})
