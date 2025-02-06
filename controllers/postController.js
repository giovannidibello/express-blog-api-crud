
// index
function index(req, res) {
    res.send('Lista dei post');
}

// show
function show(req, res) {
    res.send('Dettagli del post ' + req.params.id);
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
    res.send('Eliminazione del post ' + req.params.id);
}

// esporto tutto
module.exports = { index, show, store, update, modify, destroy }