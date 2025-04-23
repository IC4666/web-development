export let cart = JSON.parse(localStorage.getItem("cart")) || [];


function saveToLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
};


export function addToCart(productId) {
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
    saveToLocalStorage();
}


export function removeFromCart(productId) {
    let newCart = [];

    cart.forEach((item) => {
        if (item.productId !== productId) {
            newCart.push(item);
        }
    })

    cart = newCart;
    saveToLocalStorage();
}

export function displayCartQuantity() {
    const cartQuantity = document.querySelector(".cart-quantity");

    if (cart.length === 0) {
        cartQuantity.style.display = "none";
    }
    else {
        const quantity = calculateTotalQuantity();
        cartQuantity.innerHTML = quantity;
        cartQuantity.style.display = "block";
    }
}

export function calculateTotalQuantity() {
    //     let totalCartQuantity = 0;
    //         cart.forEach((item) => {
    //             totalCartQuantity += item.quantity;
    //         });
    //     return totalCartQuantity;

    // it calculate the total quantity total's initial value is 0
    return cart.reduce((total, item) => total + item.quantity, 0); 
}

