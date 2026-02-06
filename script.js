// Dummy Product Data (Nigerian Context)
const products = [
    { id: 1, name: "Emzor Paracetamol", desc: "Pain relief tablets (20 pack)", price: 300, img: "https://www.emzorpharma.com/wp-content/uploads/2019/11/08-Paracetamol-96-WorldCup-Pack-View-01.png" },
    { id: 2, name: "Vitamin C (1000mg)", desc: "Immune booster", price: 1500, img: "https://top-uppharmacy.com/wp-content/uploads/2023/07/Reedy-Vitamin-C-with-Zinc.jpg" },
    { id: 3, name: "Coartem 80/480", desc: "Malaria treatment course", price: 2800, img: "https://top-uppharmacy.com/wp-content/uploads/2024/02/Coartem-Original-Tablets-80-480mg.jpg" },
    { id: 4, name: "Dettol Antiseptic", desc: "Disinfectant Liquid 500ml", price: 3200, img: "https://betapharm.ng/wp-content/uploads/2024/10/images-18-2.jpeg" },
    { id: 5, name: "Face Mask", desc: "Protective respiratory mask", price: 500, img: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/30/3421014/1.jpg?5288" },
    { id: 6, name: "Blood Pressure Monitor", desc: "Digital Omron Kit", price: 25000, img: "https://commercefiles.lon1.cdn.digitaloceanspaces.com/product/2024-08-07-66b365653f105.webp" },
    { id: 7, name: "Gestid Suspension", desc: "Heartburn relief", price: 1200, img: "https://medecify.com/wp-content/uploads/2024/11/DC-B-D-EF-B-D-C-E-A-F-3000x3655.jpeg" },
    { id: 8, name: "Multivitamin Syrup", desc: "For kids appetite", price: 1800, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcDQnDFBnUDegxl0j92P0YR3YIiSbRQMNy7A&s" },
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