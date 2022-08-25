import { filterData, filterName, percentage, sortDataAz, sortDataEpisode, sortDataZa } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

const title = document.querySelector('#title');
const filterBox = document.querySelector('#filterbox');
const keyWords = document.querySelector('#keywords');
const buttonFilter = document.querySelector('#filter');
const buttonSearch = document.querySelector('#search');
const selectFilter = document.querySelector('#filteroptions');
const selectOrder = document.querySelector('#orderoptions');
const explanation = document.querySelector('#explanation');
const calculation = document.querySelector('#calculation');
const cards = document.querySelector('#cardscontainer');

filterBox.hidden = true;
explanation.hidden = true;

title.addEventListener('click', (e) => {
    document.location.reload(true);
});

buttonFilter.addEventListener('click', (e) => { //exibe filtros
    filterBox.hidden = false;
    e.preventDefault();
});

function showCards(infos) { //cards template
    return infos.map((elem) => `
      <article class="cards">
        <img id="photos" src="${elem.image}" alt="imagem do personagem"><br>
        <p id="names">${elem.name}</p><br>
        <ul class="cards-list">
            <li>Status: ${elem.status}</li>
            <li>Gênero: ${elem.gender}</li>
            <li>Espécie: ${elem.species}</li>
        </ul>
      </article>
        `
    ).join('');
};

buttonSearch.addEventListener('click', (e) => { //filtra, ordena e exibe cards
    filterBox.hidden = true;
    e.preventDefault();

    const filterIndex = selectFilter.options[selectFilter.selectedIndex].value;
    const orderIndex = selectOrder.options[selectOrder.selectedIndex].value;

    if (keyWords.value !== '') {

        const filterByName = filterName(data, keyWords.value);
        const percentageName = percentage(data, filterByName.length);

        if (orderIndex === 'az') {
            return cards.innerHTML = showCards(filterByName.sort(sortDataAz)), calculation.innerHTML = `${percentageName}%`
        } else if (orderIndex === 'za') {
            return cards.innerHTML = showCards(filterByName.sort(sortDataZa)), calculation.innerHTML = `${percentageName}%`
        }

    } else if (filterIndex === 'Alive' || filterIndex === 'Dead' || filterIndex === 'unknown') {
        const filterStatus = filterData(data, 'status', filterIndex);
        const percentageStatus = percentage(data, filterStatus.length);

        if (orderIndex === 'az') {
            return cards.innerHTML = showCards(filterStatus.sort(sortDataAz)), calculation.innerHTML = `${percentageStatus}%`
        } else if (orderIndex === 'za') {
            return cards.innerHTML = showCards(filterStatus.sort(sortDataZa)), calculation.innerHTML = `${percentageStatus}%`
        }

    } else if (filterIndex === 'Female' || filterIndex === 'Male' || filterIndex === 'Genderless') {
        const filterGender = filterData(data, 'gender', filterIndex);
        const percentageGender = percentage(data, filterGender.length);

        if (orderIndex === 'az') {
            return cards.innerHTML = showCards(filterGender.sort(sortDataAz)), calculation.innerHTML = `${percentageGender}%`
        } else if (orderIndex === 'za') {
            return cards.innerHTML = showCards(filterGender.sort(sortDataZa)), calculation.innerHTML = `${percentageGender}%`
        } else if (orderIndex === "episode") {
            return cards.innerHTML = showCards(filterGender.sort(sortDataEpisode)), calculation.innerHTML = `${percentageGender}%`
        }

    } else if (filterIndex === 'all') {
        const percentageAll = percentage(data, 493);

        if (orderIndex === 'az') {
            return cards.innerHTML = showCards(data.results.sort(sortDataAz)), calculation.innerHTML = `${percentageAll}%`
        } else if (orderIndex === 'za') {
            return cards.innerHTML = showCards(data.results.sort(sortDataZa)), calculation.innerHTML = `${percentageAll}%`
        }
    };
});

calculation.addEventListener('click', () => {
    explanation.hidden = false;
});

// calculation.addEventListener('click', () => {
//     explanation.hidden = true;
// });

// L29 E os personagens não-humanos? Como filtrá-los?
// Como funciona o .join() depois do template?
// Como usar as tipografias escolhidas?
