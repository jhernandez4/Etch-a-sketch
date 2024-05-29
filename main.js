const containerGrid = document.createElement("div");
containerGrid.classList.add("gridContainer");
for(let i = 0; i < 16; i++){
    const squareContainer = document.createElement("div");
    squareContainer.classList.add("squareContainer");
    for(let j = 0; j < 16; j++){
        const square = document.createElement("div");
        square.classList.add("square")
        squareContainer.appendChild(square);
    }
    containerGrid.appendChild(squareContainer);
}

document.body.appendChild(containerGrid);