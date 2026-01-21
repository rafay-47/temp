function escapeHtml(str) {
  return str.replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
}
app.get('/search-results', (req, res) => {
  const query = escapeHtml(req.query.q || '');
  res.send(`<div>Search results for: ${query}</div>`);
});