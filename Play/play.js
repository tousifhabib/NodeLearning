const names = 'Tousif Habib'
let age = 29;
const hasHobbies = true;

age = 30

const summarizeUser = (userName, userAge, userHasHobby) => {
    return ('Name is ' + 
    userName + 
    ', user age is '+
    userAge +
    ' and the user has hobbies: '+
    userHasHobby
    );
}

const add = (a,b) => a+b;

const addRandon = () => 1+2;

console.log(add(30,40));

console.log(addRandon());

console.log(summarizeUser(names, age, hasHobbies));