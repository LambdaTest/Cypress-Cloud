# Run Cypress Tests On LambdaTest ![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)

<img height="500" class ="centre" src="https://user-images.githubusercontent.com/70570645/171032160-65d8a2c3-e04b-482d-b1c6-538b75be5fb0.png">

<p align="center">
  <a href="https://www.lambdatest.com/blog/?utm_source=github&utm_medium=repo&utm_campaign=cypress-cloud" target="_bank">Blog</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.lambdatest.com/support/docs/?utm_source=github&utm_medium=repo&utm_campaign=cypress-cloud" target="_bank">Docs</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.lambdatest.com/learning-hub/?utm_source=github&utm_medium=repo&utm_campaign=cypress-cloud" target="_bank">Learning Hub</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.lambdatest.com/newsletter/?utm_source=github&utm_medium=repo&utm_campaign=cypress-cloud" target="_bank">Newsletter</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.lambdatest.com/certifications/?utm_source=github&utm_medium=repo&utm_campaign=cypress-cloud" target="_bank">Certifications</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.youtube.com/c/LambdaTest" target="_bank">YouTube</a>
</p>
&emsp;
&emsp;
&emsp;

*Learn how to get started with Cypress testing on the LambdaTest platform 🚀*

[<img height="70" width="220" src="https://user-images.githubusercontent.com/70570645/171866795-52c11b49-0728-4229-b073-4b704209ddde.png">](https://accounts.lambdatest.com/register)

## Table of Contents 🗏


* [Pre-requisites](#pre-requisites)
* [Running Your First Cypress Test On LambdaTest Platform](#running-your-first-cypress-test-on-lambdatest)
* [Local Testing With Cypress](#running-your-cypress-tests-locally)
* [Authentication](#authentication)
* [Cypress Parallel Testing](https://github.com/LambdaTest/Cypress-Cloud/blob/master/cypress-docs/parallel-testing.md)
* [Specify Browsers And OS](https://github.com/LambdaTest/Cypress-Cloud/blob/master/cypress-docs/supported-browsers-os.md)
* [Supported Cypress Versions](https://github.com/LambdaTest/Cypress-Cloud/blob/master/cypress-docs/supported-cypress-versions.md)
* [Cypress CLI Commands](https://github.com/LambdaTest/Cypress-Cloud/blob/master/cypress-docs/cypress-cli.md)
* [Run Settings](https://github.com/LambdaTest/Cypress-Cloud/blob/master/cypress-docs/run-settings.md)
* [Download Artefact For Cypress Project](https://github.com/LambdaTest/Cypress-Cloud/blob/master/cypress-docs/download-artefacts.md)
* [Integrate LambdaTest With Cypress Dashboard](https://github.com/LambdaTest/Cypress-Cloud/blob/master/cypress-docs/cypress-dashboard.md)
* [Execute Cypress Tests Including Private Dependencies](https://github.com/LambdaTest/Cypress-Cloud/blob/master/cypress-docs/dependencies.md)
* [Applitools Integration For Cypress](https://github.com/LambdaTest/Cypress-Cloud/blob/master/cypress-docs/applitools-integration.md)
* [ReportPortal.io Integration With LambdaTest For Cypress](https://github.com/LambdaTest/Cypress-Cloud/blob/master/cypress-docs/reportportalio-integration.md)


## Pre-requisites

Before we get started, make sure to clone the LambdaTest Cypress Cloud Repo. You can run your first Cypress test on the LambdaTest platform in a few simple steps:

- **Step 1:** Clone the LambdaTest-Cypress Cloud repo and navigate to the cloned directory.

  ```bash
  git clone https://github.com/LambdaTest/Cypress-Cloud
  cd Cypress-Cloud
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
## Running Your First Cypress Test On LambdaTest


>**Test Scenario**: To demonstrate Cypress testing on LambdaTest, we will use the Cypress Kitchen Sink Example.

1.  Clone the LambdaTest Cypress Cloud GitHub repo and switch to the cloned directory.

```bash
git clone https://github.com/LambdaTest/Cypress-Cloud
cd Cypress-Cloud
```

2.  Setup the **LambdaTest-Cypress CLI** and configure the configuration file, as shown in the pre-requisites before. A file named `lambdatest-config.json` is generated in your project using the below command:

```bash
lambdatest-cypress init
```

Here, we have used the below configuration as default and generated it in the `lambdatest-config.json` file. You need to set up the authentication by using LambdaTest credentials. You can check the [Authentication documentation](https://www.lambdatest.com/support/docs/authentication) for more details about authentication.

```json
{
  "lambdatest_auth": {
    "username": "<YOUR_LAMBDATEST_USERNAME>",
    "access_key": "<Your LambdaTest access key>"
  },
  "browsers": [
    {
      "browser": "Chrome",
      "platform": "Windows 10",
      "versions": ["latest"]
    },
    {
      "browser": "Firefox",
      "platform": "Windows 10",
      "versions": ["latest"]
    }
  ],
  "run_settings": {
    "cypress_config_file": "cypress.json",
    "build_name": "build-name",
    "parallels": 1,
    "specs": "./*.spec.js",
    "ignore_files": "",
    "npm_dependencies": {
      "cypress": "6.1.0"
    },
    "feature_file_suppport": false
  },
  "tunnel_settings": {
    "tunnel": false,
    "tunnelName": null
  }
}
```

Also in `run-settings` section you need to specify the path of your `spec.js` file on which you want to run the test on. Here we will pass the path of a **sample to do** spec.js file for our demo.

```json
"specs": "./cypress/integration/1-getting-started/todo.spec.js"
```

> In this demo, all occurences of http://localhost:8080 have been replaced with [https://example.cypress.io](https://example.cypress.io) to prevent running the Cypress tests locally. Alternatively, if you want to run your tests locally, refer to the [**Run Cypress tests locally**](https://www.lambdatest.com/support/docs/running-your-first-cypress-test/#running-your-cypress-tests-locally-on-lambdatest-platform) section below.

3. Execute your tests using the following command in the terminal:

```bash
lambdatest-cypress run
```

## View Your Cypress Testing Result


As soon as the tests starts executing, you can view them running. Visit your LambdaTest Automation Dashboard.


<img height="400" src="https://user-images.githubusercontent.com/70570645/169592614-d41ad246-32c5-46e1-935c-6f0101f467e6.png">

For each test, you can view the live video feed, screenshots for each test run, console logs, terminal logs and do much more using the **LambdaTest platform**.

If the test gets executed successfully, you will see a green tick on the Timeline view and a "Completed" message on the Automation logs view of your Automation dashboard. If not, then you will see a red cross and a "Failed" message respectively.
      
<img height="400" src="https://user-images.githubusercontent.com/70570645/169593512-94f845b7-3bcc-40f8-a5c1-0c9ab872e3ff.png">


## Running Your Cypress Tests Locally


To run your tests locally on the LambdaTest platform, you need to setup LambdaTest tunnel, and execute commands using the CLI, or [download UnderPass](https://downloads.lambdatest.com/underpass/master/UnderPass%20Setup.exe), our GUI based desktop app. Once you have the LambdaTest tunnel or Underpass set up and started, you can use the LambdaTest platform to run your Cypress tests locally.

Now you need to activate the tunnel capability in the lambdatest_config.json file under the section "connection_settings" as shown below:

```json
  "connection_settings": {
    "tunnel": true,
    "tunnel_name": "lt-cypress-tunnel"
  },
```

You can provide the name of the **LambdaTest tunnel** as per your requirements.

## Authentication

    
Authenticate your Cypress test runs in the following ways -

1. Set up the **environment variables**. (or)
2. Utilizing the **CLI params**. (or)
3. Mention yourusername and access key in the **lambdatest-config.json**.

> **Warning:** We use the following order of precedence to determine which auth credentials to use if you use more than one option to pass your auth credentials:

CLI arguments > Options set in lambdatest-config.json > Environment variables

### Utilizing CLI Params:

The following args can be used while running tests using the run command.

| Arg        | Shorthand | Accepted values            |
| ---------- | --------- | -------------------------- |
| --username | -u        | Your LambdaTest username   |
| --key      | -k        | Your LambdaTest access key |

For example -

```bash
 lambdatest-cypress run --username YOUR_USERNAME --key YOUR_ACCESS_KEY
```

### Using lambdatest-config.json:

The auth option will help you in specifying your username and access key. You can find your username and access key in the [LambdaTest Automation Dashboard](https://automation.lambdatest.com/build). Both, the auth credentials set in environment variables and the ones mentioned in the lambdatest-config.json file will get overridden.
      
<img height="400" src="https://user-images.githubusercontent.com/70570645/169593640-9672bc33-49c1-4abe-8887-645a33defab7.png">

      
The options supported in the auth are as follows:

| Arg        | Accepted values            |
| ---------- | -------------------------- |
| username   | Your LambdaTest username   |
| access_key | Your LambdaTest access key |

For example -

```json
"lambdatest_auth": {
      "username": "<your username>",
      "access_key": "<your access key>"
   },
```

### Setup the Environment Variables:

While utilizing the CLI params, you can set up the following environment variables.

| Env variable  | Accepted values            |
| ------------- | -------------------------- |
| LT_USERNAME   | Your LambdaTest username   |
| LT_ACCESS_KEY | Your LambdaTest access key |

Or you can also set environment variables using following commands:

- For **Linux/macOS**:

```bash
export LT_USERNAME="YOUR_USERNAME" export LT_ACCESS_KEY="YOUR ACCESS KEY"
```

- For **Windows**:

```bash
set LT_USERNAME="YOUR_USERNAME" set LT_ACCESS_KEY="YOUR ACCESS KEY"
```
      
> **Note** - By doing so, the auth credentials you use in your lambdatest-config.json file will get overridden only if these options are not provided in lambdatest-config.json.<br>


## Tutorials 📙

Check out our latest tutorials on Cypress automation testing 👇

* [Cypress Vs Selenium: Which is Better in 2022?](https://www.lambdatest.com/blog/cypress-vs-selenium-comparison/)
* [Introduction to Cypress Test Automation Framework](https://www.lambdatest.com/blog/cypress-test-automation-framework/)
* [Scalable and Reliable Cross Browser Testing with Cypress](https://www.lambdatest.com/blog/cross-browser-testing-with-cypress-framework/)
* [Now Run Your Cypress Tests on LambdaTest](https://www.lambdatest.com/blog/cypress-cli-on-lambdatest/)
* [How to Perform Cypress Testing at Scale with LambdaTest](https://www.lambdatest.com/blog/how-to-perform-cypress-testing-at-scale-with-lambdatest/)
* [Complete Guide to Cypress Visual Regression Testing](https://www.lambdatest.com/blog/cypress-visual-regression-testing/)
* [How to Fill and Submit Forms in Cypress](https://www.lambdatest.com/blog/fill-and-submit-forms-in-cypress/)
* [How to Find HTML Elements Using Cypress Locators](https://www.lambdatest.com/blog/finding-html-elements-using-cypress-locators/)
* [Handling Touch and Mouse Events in Cypress [Tutorial]](https://www.lambdatest.com/blog/handling-touch-and-mouse-events-in-cypress/)
* [How to Find Broken Links using Cypress [With Examples]](https://www.lambdatest.com/blog/find-broken-links-using-cypress/)
* [Web Performance Testing with Cypress and Google Lighthouse](https://www.lambdatest.com/blog/using-cypress-google-lighthouse-performance-testing/)

For video tutorials on Cypress testing, please refer to our [Cypress Testing Tutorial Playlist](https://www.youtube.com/playlist?list=PLZMWkkQEwOPnxrxi544nL1vdC1noooXPx). ▶️

Subscribe To Our [LambdaTest YouTube Channel 🔔](https://www.youtube.com/c/LambdaTest) and keep up-to-date on the latest video tutorial around Cypress.

## Documentation & Resources :books:

      
Visit the following links to learn more about LambdaTest's features, setup and tutorials around test automation, mobile app testing, responsive testing, and manual testing.

* [LambdaTest Documentation](https://www.lambdatest.com/support/docs/?utm_source=github&utm_medium=repo&utm_campaign=cypress-cloud)
* [LambdaTest Blog](https://www.lambdatest.com/blog/?utm_source=github&utm_medium=repo&utm_campaign=cypress-cloud)
* [LambdaTest Learning Hub](https://www.lambdatest.com/learning-hub/?utm_source=github&utm_medium=repo&utm_campaign=cypress-cloud)    

## LambdaTest Community :busts_in_silhouette:

The [LambdaTest Community](https://community.lambdatest.com/) allows people to interact with tech enthusiasts. Connect, ask questions, and learn from tech-savvy people. Discuss best practises in web development, testing, and DevOps with professionals from across the globe 🌎

## What's New At LambdaTest ❓

To stay updated with the latest features and product add-ons, visit [Changelog](https://changelog.lambdatest.com/) 
      
## About LambdaTest

[LambdaTest](https://www.lambdatest.com/?utm_source=github&utm_medium=repo&utm_campaign=cypress-cloud) is a leading test execution and orchestration platform that is fast, reliable, scalable, and secure. It allows users to run both manual and automated testing of web and mobile apps across 3000+ different browsers, operating systems, and real device combinations. Using LambdaTest, businesses can ensure quicker developer feedback and hence achieve faster go to market. Over 500 enterprises and 1 Million + users across 130+ countries rely on LambdaTest for their testing needs.    

### Features

* Run Selenium, Cypress, Puppeteer, Playwright, and Appium automation tests across 3000+ real desktop and mobile environments.
* Real-time cross browser testing on 3000+ environments.
* Test on Real device cloud
* Blazing fast test automation with HyperExecute
* Accelerate testing, shorten job times and get faster feedback on code changes with Test At Scale.
* Smart Visual Regression Testing on cloud
* 120+ third-party integrations with your favorite tool for CI/CD, Project Management, Codeless Automation, and more.
* Automated Screenshot testing across multiple browsers in a single click.
* Local testing of web and mobile apps.
* Online Accessibility Testing across 3000+ desktop and mobile browsers, browser versions, and operating systems.
* Geolocation testing of web and mobile apps across 53+ countries.
* LT Browser - for responsive testing across 50+ pre-installed mobile, tablets, desktop, and laptop viewports

    
[<img height="70" width="220" src="https://user-images.githubusercontent.com/70570645/171866795-52c11b49-0728-4229-b073-4b704209ddde.png">](https://accounts.lambdatest.com/register)

      
## We are here to help you :headphones:

* Got a query? we are available 24x7 to help. [Contact Us](support@lambdatest.com)
* For more info, visit - [LambdaTest](https://www.lambdatest.com/?utm_source=github&utm_medium=repo&utm_campaign=cypress-cloud)
