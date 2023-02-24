class Frame{
  constructor(){
    this.arr = []
    this.max = 10
  }

  addToFrame(pins){
    this.arr.push(pins)
  }
  
  total(){
    const initialValue = 0;
    const sumWithInitial = this.arr.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
      );
      return sumWithInitial
  }

  spare(){
    return this.max = 10
  }

  skrike(){
    return this.arr.includes(10)
  }
}

module.exports = Frame;