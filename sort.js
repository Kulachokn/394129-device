'use strict';

let chosenSortBy = document
  .querySelector('.sort .sort-by.selected-sort')
  .getAttribute('data-sort-by');
let chosenOrder = document
  .querySelector('.sort-function .selected-mode')
  .getAttribute('data-sort-order');

function insertAfter(elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

let sort = document.querySelector('.sort');
let sortBtnAsc = document.querySelector('.sort-function .ascending');
let sortBtnDesc = document.querySelector('.sort-function .descending');


function sortByClickMode(evt) {
  evt.preventDefault();
  sortBtnAsc.classList.remove('selected-mode');
  sortBtnDesc.classList.remove('selected-mode');
  this.classList.add('selected-mode');
  chosenOrder = this.getAttribute('data-sort-order');
  sortFn();
}

sortBtnAsc.addEventListener('click', sortByClickMode);
sortBtnDesc.addEventListener('click', sortByClickMode);

function sortByClickHandler(evt) {
  evt.preventDefault();
  for (let child of sort.children) {
    child.classList.remove('selected-sort')
  }
  this.classList.add('selected-sort');
  chosenSortBy = this.getAttribute('data-sort-by');
  sortFn();
}

for (let child of sort.children) {
  child.addEventListener('click', sortByClickHandler);
}

function sortFn() {
  let nav = document.querySelector('.goods-list');
  for (let i = 0; i < nav.children.length; i++) {
    for (let j = i; j < nav.children.length; j++) {
      let item1, item2;
      switch (chosenSortBy) {
        case 'byPrice': {
          item1 = +nav.children[i].getAttribute('data-sort-price');
          item2 = +nav.children[j].getAttribute('data-sort-price');
          break;
        }
        case 'byType': {
          item1 = +nav.children[i].getAttribute('data-sort-type');
          item2 = +nav.children[j].getAttribute('data-sort-type');
          break;
        }
        case 'byPopular': {
          item1 = +nav.children[i].getAttribute('data-sort-popularity');
          item2 = +nav.children[j].getAttribute('data-sort-popularity');
          break;
        }
      }
      if (chosenOrder === 'ascending') {
        if (item1 > item2) {
          let replacedNode;
          replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
          insertAfter(replacedNode, nav.children[i]);
        }
      } else {
        if (item1 < item2) {
          let replacedNode;
          replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
          insertAfter(replacedNode, nav.children[i]);
        }
      }
    }
  }
}


