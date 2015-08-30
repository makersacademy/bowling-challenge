card = new Card();

$ (document).ready(function(){

  var mainTable = "<table border='1'>"
  for (i=1; i<((card.totalRolls/2)+1); i++){
    mainTable+='<tr><td>Frame ' +  i + '</td><td>Roll 1</td><td>Roll 2</td>'
  }
  mainTable+='</table>'

  $('#card').append(mainTable);
})
