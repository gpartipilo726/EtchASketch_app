const container = document.querySelector("#container");

document.addEventListener("DOMContentLoaded", () =>{

    for(let i = 0; i<256; i++){
        const box = document.createElement("div");
        box.setAttribute("class","box");
        container.appendChild(box);
        box.addEventListener("mouseover", ()=>{
            box.style.backgroundColor = 'red';

        });
        
    }



});
