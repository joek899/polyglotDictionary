const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/polyglot_dictionary', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Schemas
const wordSchema = new mongoose.Schema({
  language: { type: String, required: true },
  word: { type: String, required: true },
  meaning: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const languageSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Word = mongoose.model('Word', wordSchema);
const Language = mongoose.model('Language', languageSchema);

// Routes
app.get('/api/languages', async (req, res) => {
  const languages = await Language.find().select('name');
  res.json(languages);
});

app.post('/api/languages', async (req, res) => {
  try {
    const { name, description } = req.body;
    const language = new Language({ name, description });
    await language.save();
    res.status(201).json({ message: 'Language proposed' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/api/words', async (req, res) => {
  const { word, language } = req.query;
  const query = {};
  if (word) query.word = new RegExp(word, 'i');
  if (language) query.language = language;
  const words = await Word.find(query);
  res.json(words);
});

app.post('/api/words', async (req, res) => {
  try {
    const { language, word, meaning } = req.body;
    const newWord = new Word({ language, word, meaning });
    await newWord.save();
    res.status(201).json({ message: 'Word added' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});