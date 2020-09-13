
describe('Bowling', function(){
    var bowling;

    beforeEach(function() {
        bowling = new Bowling();
    })

  

    describe('rolls', function() {
        it('updates the score after multiple frames', function() {
           
            bowling.roll(4)
            bowling.roll(5)
            bowling.roll(4)
            bowling.roll(5)
            bowling.roll(4)
            bowling.roll(5)
            bowling.roll(4)
            bowling.roll(5)
            bowling.roll(4)
            bowling.roll(5)
            bowling.roll(4)
            bowling.roll(5)
            bowling.roll(4)
            bowling.roll(5)
            bowling.roll(4)
            bowling.roll(5)
            bowling.roll(4)
            bowling.roll(5)
            bowling.roll(4)
            bowling.roll(5)
            console.log(bowling.scoreCard)
            
           expect(bowling.calculateScore(bowling.scoreCard)).toEqual(90)           
        })

    })
      

    describe('spare', function() {
        it('adds spare bonus to score', function() {
          
           bowling.roll(5)
           bowling.roll(4)
           bowling.roll(5)
            bowling.roll(5)
            bowling.roll(3)
            bowling.roll(3)
            bowling.roll(3)
            bowling.roll(3)
            bowling.roll(3)
            bowling.roll(3)
            bowling.roll(3)
            bowling.roll(3)
            bowling.roll(3)
            bowling.roll(3)
            bowling.roll(3)
            bowling.roll(3)
            bowling.roll(3)
            bowling.roll(3)
            bowling.roll(3)
            bowling.roll(3)
           
            expect(bowling.calculateScore(bowling.scoreCard)).toEqual(70) 

        })

        it('adds multiple spare bonuses to score', function() {
            bowling.roll(5)
            bowling.roll(4)
            bowling.roll(5)
            bowling.roll(5)
            bowling.roll(3)
            bowling.roll(3)
            bowling.roll(6)
            bowling.roll(4)
            bowling.roll(2)
            bowling.roll(3)
            bowling.roll(5)
            bowling.roll(4)
            bowling.roll(5)
            bowling.roll(5)
            bowling.roll(3)
            bowling.roll(3)
            bowling.roll(6)
            bowling.roll(4)
            bowling.roll(2)
            bowling.roll(3)
           
           
            expect(bowling.calculateScore(bowling.scoreCard)).toEqual(90) 

        })

        it('adds multiple spare bonuses in a row to score', function() {
            bowling.roll(5)
            bowling.roll(4)
            bowling.roll(5)
            bowling.roll(5)
            bowling.roll(3)
            bowling.roll(7)
            bowling.roll(4)
            bowling.roll(4)
            bowling.roll(2)
            bowling.roll(5)
            bowling.roll(4)
            bowling.roll(5)
            bowling.roll(1) 
            bowling.roll(5)
            bowling.roll(5)
            bowling.roll(4)
            bowling.roll(4)
            bowling.roll(1) 
            bowling.roll(5)
            bowling.roll(3)
            
            expect(bowling.calculateScore(bowling.scoreCard)).toEqual(88)  

        })
    })
    
    describe('strike', function() {
        it('adds a strike bonus to the score', function() {
            bowling.roll(5)
            bowling.roll(4)
            bowling.roll(5)
            bowling.roll(5)
            bowling.roll(3)
            bowling.roll(7)
            bowling.roll(4)
            bowling.roll(4)
            bowling.roll(2)
            bowling.roll(5)
            bowling.roll(4)
            bowling.roll(5)
            bowling.roll(1) 
            bowling.roll(5)
            bowling.roll(10)
            bowling.roll(1) 
            bowling.roll(5)
            bowling.roll(3) 
            bowling.roll(5)
            

        
            expect(bowling.calculateScore(bowling.scoreCard)).toEqual(96)  
        })

        it('adds multiple strike bonuses to score', function() {
            bowling.roll(4)
            bowling.roll(4)
            bowling.roll(2)
            bowling.roll(5)
            bowling.roll(4)
            bowling.roll(5)
            bowling.roll(1) 
            bowling.roll(5)
            bowling.roll(10)
            bowling.roll(7)
            bowling.roll(1)
            bowling.roll(10)
            bowling.roll(6)
            bowling.roll(3)
            bowling.roll(6)
            bowling.roll(3)
            bowling.roll(4)
            bowling.roll(3)

            expect(bowling.calculateScore(bowling.scoreCard)).toEqual(100)  

        })

        it('adds multiple strike bonuses in a row to score', function() {
            bowling.roll(5)
            bowling.roll(4)
            bowling.roll(5)
            bowling.roll(2)
            bowling.roll(10)
            bowling.roll(10)
            bowling.roll(4)
            bowling.roll(4)
            bowling.roll(2)
            bowling.roll(5)
            bowling.roll(4)
            bowling.roll(5)
            bowling.roll(1) 
            bowling.roll(5)
            bowling.roll(5)
            bowling.roll(4)
            bowling.roll(4)
            bowling.roll(2)
           
            
            expect(bowling.calculateScore(bowling.scoreCard)).toEqual(103)  

        })
    })
})