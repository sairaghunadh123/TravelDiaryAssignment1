// utils/validation.js

exports.validateDiaryEntryInput = (title, description, date, location) => {
    const errors = {};

    // Validate title
    if (!title || title.trim() === '') {
        errors.title = 'Title must not be empty';
    }

    // Validate description
    if (!description || description.trim() === '') {
        errors.description = 'Description must not be empty';
    }

    // Validate date
    if (!date || !isValidDate(date)) {
        errors.date = 'Invalid date';
    }

    // Validate location
    if (!location || location.trim() === '') {
        errors.location = 'Location must not be empty';
    }

    return {
        errors,
        valid: Object.keys(errors).length === 0
    };
};

// Function to check if a date is in valid format (YYYY-MM-DD)
function isValidDate(dateString) {
    // Regular expression to validate date in YYYY-MM-DD format
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(dateString);
}
