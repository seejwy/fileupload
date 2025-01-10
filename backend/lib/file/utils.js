const csv = require('csv-parser');
const fs = require('fs');

function fetchData() {
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

async function getData(page = 1) {
  const data = await fetchData();
  return(getDataByPage(data, page))
}

async function getDataByPage(data, page = 1, query) {
  const ITEMS_TO_SHOW = 10;
  const totalPages = Math.ceil(data.length / ITEMS_TO_SHOW);
  const url = `/file/${query ? `search/${query}/`: ''}page/`

  const results = {
    data: data.slice((page - 1) * ITEMS_TO_SHOW, page * ITEMS_TO_SHOW),
    currentPage: page,
    totalRecords: data.length,
    prev: page > 1 ? `${url}${Number(page) - 1}` : null,
    next: page < totalPages ? `${url}${Number(page) + 1}` : null,
    goto: `${url}{page}`,
  }
  return results;
}

async function getDataBySearch(query, page)  {
  const data = await fetchData();
  const results =data.filter(item => {
    return (
      item.name?.toLowerCase().includes(query) ||
      item.email?.toLowerCase().includes(query) ||
      item.body?.toLowerCase().includes(query)
    );
  });

  return getDataByPage(results, page, query);
}

module.exports = { getData, getDataBySearch }