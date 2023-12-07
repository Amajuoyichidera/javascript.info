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

//   let value = Number(prompt("Enter a number", ''));

//   if (!value) break; // (*)

//   sum += value;

// }
// alert( 'Sum: ' + sum );


// for(let num = 1; num < 20; num++) {
//   if(num % 2 == 0) continue;
//   alert(num)
// }


// let num = 0;

// for(; num < 10; num++) {
//   if(num == 2 || num == 4) continue;
//   alert(num)
// }

// ODD NUMBERS
// for (let odd = 0; odd < 20 ; odd++) {
//   if(odd % 2 == 0) {
//     continue;
//   } else {
//     alert(odd)
//   }
// }


// EVEN NUMBERS
// for (let even = 0; even < 20; even++) {
//   if(even % 2 == 0) {
//     alert(even)
//   } else {
//     continue ;
//   }
// }



// Use the for loop to output even numbers from 2 to 10.

// solution
// for(let even = 2; even <= 10; even++) {
//   if(even % 2 == 0) {
//     alert(even)
//   }
// }


// Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }

// solution

// let i = 0;
// while (i < 3) {
//   alert(`number ${i}!`)
//   i++;
// }


/*
Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.
*/

// solution
// do {
//   num = +prompt('enter number bigger than 100')
// } while(num <= 100 && num)

/*

Write the code using if..else which would correspond to the following switch:

switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}

*/

// solution

// let browser = prompt('enter the browser', '')

// if(browser === 'edge') {
//   alert( "You've got the Edge!" );
// } else if(browser === 'chrome' || 'firefox' || 'safari' || 'opera') {
//   alert( 'Okay we support these browsers too' );
// } else {
//   alert( 'We hope that this page looks ok!' );
// }


/* 

Rewrite the code below using a single switch statement:

let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}

*/

// solution

let a = +prompt('a?', '');

switch (a) {
  case 0:
    alert(0)
    break;
  case 1:
    alert(1)
    break;
  case 2:
  case 3:
    alert( '2,3' )
    break;100
  default:
    alert('wrong')
    break;
}