// Create a web-page that asks for a name and outputs it.

// solution
// function clicked() {
//    let name = prompt('what is your name ?' )
//     alert(name)
// }


/*
Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’

If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”
*/

// solution

// const clicked = () => {
//     let official = prompt('what is javascript official name ?', '')
//     official == 'Ecmascript' ? alert('True') : alert('false')
// }


/* 
Rewrite this if using the conditional operator '?':

let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
*/

// solution
let result = 1 + 2 < 4 ? 'True' : 'False';


/* 
Rewrite if..else using multiple ternary operators '?'.

For readability, it’s recommended to split the code into multiple lines.

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
*/

// solution

// let message = (login == 'Employee') ? 'Hello' : (login == 'Director') ? 'Greetings' : (login == '') ? 'No login' : '';

/*
Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”
*/


// const Clicked = () => {
//     let user = prompt('who are you ?', '')

//     if (user == 'admin') {
//         let pass = prompt('enter password')
//         if (pass == 'master') {
//             alert('welcome')
//         } else if(pass == '' || null) {
//             alert('canceled')
//         } else {
//             alert('wrong credentials')
//         }
//     } else if(user == '' || null) {
//         alert('request aborted')
//     } else {
//         alert('i dont kow you')
//     }
// }


// let name;
// let otherName = name ?? 'david';
// alert(otherName)


// let i = 0;
// do {
//   alert( i );
//   i++;
// //   console.log(i);
// } while (i < 3);


// for(let num = 1; num <= 100; num++) {
//     console.log(num);
// }


// let sum = 0;

// while (true) {

//   let value = +prompt("Enter a number", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// alert( 'Sum: ' + sum );


for(num = 0; num < 20; num++) {
   let odd = num % 2
   alert(num)
   alert(odd)
}