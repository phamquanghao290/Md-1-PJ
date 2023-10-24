let currentUser = JSON.parse(localStorage.getItem("currentUser")) || 1;
let flaga = 0;
// document.getElementById("total_order").innerHTML = currentUser.cart.length;
function checkCurrentUser() {
  if (currentUser == 1) {
    document.getElementById("login").style.display = "flex";
  } else {
    let show = document.getElementsByClassName("hidden-info");
    for (let i = 0; i < show.length; i++) {
      show[i].style.display = "block";
    }
  }
}
checkCurrentUser();
function login() {
  window.location.href = "login.html";
}
function showInfor() {
  document.getElementById("menu_info").classList.toggle("show");
}
function logOut() {
  localStorage.removeItem("currentUser");
  location.reload();
}

