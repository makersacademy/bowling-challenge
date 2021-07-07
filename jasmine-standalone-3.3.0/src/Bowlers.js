// Stores no more than 8 bowlers and returns their names in an array
function Bowlers() {
    this.all = [];
};

Bowlers.prototype.add = function(name) {
    if (this.all.length === 8) {
        try { 
            throw new Error ("No more than 8 bowlers allowed")
        }
        catch(error) {
            console.log(error)
        }
    }
    else if(this.all.includes(name)) {
        try { 
            throw new Error ("Each bowler must have a unique user name")
        }
        catch(error) {
            console.log(error)
        }
    }
    else { this.all.push(name) }
}