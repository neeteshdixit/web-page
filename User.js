// // get method for all users 
// const express = require("express");
// const app = express();
// app.get('/', (req, res) => {
//     const users = [
//         { id: 1, name: 'Alice' },
//         { id: 2, name: 'Bob' },
//         { id: 3, name: 'Charlie' }
//     ];
//     res.json(users); // send json response
// });

// const port = 3000;
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });

// get method for single user by id
const express = require("express");
const app = express();
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' }
    ];
    const user = users.find(u => u.id == userId);
    if (user) {
        res.json(user); // send json response
    } else {
        res.status(404).send('User not found');
    }   
});
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});