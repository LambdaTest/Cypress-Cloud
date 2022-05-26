# Cypress Cloud  ![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)


![cypress-logo](https://user-images.githubusercontent.com/70570645/169593225-1b5e5831-54a6-4a54-bbc1-a37bc44d15cc.png)

*Cypress is a modern web front-end testing tool built with JavaScript Mocha. Cypress testing operates directly on the browsers without the need for Selenium. Its unique DOM manipulation technique makes it a very developer and QA-friendly tool. With LambdaTest, you can perform Cypress testing on an online automation cloud of 40+ browsers versions.* 

*Learn how to [get started with Cypress testing on the LambdaTest platform](https://www.lambdatest.com/support/docs/getting-started-with-cypress-testing/).*

## Table of Contents:
***

* [Pre-requisites](#pre-requisites)
* [Running Your First Cypress Test On LambdaTest Platform](#running-your-first-cypress-test-on-lambdatest-platform)
* [Local Testing With Cypress](#running-your-cypress-tests-locally-on-lambdatest-platform)
* [Authentication](#authentication)
* [Cypress Parallel Testing](https://github.com/LambdaTest/cypress-example-kitchensink/blob/master/cypress-docs/parallel-testing.md)
* [Specify Browsers And OS](https://github.com/LambdaTest/cypress-example-kitchensink/blob/master/cypress-docs/supported-browsers-os.md)
* [Supported Cypress Versions](https://github.com/LambdaTest/cypress-example-kitchensink/blob/master/cypress-docs/supported-cypress-versions.md)
* [Cypress CLI Commands](https://github.com/LambdaTest/cypress-example-kitchensink/blob/master/cypress-docs/cypress-cli.md)
* [Run Settings](https://github.com/LambdaTest/cypress-example-kitchensink/blob/master/cypress-docs/run-settings.md)
* [Download Artefact For Cypress Project](https://github.com/LambdaTest/cypress-example-kitchensink/blob/master/cypress-docs/download-artefacts.md)
* [Integrate LambdaTest With Cypress Dashboard](https://github.com/LambdaTest/cypress-example-kitchensink/blob/master/cypress-docs/cypress-dashboard.md)
* [Execute Cypress Tests Including Private Dependencies](https://github.com/LambdaTest/cypress-example-kitchensink/blob/master/cypress-docs/dependencies.md)
* [Applitools Integration For Cypress](https://github.com/LambdaTest/cypress-example-kitchensink/blob/master/cypress-docs/applitools-integration.md)
* [ReportPortal.io Integration With LambdaTest For Cypress](https://github.com/LambdaTest/cypress-example-kitchensink/blob/master/cypress-docs/reportportalio-integration.md)
***

## Pre-requisites

---

Before we get started, make sure to clone the [LambdaTest's sample Cypress Kitchen Sink repo](https://github.com/LambdaTest/cypress-example-kitchensink), used in this document. You can run your first Cypress test on the LambdaTest platform in a few simple steps:

- **Step 1:** Clone the `LambdaTest-Cypress` kitchen sink example Github repo and navigate to the cloned directory.

  ```bash
  git clone https://github.com/LambdaTest/cypress-example-kitchensink
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
## Running Your First Cypress Test On LambdaTest Platform
***

To demonstrate Cypress testing on the LambdaTest platform, we will use the Cypress’ Kitchen Sink example in the demo below.

1.  Clone the [LambdaTest-Cypress’ kitchen sink example](https://github.com/LambdaTest/cypress-example-kitchensink) github repo and switch to the cloned directory.

```bash
git clone https://github.com/cypress-io/cypress-example-kitchensink.git
cd cypress-example-kitchensink
```

2.  Setup the **LambdaTest-Cypress CLI** and configure the configuration file, as shown in the pre-requisites before. A file named `lambdatest-config.json` is generated in your project using the below command:

```bash
lambdatest-cypress init
```

Here, we have used the below configuration as default and generated it in the `lambdatest-config.json` file. You need to set up the authentication by using LambdaTest credentials. You can check the [Authentication documentation](https://www.lambdatest.com/support/docs/authentication) for more details about authentication.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs className="docs__val">
  <TabItem value="config" label="lambdatest-config.json" default>

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

  </TabItem>
</Tabs>

Also in `run-settings` section you need to specify the path of your `spec.js` file on which you want to run the test on. Here we will pass the path of a **sample to do** spec.js file for our demo.

```json
"specs": "./cypress/integration/1-getting-started/todo.spec.js"
```

> In this demo, all occurences of http://localhost:8080 have been replaced with [https://example.cypress.io](https://example.cypress.io) to prevent running the Cypress tests locally. Alternatively, if you want to run your tests locally, refer to the [**Run Cypress tests locally**](https://www.lambdatest.com/support/docs/running-your-first-cypress-test/#running-your-cypress-tests-locally-on-lambdatest-platform) section below.

3. Execute your tests using the following command in the terminal:

```bash
lambdatest-cypress run
```

## View Your Cypress Testing Result On LambdaTest Platform
---

As soon as the tests starts executing, you can view them running. Just visit your LambdaTest Automation Dashboard.


<img height="400" src="https://user-images.githubusercontent.com/70570645/169592614-d41ad246-32c5-46e1-935c-6f0101f467e6.png">

For each test, you can view the live video feed, screenshots for each test run, console logs, terminal logs and do much more using the **LambdaTest platform**.

If the test gets executed successfully, you will see a green tick on the Timeline view and a "Completed" message on the Automation logs view of your Automation dashboard. If not, then you will see a red cross and a "Failed" message respectively.
      
<img height="400" src="https://user-images.githubusercontent.com/70570645/169593512-94f845b7-3bcc-40f8-a5c1-0c9ab872e3ff.png">


## Running Your Cypress Tests Locally On LambdaTest Platform
---

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
***
    
Authenticate your Cypress test runs in the following ways -

1. Set up the **environment variables**. (or)
2. Utilizing the **CLI params**. (or)
3. Mention yourusername and access key in the **lambdatest-config.json**.

> **Warning:** We use the following order of precedence to determine which auth credentials to use if you use more than one option to pass your auth credentials:

CLI arguments > Options set in lambdatest-config.json > Environment variables

### Utilizing CLI Params:

---

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

---

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

---

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

## LambdaTest Community :busts_in_silhouette:
***
The [LambdaTest Community](https://community.lambdatest.com/) allows people to interact with tech enthusiasts. Connect, ask questions, and learn from tech-savvy people. Discuss best practises in web development, testing, and DevOps with professionals from across the globe.

## Documentation & Resources :books:
***
      
If you want to learn more about the LambdaTest's features, setup, and usage, visit the [LambdaTest documentation](https://www.lambdatest.com/support/docs/). You can also find in-depth tutorials around test automation, mobile app testing, responsive testing, manual testing on [LambdaTest Blog](https://www.lambdatest.com/blog/) and [LambdaTest Learning Hub](https://www.lambdatest.com/learning-hub/).     
      
## About LambdaTest
***
[LambdaTest](https://www.lambdatest.com) is a leading test execution and orchestration platform that is fast, reliable, scalable, and secure. It allows users to run both manual and automated testing of web and mobile apps across 3000+ different browsers, operating systems, and real device combinations. Using LambdaTest, businesses can ensure quicker developer feedback and hence achieve faster go to market. Over 500 enterprises and 1 Million + users across 130+ countries rely on LambdaTest for their testing needs.    
    
[<img height="70" src="https://user-images.githubusercontent.com/70570645/169649126-ed61f6de-49b5-4593-80cf-3391ca40d665.PNG">](https://accounts.lambdatest.com/register)
      
## We are here to help you :headphones:
***
* Got a query? we are available 24x7 to help. [Contact Us](support@lambdatest.com)
* For more info, visit - https://www.lambdatest.com
