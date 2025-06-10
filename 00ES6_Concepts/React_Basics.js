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

//console.log([999, ...array2, 1000, ...array3]);




// Rest Parameters : if agruments are too much then we can use spread operators
// The rest parameter should be at the last of the arguments
function getInfo(a,b,...c) {
    console.log(a,b,c);
    return "Jatin Sharma";
}
//console.log(getInfo(1,2,3,4,5));




// ES6 Arrays Methods
// Map, filter, find, some, every, includes, indexof, findIndex
const personArray = [
    {
        name: 'Person1',
        age: 30,
        country:'Usa'
    },
    {
        name: 'Person2',
        age: 23,
        country:'Usa'
    },
    {
        name: 'Person3',
        age: 45,
        country:'Russia'
    }
]

let getAllNames = personArray.map((Person,index)=>{
    //console.log(Person,index);
    return `Name is ${Person.name} age is ${Person.age}`
})
//console.log(getAllNames);



// Find
let getPersonFromUSA = personArray.find((Person, index)=>{
    return Person.country === 'Usa';
})
//console.log(getPersonFromUSA); // Find always return the condition satified first, while filter will return all things satisfying the condition


// Filter: Filter will return everything that is satisfying the conditon.
let getAllPersonFromUSA = personArray.filter((Person)=>{
    return Person.country === 'Usa'; 
})
//console.log(getAllPersonFromUSA);



// Some: this will return true or false based on the conditon for any element in the array
let checkSomeArrayMethodWithExample = personArray.some((Person)=>{
    return Person.age === 46
})
//console.log(checkSomeArrayMethodWithExample);


// Every: this will check if every of its objects conditon satisfy 
let checkEveryArrayMethodWithExample = personArray.every((Person)=>{
    return Person.age>22;
})
//console.log(checkEveryArrayMethodWithExample);


// Includes
const fruitsArray = ['apple', 'banana', 'orange']
//console.log(fruitsArray.includes('apple'));

// Indexof
//console.log(fruitsArray.indexOf('banana'));
//console.log(fruitsArray.indexOf('Jatin')); // -1 doesn't exist


// FindIndex
let getIndexOfPersonWhoIsFromRussia = personArray.findIndex((Person)=>{
    return Person.country === 'Russia'
})
console.log(getIndexOfPersonWhoIsFromRussia); // Got the index beased on the condition



