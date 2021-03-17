
const orm = require('../config/orm.js');

const burger = {
  all(cb) {
    orm.all('burger', (res) => cb(res));
  },
  
  create(cols, vals, cb) {
    orm.create('burger', cols1, col2, val1, val2, (res) => cb(res));
  },

  update(objColVals, condition, cb) {
    orm.update('burger', objColVals, condition, (res) => cb(res));
  },
};

module.exports = burger;