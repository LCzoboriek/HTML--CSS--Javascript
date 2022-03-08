let firstNames = "Luke";
let lastNames = "Czoboriek";
let twitter = "@czoboriek";

let person = {
    firstNames: "Luke",
    lastNames: "Czoboriek",
    twitter: "@czoboriek",
    greet: function() {
        console.log(`My name is ${firstNames} ${lastNames} and my twitter handle is ${twitter}`);
    }
};

person.greet();

let array = [1, 2, 3, 4, 5];
console.log(array);
console.log(array.length);


array = [true, "Yes", 1]


let count = 0;
let max = 10;

// while(count < max) {
//     console.log(count);
//     count = count + 1;
// }

for (let i = 0; i < 10; i++){
    console.log(i);
}

let numbers = [true, 200, "Hello"];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// How to iterate through an array and clg all the values in the array until you reach the length
// of the numbers

// For each iterates over an array one by one
// this is used instead of doing a for loop
let days = ["monday", "tuesday", "wednesday"];

days.forEach(function(day, index){
    console.log(`day: ${day}, index: ${index}`);
})