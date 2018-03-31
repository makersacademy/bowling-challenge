function scoreCalcu(scoreFrames){
  return scoreFrames.map(function(scoreFrame){
    if((scoreFrame[0] === 10) ||
      (scoreFrame[0] + scoreFrame[1] === 10)) {
      return scoreFrame[0] + scoreFrame[1] + scoreFrame[2]
    } else{
      return scoreFrame[0] + scoreFrame[1]
    }
  })
}
