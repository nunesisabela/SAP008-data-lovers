import { filterData, showCards } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

const buttonFilter = document.querySelector('#filter');
const filterBox = document.querySelector('#filter-box');
filterBox.hidden = true;
buttonFilter.addEventListener('click', () => { //botão FILTRAR (exibe filtros)
    filterBox.hidden = false;
});

const buttonSearch = document.querySelector('#search');
const cards = document.querySelector('#cards');
const radioButtonAlive = document.querySelector("#alive");
const radioButtonDead = document.querySelector("#dead");
const radioButtonFemale = document.querySelector("#female");
const radioButtonMale = document.querySelector("#male");
const radioButtonHuman = document.querySelector("#human");
const radioButtonNonHuman = document.querySelector("#non-human");

buttonSearch.addEventListener('click', () => { //botão BUSCAR (filtra, exibe cards)

    const x = filterData(data, "status", "Alive")
    console.log(x)

    cards.innerHTML = showCards(data.results)
});

let checked = true;
radioButtonAlive.addEventListener('click', () => {
    if (checked == true) {
        checked = false
    } else {
        checked = true
    }
    radioButtonAlive.checked = checked;
});
radioButtonDead.addEventListener('click', () => {
    if (checked == true) {
        checked = false
    } else {
        checked = true
    }
    radioButtonDead.checked = checked;
});
radioButtonFemale.addEventListener('click', () => {
    if (checked == true) {
        checked = false
    } else {
        checked = true
    }
    radioButtonFemale.checked = checked;
});
radioButtonMale.addEventListener('click', () => {
    if (checked == true) {
        checked = false
    } else {
        checked = true
    }
    radioButtonMale.checked = checked;
});
radioButtonHuman.addEventListener('click', () => {
    if (checked == true) {
        checked = false
    } else {
        checked = true
    }
    radioButtonHuman.checked = checked;
});
radioButtonNonHuman.addEventListener('click', () => {
    if (checked == true) {
        checked = false
    } else {
        checked = true
    }
    radioButtonNonHuman.checked = checked;
});

console.log(filterData, data);


