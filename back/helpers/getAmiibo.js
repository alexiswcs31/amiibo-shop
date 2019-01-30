const database = require('../database');

const getAmiibo = () => database.queryAsync('SELECT * FROM amiibo');

module.exports = getAmiibo;
