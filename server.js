const express = require('express');
const path = require('path');

const app = express();
const porta = process.env.PORT || 3000;

app.disable('x-powered-by');
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(porta, '0.0.0.0', () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});
