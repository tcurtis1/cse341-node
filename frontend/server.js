const express = require('express');
const app = express();
const port = 8080;

// Sample data to mimic the frontend's expected structure
const professionalData = {
  professionalName: "John Doe",
  base64Image: "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==",
  nameLink: { firstName: "John", url: "https://example.com" },
  primaryDescription: "A skilled web developer.",
  workDescription1: "Works on front-end technologies.",
  workDescription2: "Passionate about JavaScript.",
  linkTitleText: "Social Links",
  linkedInLink: { text: "LinkedIn Profile", link: "https://linkedin.com/in/johndoe" },
  githubLink: { text: "GitHub Profile", link: "https://github.com/johndoe" }
};

// Endpoint to serve the data
app.get('/professional', (req, res) => {
  res.json(professionalData);
});

// Serve static files (e.g., index.html and style.css)
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});