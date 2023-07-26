var express = require('express');
var cors = require('cors');
var app = express();
var port = 8081;

var { connectDatabase, dropDatabase, sendQuery } = require('./database');
var { questions, helpers } = require('./config');

connectDatabase();

app.use(cors({
    origin: '*'
}));

app.get('/', function (req, res) {
    res.send('Pong');
    return;
});

app.get('/listagens/estados', async function (req, res) {
    
    try {
        console.log("Checking query ...", helpers.estados);
        const response = await sendQuery(helpers.estados);
        res.json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
    return;
});

app.get('/pergunta/:queryNum', async function (req, res) {
    
    try {
        if (req.params.queryNum > questions.length || req.params.queryNum < 1) {
            res.status(400).json({
                error: "Invalid query number"
            });
            return;
        }
        let query = questions[req.params.queryNum - 1];
        
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

