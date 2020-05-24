class Frame {

  constructor() {
    this.pins = 10;
    this.firstroll = 0;
    this.secondroll = 0;
  }

   receiveShot(knocked_down_pin_number) {
    this.pins = this.pins - knocked_down_pin_number;
    if (this.pins < 0) {throw new Error('Not allowed more than ten balls');}
    this.firstroll === 0 ? this.firstroll = knocked_down_pin_number : this.secondroll = knocked_down_pin_number; 
  }

  _strike(){
    true
  }
  

};