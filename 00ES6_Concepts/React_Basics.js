function getName(name){
    return name;
}

let a = false;
let b = true;

let c = false;
let d = true;

// Here if the a is false then it won't check the next conditon, directly print the false;
//console.log(a && getName("Jatin Sharma"));


// If we use or here and if c is false then also it will check the second parameter.
//console.log(c || getName("Jayant Sharma"));




// Tempelate literals
// This is the older version
let name1 = 'John';
let name2 = 'Doe';
//console.log(name1+ " "+name2);

// New syntax
//console.log(`First name: ${name1} and Second name: ${name2}`);





// Ternary Operator
// Condition ? statement1 : statement2

let age = 2;
//age>=20? console.log(`Your age is greater than 20`): console.log(`Your age is less than 20`);







// Destructuring of o
const id = 1;
const productName = "Apple Watch"
const rating = 5;



// const product = {
//     id: id, 
//     productName: productName,
//     rating: rating
// }

// We can use short hand property also like this
const product = {
    id, 
    productName,
    rating
}

//console.log(product);


const product2 = {
    description : 'Product 2 Description',
    id,
    productName,
    rating
}

// const getProductTwoDescription = product2.description;
// console.log(getProductTwoDescription);

// This is desctructuring 
const {description} = product2
//console.log(description);





const array = [1,2,3];
let getArrayFirstValue = array[0]
let getArraySecondValue = array[1]
//console.log(getArrayFirstValue, getArraySecondValue);



// Destructuring the Arrays
const [
    FirstElement, 
    SecondElement,
    ThirdElement
] = array
//console.log(FirstElement, SecondElement, ThirdElement);



// Default Prameters
function mulofTwoNumbers(num1 = 1, num2 = 2){
    console.log(num1,num2);
    return num1*num2;
}
//console.log(mulofTwoNumbers(2,6)); // This will overite even if you use default parameters
//console.log(mulofTwoNumbers()); // This will be taking the default value



// Spread Operator

const array2 = [2,3,4];
const array3 = [10,11,12];

console.log([999, ...array2, 1000, ...array3]);




// Rest Parameters
function getInfo(a,b,c,d,e) {
    console.log(a,b,c,d,e);
    
    return "Jatin Sharma";
}
console.log(getInfo(1,2,3,4,5));






