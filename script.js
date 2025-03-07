let btn = document.querySelector(".order_Btn");
let image_con = document.querySelector(".img_con");
let burger = document.querySelector("#burger");
let fries = document.querySelector("#fries"); 
let body = document.querySelector("body")

// when there is no order click in image_con
let  noOrder = document.createElement("h1");
noOrder.classList.add("no-order");
noOrder.innerText="See Your Order Here"
image_con.prepend(noOrder);

// This is for show order id 
let orderId = document.createElement("h3");
orderId.classList.add("orderId")

// this is for loading elment
let loader = document.createElement("div");
loader.classList.add("loader");


// click order btn and show your order and id number 
btn.addEventListener("click", () => {
    noOrder.innerHTML="";
    image_con.innerHTML = "";
    orderId.innerHTML=""  
    if(burger.checked || fries.checked || drink.checked)  {
        loader.style.display="block" // show loader
        image_con.append(loader);
    }
    let randomTime = Math.floor(Math.random() * 3000);
    const myPromise = new Promise((resolve, reject) => { 
        setTimeout(() => {
            loader.style.display="none";  // hide loader
            resolve()
        }, randomTime);
    });    
    myPromise.then((response) => {       // console.log(response); // Logs success message an time
        let image = document.createElement("img");
        image.classList.add("img_con");
        // give order id number on UI
        orderId.innerText=`Order ID : ${randomTime}`;

        if (burger.checked) { 
            image.src = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60";
        }else if(fries.checked){
            image.src = "https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        }else if(drink.checked){
             image.src = "https://images.unsplash.com/photo-1437418747212-8d9709afab22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJpbmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        }
        body.append(orderId);
        image_con.append(image);
      
    }).catch((error) => {
        console.error("Error:", error);
    });
});
