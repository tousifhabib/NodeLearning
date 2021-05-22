const person = {
    name: 'Tousif Habib',
    age: 21,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

const copiedPerson = {...person}
console.log(copiedPerson);

person.greet();

const hobbies = ['Sports', 'Cooking'];
hobbies.push("Programming");

for (let hobby of hobbies){
    console.log(hobby);
}

console.log(hobbies.map(hobby => {
    return 'Hobby: ' + hobby;
}));

console.log(hobbies);

const copiedArray = hobbies.slice();
const copiedArray2 = [...copiedArray];
console.log(copiedArray);
console.log(copiedArray2);

const toArray = (...args) => {
    return args;
};

console.log(toArray(1,2,3,4));

const printName = (personData) => {
    console.log(personData.name);
}

const printName2 = ({name, age}) => {
    console.log(name, age);
}


printName(person);
printName2(person);

const {name, age} = person;

let [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
