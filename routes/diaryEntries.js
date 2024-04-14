const express = require('express');
const router = express.Router();
const diaryEntryController = require('../controllers/diaryEntryController');
const authMiddleware = require('../middleware/authMiddleware');

// Create a new diary entry
router.post('/', authMiddleware.authenticateUser, diaryEntryController.createDiaryEntry);

// Get all diary entries
router.get('/', authMiddleware.authenticateUser, diaryEntryController.getAllDiaryEntries);

// Get a single diary entry
router.get('/:id', authMiddleware.authenticateUser, diaryEntryController.getDiaryEntryById);

// Update a diary entry
router.put('/:id', authMiddleware.authenticateUser, diaryEntryController.updateDiaryEntry);

// Delete a diary entry
router.delete('/:id', authMiddleware.authenticateUser, diaryEntryController.deleteDiaryEntry);

module.exports = router;
