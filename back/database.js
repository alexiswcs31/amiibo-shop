const mysql = require('mysql');
const util = require('util');
const settings = require('./settings.json');

const database = mysql.createConnection(settings);
database.queryAsync = util.promisify(database.query.bind(database));
module.exports = database;
