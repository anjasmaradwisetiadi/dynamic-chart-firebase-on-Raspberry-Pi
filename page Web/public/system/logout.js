// *** verifikasi email ( https://firebase.google.com/docs/auth/web/start?authuser=0 )
$(function () {

  $("#logout").click(function (events) {
    firebase.auth().signOut();
    swal("Log Out", "See you next time. Redirecting, please waith ...", "success");
    window.setTimeout(function () {
        location.href = "./";
    }, 3000);
  })

  $("#logout2").click(function (events) {
    firebase.auth().signOut();
    swal("Log Out", "See you next time. Redirecting, please waith ...", "success");
    window.setTimeout(function () {
        location.href = "./";
    }, 3000);
  })

})