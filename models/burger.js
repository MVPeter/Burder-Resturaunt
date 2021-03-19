
const orm = require('../config/orm.js');

const burger = {
  all(cb) {
    orm.all('burger', (res) => cb(res));
  },
  
  //vals1 is the burger name
  create(vals1, cb) {
    orm.create('burger', 'burger_name', vals1, (res) => cb(res));
  },

  //objColVals is the value of 'eaten' true/false.
  //condition is the ID of the burger row
  update(objColVals, condition, cb) {
    orm.updateEaten(objColVals, condition, (res) => cb(res));
  },
};

module.exports = burger;