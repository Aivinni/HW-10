// 1
const fruits = ["apple", "banana", "orange", "grape", "mango"]; 
fruits.push("pineapple");
fruits.unshift("kiwi");
// 2
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
// 3
const selectedFruits = fruits.slice(1,4);
console.log(selectedFruits);
// 4
let x = fruits.indexOf("grape");
console.log(x);
// 5
let fruitString = ""
for (i = 0; i < fruits.length ; i++) {
    if (i > 0) {
        fruitString = fruitString + ", " + fruits[i];
    } else {
       fruitString = fruitString + fruits[i]; 
    }
};
const fruitsFromString = fruitString.split(", ");
console.log(fruitsFromString);
// 6
const reversedFruits = fruits.reverse();
console.log(reversedFruits);
// 7
const fruitsSorted = fruits.sort();
console.log(fruitsSorted);
// 8
const email = "john.doe@example.com";
const emailParts = email.split("@");
console.log(emailParts);
// 9 
const temperatures = [72, 85, 90, 65, 75, 88];
let y = -459.67;
for (i = 0; i < temperatures.length; i++) {
    x = temperatures[i];
    if (x > y) {
        y = x;
    };
};
console.log(y);
// 10
const names = ["Alice", "Bob", "Charlie", "David", "Eva"];
for (i = 0; i < names.length; i++) {
    console.log(names[i] + " is at index " + i)
};