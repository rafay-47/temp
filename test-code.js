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
const response = await axios.get(url, { timeout: 5000, validateStatus: null });