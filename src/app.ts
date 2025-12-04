import * as fs from "fs";
const md = require("markdown-it")({
  html: true, // Enable HTML tags in source
  breaks: true, // Convert '\n' in paragraphs into <br>
  linkify: true, // Autoconvert URL-like text to links
});
import { fetchRssData } from "./fetchRssData";
import { fetchGitHubData } from "./fetchGitHubData";

// const blogFeedUrl = "https://blog.<domain>.com/rss.xml";
// const newsletterFeedUrl = "https://bawd.<domain>.com/feed";

const ossProjectRepos = [
  "adrianmross",
];

const baseUrl = "https://";
const githubUsername = "adrianmross";
const githubUrl = `${baseUrl}github.com/${githubUsername}`;

async function generateMarkdown() {

  const profileCountBadge = `![Profile Views Count Badge](https://komarev.com/ghpvc/?username=${githubUsername}&style=flat-square)`;
  
  const markdownText = `

  ### Hi there 👋\n

  <!--
  **adrianmross/adrianmross** is a ✨ _special_ ✨ repository because its README.md (this file) appears on your GitHub profile.
  Here are some ideas to get you started:
  - 🔭 I’m currently working on ...
  - 🌱 I’m currently learning ...
  - 👯 I’m looking to collaborate on ...
  - 🤔 I’m looking for help with ...
  - 💬 Ask me about ...
  - 📫 How to reach me: ...
  - 😄 Pronouns: ...
  - ⚡ Fun fact: ...
  -->

  <ul>
    <li>🔭 I'm currently working on 🪪 decentralized identity.</li>
    <li>🌱 I’m currently learning about different 💽 database designs, 0️⃣ ZKPs, and 🕵️ distribured architectures.</li>
    <li>🎿 My hobbies are : ☕ Making Coffee, 🧑‍🍳 Cooking, ⛷️ Skiing</li>
  </ul>\n
  ---\n
  <div align="center">\n

  </div>\n

  <!--
  ---\n

  ## Highlights

  <details>\n
  <summary>OSS Projects</summary>\n
  <br />
  Here are some of my other projects you might want to check out that are not pinned:\n
  <br />\n<br />
  ${await fetchGitHubData(ossProjectRepos)}\n
  </details>\n

  ---\n
  -->
  `;

  const result = md.render(markdownText);

  fs.writeFile("README.md", result, (error) => {
    if (error) throw new Error(`Something went wrong: ${error}.`);
    console.log(`✅ README.md file was succesfully generated.`);
  });
}

generateMarkdown();
