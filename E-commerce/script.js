fetch('https://fakestoreapi.com/products').then((data)=>{
    return data.json();
}).then((objData)=>{
    let product1 ="";
    objData.map((info)=>{
       product1+=`
       <div class="cards">
            <h1 class="title">${info.title}</h1>
            <img src=${info.image} alt="img">
            <p class="Category">${info.category}</p>
            <p class="Description">${info.description}</p>
            <p class="price">${info.price}</p>
        </div>
       ` 
    });
    document.getElementById("Container").innerHTML=product1;
}).catch((err)=>{
    console.log(Error)
})