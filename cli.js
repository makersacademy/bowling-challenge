const Bowling = require('./lib/bowling.js')
bowling = new Bowling();


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Enter score ', (answer) => {
 if (typeof answer === 'number') {
   if (answer - bowling.remainder > 0 ) {
    bowling.roll(number)
   } 
   else
   console.log('Too high of a score!')
 }
 else
 {console.log('Not a valid input!')}
})
