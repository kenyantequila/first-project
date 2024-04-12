//  const getFetch = new request('http://localhost:3000/GOODS')
 
    
 
    //  Get all buttons with the class "change"
    //  const buttons = document.querySelectorAll('.change');
    // Add event listener to each button
      buttons.forEach(button => {
         button.addEventListener('mouseover', function() {
            
             if (button.innerText === "Shop-now") {
                alert("Visit our online store to explore a wide range of products!");
                            ("all are welcomed")
            } else if (button.innerText === "Make order") {
                 alert("Place your order now to enjoy fast and reliable service!");
            } else if (button.innerText === "Deliveries") {
                 alert("We offer free shipping on all orders within the country!");
              }
         });
     });

//    let btn = document.querySelectorAll('.buttons')
//    console.log(btn);
//    function onegood(good) {
//     const list = document.createElement('li')
//     list.innerHTML = `<img src="${good.image}">
//     <h4>${good.name}</h4>
//     <p>${good.description}</p>
//     <p>${good.price}</p>
    
    
//     `
//     document.getElementById('myshop').appendChild(list)
//    }






//     function goods (){
//         fetch(getFetch)
//         .then(response => response.json())
//         .then(data => data.forEach(good => onegood(good)))
//     }

//     function initialize(){
//         goods();
//     }
//     initialize();


function displayGood(good) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <img src="${good.image}" alt="${good.name}">
        <h4>${good.name}</h4>
        <p>${good.description}</p>
        <p>${good.price}</p>
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








