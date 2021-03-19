const connection = require('./connection.js');

// Object Relational Mapper (ORM)

const orm = {
    all(tableInput, cb) {
        const queryString = 'SELECT * FROM ??;';
        connection.query(queryString,
            [tableInput],
            (err, result) => {
                if (err) { throw err; }
                cb(result);
            }
        );
    },

    //Table is Burger
    //cols1 is burger_name
    //vals1 is new burger name
    create(table, cols1, vals1, cb) {
        const queryString = 'INSERT INTO ?? (??) VALUES (?)';
        connection.query(
            queryString,
            [table, cols1, vals1],
            (err, result) => {
                if (err) { throw err; }
                cb(result);
            }
            );
            console.log(queryString);
    },

    //objColVals is eaten status
    //condition is ture/false
    updateEaten(objColVals, condition, cb) {
        let queryString = 'UPDATE burger SET eaten = ? WHERE id = ?';
        // console.log(queryString);
        connection.query(queryString,
            [objColVals, condition],
            (err, result) => {
                if (err) {
                    throw err;
                }
                cb(result);
            }
        );
    },
};

module.exports = orm;
