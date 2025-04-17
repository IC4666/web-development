import { cart, removeFromCart } from './cart.js';
import { products } from './product-data.js';

let checkoutHtml = "";
let checkoutContainer = document.querySelector('.checkout-container');



cart.forEach((item) => {

    let matchingProduct;
    products.forEach((product) => {
        if (item.productId == product.id) {
            matchingProduct = product;
        }
    });

    checkoutHtml += `
        <div class="checkout-card container-${matchingProduct.id}">
            <div class="checkout-image">
                <img src="images/${matchingProduct.image}" alt="${matchingProduct.name}" loading="lazy">
            </div>

            <div class="checkout-details">
                <h3>${matchingProduct.name}</h3>
                <p>Price: ${matchingProduct.price} taka</p>
                <p>Quantity: ${item.quantity}</p>
                <p class="checkout-total-price">Total: ${matchingProduct.price * item.quantity} taka</p>
                <button class="checkout-edit-btn">Edit</button>
                <button class="checkout-delete-btn" data-product-id = ${matchingProduct.id}>Delete</button>

            </div>  
        </div>`;
});

checkoutContainer.innerHTML = checkoutHtml;

//Delete button functionality
let deleteBtn = document.querySelectorAll(".checkout-delete-btn");
deleteBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        let productId = btn.getAttribute("data-product-id");
        removeFromCart(productId);

        let container = document.querySelector(`.container-${productId}`);
        container.remove();

        if (cart.length === 0) {
            location.reload();
        }
    })
});

if (cart.length === 0) {
    checkoutContainer.innerHTML = "Empty Cart";
}