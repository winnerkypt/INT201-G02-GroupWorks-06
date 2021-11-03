import { product } from "./product.js";
const imgSearch = document.querySelector('#search');
const productsList = document.querySelector('#products');


for (let i = 0; i < product.length; i++) {

    let divProducts = document.createElement("div");
    divProducts.setAttribute('id', product[i].productId);
    divProducts.setAttribute('class', 'col-3')

    let imgShein = document.createElement('img');
    imgShein.src = product[i].productImg;
    imgShein.width = 250;
    imgShein.style.marginBottom = '20px';

    let pProductName = document.createElement('h3');
    pProductName.innerHTML = `<h3 style="color:#8d4f48;">${product[i].productName}</h3>`;

    let list = document.createElement('ul');
    list.setAttribute("class", "list-unstyled");
    list.innerHTML += `<li style="color:#b47775;">Des : ${product[i].productDesc}</li>`
    list.innerHTML += `<li style="color:#b47775;">Price ${product[i].productPrice}</li>`
    list.innerHTML += `<li style="color:#b47775;">Stock : ${product[i].productStock}</li>`

    let botton = document.createElement('div');
    botton.setAttribute("class","bottonId");
    botton.innerHTML += `<button type="button" class="btn btn-outline-danger">Add</button>`

    divProducts.appendChild(imgShein);
    divProducts.appendChild(pProductName);
    divProducts.appendChild(list);
    divProducts.appendChild(botton)
    productsList.appendChild(divProducts);

}

