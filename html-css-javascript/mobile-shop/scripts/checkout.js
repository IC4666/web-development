import { cart } from './cart.js';
import { products } from './product-data.js';

let checkoutHtml = "";
if(checkoutHtml == ""){
    document.querySelector('.checkout-container').innerHTML= "No item in the cart";
}

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
                <p>Price: ${matchingProduct.price} taka</p>
                <p>Quantity: ${item.quantity}</p>
                <p class="checkout-total-price">Total: ${matchingProduct.price * item.quantity} taka</p>
                <button class="checkout-edit-btn">Edit</button>
                <button class="checkout-delete-btn" data-product-id = ${matchingProduct.id}>Delete</button>

            </div>  
        </div>`;
});

document.querySelector('.checkout-container').innerHTML = checkoutHtml;


