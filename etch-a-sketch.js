let container = document.querySelector('.container');
let gridItems = [];
let mode = 'normal';

document.addEventListener('DOMContentLoaded', function() {
    container = document.querySelector('.container');
    addGrid(container, 16);
    gridItems = Array.from(document.querySelectorAll('.grid-item'));
});

function addGrid(container, cells) {
    gridItems = Array.from(document.querySelectorAll('.grid-item'));

    if(gridItems.length > 0)
    {
        removeElementsByClass('grid-item');
    }

    for (let row = 1; row <= cells; row++) {
        for (let col = 1; col <= cells; col++) {
            let div = document.createElement('div');
            div.style.gridColumnStart = col;
            div.style.gridColumnEnd = col + 1;
            div.style.gridRowStart = row;
            div.style.gridRowEnd = row + 1;
            div.style.border = 'none';
            div.classList.add('grid-item');
            container.appendChild(div);
            div.addEventListener('mouseenter', () => {
                fillGridSquare(div, mode);
            });
        }
    }
}

function removeElementsByClass(className) {
    var elements = document.getElementsByClassName(className);

    while(elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function fillGridSquare (gridItem, colorMode) {
    let color = '';

    switch (colorMode) {
        case 'normal':
            color = '#000';
            break;
        default:
            color = '#000';
            break;
    }
    
    gridItem.style.backgroundColor = color;
}

function resetBoard() {
    gridItems = Array.from(document.querySelectorAll('.grid-item'));

    gridItems.forEach((item) => {
        item.style.backgroundColor = '#FFF';
    })
}