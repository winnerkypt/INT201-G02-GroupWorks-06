import { product } from "./product.js";
const search = document.querySelector('#search');
const productsList = document.querySelector('#products');
let check = true;

search.addEventListener("click", () => {
    check = !check
    if (check) {
        document.querySelector("#searchBar").innerHTML += `<input type="text" style="margin:10px;" class="form-control mb-2" placeholder="Enter Your Shirt" id="form">`;
        // document.querySelector("#searchBar").innerHTML += `<button id="submitSearch" class="btn btn-primary" style="display:inline-block;position:relative;left:250px;bottom:45px;">Submit</button>`;
        let log = document.getElementById("form");
        log.addEventListener('keyup', () => {
            let input = document.getElementById("form");
            let filter = input.value.toLowerCase();
            let divID = document.getElementById("products");
            let infoOfProduct = divID.getElementsByTagName("div");
            for (let i = 0; i < infoOfProduct.length; i++) {
                let txtValue = infoOfProduct[i].textContent
                if (txtValue.toLowerCase().indexOf(filter) > -1) {
                    infoOfProduct[i].style.display = "";
                } else {
                    infoOfProduct[i].style.display = "none";
                }
            }
        })

    } else document.querySelector("#searchBar").innerHTML = "";


});
listProduct();

function listProduct() {
    for (let i = 0; i < product.length; i++) {

        let divProducts = document.createElement("div");
        divProducts.setAttribute('id', product[i].productId);
        divProducts.setAttribute('class', 'col-3')

        let imgShein = document.createElement('div');
        imgShein.setAttribute('class', 'gradien');
        imgShein.innerHTML += `<img src='${product[i].productImg}' width="250px" style="marginBottom:20px;"><div class="overlayText"><p class="textImage">Add</p></div>`;


        let pProductName = document.createElement('h3');
        pProductName.innerHTML = `<h3 style="color:#8d4f48;">${product[i].productName}</h3>`;

        let list = document.createElement('ul');
        list.setAttribute("class", "list-unstyled");
        list.innerHTML += `<li style="color:#b47775;">Des : ${product[i].productDesc}</li>`
        list.innerHTML += `<li style="color:#b47775;">Price ${product[i].productPrice}</li>`
        list.innerHTML += `<li style="color:#b47775;">Stock : ${product[i].productStock}</li>`

        // let addCart = document.querySelector('#Add');
        // addCart.addEventListener("click", () => {
        //     alert("Helloworld")
        // });


        divProducts.appendChild(imgShein);
        divProducts.appendChild(pProductName);
        divProducts.appendChild(list);
        productsList.appendChild(divProducts);

    }
}