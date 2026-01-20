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

app.post('/search', (req, res) => {
  const { username, email } = req.body;
  const sql = `SELECT * FROM users WHERE username = '${username}' OR email = '${email}'`;
  db.query(sql, (err, results) => {
    res.json(results);
  });
});