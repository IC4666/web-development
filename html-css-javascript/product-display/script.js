let productHtml = "";
products.forEach((product) => {
    productHtml += `
    <div class="product-card">
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

            <button class="product-button">Add to cart</button>

        </div>
   </div>`;
});

document.querySelector(".product-container").innerHTML = productHtml;


document.querySelectorAll(".product-button").forEach((btn, index) => {
    btn.addEventListener("click", () => {

        popupBox = document.querySelector(".pop-up");
        popupText = document.querySelector(".pop-up-text");

        popupText.innerText = "Product number (" + (index + 1) + ") is added to cart";
        popupBox.showModal();

        setTimeout(() => {
            popupBox.close();
        }, 1000);
    })
});


