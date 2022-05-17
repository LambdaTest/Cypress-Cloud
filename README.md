# Cypress-Cloud

Cypress is a modern web front-end testing tool built with JavaScript Mocha. Cypress testing operates directly on the browsers without the need for Selenium. Its unique DOM manipulation technique makes it a very developer and QA-friendly tool.

With this **LambdaTest** and **Cypress** integration, LambdaTest not only allows you to perform Cypress testing on an online automation cloud but also allows you to perform cross-browser testing at scale. In this document, we will see how to get started with Cypress testing on the LambdaTest platform.

## Pre-requisites To Run Your Cypress Tests

---

Before we get started, make sure to clone the [LambdaTest's sample Cypress Kitchen Sink repo](https://github.com/4DvAnCeBoY/cypress-example-kitchensink), used in this document. You can run your first Cypress test on the LambdaTest platform in a few simple steps:

- **Step 1:** Clone the `LambdaTest-Cypress` kitchen sink example Github repo and navigate to the cloned directory.

  ```bash
  git clone https://github.com/cypress-io/cypress-example-kitchensink.git
  cd cypress-example-kitchensink
  ```

- **Step 2: Installing the LambdaTest CLI -**
  You need to install the **LambdaTest-Cypress CLI** package with the help of npm, using the below command:

  ```bash
  npm install -g lambdatest-cypress-cli
  ```

- **Step 3: Setup configurations on which you want to run your test -**
  Once you have installed the LambdaTest-Cypress CLI, now you need to setup the configuration. You can do that using the below command:

  ```bash
  lambdatest-cypress init
  ```
