import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 3000;

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

// Serve static build if present (production)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, 'dist');
try {
  app.use(express.static(distPath));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api') || req.path === '/health') return next();
    res.sendFile(path.join(distPath, 'index.html'));
  });
} catch (err) {
  // If dist doesn't exist, ignore — server still exposes /health
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

export default app;