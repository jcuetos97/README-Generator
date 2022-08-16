// Function returns a license badge based on which license is passed in
// If there is no license, it returns an empty string
function renderLicenseBadge(license) {
  if (license !== "no license") {
    return `[${license}](https://choosealicense.com/licenses/${license})`;
    } else {
      return " ";
    }
}

// Function returns the license link
// If there is no license, it returns an empty string
function renderLicenseLink(license) {
  if (license !== "no license") {
    return `[${license}](https://choosealicense.com/licenses/${license})`;
    } else {
      return " ";
    }
}

// Function returns the license section of README
// If there is no license, it returns an empty string
function renderLicenseSection(license) {
  if (license !== "no license") {
    return `[${license}](https://choosealicense.com/licenses/${license})`;
    } else {
      return " ";
    }
}

// Generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

    ${renderLicenseBadge(data.license)}
    
    ## Table-of-Contents
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    ${renderLicenseLink(data.license)}
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    
    ## [Description](#table-of-contents)
    ${data.description}
    ## [Installation](#table-of-contents)
    ${data.installation}
    ## [Usage](#table-of-contents)
    ${data.usageInfo}  
    ${renderLicenseSection(data.license)}
    ## [Contributing](#table-of-contents)
    ${data.contribute}
    ## [Tests](#table-of-contents)
    ${data.test}
    ## [Questions](#table-of-contents)
    
    Please contact me using the following links:
    [GitHub](https://github.com/${data.githubUsername})
    [Email: ${data.emailAddress}](mailto:${data.emailAddress})
  `;
  }


module.exports = generateMarkdown;