const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);
const shortid = require('shortid');

// Set some defaults (required if your JSON file is empty)
db.defaults({ users: [] })
  .write();

module.exports = db;