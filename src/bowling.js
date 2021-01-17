class bowling {
    constructor() {

    this.round = []

    this.bonus = 5 

    this.bonus_two = 10  

    this.number_rounds = 0

    } 

    gameRound(num_one, num_two) {    
    while (this.number_rounds <= 10) {   
        this.number_rounds ++
        if (this.number_rounds <= 10) { 
            if(num_one + num_two > 10) { 
                return "Thats not a realy score, it must be below 10"  
            } else if(num_one === 10) {
                this.round.push(num_one, num_two, this.bonus, "X") 
                return "strick"
            } else if (num_one === 5 && num_two === 5) { 
                this.round.push(num_one, num_two, "S") 
                return "splite spare"
            } else if (num_one + num_two === 10) {
                this.round.push(num_one, num_two, this.bonus) 
                return "spare"
            } else {
                this.round.push(num_one, num_two) 
                return this.round
            }  
                } else if (this.round[-1] === "X") {
                        this.round.push(num_one, num_two, "X", this.bounus) 
                        return this.round      
                } else if(this.round[-1] === "S") {  
                        this.round.push(num_one, num_two, "S")
                        return this.round
                } else {
                    return "Thats the game"
                } 

        } 
        
    } 
     
    
    game_score() {   

        this.x = []  
        this.s = []  
        var score = []  
        this.number = []
        this.a = [] 
        this.score_two = [] 
        this.final = []

        this.round.forEach((num, index) => num === "X" ? score.push(index) : null) 
        
        score.forEach((entry) => Number.isInteger(entry) ? this.round.push(this.round[entry + 1], this.round[entry + 2]) : null)

        this.round.forEach((num, index) => num === "S" ? this.number.push(index) : null)
        
        this.number.forEach((entry) => Number.isInteger(entry) ? this.round.push(this.round[this.s + 1]) : null)

        this.score_two = (this.round.filter(a => a !== 'X'))

        this.final_score = (this.score_two.filter(b => b !== "S"))

        this.final = this.final_score.reduce((a, b) => a + b, 0)   
        
        return this.final
    }  


}

let newbowling = new bowling 


// && this.round[-2] === "X" || this.round[-2] === "S" 

//} else if((this.round.length + 1) === 22 && this.round[-2] === "X" || this.round[-2] === "S") {
 //   return "You have a another go"  
//} else if((this.round.length + 1) === 24 && this.round[-2] === "X" || this.round[-2] === "S"){
//    return "you have a another go"
//} else {
//   return "Thats the game"
//}