// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  // If there is no license
  if (license !== 'No License') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  // Return an empty string
  return '';
}
// Function that returns the license link
function renderLicenseLink(license) {
  // If there is no license
  if (license !== 'No License') {
    return `\n* [License](#license)\n`;
  }
  // Return an empty string
  return '';
}
// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  // If there is no license
  if (license !== 'No License') {
    return `## License

This application is licensed under the ${license} license.`;
  }
  // Return an empty string
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## [Description]

  ${data.description}

  ## Table-of-Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)


  ## [Installation]

  Run the following command to install dependencies:

  ${data.installation}

  ## [Usage]

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## [Contributing]
  
  ${data.contributing}

  ## [Tests]

  Run test using the following command:

  ${data.test}

  ## [Questions]

  Please contact me using the following links for any additional questions:

  [GitHub](https://github.com/${data.githubUsername})

  [Email: ${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;