const axios = require('axios');
const Chance = require('chance');
const slugify = require('slugify');
const db = require('../database');

const chance = new Chance();

const getFigures = () => axios.get('http://www.amiiboapi.com/api/amiibo/')
  .then(res => res.data)
  .then(data => {
    const { amiibo } = data;
    return amiibo
      .filter(item => item.type === 'Figure')
      .slice(0, 50)
      .map(item => {
        const { name, amiiboSeries, image } = item;
        return { name, amiiboSeries, image };
      });
  });

const randomizeAmiibo = (amiiboSeries, name) => {
  const slug = slugify(`${amiiboSeries}-${name}`, {
    lower: true, remove: /[*+~.()'"!:@]/g
  });
  const reference = chance.integer({ min: 2000, max: 999999 })
    .toString()
    .padStart(6, '0'); // 17829  => '017829'
  const description = chance.sentence({ words: 5 });
  const price = chance.integer({ min: 10, max: 30 });
  const stock = chance.integer({ min: 5, max: 100 });
  return {
    amiiboSeries,
    name,
    slug,
    reference,
    description,
    price,
    stock
  };
};

const insertAmiibo = amiibo => db.queryAsync(
  'INSERT INTO amiibo SET ?', amiibo
);

getFigures()
  .then(figures => {
    return figures.map(figure => {
      const amiibo = randomizeAmiibo(figure.amiiboSeries, figure.name);
      return { ...amiibo, ...figure };
    });
  })
  .then(amiibos => {
    const promises = amiibos.map(
      amiibo => insertAmiibo(amiibo)
    );
    return Promise.all(promises);
  })
  .then(() => process.exit());
