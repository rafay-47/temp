app.get('/profile', (req, res) => {
  const name = req.query.name;
  res.send(`<html><body><h1>Welcome, ${name}!</h1></body></html>`);
});

app.get('/search-results', (req, res) => {
  const query = req.query.q;
  res.send(`<div>Search results for: ${query}</div>`);
});
