
//export default class Frame{
class Frame{    
  
  constructor(id, rolls, numOfRolls, totalScore, bonusFuture, bonusLast, bonusPast, message){
    this.id = id; 
    this.rolls = rolls;
    this.numOfRolls = numOfRolls; 
    this.totalScore = totalScore;
    this.bonusFuture = bonusFuture;
    this.bonusLast = bonusLast;
    this.bonusPast = bonusPast;
    this.message = message;
  }

  addRoll(roll){
    this.rolls.push(roll);
  }

  // getters
  getId(){
    return this.id;
  } 

  getRolls(){
    return this.rolls;
  } 

  getNumOfRolls(){
    return this.numOfRolls;
  } 

  getTotalScore(){
    return this.totalScore;
  } 

  getBonusFuture(){
    return this.bonusFuture;
  } 

  getBonusLast(){
    return this.bonusLast;
  } 

  getBonusPast(){
    return this.bonusPast;
  } 

  getMessage(){
    return this.message;
  } 

  // setters
  setId(id){
    this.id = id;
  }

  setRolls(rolls){
    this.rolls = rolls;
  }

  setNumOfRolls(num){
    this.numOfRolls = num;
  }

  setTotalScore(total){
    this.totalScore = total;
  }

  setBonusFuture(num){
    this.bonusFuture = num;
  } 

  setBonusLast(num){
    this.bonusLast = num;
  } 

  setBonusPast(num){
    this.bonusPast = num;
  } 

  setMessage(message){
    this.message = message;
  } 

  addRoll(roll){
    this.rolls.push(roll);
  }

} 

module.exports = Frame;
