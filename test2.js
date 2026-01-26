app.post('/convert', (req, res) => {
  const filename = req.body.filename;
  // Vulnerable: command injection via filename
  exec(`ffmpeg -i uploads/${filename} output.mp4`, (err, stdout) => {
    res.send('Converted');
  });
});