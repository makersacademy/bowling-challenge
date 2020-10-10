class Bowling {
    constructor (){
        this.frame = 1;
        this.score = 0;
        this.is_spare = false;
        this.is_strike = false;
        this.is_double = false;
}

game(ball_1, ball_2){
    if(this.is_double == true){
        var frame_score = ball_1 + (ball_1 + ball_2) * 2;
    }
    else if(this.is_strike == true){
        if(ball_1 == 10)
        this.is_double = true;
    frame_score = (ball_1 + ball_2) * 2;
    return frame_score;


    }
    else if(this.is_spare == true){
    frame_score = ball_1 * 2 + ball_2;
    return 
    }
    else{
        frame_score = ball_1 + ball_2;
    }
    this.score = this.score + frame_score;

    if(ball_1 == 10){
        this.is_strike = true;
        this.is_spare = false;
    }
    else if(ball_1 + ball_2 == 10){
        this.is_spare = true;
        this.is_double = false;
        this.is_strike = false;
    }
    else{
        this.is_spare = false;
        this.is_strike = false;
        this.is_double = false;
    }

}
   
}