"use strict";

// Modules
const express = require("express");
const session = require("express-session");
const cors = require("cors");

const cacheRouter = require("./src/routes/cache.routes");

// Global app constants
const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(session({ 
  "secret": "ajf943qy3hpof802082ehf", 
  cookie: { "maxAge": 2628000 } // 1 month 
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/cache", cacheRouter);

app.get("/", (req, res) => {
  res.json({ 
    "name": "ZenCache",
    "by": "Geoffrey Siele",
    "for": "Zencastr",
  });
});

// Fallback error handler for 404 page-not-found
app.use((req, res, next) => {
  const error = new Error("Page not found!");
  res.status(404).json({
    message: "We couldn't find that page.",
  });
  next(error);
});

// Default error handler
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({ error: error.message });
});

app.listen(PORT, () => console.log(`\nServer running on port ${PORT}\n`));
