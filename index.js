// Get all buttons with the class "change"
const buttons = document.querySelectorAll('.change');
// Add event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', function () {

        if (button.innerText === "Shop-now") {
            alert("Visit our online store to explore a wide range of products!");
            alert("dont miss the chance");
        } else if (button.innerText === "Make order") {
            alert("Place your order now to enjoy fast and reliable service!");
        } else if (button.innerText === "Deliveries") {
            alert("We offer free shipping on all orders within the country!");
        }
    });
});

function displayGood(good) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
            <img src="${good.image}" width = "350px">
            <h4>${good.name}</h4>
            <p>${good.description}</p>
            <p>${good.price}</p>
            <p>sales-person:${good.merchant}</p>
            <p>id-number:${good.idnumber}</p>
            
        `;
    document.getElementById('myshop').appendChild(listItem);
}

function fetchGoods() {
    fetch('http://localhost:3000/GOODS')
        .then(response => response.json())
        .then(data => data.forEach(good => displayGood(good)))
        .catch(error => console.error('Error fetching goods:', error));
}

function initialize() {
    fetchGoods();
}

initialize();
// function handleSearchInput() {
//     const searchInput = document.getElementById('searchInput').value;
//     searchGoods(searchInput);
// }

// document.getElementById('searchInput').addEventListener('input', handleSearchInput);

// initialize();