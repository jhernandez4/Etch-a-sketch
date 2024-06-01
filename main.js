const DEFAULT_NUM_SQUARES = 16;
const promptButton = document.createElement("button");
promptButton.textContent = `Change number of squares per side (Currently ${DEFAULT_NUM_SQUARES}x${DEFAULT_NUM_SQUARES})`;
promptButton.style.fontSize = "20px";
promptButton.style.textWrap = true;
promptButton.addEventListener("click", () => {
    let promptNumSquares = prompt("Enter the number of squares per side of the grid (Maximum 100)");
    let numSquares = DEFAULT_NUM_SQUARES;
    if (promptNumSquares == null || promptNumSquares == ""){
        console.log("User did not enter a value");
    }
    else if (!Number.isInteger(Number(promptNumSquares))){
        console.log("User did not enter valid input");
    }
    else if (Number(promptNumSquares) > 100){
        numSquares = 100;
    }
    else if (Number(promptNumSquares) < 1){
        numSquares = 1;

    }
    else{
        numSquares = Number(promptNumSquares);
    }

    let elementToRemove = document.querySelector(".gridContainer");
    document.body.removeChild(elementToRemove);
    promptButton.textContent = `Change number of squares per side (Currently ${numSquares}x${numSquares})`;
    createGrid(numSquares);   
});
document.body.appendChild(promptButton);
createGrid(DEFAULT_NUM_SQUARES);

function getPixelsPerSquare(numSquares){
    const pixelsPerSquare = Math.floor((960/numSquares));
    return pixelsPerSquare;
}
function createGrid(numSquares){
    const containerGrid = document.createElement("div");
    containerGrid.classList.add("gridContainer");
    for(let i = 0; i < numSquares; i++){
        const squareContainer = document.createElement("div");
        squareContainer.classList.add("squareContainer");
        for(let j = 0; j < numSquares; j++){
            const square = document.createElement("div");
            const pixelsPerSquare = getPixelsPerSquare(numSquares);

            square.style.width = `${pixelsPerSquare}px`;
            square.style.height = `${pixelsPerSquare}px`;
            square.style.backgroundColor = "white";
            square.addEventListener("mouseenter", () => {
                square.style.backgroundColor = "black";
            });
            squareContainer.appendChild(square);
        }
        containerGrid.appendChild(squareContainer);
    }
    document.body.appendChild(containerGrid);
}
