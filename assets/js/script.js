let lastHover = ''

function gridHoverHandler() {
    event.preventDefault();
    const item1 = document.querySelector('.item-1');
    const item2 = document.querySelector('.item-2');
    const item3 = document.querySelector('.item-3');
    const item4 = document.querySelector('.item-4');
    const item5 = document.querySelector('.item-5');
    const item6 = document.querySelector('.item-6');
    const itemArray = [item1, item2, item3, item4, item5, item6]

    const item = event.target.className;
    const number = item.replace('project-item item-', '').trim();
    const titleDisplay = document.querySelector('.project-lower-title');
    const title = event.target.dataset.title

    if (number !== lastHover && item !== 'project-grid' && item !== 'project-title') {
        
        for (let index = 0; index < itemArray.length; index++) {
            const itemNumber = index + 1;
            
            if (itemArray[index].className === item) {
                
                titleDisplay.innerHTML = title;

                if (itemNumber === 1 || lastHover === 2 && itemNumber === 3) {
                    itemArray[index].style.gridRowEnd = 3;
                    itemArray[index].style.gridRowStart = 1;
                    itemArray[index].style.gridColumnEnd = 3;
                    itemArray[index].style.gridColumnStart = 1;
                    lastHover = itemNumber;
                } else if (itemNumber === 5 || lastHover === 6 && itemNumber === 4) {
                    itemArray[index].style.gridRowEnd = 4;
                    itemArray[index].style.gridRowStart = 2;
                    itemArray[index].style.gridColumnEnd = 4;
                    itemArray[index].style.gridColumnStart = 2;
                    lastHover = itemNumber;
                } else if (itemNumber === 4 || itemNumber === 6) {
                    itemArray[index].style.gridRowEnd = 4;
                    itemArray[index].style.gridRowStart = 2;
                    itemArray[index].style.gridColumnEnd = 3;
                    itemArray[index].style.gridColumnStart = 1;
                    lastHover = itemNumber;
                } else if (itemNumber === 2 && lastHover !== 3 || itemNumber === 3 && lastHover !== 2) {
                    itemArray[index].style.gridRowEnd = 3;
                    itemArray[index].style.gridRowStart = 1;
                    itemArray[index].style.gridColumnEnd = 4;
                    itemArray[index].style.gridColumnStart = 2;
                    lastHover = itemNumber;
                }
            } else if (item !== 'project-grid') {
                itemArray[index].style.gridRowEnd = null;
                itemArray[index].style.gridRowStart = null;
                itemArray[index].style.gridColumnEnd = null;
                itemArray[index].style.gridColumnStart = null;
            }  
        }
    }
    
}

$('.project-grid').on('mouseover', gridHoverHandler);
