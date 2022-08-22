export function filterData(array, property, value) { //filtra dados
  return array.results.filter(elem => elem[property] === value) //.filter somente acessa arrays. para acessar objetos, usamos "." (literal, como em .results)
};

export function filterName(array, characterCondition) { //filtra nome
  return array.results.filter(elem => elem.name.toUpperCase().includes(characterCondition.toUpperCase())) 
};

export function sortData(array, property, order) {
  array.sort
}














