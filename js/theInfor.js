let currentProduct = JSON.parse(localStorage.getItem("currentProduct"))
let product = JSON.parse(localStorage.getItem("products"))
function renderCurrentProduct() {
    document.getElementById("imgInfor").src = currentProduct.img
    document.getElementById("nameInfor").innerHTML = currentProduct.name
    document.getElementById("priceInfor").innerHTML = currentProduct.price
}
renderCurrentProduct()

function addToCart() {
    let productOrder = product.find((item) => item.id == currentProduct.id)
    if (currentUser.cart.length == 0) {
        productOrder.quantity = 1
        currentUser.cart.push(productOrder)
        localStorage.setItem("currentUser", JSON.stringify(currentUser))
        return;
    }
    for (let i = 0; i < currentUser.cart.length; i++) {
        if (currentUser.cart[i].id == productOrder.id) {
            currentUser.cart[i].quantity += 1

            localStorage.setItem("currentUser", JSON.stringify(currentUser))
            return
        }
    }
    productOrder.quantity = 1
    currentUser.cart.push(productOrder)
    localStorage.setItem("currentUser", JSON.stringify(currentUser))
}
function totalOrder() {
    if (currentUser.cart.length == 0) {
        document.getElementById("total_order").innerHTML = ""
    } else {
        document.getElementById("total_order").innerHTML = currentUser.cart.length
    }

}
