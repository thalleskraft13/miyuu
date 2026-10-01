const express = require('express');
const path = require('path');

const app = express();
const porta = process.env.PORT || 4007;
const pasta = path.join(__dirname, 'public');

app.disable('x-powered-by');
app.use(express.static(pasta));

app.use((req, res) => {
  res.sendFile(path.join(pasta, 'index.html'));
});

app.listen(porta, '0.0.0.0', () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});
