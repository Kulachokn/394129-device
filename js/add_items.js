'use strict';

// let cardData = {
//     "11123": {
//       "price": 500,
//       "description": "Любительская селфи-палка",
//       "image": "img/item-1.jpg"
//     },
//     "11124" : {
//       "price": 1500,
//       "description": "Профессиональная селфи-палка",
//       "image": "img/item-2.jpg"
//     },
//     "11125" : {
//       "price": 2500,
//       "description": "Непотопляемая селфи-палка",
//       "image": "img/item-3.jpg"
//     }
//     ,
//     "11126" : {
//       "price": 4900,
//       "description": "Селфи-палка «Следуй за мной»",
//       "image": "img/item-4.jpg"
//     },
//     "11127" : {
//       "price": 3000,
//       "description": "Компактная селфи-палка»",
//       "image": "img/item-5.jpg"
//     }
// };

//Вывод массива товаров
// let out = '';
// for (var key in cardData) {
//   out+='<img src="'+cardData[key].image+'">';
//   out+=cardData[key].description;
//   out+=cardData[key].price+'руб.';
// }
//
// document.getElementById('out').innerHTML = out;


let cardData = [
   {
    "price": 500,
    "description": "Любительская селфи-палка",
    "image": "img/item-1.jpg"
  },
   {
    "price": 1500,
    "description": "Профессиональная селфи-палка",
    "image": "img/item-2.jpg"
  },
  {
    "price": 2500,
    "description": "Непотопляемая селфи-палка",
    "image": "img/item-3.jpg"
  },
   {
    "price": 4900,
    "description": "Селфи-палка «Следуй за мной»",
    "image": "img/item-4.jpg"
  },
  {
    "price": 3000,
    "description": "Компактная селфи-палка»",
    "image": "img/item-5.jpg"
  }
];




let makeElement = function (tagName, className) {
  let element = document.createElement(tagName);
  element.classList.add(className);
  // if (text) {
  //   element.textContent = text;
  // }
  return element;
};

let createCard = function (good) {

  let listItem;
  listItem = makeElement('li', 'good');


  let title = makeElement('h2', 'good__description', good.text);
  listItem.appendChild(title);

  let picture;
  picture = makeElement('img', 'good__image');
  picture.src = good.image;
  picture.alt = good.text;
  listItem.appendChild(picture);

  let price = makeElement('p', 'good__price', good.price + 'руб.');
  listItem.appendChild(price);


  return listItem;
};


  let cardList = document.querySelector('.good');

  for (let i = 0; i < cardData.length; i++) {
    let cardItem = createCard(cardData[i]);
    cardList.appendChild(cardItem);
  }


