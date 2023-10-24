let listUser = JSON.parse(localStorage.getItem("users"))
function renderUser() {
    let text = ""
    for (let i = 0; i < listUser.length; i++) {
        text += `
        <tr>
            <td>${listUser[i].id}</td>
            <td>${listUser[i].username}</td>
            <td>${listUser[i].phone}</td>
            <td class="status">${listUser[i].status}</td>
            <td>
                <a class="btn btn-sm btn-neutral" onclick="ban(${i})">Ban</a>
                <a class="btn btn-sm btn-neutral" onclick="Unban(${i})">Unban</a>
            </td>       
        </tr>
        `
    }
    document.getElementById("renderUser").innerHTML = text
}
renderUser()
function ban(index) {
    listUser[index].status = "ban"
    localStorage.setItem("users", JSON.stringify(listUser))
    renderUser()
}
function Unban(index) {
    listUser[index].status = "normal"
    localStorage.setItem("users", JSON.stringify(listUser))
    renderUser()
}