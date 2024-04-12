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