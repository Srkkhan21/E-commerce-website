// script.js

let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    alert(`${productName} has been added to your cart.`);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceDisplay = document.getElementById('total-price');
    cartItemsList.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(li);
        totalPrice += item.price;
    });

    totalPriceDisplay.textContent = `$${totalPrice.toFixed(2)}`;
}

function processCheckout() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    if (name && email && address) {
        alert(`Thank you, ${name}! Your order has been placed.`);
        window.location.href = 'thankyou.html'; // Redirect to thank you page
        return false; // Prevent default form submission
    } else {
        alert('Please fill in all fields.');
        return false; // Prevent default form submission
    }
}
