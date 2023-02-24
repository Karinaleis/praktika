let users = ['Isabella', 'Lucas', 'Sophia', 'Noah', 'Ava', 'Ethan', 'Emma', 'Liam', 'Olivia', 'Mason'];
let names = ['Ethan', 'Lucas', 'Charlotte', 'Logan', 'Mia', 'Emma', 'Amelia', 'Jackson', 'Harper', 'Olivia'];
let students = ['Ava', 'Mia', 'Jax', 'Zoe'];
//1//
// let n = 2;
// let result = flipFlop(users, 2);
// console.log(result);
// function flipFlop(users, n) {
//     if (users.length > n) {
//         users.splice(n, users.length - n);
//     }
//     return students;
//   }
//2//  
// let result = thanosSnap(users);
//   console.log(result); 
// function thanosSnap(users) {
//     for (let i = 1; i < users.length; i += 2) {
//       users.splice(i, 1);
//     }
//     return users;
//   }
//3//
// let maxText = 5;
// let result = validateLength(users, maxText);
// console.log(result); 
// function validateLength(users, maxText) {
//     return users.filter(element => element.length <= maxText);
//   }
//4//
// let result = compareElements(users, names);
// console.log(result); 
// function compareElements(users, names) {
//     let commonElements = [];
//     for (let i = 0; i < users.length; i++) {
//       if (names.includes(users[i])) {
//         commonElements.push(users[i]);
//       }
//     }
//     return commonElements;
//   }
//5//
// let result = flipFlop(students)
// console.log(result);
// function flipFlop(students) {
//     let flipFlop = students.map(element => {
//       let flipFlop = element.split('').reverse().join('');
//       return flipFlop;
//     });
//     return flipFlop.reverse();
//   }