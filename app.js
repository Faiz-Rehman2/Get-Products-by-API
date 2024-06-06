const div = document.querySelector('div');
axios('https://fakestoreapi.com/products')
.then((res)=>{
    console.log(res.data)
    res.data.map((item)=>{
        div.innerHTML +=`
        <img width="300" src="${item.image}" alt="product.image"/>
        <h1>Title:${item.category}</h1>
        <h1>Price: ${item.price}</h1>
        <button>Add to Cart</button>
        </div>
        `
     })
}).catch((err)=>{
    console.log(err);
})



function filter(btn){
    axios('https://fakestoreapi.com/products')
    .then(responce => {
        div.innerHTML = ''
        console.log(btn.innerHTML)
        let filterdItems = responce.data.filter(item => item.category === btn.innerHTML)
        console.log(filterdItem)
        filterdItems.map(item => {
            div.innerHTML += `
            <img width='300' height='300' src="${item.image}" alt="...">
            <h2">Category : ${item.category}</h2>
            <h2>Price : $${item.price}</h2>
            <button>Add To Card</button>
            `
        })
    })
    .catch(error => {
        console.log(error);
    })
}   

axios('https://fakestoreapi.com/products')
    .then(responce => {
        div.innerHTML = ''
        console.log(btn.innerHTML)
    
    res.data.filter(item =>item.category === btn.innerHTML).map(item =>{
        div.innerHTML += `
        
        <h1>Product name: ${item.brand} ${item.name}</h1>
        <h1>Category: ${item.category}</h1>
        <h1>Price: ${item.price}</h1>
        
        `
        })})
}


function item(){
    div.innerHTML = ''
    products.map(item => {

        div.innerHTML += `
       
        <h1>Product name: ${item.brand} ${item.name}</h1>
        <h1>Category: ${item.category}</h1>
        <h1>Price: ${item.price}</h1>
        
        `
    
    })
}
