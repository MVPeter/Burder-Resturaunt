const connection = require('./connection.js');

// Object Relational Mapper (ORM)

const orm = {
    all(tableInput, cb) {
        const queryString = 'SELECT * FROM ??;';
        connection.query(queryString,
            [tableInput],
            (err, result) => {
                if (err) {throw err;}
                cb(result);
            }
        );
    },

    create(table, col1, col2, val1, val2, cb) {
        const queryString = 'INSERT INTO ?? (??, ??) VALUES (?, ?)';
        console.log(queryString);
        connection.query(
            queryString,
            [table, col1, col2, val1, val2],
            (err, result) => {
                if (err) {throw err;}
                cb(result);
            }
        );
    },

    update(tableInput, objColVals, condition, cb) {
        const queryString = 'UPDATE ?? SET ?? WHERE id = ?';
        console.log(queryString);
        connection.query(queryString,
            [tableInput, objColVals, condition ],
            (err, result) => {
                if (err) throw err;
                cb(result);

            })
    }
};

module.exports = orm;
