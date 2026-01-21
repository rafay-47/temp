function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

app.get('/profile', (req, res) => {
  const name = escapeHtml(req.query.name || '');
  res.send(`<html><body><h1>Welcome, ${name}!</h1></body></html>`);
});