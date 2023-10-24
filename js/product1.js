
let currentUser = JSON.parse(localStorage.getItem("currentUser")) || 1;
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

//render san pham 
// let category = [
//     { id: 0, name: "Danh  sách sản phẩm" },
//     { id: 4, name: "Lịch sử" },
//     { id: 5, name: "Đời sống" },
//     { id: 6, name: "Tâm lí tình cảm" },
//     { id: 7, name: "Tiểu thuyết" },
//     { id: 8, name: "Giáo dục" },
// ];
// localStorage.setItem("category", JSON.stringify(category));

// let listProducts = [
//     {
//         id: 1,
//         name: "Lịch sử của Trà",
//         price: 23,
//         img: "./img/Líchucuatra.jpg",
//         stock: 50,
//         categoryId: 4,
//     },
//     {
//         id: 2,
//         name: "Ai tăng lương cho bạn",
//         price: 23,
//         img: "./img/aitangluong.jpg",
//         stock: 50,
//         categoryId: 8,
//     },
//     {
//         id: 3,
//         name: "Hãy về với cha",
//         price: 15,
//         img: "./img/hayvevoicha.jpg",
//         stock: 50,
//         categoryId: 5,
//     },
//     {
//         id: 4,
//         name: "Muốn an được an",
//         price: 12,
//         img: "./img/muonan.jpg",
//         stock: 50,
//         categoryId: 5,
//     },
//     {
//         id: 5,
//         name: "Trở về cõi sáng",
//         price: 15,
//         img: "./img/trovecoisang.jpg",
//         stock: 50,
//         categoryId: 7,
//     },
//     {
//         id: 6,
//         name: "Minh Triết trong đời sống",
//         price: 13,
//         img: "./img/minhtriet.png",
//         stock: 50,
//         categoryId: 8,
//     },
//     {
//         id: 7,
//         name: "Muôn kiếp nhân sinh",
//         price: 15,
//         img: "./img/muonkiepnhansinh.jpg",
//         stock: 50,
//         categoryId: 7,
//     },
//     {
//         id: 8,
//         name: "Mắt bão",
//         price: 21,
//         img: "./img/matbao.jpg",
//         stock: 50,
//         categoryId: 7,
//     },
//     {
//         id: 9,
//         name: "Trần Triều nhàn thoại",
//         price: 14,
//         img: "./img/trantrieunhanthoai.jpg",
//         stock: 50,
//         categoryId: 4,
//     },
//     {
//         id: 10,
//         name: "Từ điển mĩ học",
//         price: 32,
//         img: "./img/tudienmihoc.jpg",
//         stock: 50,
//         categoryId: 4,
//     },
//     {
//         id: 11,
//         name: "Rừng Nauy",
//         price: 20,
//         img: "./img/rungnauy.jpg",
//         stock: 50,
//         categoryId: 6,
//     },
//     {
//         id: 12,
//         name: "Lực lượng mãnh hổ",
//         price: 15,
//         img: "./img/manhho.jpg",
//         stock: 50,
//         categoryId: 4,
//     },
//     {
//         id: 13,
//         name: "Kiếp nào ta tìm thấy nhau",
//         price: 19,
//         img: "./img/kiepnao.jpg",
//         stock: 50,
//         categoryId: 6,
//     },
//     {
//         id: 14,
//         name: "The Dark Light",
//         price: 43,
//         img: "./img/book1.png",
//         stock: 50,
//         categoryId: 7,
//     },
//     {
//         id: 15,
//         name: "Atomic One's",
//         price: 40,
//         img: "./img/book2.png",
//         stock: 50,
//         categoryId: 7,
//     },
//     {
//         id: 16,
//         name: "Con người biểu tượng",
//         price: 25,
//         img: "./img/connguoi.jpg",
//         stock: 50,
//         categoryId: 7,
//     },
//     {
//         id: 17,
//         name: "Cây cam ngọt của tôi",
//         price: 25,
//         img: "./img/caycam.jpg",
//         stock: 50,
//         categoryId: 5,
//     },
//     {
//         id: 18,
//         name: "TheJourneyOfYouth",
//         price: 21,
//         img: "./img/TheJourneyOfYouth.jpg",
//         stock: 50,
//         categoryId: 8,
//     },
//     {
//         id: 19,
//         name: "Rèn luyện tư duy phản biện",
//         price: 27,
//         img: "./img/Rèn luyện tư duy phản biện.jpg",
//         stock: 50,
//         categoryId: 8,
//     },
//     {
//         id: 20,
//         name: "Kỉ luật bản thân",
//         price: 25,
//         img: "./img/Kỉ luật bản thân.jpg",
//         stock: 50,
//         categoryId: 8,
//     },
//     {
//         id: 21,
//         name: "Lãnh đạo bằng câu hỏi",
//         price: 20,
//         img: "./img/lanhdao.jpg",
//         stock: 50,
//         categoryId: 8,
//     },
//     {
//         id: 22,
//         name: "Tâm lí học về tiền",
//         price: 25,
//         img: "./img/tien.jpg",
//         stock: 50,
//         categoryId: 8,
//     },
//     {
//         id: 23,
//         name: "Ổn định hay tự do",
//         price: 26,
//         img: "./img/ondinhhaytudo.jpg",
//         stock: 50,
//         categoryId: 8,

//     },
// ];
// localStorage.setItem("products", JSON.stringify(listProducts));

let product = JSON.parse(localStorage.getItem("products"))
let category = JSON.parse(localStorage.getItem("category"))
// render categpory
const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

function renderCategoty() {

    let text = ""
    for (let i = 0; i < category.length; i++) {
        text += `
            <li onclick="chooserProduct(${category[i].id},${currentPage})">${category[i].name} </li >
                `
    }
    document.getElementById("category_box").innerHTML = text

}

// render product
let currentPage = 1
const productPage = 6
let totalProduct = product.length
let totalPage = Math.ceil(totalProduct / productPage)

function chooserProduct(id, page) {
    let text = ""
    if (id == 0) {
        let startPage = (page - 1) * productPage
        let endPage = startPage + productPage

        for (let i = startPage; i < endPage && i < totalProduct; i++) {
            text += `
        <div class="card grid-item"  style="width: 260px; ">
        <img src="${product[i].img}" class="card-img-top" alt=""  onclick="inforProduct(${product[i].id})" style="cursor: pointer;">
        <div class="card-body">
          <h5 class="card-title">${product[i].name}</h5>
          <p class="card-text">Some quick example text 
          </p>
          <span onclick="buy(${product[i].id})" class="btn btn-primary">Add to card</span>
          <span style="float: right;margin-right: 20px;margin-top: 6px;">${USDollar.format(product[i].price)}</span>
        </div>
      </div>
        `

        }
        document.getElementById("list-card").innerHTML = text
        document.getElementById("change-page").style.display = "flex"
        renderCategoty()
        return
    }
    document.getElementById("change-page").style.display = "none"
    let productRender = product.filter((item) => item.categoryId == id)
    for (let i = 0; i < productRender.length; i++) {
        text += `
        <div class="card grid-item"  style="width: 260px; ">
        <img src="${productRender[i].img}" class="card-img-top" alt="" onclick="inforProduct(${productRender[i].id}) style="cursor: pointer;" >
        <div class="card-body">
          <h5 class="card-title">${productRender[i].name}</h5>
          <p class="card-text">Some quick example text 
          </p>
          <span class="btn btn-primary" onclick="buy(${productRender[i].id})">Add to card</span>
          <span style="float: right; margin-right: 20px; margin-top: 6px;">${USDollar.format(productRender[i].price)}</span>
        </div>
      </div>
        `

    }
    document.getElementById("list-card").innerHTML = text

}
chooserProduct(0)
function inforProduct(id) {
    let productInfor = product.find((item) => item.id == id)
    localStorage.setItem("currentProduct",JSON.stringify(productInfor))
    window.location.href="theInfor.html"
}
function changePage(page) {
    currentPage = page
    chooserProduct(0, currentPage)

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
    document.getElementById("change-page").innerHTML = text
}
renderPage()
chooserProduct(0, currentPage)
function totalOrder() {

    if (currentUser.cart.length == 0) {
        document.getElementById("total_order").innerHTML = ""
    } else {
        document.getElementById("total_order").innerHTML = currentUser.cart.length
    }

}
totalOrder()
function buy(id) {
    console.log(1111);
    let productOrder = product.find((item) => item.id == id)
    if (currentUser.cart.length == 0) {
        productOrder.quantity = 1
        currentUser.cart.push(productOrder)
        localStorage.setItem("currentUser", JSON.stringify(currentUser))
        totalOrder()
        return;
    }
    for (let i = 0; i < currentUser.cart.length; i++) {
        if (currentUser.cart[i].id == productOrder.id) {
            currentUser.cart[i].quantity += 1
            totalOrder()
            localStorage.setItem("currentUser", JSON.stringify(currentUser))
            return
        }
    }
    productOrder.quantity = 1
    currentUser.cart.push(productOrder)
    localStorage.setItem("currentUser", JSON.stringify(currentUser))
    totalOrder()
}
function change() {
    if (currentUser.cart.length == 0) {
        console.log(111);
        const button = document.getElementById("button1"),
            toast = document.querySelector(".toast1")
        closeIcon = document.querySelector(".close"),
            progress = document.querySelector(".progress");
        let timer1, timer2;
        button.addEventListener("click", () => {
            toast.classList.add("active");
            progress.classList.add("active");
            timer1 = setTimeout(() => {
                toast.classList.remove("active");
            }, 5000); //1s = 1000 milliseconds

            timer2 = setTimeout(() => {
                progress.classList.remove("active");
            }, 5300);
        });
        closeIcon.addEventListener("click", () => {
            toast.classList.remove("active");
            setTimeout(() => {
                progress.classList.remove("active");
            }, 300);
            clearTimeout(timer1);
            clearTimeout(timer2);
        });
    } else {
        window.location.href = "cart1.html"
    }
}

function searchId() {
    let products = JSON.parse(localStorage.getItem("products"))
    let textSearch = document.getElementById("search").value;
    let searchProduct = products.filter(item => item.name.toLowerCase().includes(textSearch.toLowerCase()))
    let text = ""
    for (let i = 0; i < searchProduct.length; i++) {
        text += `
        <div class="card grid-item"  style="width: 260px;">
        <img src="${searchProduct[i].img}" class="card-img-top" alt=""  >
        <div class="card-body">
          <h5 class="card-title">${searchProduct[i].name}</h5>
          <p class="card-text">Some quick example text 
          </p>
          <span onclick="buy(${searchProduct[i].id})" class="btn btn-primary">Add to card</span>
          <span style="float: right;margin-right: 20px;margin-top: 6px;">${searchProduct[i].price}</span>
        </div>
      </div>
        `

    }
    document.getElementById("list-card").innerHTML = text
}


