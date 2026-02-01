const message = "       Hello ";
console.log(message[3]);


// Property
/*
    1) length
*/
console.log(message.length);

// Methods - String ka method string ko modify nhi karta bas ek naya result hamko de deta hai.
/*
    1) toUpperCase()
    2) toLowerCase()
    3) trim()
    4) trimStart()
    5) trimEnd()
*/
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.trim());
console.log(message.trimStart());
console.log(message.trimEnd());

// Methods with arguments
/*
    1) includes()
    2) indexOf()
    3) replace()
    4) replaceAll()
    5) concat()
    6) padStart()
    7) charAt()
    8) charCodeAt()
    9) split()  
*/

const finalmessage = message.trim();
console.log(finalmessage);


console.log(finalmessage.includes("World!")); // False because it is not present in the actual string.


console.log(finalmessage.indexOf('Z')); // -1 Not present
console.log(finalmessage.indexOf('ll'));  // 2 index par mila



 const replacedMsg = finalmessage.replace('Hello', 'Hello World!');
 console.log(replacedMsg);
 const replacedMsg2 = finalmessage.replace('o', 'O'); // Pure string mai jo bhi first occurance hai wo chnage hoga
 console.log(replacedMsg2);


const str = "Hello World!";
const modifiedStr = str.replaceAll('o', 'O'); // Modified all occurances.
console.log(modifiedStr);


 
console.log(str.concat(' Jatin Sharma'));












































