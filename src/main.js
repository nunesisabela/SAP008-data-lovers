import { filterData, filterName } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

const filterBox = document.querySelector('#filterbox');
filterBox.hidden = true;
const buttonFilter = document.querySelector('#filter');
const buttonSearch = document.querySelector('#search');
const cards = document.querySelector('#cards');
const keyWords = document.querySelector('#keywords');
const form = document.querySelector('#form');
const selectFilter = document.querySelector('#filteroptions');
const calculation = document.querySelector('#calculation')


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

    const optionIndex = selectFilter.options[selectFilter.selectedIndex].value;
    if (keyWords.value !== "") {
        return cards.innerHTML = showCards(filterName(data, keyWords.value))
    } else if (optionIndex === "Alive" || optionIndex === "Dead" || optionIndex === "unknown") {
        return cards.innerHTML = showCards(filterData(data, "status", optionIndex))
    } else if (optionIndex === "Female" || optionIndex === "Male" || optionIndex === "Genderless") {
        return cards.innerHTML = showCards(filterData(data, "gender", optionIndex))
    } else if (optionIndex === "all") {
        return cards.innerHTML = showCards(data.results)
    };

    // let percent = 1+1
});

// L29 E os personagens não-humanos? Como filtrá-los?
// Como funciona o .join() depois do template?
// Como usar as tipografias escolhidas?