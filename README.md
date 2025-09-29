npm install
npx playwright test

# AutomationExercise-Playwright-NoBDD

Automated end-to-end testing suite for the [Automation Exercise](https://automationexercise.com/) website using Playwright and JavaScript. This project covers user registration, login, contact forms, and scenario-based flows to ensure the website's core features work as expected.

## Features
- Automated UI tests for login, registration, contact forms, and scenarios
- Organized test structure by feature
- Uses Playwright for fast, reliable browser automation
- Generates HTML reports on test failures

## Folder Structure

```
src/
  test-data/         # Sample files and data for testing (e.g., uploads)
  tests/
    Contact/         # Contact Us feature tests
    TestScenario/    # Scenario-based tests
    User/            # User login and registration tests
playwright.config.js # Playwright configuration
package.json         # Project dependencies and scripts
README.md            # Project documentation
```

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Install Playwright browsers:**
   ```sh
   npx playwright install
   ```

3. **Run all tests:**
   ```sh
   npx playwright test
   ```

4. **Run a specific test file:**
   ```sh
   npx playwright test src/tests/User/Login.spec.js
   ```

5. **View HTML test report:**
   After a test run, open the HTML report:
   ```sh
   npx playwright show-report
   ```

## Technologies Used
- [Playwright](https://playwright.dev/)
- JavaScript (ES6)

## Author
Rishabh Jha

## License
ISC