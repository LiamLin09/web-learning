const password = prompt('please enter a new password');

if (password.length >= 6) {
  if (password.indexOf(' ' ) === -1) {
    console.log('valid password!!');
  } else {
    console.log('sorry, password cannot contain space!!!');
  }
} else {
  console.log('password too short!!!');
}

