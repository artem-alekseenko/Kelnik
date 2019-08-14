console.log("sortFlats")
// const sorterButtonRooms = document.querySelector('.sort-rooms')
// const flatsArea = document.querySelector('.wrapper')
// const cardsArea = flatsArea.querySelectorAll('.flat')

// while (flatsArea.firstChild) {
//     flatsArea.removeChild(flatsArea.firstChild);
// }

// sorterButtonRooms.addEventListener('click', function () {
//     flatsArea.remove()
//     getData()
// }
// )

// const getData = () => {
//     fetch('data/flats.json')
//         .then(response => response.json())
//         .then(data => {
//             const myData = data.flats           
//             myData.sort((a, b) => {
//                 return (a.rooms - b.rooms)
//             })
//             renderFlatsSorted(myData, 0, 12)
//         })
// };

// const renderFlatsSorted = (flats, start, end) => {  
//     for (let i = start; i < end; i++) {
//         let flat = document.createElement("div");
//         flat.classList.add(`flat`);

//         let status = '';
//         switch (flats[i].status) {
//             case 'свободно':
//                 status = 'free';
//                 break;
//             case 'забронировано':
//                 status = 'booked';
//                 break;
//             case 'продано':
//                 status = 'sold';
//                 break;
//             default:
//                 console.error('статус квартиры не указан');
//         }

//         let flatArea = `
//           <a href="#" class="flat-card flat-card--${status}">
//             <div class="flat-card__header">
//               ${flats[i].sale ? `<span class="flat-card__label flat-card__sale"> ${flats[i].sale} </span>` : ''}
//               ${flats[i].shockPrice ? `<span class="flat-card__label flat-card__shock-price"> шок цена </span>` : ''}
//             </div>
//             <div class="flat-card__image"><img src="${flats[i].image}" data-src="${flats[i].image}" alt="Планировка" class="flat-card__img "></div>
//             <div class="flat-card__main">
//               <h2 class="flat-card__title">${flats[i].title}</h2>
//               <div class="flat-card__feature">
//                 <div class="flat-card__decoration">${flats[i].decoration}</div>
//                 <div class="flat-card__square">${flats[i].square} м<sup>2</sup> площадь</div>
//                 <div class="flat-card__floor">${flats[i].floor} этаж</div>
//               </div>
//               <div class="flat-card__price">${flats[i].price}</div>
//             </div>
//             <div class="flat-card__footer">
//               <div class="flat-card__status flat-card__status--${status}">${flats[i].status}</div>
//             </div>
//           </a>
//           <button class="button-favorite " onclick="this.style = 'background-color: gold'" aria-label="Добавить в избранное"><img class="button-favorite--star" src="./images/star.png", alt="star"></img></button>
//         `;

//         flat.innerHTML = flatArea;
//         document.querySelector('.content__flats-cards').appendChild(flat);
//     }
// };