const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const rotasDetractor = require('./rotas/detractors');
const rotasCoders = require('./rotas/coders')
const rotasRedlettermedia = require('./rotas/redlettermedia')
app.use(rotasDetractor);
app.use(rotasCoders);
app.use(rotasRedlettermedia);

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Conectado na porta ${port}`)
})
