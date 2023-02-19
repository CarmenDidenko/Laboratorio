function validateName (name) {
    var regex 
}    

if (nameField.value === 0) {
errorName.innerHTML = 'Rellene este campo'
nameField.classList.add('invalid');
nameField.classList.add('errorIcon');
nameField.classList.remove('valid');
nameField.classList.remove('successIcon');
return false;
}

 if (errorName.value) {
  errorName.innerHTML = 'Nombre incorrecto';
  nameField.classList.add('invalid');
  nameField.classList.add('errorIcon');
  nameField.classList.remove('valid');
  nameField.classList.remove('successIcon');
  return false;
  
}

else if (validName.test(nameField.value)) {
    nameField.classList.remove ("invalid");
    nameField.classList.remove ("errorIcon");
    errorName.innerHTML ="";
    nameField.classList.add ("valid");
    nameField.classList.add ("successIcon");
    return true;
}


function validateEmail(email) {
  const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  return regex.test(email);
}

if (email.value === 0) {
errorEmail.innerHTML = 'Rellene este campo'
errorEmail.innerHTML = 'Rellene este campo';
emailField.classList.add('invalid');
emailField.classList.add('errorIcon');
emailField.classList.remove('valid');
emailField.classList.remove('successIcon');
return false;
}

if (email.value) {
errorEmail.innerHTML = 'Nombre incorrecto';
errorEmail.innerHTML = 'Rellene este campo';
emailField.classList.add('invalid');
emailField.classList.add('errorIcon');
emailField.classList.remove('valid');
emailField.classList.remove('successIcon');
return false;
}

else if (validEmail.test(emailField.value) ) {
    emailField.classList.remove("invalid");
    emailField.classList.remove("errorIcon");
    errorEmail.innerHTML = "";
    emailField.classList.add("valid");
    emailField.classList.add("successIcon");
    return true; 
}

function validatePassword(password) {
  const regex = /^[\s\S]{8,15}$/;
  return regex.test(password1);
}

if (password.value === 0) {
errorPassword.innerHTML = 'Rellene este campo'
errorPassword.innerHTML = 'Rellene este campo';
passwordField.classList.add('invalid');
passwordField.classList.add('errorIcon');
passwordField.classList.remove('valid');
passwordField.classList.remove('successIcon');
return false;
}

if (password.value) {
errorPassword.innerHTML = 'Contraseña no válida'
errorPassword.innerHTML = 'Rellene este campo';
passwordField.classList.add('invalid');
passwordField.classList.add('errorIcon');
passwordField.classList.remove('valid');
passwordField.classList.remove('successIcon');
return false;
}

else if (validPassword.test(passwordField.value)) {
passwordField.classList.remove('invalid');
passwordField.classList.remove('errorIcon');
errorPassword.innerHTML = '';
passwordField.classList.add('valid');
passwordField.classList.add('successIcon');
return true;
}
  
function confirmPassword(Password) {           
return regex.test(Password);
}

if (Password.value === 0) {
errorConfirm.innerHTML = 'Rellene este campo';
confirmField.classList.add('invalid');
confirmField.classList.add('errorIcon');
confirmField.classList.remove('valid');
confirmField.classList.remove('successIcon');
return false;
}

if (password.value != Password.value) {
errorConfirm.innerHTML = 'Las contraseñas no coinciden'
confirmField.classList.add('invalid');
confirmField.classList.add('errorIcon');
confirmField.classList.remove('valid');
confirmField.classList.remove('successIcon');
return false;
 }

 else if (passwordField.value == PasswordField.value) {
    confirmField.classList.remove ("invalid");
    confirmField.classList.remove ("errorIcon");
    errorConfirm.innerHTML = "";
    confirmField.classList.add ("valid");
    confirmField.classList.add ("successIcon");
    return true;
}

 function validateForm() {
        if (validateConfirm () && validatePassword () && validateEmail () && validateName ()) {
            alert ("La inscripción ha sido correcta");
            return true; 
        }
        
        else { 
            return false;
        }
        }
