// Array of product objects
let products = [
    { name: "Wireless Mouse", category: "Electronics", price: 799 },
    { name: "Bluetooth Speaker", category: "Electronics", price: 1999 },
    { name: "USB Cable", category: "Electronics", price: 199 },
    { name: "Notebook Pack", category: "Stationery", price: 249 },
    { name: "Gel Pen Set", category: "Stationery", price: 99 },
    { name: "Running Shoes", category: "Fashion", price: 2499 },
    { name: "Cotton T-Shirt", category: "Fashion", price: 599 },
    { name: "Backpack", category: "Fashion", price: 1299 }
];

// Get input elements
let search = document.getElementById("search");
let category = document.getElementById("category");
let productList = document.getElementById("productList");
let count = document.getElementById("count");

// Function to display products
function displayProducts() {
    let searchText = search.value.toLowerCase();
    let selectedCategory = category.value;

    // Filter products
    let filteredProducts = products.filter(function(product) {
        return product.name.toLowerCase().includes(searchText) &&
        (selectedCategory === "All" || product.category === selectedCategory);
    });

    // Display count
    count.textContent = "Showing " + filteredProducts.length +
        " of " + products.length + " products";

    // Clear previous products
    productList.innerHTML = "";

    if (filteredProducts.length === 0) {
        productList.innerHTML = "<p>No products found.</p>";
        return;
    }

    // Display each product
    filteredProducts.forEach(function(product) {
        productList.innerHTML += `
            <div class="card">
                <h3>${product.name}</h3>
                <span class="tag">${product.category}</span>
                <p class="price">Rs. ${product.price}</p>
            </div>
        `;
    });
}

// Search event
search.addEventListener("input", displayProducts);

// Category change event
category.addEventListener("change", displayProducts);

// Initial display
displayProducts();