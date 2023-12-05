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


const Clicked = () => {
    let login = prompt('enter user name', '');
    let password = prompt('enter password' );
    login == 'Admin' ? password : null ;
    password == 'Master' ? alert('welcome') : alert('wrong password');
}
