var cartItem = 0;

function addCart() {    //Add items to the cart 
    cartItem += 1;
    document.getElementById('print').innerHTML = cartItem;
}
function removeCart() {  //Remove 1 item from the cart
    if (cartItem) {  //it will only work when cart item is not 0 or null. if(any number except 0 is true) 
        cartItem -= 1;
        document.getElementById('print').innerHTML = cartItem;
    }
    else {
        document.getElementById('print').innerHTML = cartItem = 0;
    }
}
function resetCart() {   //Reset the cart items
    cartItem = 0;
    document.getElementById('print').innerHTML = `Reset successful👍`;
}
function showCart() {  //Shows total added items in cart
    if (cartItem != null) {
        document.getElementById('print').innerHTML = `Cart Item : ${cartItem}`;
    }
}

function PromptFunc() {   //To show a prompt when you press "Try it" button 
    let person = prompt("Please enter your name", "Harry Potter");
    if (person != null) {
        document.getElementById("printPrompt").innerHTML = "Hello " + person + "! How are you today?";
    }

}



function pic(a) {

    if (a==1) {   //Bulb On
        document.getElementById("mypic").src = 'https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940319kdxsp3rf0i.png';
    }
    if (a==0) {    //Bulb Off
        document.getElementById("mypic").src = 'https://toppng.com/uploads/preview/light-bulb-on-off-png-115539402943y50vxr5yi.png';
    }

}

let formPage = document.querySelector('.formpage');
let btn = document.querySelector('.butt');

btn.addEventListener('click', ()=>{
    formPage.classList.add('fk');
});


// function pic(a) {
//     var imageElement = document.getElementById("mypic");
//     switch (a) {
//         case 0:
//             imageElement.src = 'https://www.w3schools.com/js/pic_bulboff.gif';
//             break;
//         case 1:
//             imageElement.src = 'https://www.w3schools.com/js/pic_bulbon.gif';
//             break;
//         default:
//             // Handle any other cases here or leave it empty if not needed.
//     }
// }