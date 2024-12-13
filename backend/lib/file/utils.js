const csv = require('csv-parser');
const fs = require('fs');
const getData = () => {
  return new Promise((res) => {
    const results = [];
    fs.createReadStream('uploads/data.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      res(results);
    });
  })
}

async function getDataBySearch(query)  {
  const data = await getData();
  const result = data.filter((item) => {
    return (
      item.name?.toLowerCase().includes(query) ||
      item.email?.toLowerCase().includes(query) ||
      item.body?.toLowerCase().includes(query)
    );
  })

  return result;
}

module.exports = { getData, getDataBySearch }