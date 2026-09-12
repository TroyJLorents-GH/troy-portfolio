const { handler } = require('../netlify/functions/chat');

module.exports = async function chat(req, res) {
  const result = await handler({
    httpMethod: req.method,
    body: typeof req.body === 'string' ? req.body : JSON.stringify(req.body || {})
  }, {});

  for (const [name, value] of Object.entries(result.headers || {})) {
    res.setHeader(name, value);
  }
  res.status(result.statusCode || 500).send(result.body || '');
};
