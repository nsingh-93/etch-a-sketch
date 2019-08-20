let container = document.querySelector('.container');
let containerPixelWidth = containerPixelHeight = 0;

document.addEventListener('DOMContentLoaded', function() {
    container = document.querySelector('.container');
    containerPixelWidth = (window.innerWidth * .8).toFixed(1);
    containerPixelHeight = (window.innerHeight * .9).toFixed(1);
    addGrid(container, 16);
});

function addGrid(container, cells) {
    let gridItems = Array.from(document.querySelectorAll('.grid-item'));

    if (gridItems.length > 0)
    {
        alert();
    }

    for (let row = 1; row <= cells; row++) {
        for (let col = 1; col <= cells; col++) {
            let div = document.createElement('div');
            div.style.gridColumnStart = col;
            div.style.gridColumnEnd = col + 1;
            div.style.gridRowStart = row;
            div.style.gridRowEnd = row + 1;
            div.style.border = 'solid 1px black';
            div.classList.add('grid-item');
            container.appendChild(div);
        }
    }
}