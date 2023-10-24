function login(e) {
  e.preventDefault();

  if (1) {
    let userName = document.getElementById("username");
    let passWord = document.getElementById("password");
    let users = JSON.parse(localStorage.getItem("users"));
    let check = false;
    if (userName.value === "admin" && passWord.value === "admin") {
      window.location.href = "ListOrderAdmin.html";
      return;
    }
    for (let i = 0; i < users.length; i++) {
      if (
        userName.value == users[i].username &&
        passWord.value == users[i].password
      ) {
        if (users[i].status == "ban") {
          alert("Ban dang bi Ban !");
          return;
        }
        // đăng nhập thành công lưu thông tin người dùng
        let currentUser = users[i];
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        // chuyển trang
        window.location.href = "index.html";
        check = true;
        break;
      }
    }
    if (check != true) {
      alert("dang nhap that bai");
    }
  }
}

