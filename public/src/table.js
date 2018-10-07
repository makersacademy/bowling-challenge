function Table(){
  this.headers = [{'id': 'frame-h', 'name': 'Frame'},
                  {'id': 'roll-h', 'name': 'Roll'},
                  {'id': 'knocked-h', 'name': 'Knocked Pins'},
                  {'id': 'score-h', 'name': 'Total Score'},
                  {'id': 'notes-h', 'name': 'Notes'}]
}

Table.prototype.build_table = function(element){
  $(element).append("<table id='score-table'></table>")
}

Table.prototype.build_header = function(){
  Table.prototype.new_row("headers")
  this.headers.forEach(function(h){
    $('#headers').append(`<th id=${h.id}>${h.name}</th>`)
  })
}

Table.prototype.remove_table = function(element){
  $(element).empty()
}

Table.prototype.new_round = function(api){
  Table.prototype.new_row(api.turn)
  Table.prototype.fill_in_round(`tr#${api.turn}`, api)
}

Table.prototype.new_row = function(id){
  $('#score-table').append(`<tr id=${id}></tr>`)
}


Table.prototype.fill_in_round = function(element, api){
  Table.prototype.fillInFrame(element, api.turn, api.frame)
  Table.prototype.fillInRoll(element, api.turn, api.roll)
  Table.prototype.fillInKnocked(element, api.turn, api.knocked)
  Table.prototype.fillInScore(element, api.turn, api.score)
  Table.prototype.fillInNotes(element, api.turn, api.notes)
}

Table.prototype.fillInFrame = function(element, row, frame){
  $(element).append(`<td id=frame-row-${row}>${frame}</td>`)
}

Table.prototype.fillInRoll = function(element, row, roll){
  $(element).append(`<td id=roll-row-${row}>${roll}</td>`)
}

Table.prototype.fillInKnocked = function(element, row, knocked){
  $(element).append(`<td id=knocked-row-${row}>${knocked}</td>`)
}

Table.prototype.fillInScore = function(element, row, score){
  $(element).append('<td id=score-row-' + row + '>' + score + '</td>')
}

Table.prototype.fillInNotes = function(element, row, notes){
  $(element).append(`<td id=notes-row-${row}>${notes}</td>`)
}
