const express = require('express');
const path = require('path');
const app = express();

// Sajikan file statis dari folder 'view'
app.use(express.static(path.join(__dirname, 'view')));

// Route utama langsung ke index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'index.html'));
});

// Port dinamis untuk Vercel atau lokal
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});

module.exports = app;
