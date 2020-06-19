const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const conectDB = require('./db/connectDB');
app.use(cors());
conectDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const rotasDetractor = require('./rotas/detractors');
const rotasCoders = require('./rotas/coders')
const rotasRedlettermedia = require('./rotas/redlettermedia')
const rotasLogs = require('./rotas/logs')
app.use(rotasDetractor);
app.use(rotasCoders);
app.use(rotasRedlettermedia);
app.use(rotasLogs)

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Conectado na porta ${port}`)
})
