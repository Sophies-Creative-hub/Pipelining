import express from 'express';

const PORT = process.env.PORT || 5500;

const app = express();

// Statische Dateien im Ordner 'frontend' bereitstellen
app.use(express.static('frontend'));

app.listen(PORT, () => {
    console.log(`App läuft auf Port ${PORT}`);
});
