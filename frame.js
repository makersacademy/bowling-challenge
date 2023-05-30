class Frame {
    // rest parameter syntax allows a function to accept an indefinite number of arguments as an array
    //  rest parameter(...args) will be an array
    constructor (...scores){
        this.frame = scores;
    }

    getFrame(){
        return this.frame
    }

    sumFrame(){
        // reduce() : return the sum of all the elements in an array
        //  reducer walks through the array element-by-element, 
        // at each step adding the current array value to the 
        // result from the previous step
        return this.frame.reduce((sum, value) => sum + value, 0 )
    }

    isSpare(){
        // The ! operator: check for the negation of a boolean value.
        //  (!this.isStrike())= (this.isStrike() != true)
        return this.sumFrame() === 10 && !this.isStrike();
    }

    isStrike(){
        return this.frame[0] === 10;
    }
}

module.exports = Frame; 