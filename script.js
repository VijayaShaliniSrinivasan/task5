let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'PANNER BUTTER MASALA',
        image: '1.jpg',
        price: 1000
    },
    {
        id: 2,
        name: 'PANIYARAM',
        image: '2.jpg',
        price: 120
    },
    {
        id: 3,
        name: 'UPMAA',
        image: '3.jpg',
        price: 220
    },
    {
        id: 4,
        name: 'VARIETY RICE',
        image: '4.jpg',
        price: 250
    },
    {
        id: 5,
        name: 'FULL MEALS',
        image: '5.jpg',
        price: 400
    },
    {
        id: 6,
        name: 'VADAI',
        image: '6.jpg',
        price: 70
    },
    {
        id: 7,
        name: 'RAVA IDLY',
        image: '7.jpg',
        price: 150
    },
    {
        id: 8,
        name: 'PASTA',
        image: '8.jpg',
        price: 500
    },
    {
        id: 9,
        name: 'BURGER',
        image: '9.jpg',
        price: 300
    },
    {
        id: 10,
        name: 'CUTLET',
        image: '10.jpg',
        price: 100
    },
    {
        id: 11,
        name: 'POORI',
        image: '11.jpg',
        price: 200
    },
    {
        id: 12,
        name: 'DOSA',
        image: '12.jpg',
        price: 120
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCart(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCart(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
