// cont btn = document.getElementsByTagName('')
fetch('http://localhost:3000/GOODS')
.then(response => response.json())
.then(data => {
    data.forEach(goods =>{
        const list = document.createElement("div");
        dispatchEvent.className = "goods";
        div.innerHTML = `
        <img src"${goods.photo}"/>
        <h3>${goods.name}</h3>
        <p>${goods.price}</p>
        <p>${goods.description}</p>
        <button id ="press">BUY-NOW</button>`;
        goods.appendChild(div);
    
    })
})
.catch(error => console.error('Error fetching data;', error));
const press = document.getElementById('press');
press.addEventListener("click",() => {
    })
    function scrollToAbout(){
        contain.addEventListener("onclick",() => {

        });

    }
// const buttons = document.querySelectorAll('.change');

    // Add event listener to each button
    // buttons.forEach(button => {
    //     button.addEventListener('click', function() {
            // Do something when the button is clicked
    //         alert('Button clicked: ' + button.innerText);
    //     });
    // });
  
    // Get all buttons with the class "change"
    const buttons = document.querySelectorAll('.change');
    // Add event listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            
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

   let btn = document.querySelectorAll('.buttons')
   console.log(btn);
    









