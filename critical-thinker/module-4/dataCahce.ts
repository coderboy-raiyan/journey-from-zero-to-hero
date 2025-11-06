const dataCache = new Map();

const expensiveTask = (id: number) => {
  return {
    id,
    data: `Some data for Id : ${id}`,
    timestamp: new Date().getTime(),
  };
};

const getData = (id: number) => {
  if (dataCache.has(id)) {
    return dataCache.get(id);
  }
  const data = expensiveTask(id);

  dataCache.set(id, data);
};

console.log(dataCache);
console.log(getData(123));
console.log(getData(123));
console.log(dataCache);
