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

  const githubBadge = `[![GitHub Badge](https://img.shields.io/badge/-@adrianmross-%2312100E?style=flat-square&logo=GitHub&logoColor=white&link=${githubUrl})](${githubUrl})`;
  const linkedinBadge = `[![Linkedin Badge](https://img.shields.io/badge/-@adrianmross-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/adrianmross/)](https://www.linkedin.com/in/adrianmross/)`;
  const instaBadge = `[![Instagram Badge](https://img.shields.io/badge/-@adrian_m_ross-e1306c?style=flat-square&labelColor=e1306c&logo=instagram&logoColor=white&link=https://www.instagram.com/adrian_m_ross/)](https://www.instagram.com/adrian_m_ross/)`;
  const twitterBadge = `[![Twitter Badge](https://img.shields.io/badge/-@adrianmross-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/adrianmross)](https://twitter.com/adrianmross)`;
  const profileCountBadge = `![Profile Views Count Badge](https://komarev.com/ghpvc/?username=${githubUsername}&style=flat-square)`;

  const githubStatsCardDark = `[![GitHub-Stats-Card-Dark](https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&hide_border=true&include_all_commits=true&card_width=600&rank_icon=github&custom_title=GitHub%20Open%20Source%20Stats&title_color=3B7EBF&text_color=FFF&icon_color=3B7EBF&hide=contribs&show=reviews,prs_merged,prs_merged_percentage&theme=transparent#gh-dark-mode-only)](https://github.com/${githubUsername}/${githubUsername}#gh-dark-mode-only)`;
  const githubStatsCardLight = `[![GitHub-Stats-Card-Light](https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&hide_border=true&include_all_commits=true&card_width=600&rank_icon=github&custom_title=GitHub%20Open%20Source%20Stats&title_color=3B7EBF&text_color=474A4E&icon_color=3B7EBF&hide=contribs&show=reviews,prs_merged,prs_merged_percentage&theme=transparent#gh-light-mode-only)](https://github.com/${githubUsername}/${githubUsername}#gh-light-mode-only)`;

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
    <li>🔭 I'm currently working on 🪪 decentralized identity and 🌎 global consensus models for a blockchain team.</li>
    <li>🌱 I’m currently learning about different 💽 database designs, 0️⃣ ZKPs, and 🕵️ distribured architectures.</li>
    <li>📫 How to reach me: <a href="https://www.linkedin.com/in/adrianmross/">LinkedIn</a> @adrianmross</li>
    <li>🎿 My hobbies are : ☕ Making Coffee, 🧑‍🍳 Cooking, ⛷️ Skiing</li>
  </ul>\n
  ---\n
  <div align="center">\n
  ${githubBadge} ${linkedinBadge} ${instaBadge} ${twitterBadge} \n

  ${githubStatsCardDark}\n
  ${githubStatsCardLight}\n

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
