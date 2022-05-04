const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2, process.argv.length);

const name = profileDataArgs[0];
const gitHub = profileDataArgs[1];

// const generatePage = () => 'Name : Egemen, GitHub : egemenelz';
//  =====================
// const generatePage = (userName, gitHubName) => `Name : ${userName}, GitHub : ${gitHubName}`;
//  =====================
// const generatePage = (userName, gitHubName) =>{
//   return `
//   Name: ${userName}
//   GitHub: ${gitHubName}
//   `;
// }





//console.log(generatePage(name, gitHub));

fs.writeFile('index.html', generatePage(name, gitHub), err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});