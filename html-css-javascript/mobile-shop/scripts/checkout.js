import { cart } from './cart.js';
import { products } from './product-data.js';

let checkoutHtml = "";

cart.forEach((item) => {

    let matchingProduct;
    products.forEach((product) => {
        if (item.productId == product.id) {
            matchingProduct = product;
        }
    });

    checkoutHtml += `
        <div class="checkout-card">
            <div class="checkout-image">
                <img src="images/${matchingProduct.image}" alt="${matchingProduct.name}" loading="lazy">
            </div>

            <div class="checkout-details">
                <h3>${matchingProduct.name}</h3>
                <b><p>Price:</b> $${matchingProduct.price}</p>
                <b><p>Quantity:</b> ${item.quantity}</p>
                <b><p>Total:</b> $${matchingProduct.price * item.quantity}</p>
                <button class="checkout-edit-btn">Edit</button>
                <button class="checkout-delete-btn">Delete</button>

            </div>  
        </div>`;
});

document.querySelector('.checkout-container').innerHTML = checkoutHtml;


