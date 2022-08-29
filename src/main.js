import { filterData, filterName, percentage, sortDataAz, sortDataEpisode, sortDataZa } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

const title = document.querySelector('#title');
const intro = document.querySelector('#intro')
const filterBox = document.querySelector('#filterbox');
const keyWords = document.querySelector('#keywords');
const buttonFilter = document.querySelector('#filter');
const buttonSearch = document.querySelector('#search');
const selectFilter = document.querySelector('#filteroptions');
const selectOrder = document.querySelector('#orderoptions');
const calculation = document.querySelector('#calculation');
const cards = document.querySelector('#cardscontainer');

filterBox.hidden = true;
intro.hidden = false;

title.addEventListener('click', () => {
    document.location.reload(true);
});

buttonFilter.addEventListener('click', (e) => { //exibe filtros
    filterBox.hidden = false;
    e.preventDefault();
});

function showCards(infos) { //cards template
    return infos.map((elem) => `
      <article class="cards">
        <img id="photos" src="${elem.image}" alt="imagem do personagem">
        <p id="names">${elem.name}</p>
        <ul class="cards-list">
            <li><span class="type">Status:</span> ${elem.status}</li>
            <li><span class="type">Gênero:</span> ${elem.gender}</li>
            <li><span class="type">Species:</span> ${elem.species}</li>
        </ul>
      </article>
        `
    ).join('');
}

buttonSearch.addEventListener('click', (e) => { //filtra, ordena e exibe cards
    filterBox.hidden = true;
    intro.hidden = true;
    e.preventDefault();

    const filterIndex = selectFilter.options[selectFilter.selectedIndex].value;
    const orderIndex = selectOrder.options[selectOrder.selectedIndex].value;

    if (keyWords.value !== '') {

        const filterByName = filterName(data, keyWords.value);
        const percentageName = percentage(data, filterByName.length);

        if (orderIndex === 'az') {
            return cards.innerHTML = showCards(filterByName.sort(sortDataAz)), calculation.innerHTML = `Sua pesquisa resultou em <span class="percentagenumber">${percentageName}%</span> dos personagens da série!`
        } else if (orderIndex === 'za') {
            return cards.innerHTML = showCards(filterByName.sort(sortDataZa)), calculation.innerHTML = `Sua pesquisa resultou em <span class="percentagenumber">${percentageName}%</span> dos personagens da série!`
        } else if (orderIndex === "episode") {
            return cards.innerHTML = showCards(filterByName.sort(sortDataEpisode)), calculation.innerHTML = `Sua pesquisa resultou em <span class="percentagenumber">${percentageName}%</span> dos personagens da série!`
        }

    } else if (filterIndex === 'Alive' || filterIndex === 'Dead' || filterIndex === 'unknown') {
        const filterStatus = filterData(data, 'status', filterIndex);
        const percentageStatus = percentage(data, filterStatus.length);

        if (orderIndex === 'az') {
            return cards.innerHTML = showCards(filterStatus.sort(sortDataAz)), calculation.innerHTML = `Sua pesquisa resultou em <span class="percentagenumber">${percentageStatus}%</span> dos personagens da série!`   
        } else if (orderIndex === 'za') {
            return cards.innerHTML = showCards(filterStatus.sort(sortDataZa)), calculation.innerHTML = `Sua pesquisa resultou em <span class="percentagenumber">${percentageStatus}%</span> dos personagens da série!`
        } else if (orderIndex === "episode") {
            return cards.innerHTML = showCards(filterStatus.sort(sortDataEpisode)), calculation.innerHTML = `Sua pesquisa resultou em <span class="percentagenumber">${percentageStatus}%</span> dos personagens da série!`
        }

    } else if (filterIndex === 'Female' || filterIndex === 'Male' || filterIndex === 'Genderless') {
        const filterGender = filterData(data, 'gender', filterIndex);
        const percentageGender = percentage(data, filterGender.length);
        

        if (orderIndex === 'az') {
            return cards.innerHTML = showCards(filterGender.sort(sortDataAz)), calculation.innerHTML = `Sua pesquisa resultou em <span class="percentagenumber">${percentageGender}%</span> dos personagens da série!`
        } else if (orderIndex === 'za') {
            return cards.innerHTML = showCards(filterGender.sort(sortDataZa)), calculation.innerHTML = `Sua pesquisa resultou em <span class="percentagenumber">${percentageGender}%</span> dos personagens da série!`
        } else if (orderIndex === "episode") {
            return cards.innerHTML = showCards(filterGender.sort(sortDataEpisode)), calculation.innerHTML = `Sua pesquisa resultou em <span class="percentagenumber">${percentageGender}%</span> dos personagens da série!`
        }

    } else if (filterIndex === 'all') {
        const percentageAll = percentage(data, 493);

        if (orderIndex === 'az') {
            return cards.innerHTML = showCards(data.results.sort(sortDataAz)), calculation.innerHTML = `Você está vendo <span class="percentagenumber">${percentageAll}%</span> dos personagens da série!`
        } else if (orderIndex === 'za') {
            return cards.innerHTML = showCards(data.results.sort(sortDataZa)), calculation.innerHTML = `Você está vendo <span class="percentagenumber">${percentageAll}%</span> dos personagens da série!`
        } else if (orderIndex === "episode") {
            return cards.innerHTML = showCards(data.results.sort(sortDataEpisode)), calculation.innerHTML = `Você está vendo <span class="percentagenumber">${percentageAll}%</span> dos personagens da série!`
        }
    }
});

// Como funciona o .join() depois do template?
// Posicionamento do portal
// pq aside e main não são sempre 50% do body
// footer ficar sempre abaixo dos cards e não em cima
// conteudo de dentro dos cards acupem espaços diferentes