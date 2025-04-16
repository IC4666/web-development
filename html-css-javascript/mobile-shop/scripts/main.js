let productHtml = "";
products.forEach((product) => {
    document
    productHtml += `
    <div class="product-card blur-animation">
        <div class="product-image">
            <img src="images/${product.image}" alt="${product.name}" title="${product.name}">
        </div>
        <div class="product-details">
            <h3>${product.name}</h3>
            <p>Price: ${product.price} taka</p>
            <p>Color: ${product.color.join(", ")}</p>
            <p>Brand: ${product.brand}</p>
            <p>Discount: ${product.discount}%</p>
            <p>Stock: ${product.stock}</p>

            <button class="product-button" data-product-id = ${product.id}>Add to cart</button>

        </div>
   </div>`;
});

document.querySelector(".product-container").innerHTML = productHtml;

//  This is a pop-up
addToCart = document.querySelectorAll(".product-button");

addToCart.forEach((btn, index) => {
    btn.addEventListener("click", () => {

        popupBox = document.querySelector(".pop-up");
        popupText = document.querySelector(".pop-up-text");

        popupText.innerText = "Product number (" + (index + 1) + ") is added to cart";
        popupBox.showModal();

        setTimeout(() => {
            popupBox.close();
        }, 500);
    })
});

addToCart.forEach((btn) => {
    btn.addEventListener("click", () => {
        // productId = btn.dataset.productId;
        productId = btn.getAttribute("data-product-id");

        let matchingItem;
        cart.forEach((item) => {
            if (productId === item.productId) {
                matchingItem = item;
            }
        })
        if (matchingItem) {
            matchingItem.quantity += 1;
        } else {
            cart.push({
                productId: productId,
                quantity: 1
            });
        }

        let totalCartQuantity = 0;

        cart.forEach((item) => {
            totalCartQuantity += item.quantity;
        })
        document.querySelector(".cart-quantity").innerText = totalCartQuantity;
    })
});






