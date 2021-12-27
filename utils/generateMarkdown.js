// Created a function to generate markdown for README

// renders the license and image
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Badge](https://img.shields.io/badge/License-${license}-blueviolet)`;
  } else {
    return "";
  }
}
// function to generate the data to be used in the table of contents
function generateMarkdown(data) {
  return `
  
  # ${data.title}
  
  # Table of Contents
[Description](#description)
[Installations](#installations)
[Usage](#usage)
[Credits](#credits)
[License](#license)
[Test](#test)
[Questions](#questions)
 
  # Description
   ${data.description}

  # Installation
  ${data.installation}

  # Usage
  ${data.usage} 
  
  # Credits
  ${data.credits}

  # License
  ${renderLicenseBadge(data.license)}
  
  # test
  ${data.test}
  # Questions? Connect with me:

  **name** ${data.name}

  **Github Profile:** www.github.com/${data.github}/
  
  **Email Address:** ${data.email}
`;
}

//generateMardown needed to be export from the index.js to get all the data information from there using exports

module.exports = { generateMarkdown };
