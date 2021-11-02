import { product } from "./product.js";
const productsList = document.querySelector('#products');
for (let i = 0; i < product.length; i++) {
    let divProducts = document.createElement("ul");
    divProducts.setAttribute('id', product[i].productId);

    let pProductName = document.createElement('li');
    pProductName.textContent = `Name : ${product[i].productName}`;

    let pProductDes = document.createElement('li');
    pProductDes.textContent = `Desc : ${product[i].productDesc}`;

    let pProductPrice = document.createElement('li');
    pProductPrice.textContent = `Price ${product[i].productPrice}`;

    let pProductStock = document.createElement('li');
    pProductStock.textContent = `Stock : ${product[i].productStock}`;

    divProducts.appendChild(pProductName);
    divProducts.appendChild(pProductDes);
    divProducts.appendChild(pProductPrice);
    divProducts.appendChild(pProductStock);
    productsList.appendChild(divProducts);

}
console.log(productList);