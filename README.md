# Automated Testing with CodeceptIO

This repository contains automated tests implemented using CodeceptIO framework for testing the [Al Jazeera](https://aljazeera.com/) website.

## Project Structure

The project is structured as follows:

- **tests**: Contains test scenarios written in BDD format using Gherkin syntax.
  - **features**: Feature files (`*.feature`) defining Given, When, Then scenarios.
- **tests/acceptance**: Contains step definitions and page objects used in the tests.
  - **page_objects**: Page Object Model classes representing web pages and their elements.
- **reports**: Contains test reports generated by Allure plugin.
  - **allure-results**: Raw test results.
  - **allure-report**: HTML report generated from test results.

## Prerequisites

Before running the tests, ensure you have the following installed:

- Node.js
- CodeceptJS
- Google Chrome browser
- Allure Command Line Interface (CLI) for generating and viewing reports.

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/Amiroseyn/Al-Jazeera_assignment/
   ```

2. Install dependencies:

    ```bash
    cd <project_folder>
    npm install
    ```

## Running Tests
### Running all tests

  ```bash
  npx codeceptjs run --plugins allure
  ```

### Run Tests by Tag
To run tests with specific tags:

  ```bash
  npx codeceptjs run --grep @tagName --plugins allure
  ```

Replace @tagName with the desired tag (e.g., @Desktop, @Mobile, @Live).

## Viewing Test Reports
After running tests, generate and view Allure reports using the following commands:

```bash
allure generate reports/allure-results --clean -o reports/allure-report
allure open reports/allure-report
```
This will open an interactive report in your default browser.

## Troubleshooting

Known Issues and Solutions
- **Test Recognition**: Ensure correct paths are configured in codecept.conf.js.
- **Page Object Import**: Double-check page object file imports.
- **Advertisement Playback**: Implement logic to handle advertisement interruptions.
- **Mobile Testing**: Use resizeWindow() to simulate mobile viewport.
- **Slow Test Execution**: Investigate and optimize browser wait times and test logic.


## Contributors
Amir Vafaei
ChatGPT3.5

