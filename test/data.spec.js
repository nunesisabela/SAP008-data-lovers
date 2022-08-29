import { filterData, filterName } from '../src/data.js';
const data = {
  "info": {
    "count": 6,
    "pages": 1,
  },
  "results": [
    {
      "name": "Rick Sanchez",
      "status": "Alive",
      "gender": "Male"
    },
    {
      "name": "Morty Smith",
      "status": "Alive",
      "gender": "Male"
    },
    {
      "name": "Summer Smith",
      "status": "Alive",
      "gender": "Female"
    },
    {
      "name": "Albert Einstein",
      "status": "Dead",
      "gender": "Male"
    },
    {
      "name": "Annie",
      "status": "Alive",
      "gender": "Female"
    },
    {
      "name": "Brad Anderson",
      "status": "Dead",
      "gender": "Male"
    },
  ]
}

describe('filtra os dados', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('should return new array', () => {
    const newArrObjFemale = [{
      "gender": "Female",
      "name": "Summer Smith",
      "status": "Alive",
    },
    {
      "gender": "Female",
      "name": "Annie",
      "status": "Alive",
    },
    ]
    expect(filterData(data, "gender", "Female")).toStrictEqual(newArrObjFemale);
  });
});


describe('filtra os dados pela busca do nome', () => {
  it('is a function', () => {
    expect(typeof filterName).toBe('function');
  });

  it('should return object that contain the element from search', () => {
    const search = "rick"
    expect(filterName(data, search)).toStrictEqual([{
      "name": "Rick Sanchez",
      "status": "Alive",
      "gender": "Male"
    }]);
  });
});
