let productHtml = "";
products.forEach((product) => {
    productHtml += `
    <div class="product">
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
        </div>
   </div>`;
});

document.querySelector(".product-container").innerHTML = productHtml;