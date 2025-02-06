// importo l'array dei post
const posts = require("../data/postData");

// index
function index(req, res) {
    res.json(posts)
}

// show
function show(req, res) {

    // recuperiamo l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id)

    // cerchiamo il post tramite id
    const post = posts.find(post => post.id === id);

    // Facciamo il controllo
    if (!post) {

        //Imposto lo status 404
        res.status(404)

        // Restituisco un JSON con le altre informazioni
        return res.json({
            error: "Not Found",
            message: "Post non trovato"
        })
    }
    // Restituiamolo sotto forma di JSON
    res.json(post);
}

// store
function store(req, res) {
    res.send('Creazione nuovo post');
}

// update
function update(req, res) {
    res.send('Modifica integrale del post' + req.params.id);
}

// modify
function modify(req, res) {
    res.send('Modifica parziale del post ' + req.params.id);
}

// destroy
function destroy(req, res) {

    // recuperiamo l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id)

    // cerchiamo il post tramite id
    const post = posts.find(post => post.id === id);

    // Facciamo il controllo
    if (!post) {

        //Imposto lo status 404
        res.status(404)

        // Restituisco un JSON con le altre informazioni
        return res.json({
            error: "Not Found",
            message: "Post non trovato"
        })
    }

    // Rimuoviamo il post dalla pagina
    posts.splice(posts.indexOf(post), 1);
    
    // Restituiamo lo status corretto
    res.sendStatus(204)

    // log di riscontro
    console.log(posts);
    
}

// esporto tutto
module.exports = { index, show, store, update, modify, destroy }