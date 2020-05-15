class Game {
    'use strict';
    constructor(){
      this.frame = 1;
      this.roll = 1;
    }

    play(){
      if(this.roll === 2){
        this.frame ++;
        this.roll = 1;
      } else {
        this.roll ++;
      }
    }
}
