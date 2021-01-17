// let arr = ['a', 'b', 'c', 'd', 'e'];

// //Slice
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// //Splice
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// //Reverse
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// //CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// //JOIN
// console.log(letters.join(' - '));



// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//     if (movement > 0) {
//         console.log(` Movement ${i + 1}: You deposited ${movement}`);
//     } else {
//         console.log(` Movement ${i + 1}: you withrew ${Math.abs(movement)}`);
//     }
// }

// console.log('---- FOREACH----');
// movements.forEach(function (move, i, array) {
//     if (move > 0) {
//         console.log(`Movement ${i + 1}: You deposited ${move}`);
//     } else {
//         console.log(`Movement ${i + 1}: You withrew ${Math.abs(move)}`);
//     }
// });


// console.log('----I rewrited myself----');
// movements.forEach(function (movement) {
//     if (movement > 0) {
//         console.log(`you deposited ${movement}`);
//     } else {
//         console.log(`you withdraw ${Math.abs(movement)}`);
//     }
// });



const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EURO','Euro'],
    ['GBP','Pound Sterling'],
]);

currencies.forEach(function (value,key,map) {
    console.log(`${key}: ${value}`);
});

//Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value,_,map){
    console.log(`${value}: ${value}`);
})


