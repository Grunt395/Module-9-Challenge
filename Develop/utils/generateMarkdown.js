// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    // if (license === 0) {
    //   return "";
    // }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    // if (license === 0) {
    //   return "";
    // }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    // if (license === 0) {
    //   return "";
    // }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
        # ${data.title}

        ${data.license}

        ### Description

        ${data.description}

        ### Table of Contents
        * Installation

        ## Installation
        To install run the following commands:
        \`\`\`

        ## Usage
        ${data.usage}

        ${data.license}

        ## Contributing

        ${data.contributing}
        
        ## Test

        ${data.test}
        
        ## Have some Questions? Reach me here at:

        Email: ${data.email}
        Github: (https://github.com/${data.github})
    `;
}

module.exports = generateMarkdown;
