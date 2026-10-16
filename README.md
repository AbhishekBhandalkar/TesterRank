# TesterRank – Playwright Automation Framework

A personal UI test automation project built using **Playwright and TypeScript**, demonstrating reusable framework design, end-to-end testing, authentication management, and CI/CD integration.

**Repository:** [TesterRank on GitHub](https://github.com/AbhishekBhandalkar/TesterRank)

## Overview

This project automates key e-commerce workflows on the TesterRank application. It follows the **Page Object Model (POM)** and uses custom Playwright fixtures to organize test code, reuse page interactions, and simplify test setup.

## Technology Stack

- **Automation Tool:** Playwright
- **Programming Language:** TypeScript
- **Test Framework:** Playwright Test
- **Design Pattern:** Page Object Model (POM)
- **Runtime and Package Management:** Node.js and npm
- **Version Control:** Git and GitHub
- **CI/CD:** GitHub Actions

## Automated Test Scenarios

| Test Scenario | Validation |
|---|---|
| Login | Verify successful login |
| Product selection | Validate product price |
| Shopping cart | Add a product to the cart |
| Checkout | Complete delivery address and checkout steps |
| Order confirmation | Verify the order confirmation message |

## Framework Highlights

- **Page Object Model:** Separates page locators and interactions from test workflows.
- **Custom Fixtures:** Reuses page objects and prepares test prerequisites.
- **Authentication Management:** Uses Playwright storage state for authenticated test execution.
- **Environment Configuration:** Reads test credentials from environment variables and validates required configuration.
- **Assertions:** Validates application outcomes rather than relying only on successful clicks.
- **Reporting and Debugging:** Uses Playwright reporting and debugging capabilities.
- **CI/CD Integration:** Runs automated tests through GitHub Actions and uploads the HTML report as a workflow artifact.

## Project Structure

```text
TesterRank/
├── constants/
│   └── urls.ts
├── fixtures/
│   └── fixture.ts
├── pages/
│   ├── BasePage.ts
│   ├── CatalogPage.ts
│   ├── CheckOutPage.ts
│   └── LoginPage.ts
├── tests/
│   ├── auth.setup.ts
│   ├── catalog.spec.ts
│   ├── checkout.spec.ts
│   └── login.spec.ts
├── utils/
│   └── env.ts
├── playwright.config.ts
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

The authentication-state directory is generated during test execution and should not be committed to Git.

## Prerequisites

- Node.js and npm
- Git
- Internet access to the target application
- Valid test-account credentials

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/AbhishekBhandalkar/TesterRank.git
cd TesterRank
```

### 2. Install dependencies

```bash
npm ci
```

### 3. Install Playwright browsers

```bash
npx playwright install
```

For Linux CI environments, the GitHub Actions workflow installs the browsers and required system dependencies.

### 4. Configure environment variables

Create a `.env` file in the project root:

```dotenv
TEST_USERNAME=your_test_username
TEST_PASSWORD=your_test_password
```

Replace the placeholders with valid test credentials. Never commit `.env`, passwords, tokens, or generated authentication-state files to GitHub.

## Running Tests

Run the complete test suite:

```bash
npx playwright test
```

Run tests in Chromium:

```bash
npx playwright test --project=chromium
```

Run the login test:

```bash
npx playwright test tests/login.spec.ts --project=chromium
```

Run the catalog test:

```bash
npx playwright test tests/catalog.spec.ts --project=chromium
```

Run the checkout test:

```bash
npx playwright test tests/checkout.spec.ts --project=chromium
```

View the HTML report:

```bash
npx playwright show-report
```

## CI/CD Integration

The project uses GitHub Actions to automate Playwright test execution on pushes and pull requests targeting the `main` or `master` branches.

The workflow installs dependencies and browsers, executes the test suite, and uploads the HTML report as a GitHub Actions artifact. Test credentials are supplied through GitHub Actions repository secrets rather than hardcoded in the workflow.

The `playwright-report` artifact can be downloaded from the corresponding workflow run.

## Learning Objectives

This project demonstrates practical application of:

- Playwright automation with TypeScript
- Page Object Model and reusable page classes
- Custom fixtures and test setup
- Authentication and storage-state management
- Environment-variable configuration
- Assertions, reporting, and debugging
- CI/CD integration using GitHub Actions

## Project Status

This is an evolving personal automation project developed to strengthen practical Playwright and TypeScript skills. The documented scenarios reflect the current scope of the project, with additional coverage planned as development continues.

## Disclaimer

This repository is a personal learning project and is not presented as commercial automation experience for an employer or client.