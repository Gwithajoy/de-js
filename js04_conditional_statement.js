let mood = 'sleepy';
let tirednessLevel = 6;

/*if (mood === 'sleepy' && tirednessLevel > 8){
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
}*/

if (mood === 'sleepy' || tirednessLevel > 8){
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
} 
//Ternary Operator

let isLocked = false;
isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;
isCorrect ? console.log('Correct!'): console.log('Incorrect!');

let favoritePhrase = 'Love That!';
favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");