function getName(name){
    return name;
}

let a = false;
let b = true;

let c = false;
let d = true;

// Here if the a is false then it won't check the next conditon, directly print the false;
console.log(a && getName("Jatin Sharma"));


// If we use or here and if c is false then also it will check the second parameter.
console.log(c || getName("Jayant Sharma"));




// Tempelate literals
// This is the older version
let name1 = 'John';
let name2 = 'Doe';
console.log(name1+ " "+name2);

// New syntax
console.log(`First name: ${name1} and Second name: ${name2}`);





// Ternary Operator
// Condition ? statement1 : statement2

let age = 2;
age>=20? console.log(`Your age is greater than 20`): console.log(`Your age is less than 20`);









