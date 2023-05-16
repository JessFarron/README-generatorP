// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `[![Github license](https://img.shields.io/badge/license-${license}-blue.svg)](https://opensource.org/licenses/MPL-2.0)`;
  }
  return "";
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
let link = "";

if (license === 'MIT') {
link = 'https://opensource.org/licenses/MIT';
} else if (license === 'APACHE2.0') {
link = 'https://opensource.org/licenses/Apache-2.0';
} else if (license === 'MPL2.0') {
link = 'https://opensource.org/licenses/MPL-2.0';
} else if (license === 'BSD2') {
link = 'https://opensource.org/licenses/BSD-2-Clause';
} else if (license === 'BSD3') {
link = 'https://opensource.org/licenses/BSD-3-Clause';
} else {
  link = '';
  }

return link;
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  } else {
    return `## License
    This project is covered under the ${license} license. To learn more about what this means, click the license button at the top.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
## Description
${data.description}
## Deployed Application URL
[${data.link}](https://${data.link})
## Screenshot
![alt-text](${data.screenshot})
## Table of Contents
* [Installation instructions](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Testing](#testing)
* [Questions](#questions)
## Installation instructions
${data.require}
## Usage
${data.usage}
${renderLicenseSection(data.license)}
## Contributors
${data.contributors}
## Testing
${data.test}
## Questions
Please send your questions here mail to: [${data.email}](${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).

`;
}

module.exports = generateMarkdown;
