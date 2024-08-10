let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    alert(`${productName} has been added to your cart.`);
    console.log(cart);
}

// You can call this function on "Add to Cart" button clicks.
