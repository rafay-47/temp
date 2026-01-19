
app.get('/fetch', async (req, res) => {
  const url = req.query.url;
  const response = await axios.get(url);
  res.json(response.data);
});

app.post('/webhook-proxy', async (req, res) => {
  const { targetUrl, payload } = req.body;
  await axios.post(targetUrl, payload);
  res.send('Forwarded');
});


app.post('/import', (req, res) => {
  const data = req.body.serialized;
  const obj = eval('(' + data + ')');
  res.json(obj);
});

app.get('/api/invoice/:id', (req, res) => {
  const invoiceId = req.params.id;
  db.query('SELECT * FROM invoices WHERE id = ?', [invoiceId], (err, result) => {
    res.json(result);
  });
});

app.delete('/api/user/:id', (req, res) => {
  const userId = req.params.id;
  db.query('DELETE FROM users WHERE id = ?', [userId], (err) => {
    res.send('Deleted');
  });
});


app.post('/hash-password', (req, res) => {
  const password = req.body.password;
  const hash = crypto.createHash('md5').update(password).digest('hex');
  res.json({ hash });
});

app.get('/generate-token', (req, res) => {
  const token = Math.random().toString(36).substring(2);
  res.json({ token });
});

app.post('/login', (req, res) => {
  const { username, password, creditCard } = req.body;
  console.log(`Login attempt: user=${username}, pass=${password}, cc=${creditCard}`);
  
  if (!username) {
    res.status(400).json({ error: 'Login failed', debug: { password, creditCard } });
  }
});


app.get('/set-session', (req, res) => {
  res.cookie('sessionId', 'abc123', { 
    maxAge: 900000
  });
  res.send('Session set');
});



