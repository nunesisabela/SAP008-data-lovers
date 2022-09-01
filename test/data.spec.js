import { filterData, filterName, percentage, sortArr } from '../src/data.js';
const data = {
  "info": {
    "count": 6,
    "pages": 1,
  },
  "results": [
    {
      "name": "Rick Sanchez",
      "status": "Alive",
      "gender": "Male",
      "episode": 4
    },
    {
      "name": "Morty Smith",
      "status": "Alive",
      "gender": "Male",
      "episode": 1
    },
    {
      "name": "Summer Smith",
      "status": "Alive",
      "gender": "Female",
      "episode": 6
    },
    {
      "name": "Albert Einstein",
      "status": "Dead",
      "gender": "Male",
      "episode": 5
    },
    {
      "name": "Annie",
      "status": "Alive",
      "gender": "Female",
      "episode": 2
    },
    {
      "name": "Brad Anderson",
      "status": "Dead",
      "gender": "Male",
      "episode": 3
    },
  ]
}

const newArrObjFemale = [{
  "gender": "Female",
  "name": "Summer Smith",
  "status": "Alive",
  "episode": 6
},
{
  "gender": "Female",
  "name": "Annie",
  "status": "Alive",
  "episode": 2
},
]

describe('filters data', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('should return new array', () => {
    expect(filterData(data, "gender", "Female")).toStrictEqual(newArrObjFemale);
  });
});


describe('filters data by name', () => {
  it('is a function', () => {
    expect(typeof filterName).toBe('function');
  });
  it('should return object that contains the element from search', () => {
    const search = "rick"
    expect(filterName(data, search)).toStrictEqual([{
      "name": "Rick Sanchez",
      "status": "Alive",
      "gender": "Male",
      "episode": 4
    }]);
  });
});

describe('calculates percentage of the filtered characters', () => {
  it('is a function', () => {
    expect(typeof percentage).toBe('function');
  });
  it('should return percentage of the filtered characters', () => {
    expect(percentage(data, newArrObjFemale.length)).toBe(33);
  });
})

describe('sorts the array', () => {
  it('is a function', () => {
    expect(typeof sortArr).toBe('function');
  });

  it('should return characters sorted from A to Z', () => {
    const arrOrderedAz = [
      {
        "name": "Albert Einstein",
        "status": "Dead",
        "gender": "Male",
        "episode": 5
      },
      {
        "name": "Annie",
        "status": "Alive",
        "gender": "Female",
        "episode": 2
      },
      {
        "name": "Brad Anderson",
        "status": "Dead",
        "gender": "Male",
        "episode": 3
      },
      {
        "name": "Morty Smith",
        "status": "Alive",
        "gender": "Male",
        "episode": 1
      },
      {
        "name": "Rick Sanchez",
        "status": "Alive",
        "gender": "Male",
        "episode": 4
      },
      {
        "name": "Summer Smith",
        "status": "Alive",
        "gender": "Female",
        "episode": 6
      },
    ]
    expect(sortArr(data.results, "az")).toStrictEqual(arrOrderedAz);
  });


  it('should return characters sorted from Z to A', () => {
    const arrOrderedZa = [
      {
        "name": "Summer Smith",
        "status": "Alive",
        "gender": "Female",
        "episode": 6
      },
      {
        "name": "Rick Sanchez",
        "status": "Alive",
        "gender": "Male",
        "episode": 4
      },
      {
        "name": "Morty Smith",
        "status": "Alive",
        "gender": "Male",
        "episode": 1
      },
      {
        "name": "Brad Anderson",
        "status": "Dead",
        "gender": "Male",
        "episode": 3
      },
      {
        "name": "Annie",
        "status": "Alive",
        "gender": "Female",
        "episode": 2
      },
      {
        "name": "Albert Einstein",
        "status": "Dead",
        "gender": "Male",
        "episode": 5
      },
    ]
    expect(sortArr(data.results, "za")).toStrictEqual(arrOrderedZa);
  });

  it('should return characters ordered by episode', () => {
    const arrOrderedEp = [
      {
        "name": "Morty Smith",
        "status": "Alive",
        "gender": "Male",
        "episode": 1
      },
      {
        "name": "Annie",
        "status": "Alive",
        "gender": "Female",
        "episode": 2
      },
      {
        "name": "Brad Anderson",
        "status": "Dead",
        "gender": "Male",
        "episode": 3
      },
      {
        "name": "Rick Sanchez",
        "status": "Alive",
        "gender": "Male",
        "episode": 4
      },
      {
        "name": "Albert Einstein",
        "status": "Dead",
        "gender": "Male",
        "episode": 5
      },
      {
        "name": "Summer Smith",
        "status": "Alive",
        "gender": "Female",
        "episode": 6
      }
    ]


    expect(sortArr(data.results, 'episode')).toStrictEqual(arrOrderedEp)
  })
});

