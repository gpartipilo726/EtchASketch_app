const container = document.querySelector("#container");
const newGridBtn = document.querySelector("#newGrid");
const resetBtn = document.querySelector("#reset");
const rainbowBtn = document.querySelector("#rainbow");
const blackBtn = document.querySelector("#black");

document.addEventListener("DOMContentLoaded", () =>{
   
    container.style.gridTemplateColumns = "repeat(50,1fr)";
    container.style.gridTemplaterows = "repeat(50,1fr)";
   
    for(let i = 0; i<2500; i++){
        const box = document.createElement("div");

        container.insertAdjacentElement("beforeend", box);
        box.style.border = "1px solid black";

        box.addEventListener("mouseover", ()=>{
            box.style.backgroundColor = 'black';

        });
        
    }

});

newGridBtn.addEventListener("click", () => {
    container.textContent = '';

    let gridSize = getPrompt();

    container.style.gridTemplateColumns = `repeat(${gridSize},1fr)`;
    container.style.gridTemplaterows = `repeat(${gridSize},1fr)`;
   
    let numSquares = gridSize * gridSize;

    for(let i = 0; i<numSquares; i++){
        const box = document.createElement("div");
        container.insertAdjacentElement("beforeend", box);
        box.style.border = "1px solid black";

        box.addEventListener("mouseover", ()=>{
            box.style.backgroundColor = 'black';

        });
        
    }

    
});


rainbowBtn.addEventListener("click", () => {
    const boxes = document.querySelectorAll("#container div")
    boxes.forEach((box) =>{
        
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = getRandomColor();

        })


    });
});

blackBtn.addEventListener("click", () => {
    const boxes = document.querySelectorAll("#container div")
    boxes.forEach((box) =>{
        
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = 'black';

        })


    });
});

resetBtn.addEventListener("click", () =>{
    const boxes = document.querySelectorAll("#container div")
    boxes.forEach((box) =>{
        
        box.style.backgroundColor = 'white';
    });
});

//TODO: get this to work
let getRandomColor = () => {
    let r = 0;
    let g = 0;
    let b = 0;

    r = parseInt(Math.random()*255);
    g = parseInt(Math.random()*255);
    b = parseInt(Math.random()*255);

    return `rgb(${r},${g},${b})`;

};
console.log(getRandomColor());

let getPrompt = () => {
    
    
    let gridSize = parseInt(prompt("Please enter Grid size (0 to 100):"));

    if (gridSize < 0 || gridSize > 100){
        alert("Invalid input. Values must be between 0 and 100. Please try again.")
 
    } else if(!gridSize){
        console.log(gridSize);
        alert("Invalid Input. Please enter only number values that are between 0 and 100.");
    }
    else {
        return parseInt(gridSize);
    }
    return getPrompt();

}