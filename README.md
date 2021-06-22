# GSTestAssignment


## About

This repository has the testscases implemented for the assignment provided by Grid Singularity assignment https://github.com/gridsingularity/interview_tasks/blob/master/qa_engineer/task_description.md. This project is written in Javascript using Cypress library and integrated with Cucumber for writing test cases. This also has the capability to generate reports and save screenshots and video recording of the test run.


## Installation

This project requires you to have `npm` already installed in the env where you're planning to run. All the required dependencies are already added to `package.json`.

**Note**: The below instructions are already tested in different machines by different developers and have been verified it'll work unless there are issues with dependencies conflicts. If there are any issues with installing dependencies, uninstall all the dependencies and reinstall it using the `package.json` or try installing them one by one using `npm`.

### _Setup Instructions_

1. Clone this repository's `main` branch into your local
2. Navigate using the terminal, to the directory where you've cloned it (root directory of the project where `package.json` is present)
3. Run `npm install`
4. Once everything is installed properly you should be able see the node modules packages created under the project
5. Run `npm test` to execute the tests. 

This should run the tests headlessly in an electron browser. Alternatively, you can also use Cypress client to execute the tests (for that please ensure that Cypress client is installed).



## Deliverables

After the tests are run, you can see the html reports generated my mochawesome under the `reports` folder.
There are screenshots of the test failures and a video recording of the entire test is generated under `videos/features` folder. It'll be in the mp4 format and can be viewed using any mainstream video players.

## Development

Tests are written using Cucumber and since each Scenario/Feature requires to start the browser repeatedly, I've combined all the test cases under 1 Scenario. 

The `GSTestSteps.js` has all the step definitions for the Cucumber steps from the `GSTest.feature`

I used Page Objects to return an object to steps definition method, but since the imports of page object classes in the step definition file were not resolved properly using browserify plugin, I moved the cypress selectors from the Page Objects class to step definition class.
