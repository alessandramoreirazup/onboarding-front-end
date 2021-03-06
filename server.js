const express = require('express');
const path = require('path');
const nomeApp = process.env.npm_package_name;
const app = express();
 
var distDir = __dirname + "/dist/";
 app.use(express.static(distDir));
 
app.get('/*', (req, res) => {
res.sendFile(path.join(`$/dist/$/index.html`));
});
 
app.listen(process.env.PORT || 8080);