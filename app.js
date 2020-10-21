
// 1 write a Javascript function that prints 'HELLO WORLD'?

// const hello = () => {
//     return `Hello World!!!`;
// }
// console.log(hello());

// 2 write a Javascript function that accept a number and format it to a currency?

// var formatter = new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'NGN',
//   });
  
//   console.log(formatter.format(2000));

// 3 write a function that accept an array of numbers and output an array of numbers divisible by 2 and 3 ?

// const arraryofNum = (arr) => {
//     return  arr.filter(item => item % 2 === 0 && item % 3 === 0);
// }

// console.log(arraryofNum([6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96, 102, 108, 114, 120, 1, 5, 7, 11, 13,17, 19,23, 25, 29, 31]));

// 4. Write a Javascript program which accept a number as input and insert (-) between each two even numbers. For example if you  accept 025468 the output should be 0-254-6-8
const acceptInput = (num) => {
    return num.split('').join("-")
}

console.log(acceptInput("025468"));
