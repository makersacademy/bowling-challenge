class Print{

  constructor(){
    this.scorecard
    this.roll = 0
  };

  output(scorecard, totalscore, turn) {
    let outputmessage = []
    let playertotal = []
    let sth = []
    let total = `Your score = ${totalscore}`
    Object.entries(scorecard).forEach(entry => {
    const [key, value] = entry
    outputmessage.push(`Frame.Roll = ${key} Pins knocked = ${value}\n`);
  });
    return outputmessage.join("")+total
}

}
