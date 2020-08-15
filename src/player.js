class Player {
  constructor(name) {
    this.name = name
    this.total = 0   
  }

  score(number) {
    this.total += number;
  }

  
}