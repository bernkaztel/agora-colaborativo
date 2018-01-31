
/*Funcion para la primera Vista*/ 

splash(2000);

function splash(param) {
        var time = param;
        setTimeout(function () {
            $('#splash-view').hide();
            $('#login_div').attr('class', 'container-fluid');
        }, time);
    } //final de splash


/*login con firebase*/
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
  } else {
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
  }
});

function login(){
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  // alert(userEmail + userPass);

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);
  });
}//final función login

function logout(){
  firebase.auth().signOut();
}//final función logout
