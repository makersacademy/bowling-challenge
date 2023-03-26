class Frames {
    roll_1(pins_knocked_down_r1) {
        if (pins_knocked_down_r1 > 10 || pins_knocked_down_r1 < 1) {
            throw new Error ('Incorrect roll. Try again!')
        } else {
            return pins_knocked_down_r1
        }
        
    }

    roll_2(pins_knocked_down_r2) {
        if (pins_knocked_down_r2 > 10 || pins_knocked_down_r2 < 1) {
            throw new Error ('Incorrect roll. Try again!')
        } else {
            return pins_knocked_down_r2
        }
        
    }
    
};

module.exports = Frames;