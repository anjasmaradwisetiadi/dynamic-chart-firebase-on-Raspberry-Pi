// *** verifikasi email ( https://firebase.google.com/docs/auth/web/start?authuser=0 )





$(function () {

  // *** verivikasi pada benar atau tidak pengguna admin

  firebase.auth().onAuthStateChanged(function (user) {
    //window.alert(user);
    if (user) {
      // User is signed in.

      document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";

      if(user != null) {
        var email_id = user.email;
        //text("bisa masuk")
        //document.getElementById("user_div").style.display = "none";
        //window.alert("Welcome User" + email_id );
        swal("Authenticated", "Welcome back " + email_id, "success");
        window.setTimeout(function () {
            location.href = "./dashboard.html";
        }, 3000);
        //location.href = "./dashboard";
        //document.getElementById("user_div").style.display = "block";
        //.innerHTML = "Welcome User : " + email_id;
      }
    } else {
      // No user is signed in.
      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
      //window.alert("keluar sendiri");
    }
  });

  // *** input password
  $("#login").click(function (events) {
    //document.getElementById("login_div").style.display = "block";
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
      // Handle Errors here. cacth menjalankan error melalui mengabaikan functio error itu sendiri
      var errorCode = error.code;
      var errorMessage = error.message;

      swal("Error", errorMessage, "error");

      // ...
    });

  })
  // *** mendaftar tapi kurang seperti verifikasi agar tidak seembarangan orang daftar 
  $("#logup").click(function (events) {
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      swal("Error", errorMessage, "error");
    });

    // Send token back to client

  })

  $("#logout").click(function (events) {
    firebase.auth().signOut();
    window.location = "./";
  })


})