// diaryEntryController.js

const DiaryEntry = require('../models/diaryEntry');

// Create a new diary entry
exports.createDiaryEntry = async (req, res) => {
    try {
        const { title, description, date, location, photos } = req.body;
        const userId = req.user.userId; // Extracted from JWT token

        const diaryEntry = await DiaryEntry.create({ title, description, date, location, photos, userId });

        res.status(201).json(diaryEntry);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get all diary entries for a user
exports.getAllDiaryEntries = async (req, res) => {
    try {
        const userId = req.user.userId; // Extracted from JWT token

        const diaryEntries = await DiaryEntry.findAll({ where: { userId } });

        res.status(200).json(diaryEntries);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get a single diary entry by ID
exports.getDiaryEntryById = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.userId; // Extracted from JWT token

        const diaryEntry = await DiaryEntry.findOne({ where: { id, userId } });

        if (!diaryEntry) {
            return res.status(404).json({ message: 'Diary entry not found' });
        }

        res.status(200).json(diaryEntry);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Update a diary entry
exports.updateDiaryEntry = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, date, location, photos } = req.body;
        const userId = req.user.userId; // Extracted from JWT token

        const diaryEntry = await DiaryEntry.findOne({ where: { id, userId } });

        if (!diaryEntry) {
            return res.status(404).json({ message: 'Diary entry not found' });
        }

        await diaryEntry.update({ title, description, date, location, photos });

        res.status(200).json(diaryEntry);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Delete a diary entry
exports.deleteDiaryEntry = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.userId; // Extracted from JWT token

        const diaryEntry = await DiaryEntry.findOne({ where: { id, userId } });

        if (!diaryEntry) {
            return res.status(404).json({ message: 'Diary entry not found' });
        }

        await diaryEntry.destroy();

        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
