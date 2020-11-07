class Print{

  constructor(){
    this.scorecard
  };

  output(scorecard, scores, frame) {
    let message = []
    Object.entries(scorecard).forEach(entry => {
    const [key, value] = entry
    message.push(`Frame.Roll = ${key} Pins knocked = ${value}`);
    let split_frame_and_roll = Math.floor(key)
    let roll = (key % 1).toFixed(1)
    });
    return message[0]+"\n"+message[1]+"\n"
}
}
