// creo la funzione per gestire gli errori
function notFound(req, res, next) {
    res.status(404)
    res.json({
        error: "Not Found",
        message: "Pagina non trovata"
    });
};

// esporto la funzione per il not found
module.exports = notFound;