import express from "express";

const app = new express();

const PORT = 3005;

const booked = [];

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.get('/confirm', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/confirm.html`);
});

app.post('/submit', (req, res) => {
    const data = req.body;
    booked['timestamp'] = new Date();

    console.log(data);

    booked.push(data);
    console.log(booked);

    res.sendFile(`${import.meta.dirname}/views/confirm.html`);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});