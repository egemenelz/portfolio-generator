const inquirer = require('inquirer');

// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is your name?'
//     }
//   ])
//   .then(answers => console.log(answers));

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ]);
};

promptUser().then(answers => console.log(answers));
























// This is how we do manually, 

// const profileDataArgs = process.argv.slice(2, process.argv.length);

// const name = profileDataArgs[0];
// const gitHub = profileDataArgs[1];

// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, gitHub);

// fs.writeFile('index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });

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