// Dynamic import from the GitHub Pages URL of your json2html.js
import json2html from "https://saarikakathula.github.io/Straive-exam/json2html.js";

// Example data to test the function
const data = [
  { Name: "Alice", Age: 25 },
  { Name: "Bob", Age: 30 },
  { Name: "Charlie", Age: 35, Gender: "M" }
];

// Call the function and log the result
const htmlTable = json2html(data);
console.log(htmlTable);  // This will log the HTML table as a string
