function Table(){
  this.headers = [{'id': 'frame-h', 'name': 'Frame'},
                  {'id': 'knocked-h', 'name': 'Knocked Pins'}]
  this.round = 0
}

Table.prototype.build_table = function(element){
  $(element).append("<table id='score-table'></table>")
}

Table.prototype.build_header = function(){
  $('#score-table').append(`<tr id=headers></tr>`)
  this.headers.forEach(function(h){
    $('#headers').append(`<th id=${h.id}>${h.name}</th>`)
  })
}

Table.prototype.remove_table = function(element){
  $(element).empty()
}

Table.prototype.new_round = function(hash){
  let row = `#${this.round}`
  $('#score-table').append(`<tr id=${this.round}></tr>`)
  $(row).append(`<td>${hash.frame}</td>`)
  $(row).append(`<td>${hash.knocked}</td>`)
  this.round++
}
