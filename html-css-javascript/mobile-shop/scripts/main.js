import { products } from "./product-data.js";
import { cart, addToCart } from "./cart.js";

//  Displaying the products on the page
let productHtml = "";
products.forEach((product) => {
    document
    productHtml += `
    <div class="product-card blur-animation">
        <div class="product-image">
            <img src="images/${product.image}" alt="${product.name}" title="${product.name}" loading="lazy">
        </div>
        <div class="product-details">
            <h3>${product.name}</h3>
            <b><p>Price:</b> ${product.price} taka</p>
            <b><p>Color:</b> ${product.color.join(", ")}</p>
            <b><p>Brand:</b> ${product.brand}</p>
            <b><p>Discount:</b> ${product.discount}%</p>
            <b><p>Stock:</b> ${product.stock}</p>
            <button class="product-button" data-product-id = ${product.id}>Add to cart</button>
        </div>
   </div>`;
});

document.querySelector(".product-container").innerHTML = productHtml;


let addToCartBtn = document.querySelectorAll(".product-button");

//  This is a pop-up
addToCartBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {

        let popupBox = document.querySelector(".pop-up");
        let popupText = document.querySelector(".pop-up-text");

        popupText.innerText = "Product number (" + (index + 1) + ") is added to cart";
        popupBox.showModal();

        setTimeout(() => {
            popupBox.close();
        }, 500);
    })
});


// calculating and adding cart quantity to the cart icon
let DisplayCartQuantity = document.querySelector(".cart-quantity");
if (cart.length === 0)  {
    DisplayCartQuantity.style.display = "none";
}

addToCartBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        let productId = btn.getAttribute("data-product-id");
        //can also be write like this let productId = btn.dataset.productId;

        addToCart(productId);

        let totalCartQuantity = 0;
        cart.forEach((item) => {
            totalCartQuantity += item.quantity;
        })

        DisplayCartQuantity.innerText = totalCartQuantity;
        DisplayCartQuantity.style.display = "block";
    })
});






