const query = 'SELECT * FROM users WHERE id = ?';
db.query(query, [userId], (err, result) => {
  // handle result
});

const allowedHosts = ['api.example.com', 'static.example.com'];
const parsed = new URL(url);
if (!allowedHosts.includes(parsed.hostname)) {
  return res.status(400).json({ error: 'Invalid URL' });
}
const response = await axios.get(url);
res.json(response.data);