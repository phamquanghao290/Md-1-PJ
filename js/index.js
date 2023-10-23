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
// function toggleMenu() {
//   flaga++;
//   if (flaga == 1) {
//     if (currentUser == null) {
//       document.getElementById("menu_info").classList.add("visible");
//     } else {
//       document.getElementById("menu_info").classList.add("visible");
//       document.getElementById("menu_info").innerHTML =
//             <li>Thông tin tài khoản</li>
//             <li onclick = "logOut()">Đăng xuất</li>
//         ;
//     }
//   } else {
//     document.getElementById("menu_info").classList.remove("visible");
//     flaga = 0;
//   }
// }

// function logOut() {
//   localStorage.removeItem("currentUser");
//   window.location.href = "./index.html";
// }

// hiddena()
// visible()
// function hiddena(){
//     document.getElementById("menu_info").classList.remove("visible")
//     flaga = 0
// }
// function visible() {
//     document.getElementById("menu_info").classList.add("visible")
// }
