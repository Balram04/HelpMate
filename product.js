let productApi = [
  {
    category: "PACKAGE",
    name: "Haircut + Beard Grooming + Realaxing Head Massage",
    rating: "4.77(1.3M)",
    price: 499,
    image_url: "https://media.istockphoto.com/id/1154666732/photo/hairdresser-bleaching-hair-of-a-young-adult-man.jpg?s=612x612&w=0&k=20&c=yzW29xOTz4yIZEQpCKtD6R9nrkh3macvs0FB_DkhzuQ=",
    time: "1 hrs 5 mins",
    discount: " ₹50% off above 499",
    description: "Men's Haircut,Beared Shape & Style,10 min Head Massage"
  },
  {
    category: "PACKAGE",
    name: "Haircut + Hair Color ",
    rating: "4.8(1.3M)",
    price: 549,
    image_url: "https://media.istockphoto.com/id/1251257312/photo/late-teen-boy-in-hair-salon-waiting-for-hair-dye-to-dry.jpg?s=612x612&w=0&k=20&c=hi7Pd3ocW36Iuu43NSskorcibiy_kEMMXOOi7WrkfUM=",
    time: "1 hrs",
    discount: "",
    description: "Garnier Color Naturals, Men's Haircut"
  },
  {
    category: "HAIRCUT",
    name: "Haircut for Men",
    rating: "4.77(1.3M)",
    price: 249,
    image_url: "men haircut.jpg",
    time: "30 mins",
    discount: "",
    description: "Suitable hair cut as per the face shape & preference, Pre-service consultation & proper cleanup after the service"
  },
  {
    category: "HAIRCUT",
    name: "Kid's Hair Cut",
    rating: "4.79(1.8M)",
    price: 249,
    image_url: "https://img.freepik.com/free-photo/children-hairdresser-cutting-little-boy-barbershop_155003-20323.jpg?w=740&t=st=1671270512~exp=1671271112~hmac=89d503194a337aa48ef99604eb1d983f3f8694c031ae0f6e9d7641315a9671db",
    time: "30 mins",
    discount: " ₹50% off above 499",
    description: "Suitable hair cut as per the face shape & preference, We send professional who are comfortable with working with kids"
  },
  {
    category: "HAIR COLOR",
    name: "Hair Color With Product",
    rating: "4.82(4.5k)",
    price: 299,
    image_url: "https://www.shutterstock.com/image-photo/woman-hairdresser-applying-dye-man-600w-1282948216.jpg",
    time: "45 mins",
    discount: "",
    description: "Ammona-free products for best result, Top brands available-Garnier & Loreal"
  },
  {
    category: "HAIR COLOR",
    name: "Haircut + Hair Color (Garnier)",
    rating: "4.80(1.1M)",
    price: 549,
    image_url: "https://www.shutterstock.com/shutterstock/photos/2123151674/display_1500/stock-photo-professional-barber-dying-male-client-hair-in-barbershop-hairdresser-applies-dye-to-the-client-s-2123151674.jpg",
    time: " 1h 45 mins",
    discount: " ₹50% off above 999",
    description: "Mess-free & unniform apptication for desired results, We provide Loreal & Garnier hair colour brands"
  },
  {
    category: "HEAD MASSAGE",
    name: "Realaxing Head Massage",
    rating: "4.79(289k)",
    price: 150,
    image_url: "https://www.shutterstock.com/shutterstock/photos/1548889982/display_1500/stock-photo-close-up-of-man-getting-head-massage-and-relaxing-with-eyes-closed-at-the-spa-1548889982.jpg",
    time: " 30 mins",
    discount: "",
    description: "Relaxing oil massage to relieve stress & promote hair growth"
  },
  {
    category: "HEAD MASSAGE",
    name: "Neck & Shoulder Massage",
    rating: "4.79(200k)",
    price: 200,
    image_url: "https://www.shutterstock.com/shutterstock/photos/205436743/display_1500/stock-photo-relaxed-man-getting-thai-massage-for-his-back-in-a-day-spa-205436743.jpg",
    time: " 20 mins",
    discount: "",
    description: "Relaxing oil massage to treat sore / tense muscles & relieve stress"
  }
]

// Cart utility functions
function updateCartCount() {
  const cartCount = document.getElementById('cartCount');
  if (cartCount) {
    const cart = JSON.parse(localStorage.getItem('helpmate_cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Add animation effect
    cartCount.style.transform = 'scale(1.2)';
    setTimeout(() => {
      cartCount.style.transform = 'scale(1)';
    }, 200);
  }
}

function showToast(message) {
  // Create toast notification
  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: linear-gradient(135deg, #10b981, #059669);
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    font-weight: 600;
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
    z-index: 10000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
  `;
  
  document.body.appendChild(toast);
  
  // Animate in
  setTimeout(() => {
    toast.style.transform = 'translateX(0)';
  }, 100);
  
  // Remove after 3 seconds
  setTimeout(() => {
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (document.body.contains(toast)) {
        document.body.removeChild(toast);
      }
    }, 300);
  }, 3000);
}

let container = document.getElementById("product");
let goToCart = document.getElementById("discount-banner");
let package = document.getElementById("pkg");

package.addEventListener("click", () => {
  let filterData = productApi.filter((element) => {
    if (element.category === "PACKAGE") {
      return true;
    } else {
      return false;
    }
  });
  displayAll(filterData);
});

let hrCut = document.getElementById("hrct");
hrCut.addEventListener("click", () => {
  let filterData = productApi.filter((element) => {
    if (element.category === "HAIRCUT") {
      return true;
    } else {
      return false;
    }
  });
  displayAll(filterData);
});

let hrColor = document.getElementById("hrclr");
hrColor.addEventListener("click", () => {
  let filterData = productApi.filter((element) => {
    if (element.category === "HAIR COLOR") {
      return true;
    } else {
      return false;
    }
  });
  displayAll(filterData);
});

let massage = document.getElementById("msg");
massage.addEventListener("click", () => {
  let filterData = productApi.filter((element) => {
    if (element.category === "HEAD MASSAGE") {
      return true;
    } else {
      return false;
    }
  });
  displayAll(filterData);
});

displayAll(productApi); // call dom

// Create DOM function
function displayAll(data) {
  container.innerHTML = null;
  data.forEach((element) => {
    let products = document.createElement("div");
    products.setAttribute("class", "seperate");

    let productsTitle = document.createElement("div"); // first div
    let productsImg = document.createElement("div");  // second div

    let image = document.createElement("img");
    image.setAttribute("src", element.image_url);

    let category = document.createElement("h3");
    category.innerText = element.category;

    let brand = document.createElement("h1");
    brand.innerText = element.name;

    let price = document.createElement("h3");
    price.innerText = "₹ " + element.price;

    let rateing = document.createElement("p");
    rateing.innerText = element.rating;

    let time = document.createElement("p");
    time.innerText = element.time;

    let discount = document.createElement("h4");
    discount.innerText = element.discount;

    let hr = document.createElement("hr");

    let detail = document.createElement("p");
    detail.innerText = element.description;

    // Add button functionality
    let addBtn = document.createElement("button");
    addBtn.setAttribute("class", "add-btn");
    addBtn.innerText = "Add to Cart";

    // Check if item is already in cart and update button accordingly
    let currentCart = JSON.parse(localStorage.getItem("helpmate_cart")) || [];
    let isInCart = currentCart.find(item => item.name === element.name);
    
    if (isInCart) {
      addBtn.innerText = `In Cart (${isInCart.quantity})`;
      addBtn.style.background = "linear-gradient(135deg, #ef4444, #dc2626)";
    }

    addBtn.addEventListener("click", () => {
      // Get current cart data (using the same key as in product.html)
      let cart = JSON.parse(localStorage.getItem("helpmate_cart")) || [];
      
      // Check if item already exists in cart
      const existingItem = cart.find(item => item.name === element.name);
      
      if (existingItem) {
        // Increase quantity if already in cart
        existingItem.quantity += 1;
        addBtn.innerText = `In Cart (${existingItem.quantity})`;
      } else {
        // Add new item to cart
        cart.push({
          id: Date.now(),
          category: element.category,
          name: element.name,
          price: element.price,
          quantity: 1,
          image_url: element.image_url,
          time: element.time,
          description: element.description
        });
        addBtn.innerText = "In Cart (1)";
        addBtn.style.background = "linear-gradient(135deg, #ef4444, #dc2626)";
      }

      // Save updated cart data to localStorage
      localStorage.setItem("helpmate_cart", JSON.stringify(cart));
      
      // Update cart count in navbar
      updateCartCount();
      
      // Show success toast
      showToast(`${element.name} added to cart!`);
    });

    productsImg.append(image, addBtn);
    productsTitle.append(category, brand, price, rateing, time, discount, hr, detail);
    products.append(productsTitle, productsImg);
    container.append(products);
  });
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', function() {
  updateCartCount();
});
