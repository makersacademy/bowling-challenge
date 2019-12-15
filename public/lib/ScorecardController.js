
function specialTurn() {
  
    if (scorecard.gotSpare == true || scorecard.gotStrike == true){
      $('#submit').click(function(){
        if (i % 2 !== 0) {
          $(`#${i}`).text($('#entry').val())
          roll1 = parseInt($('#entry').val())
          $('#entry').val('')
          i++
        } else {
          $(`#${i}`).text($('#entry').val())
          roll2 = parseInt($('#entry').val())
          $('#entry').val('')
          i++
          scorecard.addTurn(roll1, roll2, 0)
          specialTurn()
          $(`#frame-${f-1}`).text(`${scorecard.normalTotal() - (roll1 + roll2)}`)
          $(`#frame-${f}`).text(`${scorecard.normalTotal()}`)
          f++
        }
      })
    }
}

$(document).ready(function(){

  scorecard = new Scorecard()

  i = 1
  f = 1

  $('#submit').click(function(){
    if (scorecard.gotSpare == true || scorecard.gotStrike == true){
      if (i % 2 !== 0) {
        $(`#${i}`).text($('#entry').val())
        roll1 = parseInt($('#entry').val())
        $('#entry').val('')
        i++
      } else {
        $(`#${i}`).text($('#entry').val())
        roll2 = parseInt($('#entry').val())
        $('#entry').val('')
        i++
        scorecard.addTurn(roll1, roll2, 0)
        specialTurn()
        $(`#frame-${f-1}`).text(`${scorecard.normalTotal() - (roll1 + roll2)}`)
        $(`#frame-${f}`).text(`${scorecard.normalTotal()}`)
        f++
      }
    } else {
      if (i % 2 !== 0) {
        $(`#${i}`).text($('#entry').val())
        roll1 = parseInt($('#entry').val())
        $('#entry').val('')
        i++
      } else {
        $(`#${i}`).text($('#entry').val())
        roll2 = parseInt($('#entry').val())
        $('#entry').val('')
        i++
        scorecard.addTurn(roll1, roll2, 0)
        if (scorecard.gotSpare == false && scorecard.gotStrike == false) {
          $(`#frame-${f}`).text(`${scorecard.normalTotal()}`)}
        f++
      }
    } 
  })

  
});
