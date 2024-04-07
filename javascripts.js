const container = document.querySelector('.container');
const button = document.querySelector('button');

function createGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-columns', cols);

    for (let i = 0; i < rows * cols; i++) {
        let cell = document.createElement('div');
        cell.classList.add('grid-item');
        container.appendChild(cell);
    }
}

function createNewGrid() {
    let gridSize = prompt('Enter the number of squares per side for the new grid (max 100):');
    gridSize = parseInt(gridSize);
    if (gridSize && gridSize <= 100) {
        container.textContent = '';
        createGrid(gridSize, gridSize);
    } else {
        alert('Please enter a valid number (1-100)');
    }
}
createGrid(16, 16);

container.addEventListener('mouseover', function(e) {
    if (e.target.classList.contains('grid-item')) {
        e.target.style.backgroundColor = '#DBCDF0';
    }
});