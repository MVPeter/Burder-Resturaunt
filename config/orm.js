const connection = require('./connection.js');

// Object Relational Mapper (ORM)

const orm = {
    all(tableInput, cb) {
        const queryString = 'SELECT * FROM ??;';
        connection.query(
            queryString,
            [tableInput],
            (err, result) => {
                if (err) {throw err;}
                console.log(result);
            }
        );
    },

    create(table, col1, col2, val1, val2 cb) {
        const queryString = 'INSERT INTO ?? (??, ??) VALUES (?, ?)';
        console.log(queryString);
        connection.query(
            queryString,
            [table, col1, col2, val1, val2],
            (err, result) => {
                if (err) {throw err;}
                console.log(result);
            }
        );
    },

    update(tableInput, objColVals, condition, valOfCol) {
        const queryString = 'UPDATE ?? SET ?? WHERE ?? = ?';
        console.log(queryString);
        connection.query(queryString,
            [tableInput, objColVals, condition, valOfCol],
            (err, result) => {
                if (err) throw err;
                console.log(result);

            })
    }
};

module.exports = orm;
