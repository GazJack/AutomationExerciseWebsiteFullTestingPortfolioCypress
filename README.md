# :rocket: Automation Exercise Website Full Testing Portfolio (Cypress)

This repository contains the full suite of automated tests for the **Automation Exercise** website using **Cypress**. The goal is to validate various aspects of the website, including user interactions, product listings, authentication, and more. All tests are designed to be scalable and maintainable for future growth.

## :books: Description

This repository includes end-to-end tests built with Cypress to verify the functionality and performance of the **Automation Exercise** website. The tests cover various features such as:

- **User Registration and Login**
- **Product Search and Filtering**
- **Order Placement and Checkout**
- **Error Handling and Edge Cases**
  
The tests are executed in a real browser to simulate user behavior, ensuring that the website performs as expected under different conditions.

## :package: Project Setup

 :arrow_right: Clone the repository

To get started, clone the repository to your local machine:

```bash
git clone https://github.com/GazJack/AutomationExerciseWebsiteFullTestingPortfolioCypress.git
cd AutomationExerciseWebsiteFullTestingPortfolioCypress
```
:gear: Install Dependencies
Ensure that you have Node.js and npm installed. Then, install the required dependencies using the following command:

```
npm install
```

This will install Cypress and any other necessary packages.

:rocket: Open Cypress

To run the Cypress tests, use the following command:

```
npx cypress open
```

This will open the Cypress Test Runner, where you can choose to run the tests in a browser.

:checkered_flag: Running the Tests in Headless Mode

To run all the tests in headless mode (without opening the browser window), use this command:

```
npx cypress run
```

## :memo: Writing Tests
Tests in this repository are located in the cypress/integration folder. To add new tests or modify existing ones, you can create new test files or edit the current ones.

Each test is designed to verify a specific feature or user flow on the website.

## :warning: Example of Writing a Test
Here’s a simple example of a Cypress test that checks if the homepage loads correctly:

describe('Homepage', () => {
  it('should load the homepage', () => {
    cy.visit('https://www.automationexercise.com');
    cy.contains('Home').should('be.visible');
  });
});

## :memo: Contributing
Contributions are welcome! If you'd like to contribute to the project, please fork the repository, create a new branch, and submit a pull request. Make sure your tests pass before submitting.

:arrow_right: Steps to contribute:

✏️ Fork the repository.

:wrench: Create a new branch: git checkout -b feature/your-feature.

:pencil2: Commit your changes: git commit -m 'Add feature'.

:rocket: Push your changes: git push origin feature/your-feature.

📩 Open a pull request.

## :star: License
This project is licensed under the MIT License. See the LICENSE file for more details.

