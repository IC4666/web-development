 export const cart = [{productId: 1, quantity: 2}, {productId: 2, quantity: 1}];

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
 }