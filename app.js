
// 1 write a Javascript function that prints 'HELLO WORLD'?

// const hello = () => {
//     return `Hello World!!!`;
// }
// console.log(hello());

// 2 write a Javascript function that accept a number and format it to a currency?

var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'NGN',
  });
  
  console.log(formatter.format(2000));