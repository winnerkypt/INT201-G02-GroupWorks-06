const log = document.getElementById('form');
document.addEventListener('keyup', () =>{
    let input = document.getElementById("form");
    let filter = input.value.toLowerCase();
    let divID = document.getElementById("products");
    let infoOfProduct = divID.getElementsByTagName("div");
    for (let i = 0; i < infoOfProduct.length; i++) {
      let txtValue = infoOfProduct[i].textContent || infoOfProduct[i].innerText;
      if (txtValue.toLowerCase().indexOf(filter) > -1) {
        infoOfProduct[i].style.display = "";
      } else {
        infoOfProduct[i].style.display = "none";
      }
    }
})
