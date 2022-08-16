// Function returns a license badge based on which license is passed in
// If there is no license, it returns an empty string
function renderLicenseBadge(license) {
  if (license !== "no license") {
    return `![badge](https://img.shields.io/badge/license-${license}-blue)`;
    } else {
      return " ";
    }
}

// Function returns the license link
// If there is no license, it returns an empty string
function renderLicenseLink(license) {
  if (license !== "no license") {
    return `[License](https://choosealicense.com/licenses/${license})`;
    } else {
      return " ";
    }
}

// Function returns the license section of README
// If there is no license, it returns an empty string
function renderLicenseSection(license) {
  if (license !== "no license") {
    return ` 
  ## [License](#table-of-contents)
  The application is covered under the following license:
  ${renderLicenseLink(license)}
  `;
    } else {
      return " ";
    }
}

// Function returns the contribution section of README
function renderContributionSection(confirmContribution, contribute) {
  if (confirmContribution) {
    return ` 
  ${contribute}
  `;
    } else {
      return "For the moment this project does not accept contributions from third parties. Thank you for your interest.";
    }
}

// Generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## [Description](#table-of-contents)

  ${data.description}
  
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  
  ## [Installation](#table-of-contents)

  ${data.installation}

  ## [Usage](#table-of-contents)

  ${data.usageInfo}  

  ${renderLicenseSection(data.license)}

  ## [Contributing](#table-of-contents)

  ${renderContributionSection(data.confirmContribution, data.contribute)}

  ## [Tests](#table-of-contents)

  ${data.test}
  
  ## [Questions](#table-of-contents)
  
  Please contact me using the following links:
  *[GitHub: ${data.githubUsername}](https://github.com/${data.githubUsername})
  *[Email: ${data.emailAddress}](mailto:${data.emailAddress})
  `;
  }


module.exports = generateMarkdown;
