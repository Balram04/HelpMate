// Get cart data first - updated to use correct localStorage key
let cartData = JSON.parse(localStorage.getItem("helpmate_cart"));
if (cartData == null) {
    cartData = [];
}

// Calculate total price from cart items (more reliable than localStorage total)
let totalPrice = 0;
cartData.forEach(item => {
    let itemPrice = parseFloat(item.price) || 0;
    let quantity = parseInt(item.quantity) || 1;
    totalPrice += itemPrice * quantity;
});

// Payment calculation constants
const DELIVERY_FEE = 49;
const DISCOUNT = 150;
const TAX_RATE = 0.18; // 18% tax

// Calculate breakdown
let subtotal = totalPrice;
let deliveryFee = subtotal > 0 ? DELIVERY_FEE : 0; // No delivery fee for empty cart
let discount = subtotal >= 500 ? DISCOUNT : 0; // Apply discount only if subtotal >= ₹500
let taxableAmount = subtotal + deliveryFee - discount;
let tax = Math.round(taxableAmount * TAX_RATE);
let finalPrice = Math.max(0, taxableAmount + tax); // Ensure final price is not negative

// Update UI elements
document.getElementById("getTotal").innerText = "₹" + subtotal.toFixed(2);
document.getElementById("getFinal").innerText = "₹" + finalPrice.toFixed(2);

// Update additional payment summary elements if they exist
if (document.getElementById("subtotal")) {
    document.getElementById("subtotal").innerText = "₹" + subtotal.toFixed(2);
}
if (document.getElementById("deliveryFee")) {
    document.getElementById("deliveryFee").innerText = "₹" + deliveryFee.toFixed(2);
}
if (document.getElementById("discount")) {
    document.getElementById("discount").innerText = "₹" + discount.toFixed(2);
}
if (document.getElementById("tax")) {
    document.getElementById("tax").innerText = "₹" + tax.toFixed(2);
}

// Store updated totals in localStorage
localStorage.setItem("total", subtotal.toString());
localStorage.setItem("finalTotal", finalPrice.toString());
// Append cart products
let container = document.getElementById("products");
container.innerHTML = null;

// Function to recalculate and update totals
function updateTotals() {
    let newTotal = 0;
    cartData.forEach(item => {
        let itemPrice = parseFloat(item.price) || 0;
        let quantity = parseInt(item.quantity) || 1;
        newTotal += itemPrice * quantity;
    });
    
    let subtotal = newTotal;
    let deliveryFee = subtotal > 0 ? DELIVERY_FEE : 0;
    let discount = subtotal >= 500 ? DISCOUNT : 0;
    let taxableAmount = subtotal + deliveryFee - discount;
    let tax = Math.round(taxableAmount * TAX_RATE);
    let finalPrice = Math.max(0, taxableAmount + tax);
    
    document.getElementById("getTotal").innerText = "₹" + subtotal.toFixed(2);
    document.getElementById("getFinal").innerText = "₹" + finalPrice.toFixed(2);
    
    // Update other elements if they exist
    if (document.getElementById("subtotal")) {
        document.getElementById("subtotal").innerText = "₹" + subtotal.toFixed(2);
    }
    if (document.getElementById("deliveryFee")) {
        document.getElementById("deliveryFee").innerText = "₹" + deliveryFee.toFixed(2);
    }
    if (document.getElementById("discount")) {
        document.getElementById("discount").innerText = "₹" + discount.toFixed(2);
    }
    if (document.getElementById("tax")) {
        document.getElementById("tax").innerText = "₹" + tax.toFixed(2);
    }
    
    localStorage.setItem("total", subtotal.toString());
    localStorage.setItem("finalTotal", finalPrice.toString());
    localStorage.setItem("helpmate_cart", JSON.stringify(cartData));
}

cartData.forEach((element, index) => {
    let products = document.createElement("div");
    products.setAttribute("class", "separate p-4 bg-gray-800 shadow-md rounded-md flex space-x-4 items-center border border-gray-600");

    let productsImg = document.createElement("div");
    let image = document.createElement("img");
    
    // Use image_url if available, otherwise use a default salon service image
    let imageUrl = element.image_url || "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1646814042922-25f8f1.jpeg";
    
    image.setAttribute("src", imageUrl);
    image.setAttribute("class", "w-20 h-20 object-cover rounded-md");

    let productsTitle = document.createElement("div");
    productsTitle.setAttribute("class", "flex-1");

    let category = document.createElement("h3");
    category.innerText = element.category;
    category.setAttribute("class", "text-sm text-blue-400");

    let brand = document.createElement("h1");
    brand.innerText = element.name;
    brand.setAttribute("class", "text-lg font-semibold text-white");

    // Price calculation with quantity
    let quantity = parseInt(element.quantity) || 1;
    let unitPrice = parseFloat(element.price) || 0;
    let totalItemPrice = unitPrice * quantity;

    let price = document.createElement("h3");
    price.innerText = "₹" + unitPrice.toFixed(2) + (quantity > 1 ? ` x ${quantity} = ₹${totalItemPrice.toFixed(2)}` : "");
    price.setAttribute("class", "text-lg font-semibold text-green-400");

    // Quantity controls
    let quantityDiv = document.createElement("div");
    quantityDiv.setAttribute("class", "flex items-center space-x-2 my-2");
    
    let quantityLabel = document.createElement("span");
    quantityLabel.innerText = "Qty: ";
    quantityLabel.setAttribute("class", "text-sm text-gray-400");
    
    let decreaseBtn = document.createElement("button");
    decreaseBtn.innerText = "-";
    decreaseBtn.setAttribute("class", "bg-gray-600 hover:bg-gray-500 text-white w-8 h-8 rounded-full flex items-center justify-center");
    decreaseBtn.addEventListener("click", function () {
        if (quantity > 1) {
            cartData[index].quantity = quantity - 1;
            updateTotals();
            location.reload();
        }
    });
    
    let quantitySpan = document.createElement("span");
    quantitySpan.innerText = quantity;
    quantitySpan.setAttribute("class", "font-semibold text-white mx-2");
    
    let increaseBtn = document.createElement("button");
    increaseBtn.innerText = "+";
    increaseBtn.setAttribute("class", "bg-blue-600 hover:bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center");
    increaseBtn.addEventListener("click", function () {
        cartData[index].quantity = quantity + 1;
        updateTotals();
        location.reload();
    });
    
    quantityDiv.append(quantityLabel, decreaseBtn, quantitySpan, increaseBtn);

    let rating = document.createElement("p");
    rating.innerText = "Rating: " + (element.rating || "N/A");
    rating.setAttribute("class", "text-sm text-gray-400");

    let time = document.createElement("p");
    time.innerText = "Delivery: " + (element.time || "Standard");
    time.setAttribute("class", "text-sm text-gray-400");

    let discount = document.createElement("h4");
    if (element.discount && element.discount !== "0%" && element.discount !== "0") {
        discount.innerText = "Discount: " + element.discount;
        discount.setAttribute("class", "text-sm text-green-400");
    } else {
        discount.style.display = "none";
    }

    let hr = document.createElement("hr");
    hr.setAttribute("class", "my-2 border-gray-600");
    
    let detail = document.createElement("p");
    detail.innerText = element.description || "No description available";
    detail.setAttribute("class", "text-sm text-gray-300");

    // Action buttons container
    let actionButtons = document.createElement("div");
    actionButtons.setAttribute("class", "flex flex-col space-y-2");

    // Remove product button
    let removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";
    removeBtn.setAttribute("class", "bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-500 transition-colors");
    removeBtn.addEventListener("click", function () {
        if (confirm("Are you sure you want to remove this item?")) {
            cartData.splice(index, 1);
            updateTotals();
            location.reload();
        }
    });

    actionButtons.append(removeBtn);

    productsImg.append(image);
    productsTitle.append(category, brand, price, quantityDiv, rating, time, discount, hr, detail);
    products.append(productsImg, productsTitle, actionButtons);

    container.append(products);
});

// Display empty cart message if no items
if (cartData.length === 0) {
    let emptyMessage = document.createElement("div");
    emptyMessage.setAttribute("class", "text-center py-8");
    emptyMessage.innerHTML = `
        <div class="text-gray-400">
            <h3 class="text-xl font-semibold mb-2 text-white">Your cart is empty</h3>
            <p>Add some items to your cart to see them here</p>
        </div>
    `;
    container.append(emptyMessage);
}
