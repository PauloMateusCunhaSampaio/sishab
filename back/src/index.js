var express = require('express');
var cors = require('cors');
var app = express();
var port = 6969;

var { connectDatabase, dropDatabase, sendQuery } = require('./database');
var { queries } = require('./config');

connectDatabase();

app.use(cors({
    origin: '*'
}));

app.get('/', function (req, res) {
    res.send('Pong');
    return;
});

app.get('/:queryNum', async function (req, res) {
    try {
        if (req.params.queryNum > queries.length || req.params.queryNum < 1) {
            res.status(400).json({
                error: "Invalid query number"
            });
            return;
        }
        let query = queries[req.params.queryNum - 1];
        // const query = "SELECT DISTINCT txt_uf FROM sishab";
        console.log("Checking query ...", query);
        const response = await sendQuery(query);
        res.json({
            query, response
        });
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
    return;
});


app.listen(port, () => {
    console.log(`🚀 Server running @ http://localhost:${port}`);
})

