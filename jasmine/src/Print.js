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
    // this.roll = (key % 1).toFixed(1)
    // if (this.roll == 0.2 || this.roll == 0.3) {
    //
    // }
    outputmessage.push(`Frame.Roll = ${key} Pins knocked = ${value}`);
  });
    return outputmessage[0]+"\n"+outputmessage[1]+"\n"+total+"\n"
}

}
