// Sample cart array (your actual implementation may differ)
let cart = [
  { id: 1, name: "Product A", price: 200 },
  { id: 2, name: "Product B", price: 150 },
  // ...
];

// Function to render cart products and total
function renderCart() {
  const productsContainer = document.getElementById("products");
  productsContainer.innerHTML = "";

  let totalPrice = 0;

  cart.forEach((product, index) => {
    totalPrice += product.price;

    // Create product element (simplified)
    const productDiv = document.createElement("div");
    productDiv.className = "product-item flex justify-between items-center bg-white p-4 rounded shadow";

    productDiv.innerHTML = `
      <span>${product.name}</span>
      <span>₹${product.price}</span>
      <button class="remove-btn bg-red-500 text-white px-3 py-1 rounded">Remove</button>
    `;

    // Add remove button event listener
    productDiv.querySelector(".remove-btn").addEventListener("click", () => {
      removeProduct(index);
    });

    productsContainer.appendChild(productDiv);
  });

  // Update total price in the payment summary
  document.getElementById("getTotal").textContent = `₹${totalPrice}`;
  document.getElementById("getFinal").textContent = `₹${totalPrice - 75 - 75 + 49}`; // adjust discounts & taxes as needed
}

// Remove product from cart and re-render
function removeProduct(index) {
  cart.splice(index, 1);  // remove from cart array
  renderCart();           // re-render products and totals
}

// Initial render
renderCart();
