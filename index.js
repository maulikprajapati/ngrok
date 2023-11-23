const express = require("express");
let url;
const ngrok = require('ngrok');
(async function () {
    url = await ngrok.connect();
    console.log('==========CONNECTED=================', url)
})();


const app = express();
const PORT = process.env.PORT || 3030;

// your code

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});

app.get('/url', (req, res) => {
    res.send(url);
});

module.exports = app