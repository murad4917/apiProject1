import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, This is my first Express server and Api project!');
});
app.get('/api', (req, res) => {
    res.json({ message: 'Welcome to MY first  API Project!' });
});

app.get('/about', (req, res) => {
    res.send({ ' message': 'I am a student of Evangdi Tec . I am learning web development and I am very excited to learn more about it.' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 