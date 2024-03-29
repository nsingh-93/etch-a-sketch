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
            div.style.backgroundColor = '#FFF';
            div.style.opacity = 1.0;
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

function fillGridSquare(gridItem, colorMode) {
    let color = '';

    switch (colorMode) {
        case 'normal':
            color = '#000';
            gridItem.style.opacity = 1.0;
            break;
        case 'rgb':
            color = randomRGB();
            gridItem.style.opacity = 1.0;
            break;
        case 'gray':
            if (gridItem.style.backgroundColor != 'rgb(0, 0, 0)') {
                gridItem.style.opacity = 0.0;
            }
            color = 'rgb(0,0,0)';
            gridItem.style.opacity = Number(gridItem.style.opacity) + 0.1;
            break;
        default:
            color = '#FFF';
            break;
    }
    
    gridItem.style.backgroundColor = color;
}

function resetBoard() {
    gridItems = Array.from(document.querySelectorAll('.grid-item'));

    gridItems.forEach((item) => {
        item.style.backgroundColor = '#FFF';
        item.style.opacity = 1.0;
    })    
}

function changeBoardSize() {
    var newSideLength = window.prompt('Enter the number of boxes per side', Math.sqrt(gridItems.length));

    addGrid(container, Number(newSideLength));
}

function setMode(modeOption) {
    mode = modeOption;
}

function randomRGB() {
    // Taken from here: https://bit.ly/2PfzLIG and adjusted to not use rgb(255, 255, 255) or alpha value
    var o = Math.round, r = Math.random, s = 254;    
    return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
}