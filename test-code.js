app.get('/user', (req, res) => {
  const userId = req.query.id;
  const query = `SELECT * FROM users WHERE id = ${userId}`;
  db.query(query, (err, result) => {
    res.json(result);
  });
});

app.get('/fetch', async (req, res) => {
  const url = req.query.url;
  const response = await axios.get(url);
  res.json(response.data);
});