// importo express 
const express = require('express');
const app = express();
const port = 3000;

// importo il file delle rotte
const postsRouter = require('./routers/postRouter');
const errorsHandler = require('./middlewares/errorsHandler');

// middleware file statici cartella public
app.use(express.static('public'));

// registro il body-parser
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Server del mio blog")
})

// richiamo il file delle rotte
app.use("/posts", postsRouter)

// // test errore
// dsadasda;

// registro il middleware degli errori
app.use(errorsHandler);


app.listen(port, () => {
    console.log(`Esempio di applicazione in ascolto sulla porta ${port}`)
})