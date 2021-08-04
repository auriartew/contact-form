const express = require('express'); 
const app = express(); 
const sesClient = require('./ses-client');
const port = process.env.PORT || 5000; 

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

app.use(express.json());
app.use(express.urlencoded());

// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
}); 

// POST route for receiving submissions
app.post('/api/submit', (req, res) => {
    sesClient.sendEmail('user@example.com', "Thank you for contacting...");
    res.sendStatus(200);
})