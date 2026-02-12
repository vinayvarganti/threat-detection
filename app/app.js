const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("DevSecOps Demo App");
});

// Intentional SQL Injection vulnerability for demo
app.get("/user", (req, res) => {
    const id = req.query.id;
    const query = "SELECT * FROM users WHERE id=" + id;
    res.send("Query executed: " + query);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
