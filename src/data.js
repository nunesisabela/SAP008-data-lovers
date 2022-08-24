export function filterData(array, property, value) { //filtra dados
  return array.results.filter(elem => elem[property] === value) //.filter somente acessa arrays. para acessar objetos, usamos "." (literal, como em .results)
};

export function filterName(array, characterCondition) { //filtra nome
  return array.results.filter(elem => elem.name.toUpperCase().includes(characterCondition.toUpperCase())) 
};

export function sortDataAz(a, b) {
  if (a.name < b.name) {
    return -1;
  };
  if (a.name > b.name) {
    return 1;
  }
};

export function sortDataZa(a, b) {
  if (a.name > b.name) {
    return -1;
  };
  if (a.name < b.name) {
    return 1;
  }
};

export function sortDataEpisode(a, b) {
  if (a.episode < b.episode) {
    return -1;
  };
  if (a.episode > b.episode) {
    return 1;
  }
};

export function percentage(array, newArray) {
  return parseInt((100 * newArray) / array.results.length)
}














