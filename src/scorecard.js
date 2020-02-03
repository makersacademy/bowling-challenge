class Scorecard {

  constructor() {
    this.card = [];
    this.frame = [];
    this.roll = 1;
    this.current_frame = 1;
    this.strike_bonus = false;
    this.spare_bonus = false;
    this.final_score = 0;
  }

  pins(number) {
    if(number === 10){
      this.frame.push(number);
      if(this.spare_bonus == true || this.strike_bonus == true){
        this.bonus_points(number);
      }
      this.next_frame();
    }
    else if(this.roll === 1){
      this.frame.push(number);
      this.roll = 2
      if(this.spare_bonus == true || this.strike_bonus == true){
        this.bonus_points(number);
      }
    }
    else {
      this.frame.push(number);
      if(this.spare_bonus == true || this.strike_bonus == true){
        this.bonus_points(number);
      }
      this.next_frame();
    }
  }

  next_frame() {
    if(this.frame[0] === 10){
      this.strike_bonus = true;
    }
    else if(this.frame[0] + this.frame[1] == 10){
      this.spare_bonus = true;
    }
    else{
      this.strike_bonus = false;
      this.spare_bonus = false;
    }
    this.card.push(this.frame);
    this.frame = [];
    this.current_frame++;
    this.roll = 1;
    if(this.current_frame > 10){
      this.end_game();
    }
  }

  bonus_points(number) {
    if(this.spare_bonus == true){
      this.card[this.current_frame - 2].push(number);
      this.spare_bonus = false
    }
    else if(this.strike_bonus == true){
      this.card[this.current_frame - 2].push(number);
      if(this.roll == 1){
        this.strike_bonus = false
      }
    }
  }

  end_game() {
    console.log("Thank you for playing, your final card is: ")
    for (var i = 0; i < 10; i++) {
      console.log("Frame " + (i+1) + "\n" + this.card[i])
    }
    console.log("\n")
    for (var y = 0; y <10; y++) {
      if(this.card[y].length == 3){
        this.final_score += this.card[y][1] + this.card[y][2] + this.card[y][3]
      }
      else{
        this.final_score += this.card[y][1] + this.card[y][2]

      }
      console.log("Final Score: " + this.final_score)
    }
  }

}
