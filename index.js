const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const mensaje = 'Hola Mundo, pipeline prog 3!\n'
  res.end(mensaje);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
