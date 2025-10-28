const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware para parsear query params e headers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET endpoint para /webhook
app.get('/webhook', (req, res) => {
  console.log('\n=== WEBHOOK RECEBIDO ===');
  console.log('Headers:', req.headers);
  console.log('Query:', req.query);
  console.log('URL:', req.url);
  console.log('Método:', req.method);
  console.log('========================\n');
  
  res.json({ 
    status: 'received',
    message: 'Webhook recebido com sucesso!',
    data: {
      query: req.query,
      headers: req.headers
    }
  });
});

app.post('/webhook', (req, res) => {
  console.log('\n=== WEBHOOK RECEBIDO ===');
  console.log('Headers:', req.headers);
  console.log('Query:', req.query);
  console.log('URL:', req.url);
  console.log('Método:', req.method);
  console.log('Body:', req.body);
  console.log('========================\n');
  
  res.json({ 
    status: 'received',
    message: 'Webhook recebido com sucesso!',
    data: {
      query: req.query,
      headers: req.headers
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`Webhook disponível em http://localhost:${PORT}/webhook`);
});

