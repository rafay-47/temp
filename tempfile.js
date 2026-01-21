app.get('/search-results', (req, res) => {
  const query = req.query.q;
  // Vulnerable: XSS in search results
  res.send(`<div>Search results for: ${query}</div>`);
});