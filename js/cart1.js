let currentUser = JSON.parse(localStorage.getItem("currentUser"))
let cartUser = currentUser.cart
let currentPage = 1
const productPage = 2
let totalProduct = cartUser.length
let totalPage = Math.ceil(totalProduct / productPage)

function renderOrder(page) {
    currentUser = JSON.parse(localStorage.getItem("currentUser"))
    cartUser = currentUser.cart
    let startPage = (page - 1) * productPage
    let endPage = startPage + productPage
    let text = ""
    for (let i = startPage; i < endPage && i < totalProduct; i++) {
        text += `
        <div class="card-order">
                         <img src="${cartUser[i].img}" alt="">
                            <div class="card-name">${cartUser[i].name}</div>
                            <div class="card-price">${cartUser[i].price * cartUser[i].quantity} </div>
                            <div class="card-wheel">
                                <button onclick="reduce(${cartUser[i].id})">-</button>
                                <span>${cartUser[i].quantity}</span>
                                <button onclick="add(${cartUser[i].id})">+</button>
                            </div>
                    </div>
       `
    }
    document.getElementById("order-list").innerHTML = text
}
function changePage(page) {
    currentPage = page
    renderOrder(currentPage)
}
function add(id) {
    cartUser = currentUser.cart
    for (let i = 0; i < cartUser.length; i++) {
        if (cartUser[i].id == id) {
            cartUser[i].quantity++
            break
        }
    }
    currentUser.cart = cartUser
    localStorage.setItem("currentUser", JSON.stringify(currentUser))
    renderPage()
    renderOrder(currentPage)
    totalMoney()
}
function reduce(id) {
    cartUser = currentUser.cart
    for (let i = 0; i < cartUser.length; i++) {
        if (cartUser[i].id == id) {
            if (cartUser[i].quantity == 0) {
                cartUser.splice(i, 1)

            } else {
                cartUser[i].quantity--

            }
            

            break;
        }
    }
    currentUser.cart = cartUser
    localStorage.setItem("currentUser", JSON.stringify(currentUser))
    renderOrder(currentPage)
    renderPage()
    totalMoney()
}

function renderPage() {
    let text = ""
     totalProduct = cartUser.length
     totalPage = Math.ceil(totalProduct / productPage)
    for (let i = 1; i <= totalPage; i++) {

        text += `<span class="button-2" onclick="changePage(${i})"> ${i}</span>
    `

    }
    document.getElementById("page-item").innerHTML = text
}
renderPage()
renderOrder(currentPage)

function totalMoney() {
    let total = 0
    for (let i = 0; i < cartUser.length; i++) {
        total += cartUser[i].price * cartUser[i].quantity
    }
    let tax = total * 5 / 100
    document.getElementById("tax-money").innerHTML = tax
    document.getElementById("total-money").innerHTML = total + tax
}
totalMoney()
let id
function idOrder() {
    const dateOrder = new Date();

    id = `${dateOrder.getDate()}${dateOrder.getDay()
        }${dateOrder.getYear()}${dateOrder.getHours()}${dateOrder.getMilliseconds()}`
        ;
}
idOrder()
let payList = JSON.parse(localStorage.getItem("payList")) || []
function pay(e) {
    e.preventDefault()
    idOrder()
    let currentUserOrder = { ...currentUser }
    currentUserOrder.idOrder = id
    currentUserOrder.pay = document.getElementById("total-money").innerHTML
    payList.push(currentUserOrder)
    currentUser.cart = []
    localStorage.setItem("currentUser", JSON.stringify(currentUser))
    localStorage.setItem("payList", JSON.stringify(payList))
    renderOrder()
    window.location.href = "loadingPay.html"
}

