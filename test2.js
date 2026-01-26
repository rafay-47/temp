const { execFile } = require('child_process');
app.post('/convert', (req, res) => {
  const filename = req.body.filename;
  // Validate filename: allow only alphanumeric and .mp4
  if (!/^[a-zA-Z0-9_-]+\.mp4$/.test(filename)) {
    return res.status(400).send('Invalid filename');
  }
  const inputPath = path.join(__dirname, 'uploads', filename);
  execFile('ffmpeg', ['-i', inputPath, 'output.mp4'], (err, stdout) => {
    if (err) return res.status(500).send('Conversion failed');
    res.send('Converted');
  });
});