import { filterData, filterName, percentage, sortData } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

const title = document.querySelector('#title');
const form = document.querySelector('#form');
const filterBox = document.querySelector('#filterbox');
const keyWords = document.querySelector('#keywords');
const buttonFilter = document.querySelector('#filter');
const buttonSearch = document.querySelector('#search');
const selectFilter = document.querySelector('#filteroptions');
const selectOrder = document.querySelector('#orderoptions');
const explanation = document.querySelector('#explanation');
const calculation = document.querySelector('#calculation'); //<aside>
const cards = document.querySelector('#cardscontainer');
filterBox.hidden = true;
explanation.hidden = true;

title.addEventListener('click', (e) => {
    document.location.reload(true)
});

buttonFilter.addEventListener('click', (e) => { //exibe filtros
    filterBox.hidden = false;
    e.preventDefault();
    form.reset(keyWords);
});

function showCards(infos) { //cards template
    return infos.map((elem) => `
      <div class="cards">
      <img id="photos" src="${elem.image}" alt="imagem do personagem"><br>
      <p id="names">${elem.name}</p><br>
      <ul class="cards-list">
        <p>Status: </p>
        <li>${elem.status}</li>
        <p>Gênero: </p>
        <li>${elem.gender}</li>
        <p>Espécie: </p>
        <li>${elem.species}</li>
      </ul>
      </div>
        `
    ).join('');
};

buttonSearch.addEventListener('click', (e) => { //filtra e exibe cards
    filterBox.hidden = true;
    e.preventDefault();
    
    const filterIndex = selectFilter.options[selectFilter.selectedIndex].value;
    const orderIndex = selectOrder.options[selectOrder.selectedIndex].value;

    if (keyWords.value !== '') {

        const filterByName = filterName(data, keyWords.value)
        const percentageName = percentage(data, filterByName.length)
        return cards.innerHTML = showCards(filterByName), calculation.innerHTML = `${percentageName}%`

    } else if (filterIndex === 'Alive' || filterIndex === 'Dead' || filterIndex === 'unknown') {
        const filterStatus = filterData(data, 'status', filterIndex)
        const percentageStatus = percentage(data, filterStatus.length)
        return cards.innerHTML = showCards(filterStatus), calculation.innerHTML = `${percentageStatus}%`
        
    } else if (filterIndex === 'Female' || filterIndex === 'Male' || filterIndex === 'Genderless') {
        const filterGender = filterData(data, 'gender', filterIndex)
        const percentageGender = percentage(data, filterGender.length)
        return cards.innerHTML = showCards(filterGender), calculation.innerHTML = `${percentageGender}%`

    } else if (filterIndex === 'all') {
        const percentageAll = percentage(data, 493)
        return cards.innerHTML = showCards(data.results), calculation.innerHTML = `${percentageAll}%`
    };
    
});

calculation.addEventListener('mouseover', () => {
    explanation.hidden = false; 
});

calculation.addEventListener('mouseout', () => {
    explanation.hidden = true; 
});

// L29 E os personagens não-humanos? Como filtrá-los?
// Como funciona o .join() depois do template?
// Como usar as tipografias escolhidas?