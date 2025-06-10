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




