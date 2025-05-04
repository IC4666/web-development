import { cart, removeFromCart, calculateTotalQuantity } from './cart.js';
import { products } from './product-data.js';

let checkoutHtml = "";
let checkoutContainer = document.querySelector('.checkout-container');
let totalPrice = 0;

cart.forEach((item) => {

    // let matchingProduct;
    // products.forEach((product) => {
    //     if (item.productId == product.id) {
    //         matchingProduct = product;
    //     }
    // });
    let matchingProduct = products.find(product => product.id == item.productId);

    checkoutHtml += `
        <div class="checkout-card container-${matchingProduct.id}">
            <div class="checkout-card-image">
                <img src="images/${matchingProduct.image}" alt="${matchingProduct.name}" loading="lazy">
            </div>

            <div class="checkout-card-details">
                <h3>${matchingProduct.name}</h3>
                <p>Price: ${matchingProduct.price} taka</p>
                <p>Quantity: ${item.quantity}</p>
                <p class="checkout-total-price">Total: ${matchingProduct.price * item.quantity} taka</p>
                <button class="checkout-card-edit-btn">Edit</button>
                <button class="checkout-card-delete-btn" data-product-id = ${matchingProduct.id}>Delete</button>
            </div>  
        </div>`;

         totalPrice += matchingProduct.price * item.quantity;
});



checkoutContainer.innerHTML = checkoutHtml;
updateOrderSummary();

//  Displaying the total product and product quantity of the cart
function updateOrderSummary() {
    const checkoutDisplayProduct = document.querySelector(".checkout-cart-product");
    const checkoutDisplayCartQuantity = document.querySelector(".checkout-cart-quantity");
    const checkoutDisplayTotalPrice = document.querySelector(".checkout-cart-price");

    checkoutDisplayProduct.innerHTML = cart.length;
    checkoutDisplayCartQuantity.innerHTML = calculateTotalQuantity();
    checkoutDisplayTotalPrice.innerHTML = totalPrice + " taka";

    if (cart.length === 0) {
        checkoutContainer.innerHTML = "Empty Cart";
    }
}

//Delete button functionality
let deleteBtn = document.querySelectorAll(".checkout-card-delete-btn");
deleteBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        let productId = btn.getAttribute("data-product-id");
        removeFromCart(productId);

        let container = document.querySelector(`.container-${productId}`);
        container.remove();
        updateOrderSummary();

    })
});

