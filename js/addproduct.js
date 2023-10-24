// lay  anh 
let dataImage
function changeImage() {
    const file = document.getElementById("formFileSm").files[0]
    const reader = new FileReader();
    reader.onload = function () {
        dataImage = reader.result;
    };
    reader.readAsDataURL(file);
}
let product = JSON.parse(localStorage.getItem("products"))
let id

let currentPage = 1
const productPage = 3
let totalProduct = product.length
let totalPage = Math.ceil(totalProduct / productPage)

const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
function renderProduct(page) {
    let startPage = (page - 1) * productPage
    let endPage = startPage + productPage

    let text = ""
    for (let i = startPage; i < endPage && i < totalProduct; i++) {
        text += `
            <tr>
                <td>${product[i].id}</td>
                <td><img src="${product[i].img}" alt="" style="width: 100px; "></td>
                <td>${product[i].name}</td>
                <td>${USDollar.format(product[i].price)}</td>
                <td>${product[i].stock}</td>
                <td>
                    <a href="#" class="btn btn-sm btn-neutral" onclick="edit(${i})">Edit</a>
                    <a href="#" class="btn btn-sm btn-neutral" onclick="removeProduct(${i})">Delete</a>
                </td>
            </tr>
        `

    }
    document.getElementById("render-product").innerHTML = text

}
renderProduct()
function changePage(page) {
    currentPage = page
    renderProduct(currentPage)

}
function renderPage() {
    let text = ""
    totalProduct = product.length
    totalPage = Math.ceil(totalProduct / productPage)
    for (let i = 1; i <= totalPage; i++) {
        text += `
         <span class="btn btn-primary" onclick="changePage(${i})">${i}</span>
    `
    }
    document.getElementById("changePage").innerHTML = text
}
renderPage()
renderProduct(currentPage)
function idProduct() {
    let d = new Date()
    id = d.getMilliseconds() + d.getSeconds() * d.getHours() + 100000 * 3.14 + 1
}

function addProduct() {
    idProduct()
    let newProduct = {
        name: document.getElementById("name-product").value,
        price: document.getElementById("price").value,
        categoryId: +document.getElementById("categoryId").value,
        img: dataImage,
        id: id,
        stock: document.getElementById("stock").value
    }
    product.unshift(newProduct)
    localStorage.setItem("products", JSON.stringify(product))
    document.getElementById("name-product").value = ""
    document.getElementById("price").value = ""
    document.getElementById("categoryId").value = ""
    document.getElementById("stock").value = ""
    document.getElementById("formFileSm").value = ""
    renderPage()
    renderProduct(currentPage)
}
function removeProduct(index) {
    product.splice(index, 1)
    localStorage.setItem("products", JSON.stringify(product))
    renderPage()
    renderProduct(currentPage)
}
let saveIndex
function edit(index) {
    let editProduct = { ...product[index] }
    saveIndex = index
    document.getElementById("name-product").value = editProduct.name
    document.getElementById("price").value = editProduct.price
    document.getElementById("categoryId").value = editProduct.categoryId
    document.getElementById("stock").value = editProduct.stock
    dataImage = editProduct.img
    document.getElementById("add").style.display = "none"
    document.getElementById("save").style.display = "block"
}
function saveProduct() {
    let editProduct = { ...product[saveIndex] }
    editProduct.name = document.getElementById("name-product").value
    editProduct.price = document.getElementById("price").value
    editProduct.categoryId = document.getElementById("categoryId").value
    editProduct.stock = document.getElementById("stock").value
    editProduct.img = dataImage
    product[saveIndex] = editProduct
    localStorage.setItem("products", JSON.stringify(product))
    document.getElementById("add").style.display = "block"
    document.getElementById("save").style.display = "none"
    document.getElementById("name-product").value = ""
    document.getElementById("price").value = ""
    document.getElementById("categoryId").value = ""
    document.getElementById("stock").value = ""
    document.getElementById("formFileSm").value = ""
    renderPage()
    renderProduct(currentPage)
}