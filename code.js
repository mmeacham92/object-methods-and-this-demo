// const vs let

// const values cannot be reassigned using the assignment operator
// const number = 4;
// let otherNumber = number;
// otherNumber = 5;
// console.log(number, otherNumber);

document.write("hello");

// object methods and this

const dog = {
  name: "Sparky",
  age: 5,
  speak: function () {
    console.log(`${this.name} barked!`);
  },
  printThis: function () {
    console.log(this);
  },
};

const cat = {
  name: "Terri",
  age: 2,
  speak: function () {
    console.log(`${this.name} meowed!`);
  },
  printThis: function () {
    console.log(this);
  },
};

dog.speak();
cat.speak();
dog.printThis();

console.log(this);

//----------------------------------------------------------
//----------------------------------------------------------
// comparing objects

// const person1 = {
//     name: "doug"
// }

// const person2 = {
//     name: "alan"
// }

// const person3 = person1  // person 3 and person 1 ARE THE SAME EXACT OBJECT! THERE IS ONLY ONE!
// person3.name = 'Tony'

// const array = [1, 2]
// let array2 = [...array] // array 2 is an entirely NEW and separate array
// console.log(array === array2)
// array[1] = 4
// console.log(array, array2)

// console.log(person1.name, person2.name, person3.name)

//--------------------------------------------------
//--------------------------------------------------
// Class preview

// let Animal = class {
//     constructor(type, name, age) {
//         this.type = type;
//         this.name = name;
//         this.age = age;
//     }

//     speak() {
//         if (this.type === 'dog') {
//             console.log(`${this.name} barked!`)
//         } else if (this.type === 'cat') {
//             console.log(`${this.name} meowed!`)
//         } else {
//             console.log(`Not sure what sound ${this.name} just made`)
//         }
//     }
// }

// let sparky = new Animal('dog', 'Sparky', 5)
// sparky.speak();
