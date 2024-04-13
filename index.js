const buttons = document.querySelectorAll('.change');
buttons.forEach(button => {
    button.addEventListener('click', function () {

        if (button.innerText === "Shop-now") {
            alert("Visit our store to explore a wide range of products!");
            alert("dont miss the chance to shop with us not forgetting {mapema ndio best}");
        } else if (button.innerText === "Make order") {
            alert("Place your order now to enjoy fast and reliable service!");
            alert("You can make your order through our new website or you can also contact us using the contact form");
        } else if (button.innerText === "Deliveries") {
            alert("We offer shipping on all orders within the country!");
            alert("We deliver to our customers doorstep without having to choose");
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
            <button>buy</button> <button>order</button>
            
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
document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', function () {

        if (button.innerText === "services") {
            alert("We offer a wide range of services to our customers. We tend to provide our customers with special services unlike others. Here we don't judge either poor or rich!");
        } else if (button.innerText === "payment method") {
            alert("Here at Dubai shopping, we have decided not to be specific with the payment method. We let our customers choose what they like, either using cash, paying using their phones, or even cards!");
        } else if (button.innerText === "transparency") {
            alert("Transparency is one of our core values. We believe in providing clear and honest information to our customers.");
        } else if (button.innerText === "discipline") {
            alert("We maintain discipline in our operations to ensure smooth and efficient services to our customers.We also have a policy to ensure that some of unserious poeple ordering items online jokingly are also not forgot,we punish them by fining them acccording to the goods they offer");
        } else if (button.innerText === "buy") {
            alert("Bought");
        }
    });
});

