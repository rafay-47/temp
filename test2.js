app.get('/ping', (req, res) => {
  const host = req.query.host;
  // Vulnerable: user input directly in shell command
  exec(`ping -c 4 ${host}`, (error, stdout) => {
    res.send(stdout);
  });
});
