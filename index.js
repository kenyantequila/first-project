//  const getFetch = new request('http://localhost:3000/GOODS')
 
    
 
    // Get all buttons with the class "change"
    // const buttons = document.querySelectorAll('.change');
    // Add event listener to each button
//     buttons.forEach(button => {
//         button.addEventListener('mouseover', function() {
            
//             if (button.innerText === "Shop-now") {
//                 alert("Visit our online store to explore a wide range of products!");
//             } else if (button.innerText === "Make order") {
//                 alert("Place your order now to enjoy fast and reliable service!");
//             } else if (button.innerText === "Deliveries") {
//                 alert("We offer free shipping on all orders within the country!");
//             }
//         });
//     });

//    let btn = document.querySelectorAll('.buttons')
//    console.log(btn);
//    function onegood() {
//     const list = document.createElement('li')
//     list.innerHTML = `<img src="${good.image}">
//     <h4>${good.name}</h4>
//     <p>${good.description}</p>
//     <p>${good.price}</p>
    
    
//     `
//     document.getElementById('myshop').appendChild()
//    }






//     function goods (){
//         fetch(getFetch)
//         .then(response => response.json())
//         .then(data => data.forEach(good => function onegood()))
//     }







// Function to fetch data from db.json
function fetchData() {
    return fetch('db.json')
        .then(response => response.json())
        .then(data => data.GOODS)
        .catch(error => console.error('Error fetching data:', error));
}

// Function to display search results
function displayResults(results) {
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = ''; // Clear previous results

    if (results.length === 0) {
        const listItem = document.createElement('li');
        listItem.textContent = 'No results found';
        searchResults.appendChild(listItem);
    } else {
        results.forEach(result => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <h2>${result.name}</h2>
                <p>Description: ${result.description}</p>
                <p>Price: ${result.price}</p>
                <img src="${result.image}" alt="${result.name}">
            `;
            searchResults.appendChild(listItem);
        });
    }
}

// Function to perform search
function search(query) {
    fetchData()
        .then(data => {
            const results = data.filter(item =>
                item.name.toLowerCase().includes(query.toLowerCase()) ||
                item.description.toLowerCase().includes(query.toLowerCase())
            );
            displayResults(results);
        });
}

// Event listener for search input
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function() {
    const query = this.value.trim(); // Trim whitespace
    search(query);
});



