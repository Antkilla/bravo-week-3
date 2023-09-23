//if you want to iterate through an array of numbers remember the for loop
const findMax = (numbers) => {
    if (numbers.length === 0) {
        return undefined;                           // Handle the case of an empty array
    }

    let max = numbers[0];                           // Initialize max with the first element

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return max;
};
console.log(findMax([1, 2, 3]));                                // Should log 3
console.log(findMax([-5, -10, -1]));                                // Should log -1
console.log(findMax([10, 20, 10, 20, 30, 20, 10]));                         // Should log 30

//EX:2
//-------------------------------------------------------------------------------------------------------------------------------

const concatenateStrings = (strings, separator) => {
    // Use the join method to concatenate the strings with the specified separator
    return strings.join(separator);
};

console.log(concatenateStrings(['apple', 'banana', 'cherry'], ', ')); // Should log "apple, banana, cherry"
console.log(concatenateStrings(['one', 'two', 'three'], ' & ')); // Should log "one & two & three"
console.log(concatenateStrings(['first', 'second'], ' --> '));

//---------------------------------------------------------------------------------------------------------------------------------
/*
Exercise 3:
Given an array of user objects, use map to create a new array called usersWithFullName containing user 
objects with an additional fullName property, which is made by concatenating firstName and lastName.
*/
const users = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Jane', lastName: 'Smith' },
    { firstName: 'Michael', lastName: 'Jordan' },
    { firstName: 'Sara', lastName: 'Connor' },
    { firstName: 'Thomas', lastName: 'Edison' },
    { firstName: 'Marie', lastName: 'Curie' },
    { firstName: 'Albert', lastName: 'Einstein' },
    { firstName: 'Isaac', lastName: 'Newton' },
    { firstName: 'Galileo', lastName: 'Galilei' },
    { firstName: 'Leonardo', lastName: 'da Vinci' }
  ];
     

const usersWithFullName = users.map(user => ({
    ...user,                                                                      // Copy all existing properties from the original user object
    fullName: `${user.firstName} ${user.lastName}`                              // Add a new property 'fullName' by concatenating 'firstName' and 'lastName'
}));

console.log(usersWithFullName[0].fullName === 'John Doe');                                     // Should be true
console.log(usersWithFullName[5].fullName === 'Marie Curie');                               // Should be true
console.log(usersWithFullName[6].fullName === 'Albert Einstein');                           // Should be true
console.log(usersWithFullName[9].fullName === 'Leonardo da Vinci');                         // Should be true


//---------------------------------------------------------------------------------------------------------------------------------------

/*
Exercise 4:
Given an array of product objects, use the map method to create a new array
called `productsWithTotalValue` containing product objects with an additional
`totalValue` property, which is calculated by multiplying `price` and `quantity`.
 */
const products = [
    { name: 'Widget', value: 10, quantity: 2 },
    { name: 'Gadget', value: 20, quantity: 3 },
    { name: 'Doodad', value: 5, quantity: 10 }
  ];
  

  const productsWithTotalValue = products.map(product => ({
    ...product,                                                 // Copy all existing properties from the original product object
    totalValue: product.value * product.quantity                    // Calculate and add a new property 'totalValue'
}));

console.log(JSON.stringify(productsWithTotalValue, null, 2));


//---------------------------------------------------------------------------------------------------------------------------------
/*
Exercise 5:
Given an array of objects representing tasks with a completed boolean property, 
use filter to return a new array containing only the objects representing uncompleted tasks.
*/
const tasks = [
    { name: 'Complete JavaScript Exercises', completed: true },
    { name: 'Attend JavaScript Workshop', completed: false },
    { name: 'Read about Arrow Functions', completed: true },
    { name: 'Create a Presentation on Destructuring', completed: false },
    { name: 'Study for JavaScript Quiz', completed: false },
    { name: 'Submit Assignment on time', completed: true },
    { name: 'Attend Study Group on Map and Filter', completed: true },
    { name: 'Watch Tutorial on JavaScript Basics', completed: false },
    { name: 'Complete Practice Problems on Arrays', completed: true },
    { name: 'Participate in JavaScript Hackathon', completed: false }
  ];

const uncompletedTasks = tasks.filter(task => !task.completed);

console.log(JSON.stringify(uncompletedTasks, null, 2));

//-------------------------------------------------------------------------------------------------------------------------------------
//Exercise 6
//Given an array of produce objects, use the filter method to create a new 
//array containing only the ‘Fruit’ type products that have a quantity less than 10.

const produce = [
  { name: 'Apple', type: 'Fruit', quantity: 10 },
  { name: 'Carrot', type: 'Vegetable', quantity: 20 },
  { name: 'Orange', type: 'Fruit', quantity: 5 },
  { name: 'Celery', type: 'Vegetable', quantity: 15 },
  { name: 'Banana', type: 'Fruit', quantity: 2 },
  { name: 'Spinach', type: 'Vegetable', quantity: 30 },
  { name: 'Grapes', type: 'Fruit', quantity: 8 },
  { name: 'Lettuce', type: 'Vegetable', quantity: 5 },
];

const fruitWithLowQuantity = produce.filter(produce => produce.type === "Fruit" && produce.quantity <10);

console.log(JSON.stringify(fruitWithLowQuantity, null, 2));

//--------------------------------------------------------------------------------------------------------------------------------------

//Exercise 7
//Given an array containing three numerical values representing the dimensions of a box (length, width, height),
//use array destructuring to assign these values to individual variables l, w, and h.
//Log the variables to verify and use them to calculate and log the volume of the box.

let dimensions = [30, 50, 10];

const [l,w,h] = dimensions
console.log(`Length: ${l}`);
console.log(`Width: ${w}`);
console.log(`Height: ${h}`);

const volume = l * w * h;
console.log(`voulme ${volume}`)

//------------------------------------------------------------------------------------------------------------------------------------------
//Exercise 8
// You are given an object representing a student, which has properties for the student's 
// first name, last name, and grades. Use object destructuring to extract these values into 
// variables. Additionally, compute and log the average grade of the student in the given format.

const student = {
  firstName: 'Alex',
  lastName: 'Lee',
  grades: {
    math: 90,
    science: 80,
    english: 85
  }
};
