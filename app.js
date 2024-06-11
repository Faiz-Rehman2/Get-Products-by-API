const div = document.querySelector('.cardItems');

// Fetch and display all items initially
axios('https://fakestoreapi.com/products')
    .then((response) => {
        displayItems(response.data);
    })
    .catch((err) => {
        console.error(err);
    });

// Function to display items
function displayItems(items) {
    div.innerHTML = '';
    items.forEach((item) => {
        div.innerHTML += `
            <div class="cardBox">
                <img src="${item.image}" alt="${item.title}">
                <h2>Category: ${item.category}</h2>
                <h3>Price: $${item.price}</h3>
                <button id="addToCart">Add to Cart</button>
            </div>
        `;
    });
}

// Filter items based on category
function filteredItem(btn) {
    const category = btn.innerHTML.toLowerCase();
    axios('https://fakestoreapi.com/products')
        .then((response) => {
            const filteredItems = response.data.filter(item => item.category.toLowerCase() === category);
            displayItems(filteredItems);
        })
        .catch((err) => {
            console.error(err);
        });
}

// Display all items when "All Items" button is clicked
function item() {
    axios('https://fakestoreapi.com/products')
        .then((response) => {
            displayItems(response.data);
        })
        .catch((err) => {
            console.error(err);
        });
}
