import { filterData, filterName, percentage } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

const form = document.querySelector('#form');
const filterBox = document.querySelector('#filterbox');
const keyWords = document.querySelector('#keywords');
const buttonFilter = document.querySelector('#filter');
const buttonSearch = document.querySelector('#search');
const selectFilter = document.querySelector('#filteroptions');
const selectOrder = document.querySelector('#orderoptions');
const calculation = document.querySelector('#calculation')
const cards = document.querySelector('#cardscontainer');
filterBox.hidden = true;

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

buttonSearch.addEventListener('click', (event) => { //filtra e exibe cards
    filterBox.hidden = true;
    event.preventDefault();
    calculation.innerHTML = 'olá';

    const filterIndex = selectFilter.options[selectFilter.selectedIndex].value;
    
    if (keyWords.value !== '') {

        const filterByName = filterName(data, keyWords.value)
        const percentageName = percentage(data, filterByName.length)
        return cards.innerHTML = showCards(filterByName), console.log(percentageName)

    } else if (filterIndex === 'Alive' || filterIndex === 'Dead' || filterIndex === 'unknown') {
        const filterStatus = filterData(data, 'status', filterIndex)
        const percentageStatus = percentage(data, filterStatus.length)
        return cards.innerHTML = showCards(filterStatus), console.log(percentageStatus)

    } else if (filterIndex === 'Female' || filterIndex === 'Male' || filterIndex === 'Genderless') {
        const filterGender = filterData(data, 'gender', filterIndex)
        const percentageGender = percentage(data, filterGender.length)
        return cards.innerHTML = showCards(filterGender), console.log(percentageGender)

    } else if (filterIndex === 'all') {
        return cards.innerHTML = showCards(data.results), console.log(percentage(data, 493))
    };
    
    //const orderIndex = selectOrder.options[selectOrder.selectedIndex].value;
});

// L29 E os personagens não-humanos? Como filtrá-los?
// Como funciona o .join() depois do template?
// Como usar as tipografias escolhidas?