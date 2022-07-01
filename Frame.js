// File: frame.js

class Frame {

  
  constructor() {
    Frame.normal = Symbol('normal');
    Frame.spare  = Symbol('spare');
    Frame.strike = Symbol('strike');
    
    this.status = Frame.normal // This is 'normal' or 'spare' or 'strike'
    this.roll1 = 0             
    this.roll2 = 0             
    this.total = 0             // This is pending if status is 'spare' or 'strike'
                               // but will alter otherwise based on either one or two further rolls
    this.completed = false     // This is set to false until the total is the final total for the
                               // frame taking into account additional rolls for spare and strike
  }

  
  getStatus() {
    return this.status;
  }
  
  
  setStatus( status ) {
    this.status = status;
  }
  
  
  getRoll1() {
    return this.roll1;
  }
  
  
  setRoll1( roll1 ) {
    this.roll1 = roll1;
  }

  
  getRoll2() {
    return this.roll2;
  }
  
  
  setRoll2( roll2 ) {
    this.roll2 = roll2;
  }

  
  getTotal() {
    return this.total;
  }
  
  
  setTotal( total ) {
    this.total = total;
  }
  
  
  getCompleted() {
    return this.completed;
  }

  
  setCompleted( completed ) {
    this.completed = completed;
  }
  
  
}

module.exports = Frame;
