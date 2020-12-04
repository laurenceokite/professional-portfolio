const item1 = document.querySelector('.item-1');
const item2 = document.querySelector('.item-2');
const item3 = document.querySelector('.item-3');
const item4 = document.querySelector('.item-4');
const item5 = document.querySelector('.item-5');
const item6 = document.querySelector('.item-6');

const titleDisplay = document.querySelector('.project-lower-title');

const itemArray = [item1, item2, item3, item4, item5, item6]

const gridObjects = itemArray.map(item => { 
    return { 
        item: item,
        title: item.dataset.title,
        number: parseInt(item.className.replace('project-item item-', '').trim(), 10),
        class: item.className
    }
});

const lastSelected = {};

if (!lastSelected.item) {
    gridDisplayHandler(gridObjects[0]);
}

function gridHoverHandler() {
    event.preventDefault();
    
    const itemNumber = parseInt(event.target.className.replace('project-item item-', '').trim(), 10);
    const index = itemNumber - 1;
    const gridObject = gridObjects[index];
    
    
    if (gridObject) {
        gridDisplayHandler(gridObject);
    }
}

function arrowClickHandler() {

    const className = event.target.className;

    if (className.includes('left-button')) {
        let newIndex = lastSelected.number - 2;
        if (newIndex < 0) {
            newIndex += 6;
        }
        gridDisplayHandler(gridObjects[newIndex]);
        return
    }
    if (className.includes('right-button')) {
        let newIndex = lastSelected.number;
        if (newIndex > 5) {
            newIndex = 0;
        }
        gridDisplayHandler(gridObjects[newIndex]);
        return
    }
}

function gridDisplayHandler(gridObject) {
    const infoDisplay = gridObject.item.querySelector('.project-box-title');
    
    infoDisplay.classList.add('display');

    titleDisplay.innerHTML = gridObject.title;

    if (lastSelected.item) {
        const prevInfoDisplay = lastSelected.item.querySelector('.project-box-title');

        lastSelected.item.className = lastSelected.class;
        prevInfoDisplay.classList.remove('display');
    }

    lastSelected.item = gridObject.item;
    lastSelected.title = gridObject.title;
    lastSelected.number = gridObject.number;
    lastSelected.class = gridObject.class;

    if (gridObject.number === 1 || lastSelected === 2 && gridObject.number === 3) {
        gridObject.item.classList.add('top-left');
    } else if (gridObject.number === 5 || lastSelected === 6 && gridObject.number === 4) {
        gridObject.item.classList.add('bottom-right');
    } else if (gridObject.number === 4 || gridObject.number === 6) {
        gridObject.item.classList.add('bottom-left');
    } else if (gridObject.number === 2 && lastSelected !== 3 || gridObject.number === 3 && lastSelected !== 2) {
        gridObject.item.classList.add('top-right');
    }
}

const infoDisplays = document.querySelectorAll('.project-box-title');

console.log(infoDisplays);

document.querySelector('#title-buttons').addEventListener('click', arrowClickHandler);
 
if (window.innerWidth >= 992) {
    console.log('big enough');
    $('.project-grid').on('mouseover', gridHoverHandler);
}
