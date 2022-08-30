import { filterData, filterName, sortDataAz, sortDataEpisode, sortDataZa } from '../src/data.js';
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

describe('sorts the array from A to Z', () => {
  it('is a function', () => {
    expect(typeof sortDataAz).toBe('function');
  });

  it('should return elements in alphabetic order', () => {
    const arrOrdered = {
      "info": {
        "count": 6,
        "pages": 1,
      },
      "results": [
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
    }
    expect(data.results.sort(sortDataAz)).toStrictEqual(arrOrdered.results);
  });
});

describe('sorts the array from Z to A', () => {
  it('is a function', () => {
    expect(typeof sortDataZa).toBe('function');
  });

  it('should return elements in reverse alphabetic order', () => {
    const arrOrdered = {
      "info": {
        "count": 6,
        "pages": 1,
      },
      "results": [
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
    }
    expect(data.results.sort(sortDataZa)).toStrictEqual(arrOrdered.results);
  });
});

describe('sorts the array by episode order', () => {
  it('is a function', () => {
    expect(typeof sortDataEpisode).toBe('function');
  });

  it('should return elements in episode order', () => {
    const arrOrdered = {
      "info": {
        "count": 6,
        "pages": 1,
      },
      "results": [
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
        },
      ]
    }
    expect(data.results.sort(sortDataEpisode)).toStrictEqual(arrOrdered.results);
  });
});
