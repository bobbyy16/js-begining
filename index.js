// string,numbers,boolean,null,undefined,symbol
const name = "bobby";
const age = 12;

//concatination
console.log('My name is ' + name + ' and i am ' + age)

//template
console.log(`My name is ${name} and i am ${age}`);

const hello = `My name is ${name} and i am ${age}`;
console.log(hello);

const s = 'HelloWorld!';
const v = 'technology, computer, it, code';
console.log(s.length);
console.log(s.toLowerCase());
console.log(s.toUpperCase());
console.log(s.substring(0, 5));
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(''));
console.log(v.split(', '));

//  Arrrays- variables that holds multiple values

const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

const fruits = ['apple', 'oranges', 'pears', 10, 20]
console.log(fruits);
console.log(fruits[1]);
fruits[3] = 'grapes';
fruits.push('mango');
fruits.unshift('banana');
fruits.pop();
fruits.pop();
fruits.push('mango');
fruits.push('WaterMelon');
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('pears'));
console.log(fruits);


// object literals

const person = {
    firstname: 'Abhishek',
    lastname: 'Shetty',
    hobbies: ['coding', 'music', 'Gyming'],
    address: {
        street: '4th cross, madegowda circle',
        city: 'mysore',
        state: 'Karnataka'
    }
}
console.log(person);
console.log(person.firstname);
console.log(person.lastname);
console.log(person.hobbies);
console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.state);
console.log(person.hobbies[1]);

// or

const { firstname, lastname, address: { street, city, state } } = person;

console.log(firstname);

// directly add in between

person.email = 'sheka5018@gmail.com';

console.log(person);



// another array

const todos = [
    {
        id: 1,
        text: 'Wake up early',
        isCompeleted: true
    },
    {
        id: 2,
        text: 'Go to gym',
        isCompeleted: true
    },
    {
        id: 3,
        text: 'Eat healthy',
        isCompeleted: false
    },
];
console.log(todos);
console.log(todos[1].text);


// json string

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// for loops

for (let i = 0; i <= 10; i++) {
    console.log(i);

}
// or
for (let i = 0; i <= 10; i++) {
    console.log(`For loops numbers: ${i}`);

}

// while loop
let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}

// or

let j = 0;
while (j <= 10) {
    console.log(`For loops numbers: ${j}`);
    j++;
}

// Array loop

const todos1 = [
    {
        id: 1,
        text: 'Wake up early',
        isCompeleted: true
    },
    {
        id: 2,
        text: 'Go to gym',
        isCompeleted: true
    },
    {
        id: 3,
        text: 'Eat healthy',
        isCompeleted: false
    },
];

for (let i = 0; i < todos1.length; i++) {
    console.log(`${todos1[i].text}`);
}

//  or

for (let todo of todos1) {
    console.log(todo.id);
    console.log(todo.text);
    console.log(todo.isCompeleted);
}

// foreach 
todos1.forEach(function (todo) {
    console.log(todo.text);
});
todos1.forEach(function (todo) {
    console.log(todo.id);
});
todos1.forEach(function (todo) {
    console.log(todo.isCompeleted);
});

// map


const todotext = todos1.map(function (todo) {
    return todo.id;
});
console.log(todotext);
todos1.map(function (todo) {
    console.log(todo.text);
});
todos1.map(function (todo) {
    console.log(todo.isCompeleted);
});


// filter
const todo_text = todos1.filter(function (todo) {
    return todo.id;
});
console.log(todo_text);

todos1.filter(function (todo) {
    console.log(todo.text);
});
todos1.filter(function (todo) {
    console.log(todo.isCompeleted);
});

// one more condition

const todoCompleted = todos.filter(function (todo) {
    return todo.isCompeleted == true;
}).map(function (todo) {
    return todo.text;
})

console.log(todoCompleted);


// if
const x = 10;
const y = 4;

if (x === 10) {
    console.log("x is 10");
}
else if (x > 10) {
    console.log(x);
}
else {
    console.log("x is less than 10");
}
if (x > 5 || y > 10) {
    console.log("x more than 5 or y is more than 10");
}
if (x > 5 && y > 10) {
    console.log("x more than 5 or y is more than 10");
}


// turnary operator

const z = 11;
const color = x > 10 ? 'red' : 'blue';

console.log(color);

// switch

switch (color) {
    case 'red': console.log("color is red");
        break;
    case 'blue': console.log("color is blue");
        break;
    default: console.log("color is not red or blue");
        break;
}

// functions
// addnums
function addnums(num1, num2) {
    return num1 + num2;
}
addnums(12, 56);

// oops
// constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    // date constructor
    this.dob = new Date(dob);

}
Person.prototype.getBirthyear = function () {
    return this.dob.getFullYear();
}
Person.prototype.getFullName = function () {
    return ` ${this.firstName} ${this.lastName}`;

}
// Intanitiate object
const person1 = new Person('Abhishek', 'Shetty', '12-16-2000');
const person2 = new Person('Errol', 'Fernandes', '02-03-2001');

console.log(person1);
console.log(person2.firstName);
console.log(person2.dob);
console.log(person1.dob);
console.log(person1.dob.getFullYear());
console.log(person2.dob.getFullYear());
console.log(person1.getBirthyear());
console.log(person2.getBirthyear());
console.log(person1.getFullName());
console.log(person1);


// class
class Personn {
    constructor(firstnamee, lastnamee, dobe) {
        this.firstnamee;
        this.lastnamee;
        this.dobe = new Date(dobe);
    }
    getBirthyear() {
        return this.dob.getFullYear();

    }
    getFullName() {
        return ` ${this.firstName} ${this.lastName}`;

    }
}
const personn1 = new Person('Abhishek', 'Shetty', '12-16-2000');
const personn2 = new Person('Errol', 'Fernandes', '02-03-2001');
console.log(personn1);
console.log(personn2.firstName);
console.log(personn2.dob);
console.log(personn1.dob);
console.log(personn1.dob.getFullYear());
console.log(personn2.dob.getFullYear());
console.log(personn1.getBirthyear());
console.log(personn2.getBirthyear());
console.log(personn1.getFullName());
console.log(personn1);








