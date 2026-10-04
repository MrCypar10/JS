//on double click on heading it should become italic
    let h3 = document.querySelector("h3");
    h3.addEventListener("dblclick", () => {
        h3.style.fontStyle="italic";
    });

//when mouse goes over the image it should change
    let img = document.querySelector("img");
    img.addEventListener("mouseover",()=>{
        img.src="https://images.unsplash.com/photo-1788790989714-7c89ab5ea54b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8"
    })

//when mouse goes out the image it should again change
    img.addEventListener("mouseout",()=>{
        img.src="https://images.unsplash.com/photo-1790874772637-7e5558978cce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D"
    })