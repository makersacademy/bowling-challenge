function ScreenDisplay(){}

ScreenDisplay.prototype.show = function(scorecard){
  output = []
  for(var i = 0; i < scorecard.length; i++){
    if(arraySum(scorecard[i])===10){
      if(scorecard[i][0]===10){
        output.push("")
        output.push("X")
      }else{
        output.push(scorecard[i][0].toString())
        output.push("/")
      }
    }else{
      output.push(scorecard[i][0].toString())
      if(scorecard[i][1] != undefined){
        output.push(scorecard[i][1].toString())
      }
    }
  }
  return output
}
