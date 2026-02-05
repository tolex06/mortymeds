// Dummy Product Data (Nigerian Context)
const products = [
    { id: 1, name: "Emzor Paracetamol", desc: "Pain relief tablets (20 pack)", price: 300, img: "https://via.placeholder.com/150?text=Paracetamol" },
    { id: 2, name: "Vitamin C (1000mg)", desc: "Immune booster", price: 1500, img: "https://via.placeholder.com/150?text=Vitamin+C" },
    { id: 3, name: "Coartem 80/480", desc: "Malaria treatment course", price: 2800, img: "https://via.placeholder.com/150?text=Coartem" },
    { id: 4, name: "Dettol Antiseptic", desc: "Disinfectant Liquid 500ml", price: 3200, img: "https://via.placeholder.com/150?text=Dettol" },
    { id: 5, name: "N95 Face Mask", desc: "Protective respiratory mask", price: 500, img: "https://via.placeholder.com/150?text=Mask" },
    { id: 6, name: "Blood Pressure Monitor", desc: "Digital Omron Kit", price: 25000, img: "https://via.placeholder.com/150?text=BP+Monitor" },
    { id: 7, name: "Gestid Suspension", desc: "Heartburn relief", price: 1200, img: "https://via.placeholder.com/150?text=Gestid" },
    { id: 8, name: "Multivitamin Syrup", desc: "For kids appetite", price: 1800, img: "https://via.placeholder.com/150?text=Syrup" },
];

// Load Products
const container = document.getElementById('productContainer');

function renderProducts() {
    container.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="prod-img">
                <img src="${product.img}" alt="${product.name}">
            </div>
            <div class="prod-title">${product.name}</div>
            <div class="prod-desc">${product.desc}</div>
            <div class="prod-footer">
                <div class="price">₦${product.price.toLocaleString()}</div>
                <button class="add-btn" onclick="addToCart()">Add</button>
            </div>
        </div>
    `).join('');
}

// Initialize
renderProducts();

// Cart Logic
let cartItems = 0;
function addToCart() {
    cartItems++;
    document.getElementById('cartCount').innerText = cartItems;
    showToast();
}

// Toast Notification
function showToast() {
    const x = document.getElementById("toast");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

// Modal Logic
const modal = document.getElementById("uploadModal");

function openUploadModal() {
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

// Close modal if user clicks outside box
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Mobile Menu Placeholder
function toggleMenu() {
    // In a real app, this would slide out a sidebar
    alert("Mobile menu clicked! (Implementation would go here)");
}