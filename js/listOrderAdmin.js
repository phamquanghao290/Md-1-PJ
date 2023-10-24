let payList = JSON.parse(localStorage.getItem("payList")) || []
console.log(payList);
function renderOrder() {
    let text = ""
    for (let i = 0; i < payList.length; i++) {
        text += `
       <tr>
                                    <td>
                                        
                                        <a class="text-heading font-semibold" href="#">
                                           ${payList[i].username}
                                        </a>
                                    </td>
                                    <td>
                                         ${payList[i].dateOrder}
                                    </td>
                                    <td>
                                        
                                        <a class="text-heading font-semibold" href="#">
                                             ${payList[i].idOrder}
                                        </a>
                                    </td>
                                    <td>
                                        ${payList[i].pay}
                                    </td>
                                    <td>
                                        <span class="badge badge-lg badge-dot" id="check">
                                            
                                            <i  class="bg-warning"></i>
                                        </span>
                                       <span id="status"> ${payList[i].status}</span>
                                    </td>
                                    <td class="text-end">
                                        <a href="#" class="btn btn-sm btn-neutral" onclick="accept(${i})">Accept</a>
                                        <a href="#" class="btn btn-sm btn-neutral" onclick="cancel(${i})">Cancel</a>

                                    </td>
                                </tr>
       `
    }
    document.getElementById("renderUserOrder").innerHTML = text
}
renderOrder()

function checkStatus() {
    console.log(1111);
    let status = document.getElementById("status").innerText;
    console.log(typeof status);
    if (status == "Accept") { 
        document.getElementById("check").innerHTML = `<i class="bg-success"></i> `
    }else if (status=="Cancel") {
        document.getElementById("check").innerHTML = `<i class="bg-dark"></i>`
    }

}
checkStatus()
function accept(index) {
    payList[index].status = "Accept"
    localStorage.setItem("payList", JSON.stringify(payList))
    renderOrder()
    checkStatus()
}
function cancel(index) {
    payList[index].status = "Cancel"
    localStorage.setItem("payList", JSON.stringify(payList))
    renderOrder()
    checkStatus()
}