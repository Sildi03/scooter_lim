var http = require("http");

function elabora_richiesta(richiesta, risposta) {
  var testo = `<h1>Hello World</h1>`;
  risposta.end(testo);
}

var s = http.createServer(elabora_richiesta);
s.listen(process.env.PORT || 8080);