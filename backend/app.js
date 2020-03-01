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
app.use(rotasDetractor);
app.use(rotasCoders)

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Conectado na porta ${port}`)
})
