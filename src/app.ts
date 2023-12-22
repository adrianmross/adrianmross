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

const githubUsername = "adrianmross";
// const websiteUrl = "https://bolajiayodeji.com";
// const blogUrl = "https://blog.bolajiayodeji.com";
// const newsletterUrl = "https://bawd.bolajiayodeji.com";
// const youtubeUrl = "https://youtube.com/c/bolajiayodeji";
// const slidesUrl = "https://slides.com/bolajiayodeji";
// const twitterUrl = "https://twitter.com/iambolajiayo";
// const linkedinUrl = "https://linkedin.com/in/iambolajiayo";
// const githubSponsorsUrl = "https://github.com/sponsors/BolajiAyodeji";
// const patreonUrl = "https://patreon.com/bolajiayodeji";

async function generateMarkdown() {
//   const websiteBadge = `[![Website Badge](https://img.shields.io/badge/-Website-3B7EBF?style=for-the-badge&logo=amp&logoColor=white)](${websiteUrl})`;
//   const hashnodeBadge = `[![Blog Badge](https://img.shields.io/badge/-Blog-3B7EBF?style=for-the-badge&logo=Hashnode&logoColor=white)](${blogUrl})`;
//   const substackBadge = `[![Newsletter Badge](https://img.shields.io/badge/-Newsletter-3B7EBF?style=for-the-badge&logo=Substack&logoColor=white)](${newsletterUrl})`;
//   const youtubeBadge = `[![YouTube Badge](https://img.shields.io/badge/-Youtube-3B7EBF?style=for-the-badge&logo=Youtube&logoColor=white)](${youtubeUrl})`;
//   const slidesBadge = `[![Slides Badge](https://img.shields.io/badge/-Slides-3B7EBF?style=for-the-badge&logo=slides&logoColor=white)](${slidesUrl})`;
//   const linkedinBadge = `[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-3B7EBF?style=for-the-badge&logo=Linkedin&logoColor=white)](${linkedinUrl})`;
//   const twitterBadge = `[![Twitter Badge](https://img.shields.io/badge/-@iambolajiayo-3B7EBF?style=for-the-badge&logo=x&logoColor=white)](${twitterUrl})`;
//   const githubSponsorsBadge = `[![GitHub Sponsors Badge](https://img.shields.io/badge/-github%20sponsors-3B7EBF?style=for-the-badge&logo=github&logoColor=white)](${githubSponsorsUrl})`;
//   const patreonBadge = `[![Patreon Badge](https://img.shields.io/badge/-Patreon-3B7EBF?style=for-the-badge&logo=Patreon&logoColor=white)](${patreonUrl})`;

  const githubBadge = `[![GitHub Badge](https://img.shields.io/badge/-@adrianmross-%2312100E?style=flat-square&logo=GitHub&logoColor=white&link=https://www.github.com/adrianmross/)](https://www.github.com/adrianmross/)`;
  const linkedinBadge = `[![Linkedin Badge](https://img.shields.io/badge/-@adrianmross-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/adrianmross/)](https://www.linkedin.com/in/adrianmross/)`;
  const instaBadge = `[![Instagram Badge](https://img.shields.io/badge/-@adrian_m_ross-e1306c?style=flat-square&labelColor=e1306c&logo=instagram&logoColor=white&link=https://www.instagram.com/adrian_m_ross/)](https://www.instagram.com/adrian_m_ross/)`;
  const twitterBadge = `[![Twitter Badge](https://img.shields.io/badge/-@adrianmross-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/adrianmross)](https://twitter.com/adrianmross)`;
  const profileCountBadge = `![Profile Views Count Badge](https://komarev.com/ghpvc/?username=${githubUsername}&style=flat-square)`;

  const githubStatsCardDark = `[![GitHub-Stats-Card-Dark](https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&hide_border=true&include_all_commits=true&card_width=600&rank_icon=github&custom_title=GitHub%20Open%20Source%20Stats&title_color=3B7EBF&text_color=FFF&icon_color=3B7EBF&hide=contribs&show=reviews,prs_merged,prs_merged_percentage&theme=transparent#gh-dark-mode-only)](https://github.com/${githubUsername}/${githubUsername}#gh-dark-mode-only)`;
  const githubStatsCardLight = `[![GitHub-Stats-Card-Light](https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&hide_border=true&include_all_commits=true&card_width=600&rank_icon=github&custom_title=GitHub%20Open%20Source%20Stats&title_color=3B7EBF&text_color=474A4E&icon_color=3B7EBF&hide=contribs&show=reviews,prs_merged,prs_merged_percentage&theme=transparent#gh-light-mode-only)](https://github.com/${githubUsername}/${githubUsername}#gh-light-mode-only)`;

  const markdownText = `

  ### Hi there 👋
  <p>\n
  - 🔭 I’m currently working on a B.S. degree in Computer Science and Business @ Lehigh University.\n
  - 🌱 I’m currently learning about Decentralized Identifiers, Hierarchical Consensus for Blockchain Systems, and Scalable Systems.\n
  - 💬 Ask me about the Lehigh CSB program or blockchain opportunities at Lehigh.\n
  - 📫 How to reach me: [LinkedIn](https://www.linkedin.com/in/adrianmross/) @adrianmross\n
  - 🌎 Where I've lived: 🇺🇸 (OH, NY, NJ, KS, PA), USA; 🇨🇿 Praha, Czech Republic; 🇨🇭 Basel, Switzerland;\n
  - ⚡ Hobbies : ☕ Making Coffee, ⛷️ Skiing, 🎹 Piano
  </p>\n
  ---\n

  ${githubBadge} ${linkedinBadge} ${instaBadge} ${twitterBadge} \n

  ---\n

  <div align="center">\n

  ${githubStatsCardDark}\n
  ${githubStatsCardLight}\n

  </div>\n

  ---\n

  ## Highlights

  <details>\n
  <summary>OSS Projects</summary>\n
  <br />
  Here are some of my other projects you might want to check out that are not pinned:\n
  <br />\n<br />
  ${await fetchGitHubData(ossProjectRepos)}\n
  </details>\n

  ---\n`;

  const result = md.render(markdownText);

  fs.writeFile("README.md", result, (error) => {
    if (error) throw new Error(`Something went wrong: ${error}.`);
    console.log(`✅ README.md file was succesfully generated.`);
  });
}

generateMarkdown();
