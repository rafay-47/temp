const allowedHosts = new Set(['api.example.com', 'static.example.com']);
const allowedSchemes = new Set(['https:']);

function isUrlSafe(input) {
  try {
    const parsed = new URL(input);
    if (!allowedSchemes.has(parsed.protocol)) return false;
    if (!allowedHosts.has(parsed.hostname)) return false;
    // Resolve DNS and ensure IP is not private/internal
    const ips = dns.lookupSync(parsed.hostname, { all: true });
    for (const { address } of ips) {
      if (isPrivateIp(address)) return false;
    }
    return true;
  } catch {
    return false;
  }
}

if (!isUrlSafe(url)) {
  return res.status(400).json({ error: 'Invalid URL' });
}
// Resolve and verify IP right before the request
const { hostname, protocol } = new URL(url);
if (!allowedSchemes.has(protocol) || !allowedHosts.has(hostname)) {
  return res.status(400).json({ error: 'Invalid URL' });
}
const ips = await dns.promises.lookup(hostname, { all: true });
for (const { address } of ips) {
  if (isPrivateIp(address)) {
    return res.status(400).json({ error: 'Invalid URL' });
  }
}
const response = await axios.get(url, { timeout: 5000, maxRedirects: 0, validateStatus: null });