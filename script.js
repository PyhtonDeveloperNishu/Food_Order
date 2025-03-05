let btn = document.querySelector(".order_Btn");
let image_con = document.querySelector(".img_con");

let burger = document.querySelector("#burger");
let fries = document.querySelector("#fries");
let drink = document.querySelector("#drink");



btn.addEventListener("click", () => {
    image_con.innerHTML = "";
    const myPromise = new Promise((resolve, reject) => {
        let randomTime = Math.floor(Math.random() * 1000);
        setTimeout(() => {
            resolve({ message: "success", time: randomTime });
        }, randomTime);
    });

    myPromise.then((response) => {
        console.log(response); // Logs success message and time
       
        let image = document.createElement("img");
        
        image.classList.add("img_con");
        if (burger.checked) { 
            image.src = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60";
        }else if(fries.checked){
            image.src = "https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        }else if(drink.checked){
             image.src = "https://images.unsplash.com/photo-1437418747212-8d9709afab22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJpbmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        }

        image_con.append(image);
    }).catch((error) => {
        console.error("Error:", error);
    });
});
