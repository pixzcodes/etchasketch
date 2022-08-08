// set up for the grid
const gridContainer = document.querySelector('#gridContainer');
let gridWidth = gridContainer.offsetWidth;

function createGrid (amount){
    let i = 0;
    let size = (gridWidth / amount) - 2;
    while (i < amount*amount){
        const box = document.createElement('div');
        gridContainer.appendChild(box);
        box.setAttribute('style', `margin: 1px; height: ${size}px; width: ${size}px; background-color: white;`);
        i++;
    }
    }
    
    createGrid(16);