Steps to test figure1 signup page:
Download and install node v7.8.0 from https://nodejs.org/download/release/v7.8.0/ for your particular OS.
Open command prompt, Install Selenium-standalone globally by typing "npm install selenium-standalone -g" once that is done type "install selenium-standalone" and wait for installation to finish.
Create a github account at https://github.com/join?source=header-home
Login to your github account at https://github.com/login?return_to=%2Fjoin%3Fsource%3Dheader-home
Clone the contents of repo from https://github.com/kalianaveen/SQAT06/tree/Assignment
In the cloned folder run command prompt and type "npm install". This will install all packages needed to run the test script.
Once the installation is finished type ".\node_modules\.bin\cucumber-js  -f json:test\report\cucumber_report.json" in command prompt. This will run the test. The result of test will be indicated in command prompt. Green dots indicate a passed step. Red F means a failed step.
To generate a html report once the test is finished type "node index.js" in command prompt.