const express = require('express')();
const PORT = 8080;

app.use(express.json())

app.get('/number',(req, res) => {
     
});
app.listen(
    PORT,
    () => console.log(`number-service is running on port http://localhost:${PORT}`) 
)
