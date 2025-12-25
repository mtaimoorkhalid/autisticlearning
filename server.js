import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// These lines mimic "__dirname" which doesn't exist in Module mode
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Serve the 'dist' folder (where React builds to)
app.use(express.static(path.join(__dirname, 'dist')));

// Fix the "Refresh" 404 error
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
