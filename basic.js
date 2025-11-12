// let a = Math.floor(Math.random() * 100);

// console.log("Marks: ", a);
// if (a > 90) {
//     console.log("O")
// } else if (a > 80) {
//     console.log("A+");
// } else if (a > 70) {
//     console.log("A");
// } else if (a > 60) {
//     console.log("B+");
// } else if (a > 50) {
//     console.log("B");
// } else if (a > 40) {
//     console.log("C");
// }



let numbers = [10, 20, 30, 40, 50];
console.log("Initial Array:", numbers);
// 2. push() - Add element at end
numbers.push(60);
console.log("After push(60):", numbers);
// 3. unshift() - Add element at beginning
numbers.unshift(0);
console.log("After unshift(0):", numbers);
// 4. pop() - Remove last element
numbers.pop();
console.log("After pop():", numbers);
// 5. shift() - Remove first element
numbers.shift();
console.log("After shift():", numbers);
// 6. concat() - Combine with another array
let extraNumbers = [70, 80, 90];
let combined = numbers.concat(extraNumbers);
console.log("After concat():", combined);
// 7. slice() - Copy part of the array (non-destructive)
let sliced = combined.slice(2, 5);
console.log("After slice(2,5):", sliced);
// 8. splice() - Remove and insert elements (destructive)
combined.splice(3, 2, 100, 110);
console.log("After splice(3,2,100,110):", combined);
// 9. includes() - Check if value exists
console.log("Has 40?", combined.includes(40));
// 10. indexOf() - Find index of a value
console.log("Index of 100:", combined.indexOf(100));
// 11. sort() - Sort elements (numeric ascending)
combined.sort((a, b) => a - b);
console.log("After sort():", combined);
// 12. reverse() - Reverse the order
combined.reverse();
console.log("After reverse():", combined);
// 13. map() - Create new array by doubling values
let doubled = combined.map(num => num * 2);
console.log("After map(x => x*2):", doubled);
// 14. filter() - Keep only values > 50
let filtered = combined.filter(num => num > 50);
console.log("After filter(num > 50):", filtered);
// 15. reduce() - Sum of all elements
let total = combined.reduce((sum, val) => sum + val, 0);
console.log("Sum of all elements (reduce):", total);
// 16. forEach() - Print all elements
console.log("Final Combined Array (using forEach):");
combined.forEach(num => console.log(num));