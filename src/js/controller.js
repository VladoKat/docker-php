function onSubmit(event){
  event.preventDefault();
  if(validateForm()){
    console.log("validated");
    sendRequest();
  }
  console.log("after validation");
  return false;
}

function sendRequest(){
  var aDocForm = document.forms["myForm"];
  var oData={};
  oData.username = aDocForm["username"].value;
  oData.password = aDocForm["password"].value;
  $.ajax({
    type: 'POST',
    url: "register.php",
    data: oData,
    success: function(response) {
      console.log(oData)
    },
    error: function(response) {
      console.log(response);
      console.log(oData);
    }
  });
  return false;
}

function validateForm() {
  var aDocForm = document.forms["myForm"];

  var elementsToRemove = document.getElementsByClassName("remove");
  for (i = elementsToRemove.length; i--;) {
    elementsToRemove[i].parentNode.removeChild(elementsToRemove[i]);
  }
  var oUserValidation = validateUsername();
  if(!oUserValidation.isValid){
    createParagraph(oUserValidation.errorMessage);
  }
  var oPassValidation = validatePassword();
  if(!oPassValidation.isValid){
    createParagraph(oPassValidation.errorMessage);
  }

  var oPassConfirmValidation = validateConfirmPassword();
  if(!oPassConfirmValidation.isValid){
    createParagraph(oPassConfirmValidation.errorMessage);
  }
  return oUserValidation.isValid && oPassValidation.isValid && oPassConfirmValidation.isValid;
}

function validateUsername(){
  var aDocForm = document.forms["myForm"];
  var sUsername = aDocForm["username"].value;
  var json = {};
  if(sUsername.length < 3 || sUsername.length >10){
    json.isValid = false;
    json.errorMessage = "Username length must be between 3 and 10 characters";
    return json;
  }
  json.isValid = /^\d*\w*$/.test(sUsername);
  json.errorMessage = "Username can consist only of alphabet characters, digits and underscores";
  return json;
}

function createParagraph(str){
  var para = document.createElement("p");
  para.className = "remove"
  var node = document.createTextNode(str);
  para.appendChild(node);
  var element = document.getElementById("body");
  element.appendChild(para);
}

function validatePassword(){
  var aDocForm = document.forms["myForm"];
  var sPassword = aDocForm["password"].value;
  if(sPassword.length < 6){
    return {
      isValid: false,
      errorMessage: "Password must have at least 6 characters"
    }
  }
  return {
    isValid: /[a-z]/.test(sPassword) && /[A-Z]/.test(sPassword) && /\d/.test(sPassword),
    errorMessage: "Password must contain at least one capital letter, one small letter and one digit"
  }
}

function validateConfirmPassword(){
  var aDocForm = document.forms["myForm"];
  var sPassword = aDocForm["password"].value;
  var sPasswordConfirm = aDocForm["passwordConfirm"].value;
  result = sPassword.localeCompare(sPasswordConfirm);
  return {
    isValid: result == 0,
    errorMessage: "Password and Confirm Password don't match"
  }
}
