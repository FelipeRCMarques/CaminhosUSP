const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "caminhUSP"
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("conectado")
  });


  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

  