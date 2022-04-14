const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

let countedNames = names.reduce((allNames, name) => {
  if (name in allNames) {
    allNames[name] += 1;
    console.log(allNames); //previous value is the allNames object so we check if the current name is already a key in the object
  } else {
    allNames[name] = 1; // create
    console.log(allNames);
  }
  return allNames;
}, {});
console.log(countedNames);
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
/*
First call printsline9 : { Alice: 1 }
2nd call prints line9 { Alice: 1, Bob: 1 }
2nd call prints line9 { Alice: 1, Bob: 1, Tiff: 1 }
2nd call prints line9 { Alice: 1, Bob: 1, Tiff: 1, Bruce: 1 }
3rd call prints line6 { Alice: 2, Bob: 1, Tiff: 1, Bruce: 1 }
{ Alice: 2, Bob: 1, Tiff: 1, Bruce: 1 }
*/
