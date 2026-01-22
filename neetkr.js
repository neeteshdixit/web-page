const fs = require('fs');

let studentData = "Name: John Doe\nAge: 20\nGrade: A";

fs.writeFile('student.txt', studentData, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('Student data has been saved to student.txt');
    }
});
