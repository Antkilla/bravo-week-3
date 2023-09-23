//map method
//gives us a way to apply a single function to every element in an array
//or to have a function that applies things to some elements of an array
//based on specific criteria


//let names = ["Cody", "Casey", "Clayton", "Kara", "Hope"];

//without map
// function greet(person) {
//   console.log(`Hello ${person}!`);
// }
// for (let person of names) {
//   greet(person);
// }

//with map
// names.map(person => console.log(`Hello ${person}!`));

//only want to greet people with names longer than 4 characters
// names.map((person) => {
//   if (person.length > 4) {
//     console.log(`Hello ${person}!`);
//   }
// })

// let grades = [99.1, 87.5, 56.2, 88.1, 93.9];

// let roundedGrades = grades.map(grade => Math.round(grade));

// console.log(roundedGrades);


//isPalindrome
/*const isPalindrome = string => string.replaceAll(' ', '') === string.replaceAll(' ', '').split('').reverse().join('');

let myString = "a man a plan a canal panama";
let myStringSplit = myString.split(''); //splits string at every character and returns them in an array
console.log("myStringSplit before reverse", myStringSplit);


let myStringSplitReverse = myStringSplit.reverse();
console.log(myStringSplitReverse);
console.log("myStringSplit post reverse", myStringSplit);

let myStringSplitReverseJoin = myStringSplitReverse.join('');
console.log(myStringSplitReverseJoin);

console.log(isPalindrome("a man a plan a canal panama"));
*/


let myWords = ['cherry', 'pie', 'orange']

function capitalizeWord1(words)  {
return words.map(word => word.charAt(0).toUpperCase());
}


function capitalizeWord(word)  {

    let letters = word.split('');

    letters[0] = letters[0].toUpperCase(); 
    let capWord = letters.join('')

    return capWord
}
console.log(capitalizeWord1(myWords))



const car = {
    make:"Toyota",
    'model': "camry",
    year: 2020,
};

console.log(`the mode of the is ${car.make} `)
console.log(`the mode of the is ${car.model} `)

//--------------------------------------------------------------------------------------------

const product = {
    name: "soap",
    quantity: 10,
    price: 3.99
  }
  
  //create a NEW object that has all the same properties as product
  //but with a new additional property that contains a string describing 
  //all of the important product information
  
  //traditional (longer) way
  // const updatedProduct = {
  //   name: product.name,
  //   quantity: product.quantity,
  //   price: product.price,
  //   summary: `We have ${product.quantity} ${product.name} at ${product.price} each.`
  // }
  
  //using spread operator (...)
  const updatedProduct = {
    ...product,  //copy original properties
    name: "new soap", //update individual ones as needed
    summary: `We have ${product.quantity} ${product.name} at ${product.price} each.` //add in new properties if desired
  }
  
  console.log(updatedProduct);
  
  let myClasses = ["math", "chemistry", "english", "pe", "music"];
  
  let myNewClasses = ["yearbook", ...myClasses, "debate"];
  
  //generate all possible coordinates in a 5x5x5 grid
  
  // for (let i = 0; i < 5; i++) {
  //   for (let j = 0; j < 5; j++) {
  //     for (let k = 0; k < 5; k++) {
  //       console.log(`(${i}, ${j}, ${k})`);
  //     }
  //   }
  // }
  




