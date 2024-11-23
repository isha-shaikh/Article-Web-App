const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Articles array of objects
const articles = [
  {
    id: 1,
    title: "Introduction to React",
    summary:
      "Learn the basics of React, a powerful library for building user interfaces",
    content:
      "React is a JavaScript library for building user interfaces. It is maintained by Facebook.,React is a powerful JavaScript library designed for building interactive and dynamic user interfaces. Originally developed by Facebook in 2013, it has become one of the most popular tools for creating single-page applications (SPAs). If you’re new to React, this guide will introduce you to its core concepts and why it’s worth learning.What is React?React is a component-based library that allows developers to break down their application into smaller, reusable pieces called components. These components can handle their own logic and rendering, making development more efficient and scalable.",
    featuredImage: "https://via.placeholder.com/300x200?text=React",
    reporterName: "John Doe",
  },
  {
    id: 2,
    title: "Getting Started with Express",
    summary:
      "An overview of Express.js, a lightweight Node.js web application framework.",
    content:
      "Express is a minimal and flexible Node.js web application framework that provides a robust set of features...",
    featuredImage: "https://via.placeholder.com/300x200?text=Express",
    reporterName: "Jane Smith",
  },
  {
    id: 3,
    title: "Understanding JavaScript Closures",
    summary: "A deep dive into closures, a core concept in JavaScript.",
    content:
      "Closures are a fundamental concept in JavaScript that allow functions to access variables...",
    featuredImage: "https://via.placeholder.com/300x200?text=JavaScript",
    reporterName: "Alice Johnson",
  },
  {
    id: 4,
    title: "CSS Grid Layout",
    summary:
      "Explore the powerful features of CSS Grid for creating modern web layouts.",
    content:
      "CSS Grid Layout is a two-dimensional layout system for the web. It lets developers design layouts...",
    featuredImage: "https://via.placeholder.com/300x200?text=CSS+Grid",
    reporterName: "Robert Brown",
  },
  {
    id: 5,
    title: "Responsive Design Tips",
    summary:
      "Tips and tricks for making your websites look great on any device.",
    content:
      "Responsive design ensures that your website works on all devices, from mobile phones to desktops...",
    featuredImage: "https://via.placeholder.com/300x200?text=Responsive+Design",
    reporterName: "Emily Davis",
  },
  {
    id: 6,
    title: "Responsive Design Tips",
    summary:
      "Tips and tricks for making your websites look great on any device.",
    content:
      "Responsive design ensures that your website works on all devices, from mobile phones to desktops...",
    featuredImage: "https://via.placeholder.com/300x200?text=Responsive+Design",
    reporterName: "Emily Davis",
  },
  {
    id: 7,
    title: "Responsive Design Tips",
    summary:
      "Tips and tricks for making your websites look great on any device.",
    content:
      "Responsive design ensures that your website works on all devices, from mobile phones to desktops...",
    featuredImage: "https://via.placeholder.com/300x200?text=Responsive+Design",
    reporterName: "Emily Davis",
  },
];

// Route to get all articles
app.get("/articles", (req, res) => {
  res.json(articles);
});

// Route to get a single article by ID
app.get("/articles/:id", (req, res) => {
  const articleId = parseInt(req.params.id);
  const article = articles.find((a) => a.id === articleId);

  if (article) {
    res.json(article);
  } else {
    res.status(404).json({ message: "Article not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
