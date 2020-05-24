class Frame {

  constructor() {
    this.pins = 10;
    this.firstroll = 0;
    this.secondroll = 0;
    this.rollcount = 0;
    this.score = 0;
  };

  receiveShot(knocked_down_pin_number) {
    this.pins = this.pins - knocked_down_pin_number;
    this.rollcount ++;
    if ( this.rollcount > 2 ) {throw new Error('Only two rolls'); }
    if ( this.pins < 0 ) {throw new Error('Not allowed more than ten balls'); }
    this.firstroll === 0 ? this.firstroll = knocked_down_pin_number : this.secondroll = knocked_down_pin_number; 
    this.score += knocked_down_pin_number;
  };

  isStrike(){
    if( this.firstroll === 10 )  { return true }
    else {return false}
  };

  isSpare(){
    if ( this.firstroll + this.secondroll === 10 && this.secondroll !==0 ) { return true }
    else { return false }
  };

};