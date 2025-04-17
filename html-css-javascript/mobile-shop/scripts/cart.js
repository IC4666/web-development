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
        if (item.productId  !== productId) {
            newCart.push(item);
        }
    })

    cart = newCart;
    saveToLocalStorage();

    console.log(cart);
}

