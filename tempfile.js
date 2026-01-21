app.get('/profile', (req, res) => {
  const name = req.query.name;
  // Vulnerable: reflected XSS
  res.send(`<html><body><h1>Welcome, ${name}!</h1></body></html>`);
});