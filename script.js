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
        box.addEventListener('mouseenter', (event) => {
            event.target.style.backgroundColor = 'black';
        });
        i++;
    }
    
}

const gridSizeBtn = document.querySelector('#gridSizeBtn');
let gridSize = gridSizeBtn.addEventListener('click', () => {
    let size = prompt('Please enter the grid size...');
    if (size >= 100){
        size = 100;
    }
    const gridBoxes = gridContainer.querySelectorAll('div');
    for (let i = 0; i < gridBoxes.length; i++){
        gridContainer.removeChild(gridBoxes[i]);
    }
    createGrid(size);
});
