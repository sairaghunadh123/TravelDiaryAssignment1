const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/config');
const authRoutes = require('./routes/auth');
const diaryEntryRoutes = require('./routes/diaryEntries');

const app = express();

// Middleware
app.use(bodyParser.json());

// Sync database models with SQLite
sequelize.sync()
    .then(() => console.log('Database synchronized'))
    .catch(err => console.error('Database synchronization error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/diary-entries', diaryEntryRoutes);

// Start the server
const PORT = process.env.PORT || 3006;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
