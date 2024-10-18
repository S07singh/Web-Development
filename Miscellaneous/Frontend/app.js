// objects oriented programming in javascript
//

// function factory()
function PersonMaker(name, age) {
    const person = {
        name: name, 
        age: age,
        talk() {
            console.log(`Hi, my name is ${name} and my age is${age}`);
        },
    };
    return person;
}

// let p1 = PersonMaker("adam", 25); // it has its own copy of talk()
// let p2 = PersonMaker("eve", 25); // it has its own copy of talk()

// Constructor- doesn't have return type and constructor name start with capital letters
// New operator - The new operator lets developers create an instance of a user-defined object type or of one of teh built-in objects types that has a constructor function.
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     console.log(this);
// }

// Person.prototype.talk = function() {
//     console.log(`Hi, my name is ${this.name} and my age is ${this.age}`);
// };

// let p1 = new Person("adam", 25); 
// let p2 = new Person("eve", 25);
// now talk function does't have different memory and both p1 and p2 have same prototype.

// Classes are a template for creating objects.
// The constructor method is a special method of a class for creating 
// and initializing objects instances of that class.
/*
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`Hi, my name is ${this.name} and my age is ${this.age}`);
    }
}

let p1 = new Person("adam", 25); 
let p2 = new Person("eve", 25);
let p3 = new Person("bob", 30);

*/
// Inheritance is a mechanism that allows us to create new classes on the basis of already existing classes.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age); // parent class constructor is being called
        this.grade = grade;
    }
    talk() {
        console.log(`Hi, my name is ${this.name}, my age is ${this.age} and my grade is ${this.grade}`);
    }
}

let s1 = new Student("john", 18, 9);

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age); // parent class constructor is being called
        this.subject = subject;
    }
    teach() {
        console.log(`Hi, my name is ${this.name}, my age is ${this.age} and my subject is ${this.subject}`);
    }
}

let t1 = new Teacher("sarah", 30, "Math");


class Mammal {
    constructor(name) {
        this.name = name;
        this.type = "warm-blooded";
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }
}

class Dog extends Mammal {
    constructor(name) {
        super(name);
    }
    bark() {
        console.log(`${this.name} is barking.`);
    }
}

class Cat extends Mammal {
    constructor(name) {
        super(name);
    }
    meow() {
        console.log(`${this.name} is meowing.`);
    }
}