
$(document).ready(function(){

  scorecard = new Scorecard()

  i = 1
  f = 1

  const addRoll1 = () => {
    $(`#${i}`).text($('#entry').val())
    roll1 = parseInt($('#entry').val())
    $('#entry').val('')
  }

  const addRoll2 = () => {
    $(`#${i}`).text($('#entry').val())
    roll2 = parseInt($('#entry').val())
    $('#entry').val('')
  }

  $('#submit').click(function(){

    if (scorecard.gotSpare == true || scorecard.gotStrike == true){
      if (i % 2 !== 0) {
        addRoll1()
        i++
      } else {
        addRoll2()
        i++
        scorecard.addTurn(roll1, roll2, 0)
        $(`#frame-${f-1}`).text(`${scorecard.total() - (roll1 + roll2)}`)
        $(`#frame-${f}`).text(`${scorecard.total()}`)
        f++
      }
    } else {
      if (i % 2 !== 0) {
        addRoll1()
        i++
      } else {
        addRoll2()
        i++
        scorecard.addTurn(roll1, roll2, 0)
        if (scorecard.gotSpare == false && scorecard.gotStrike == false) {
          $(`#frame-${f}`).text(`${scorecard.total()}`)}
        f++
      }
    } 
  })

});
