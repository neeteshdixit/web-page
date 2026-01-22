const fs = require('fs');

fs.readFile('student.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
    } else {
        console.log('Student Data:\n', data);
    }
});