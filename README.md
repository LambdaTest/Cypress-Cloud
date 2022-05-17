# Getting Started With Cypress Testing On LambdaTest Platform
***

Cypress is a modern web front-end testing tool built with JavaScript Mocha. Cypress testing operates directly on the browsers without the need for Selenium. Its unique DOM manipulation technique makes it a very developer and QA-friendly tool.

With **LambdaTest** and **Cypress** integration, you can perform Cypress testing on an online automation cloud across 40+ browsers versions. In this documentation, we will see how to get started with Cypress testing on the LambdaTest platform.

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
## Running Your First Cypress Test On LambdaTest Platform
***

To demonstrate Cypress testing on the LambdaTest platform, we will use the [Cypress’ kitchen sink example](https://github.com/cypress-io/cypress-example-kitchensink) in the demo below.

1.  Clone the [LambdaTest-Cypress’ kitchen sink example](https://github.com/4DvAnCeBoY/cypress-example-kitchensink) github repo and switch to the cloned directory.

```bash
git clone https://github.com/cypress-io/cypress-example-kitchensink.git
cd cypress-example-kitchensink
```

2.  Setup the **LambdaTest-Cypress CLI** and configure the configuration file, as shown in the pre-requisites before. A file named `lambdatest-config.json` is generated in your project using the below command:

```bash
lambdatest-cypress init
```

Here, we have used the below configuration as default and generated it in the `lambdatest-config.json` file. You need to set up the authentication by using LambdaTest credentials. You can check [here](https://www.lambdatest.com/support/docs/authentication) for more details about authentication.

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
      "versions": ["86.0"]
    },
    {
      "browser": "Firefox",
      "platform": "Windows 10",
      "versions": ["82.0"]
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

> In this demo, all occurences of http://localhost:8080 have been replaced with [https://example.cypress.io](https://example.cypress.io) to prevent running the Cypress tests locally. Alternatively, if you want to run your tests locally, refer to the [**Run locally**](https://www.lambdatest.com/support/docs/running-your-first-cypress-test/#running-your-cypress-tests-locally-on-lambdatest-platform) section below.

3. Execute your tests using the following command in the terminal:

```bash
lambdatest-cypress run
```

## View Your Cypress Testing Result On LambdaTest Platform

---

As soon as the tests starts executing, you can view them running. Just visit your LambdaTest Automation Dashboard.

<img loading="lazy" src={require('../assets/images/uploads/cypress-testin1.webp').default} alt="Image" width="1282" height="722" className="doc_img"/>

For each test, you can view the live video feed, screenshots for each test run, console logs, terminal logs and do much more using the **LambdaTest platform**.

If the test gets executed successfully, you will see a green tick on the Timeline view and a "Completed" message on the Automation logs view of your Automation dashboard. If not, then you will see a red cross and a "Failed" message respectively.

<img loading="lazy" src={require('../assets/images/uploads/cypress-testing-2.webp').default} alt="Image" width="1281" height="722" className="doc_img"/>

## Running Your Cypress Tests Locally On LambdaTest Platform

---

To run your tests locally on the LambdaTest platform, you need to [setup LambdaTest tunnel](/docs/testing-locally-hosted-pages/), and execute commands using the CLI, or [download UnderPass](/docs/underpass-tunnel-application/), our GUI based desktop app. Once you have the LambdaTest tunnel or Underpass set up and started, you can use the LambdaTest platform to run your Cypress tests locally.

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

## Utilizing CLI Params:

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

## Using lambdatest-config.json:

---

The auth option will help you in specifying your username and access key. You can find your username and access key in the [LambdaTest Automation Dashboard](https://automation.lambdatest.com/build). Both, the auth credentials set in environment variables and the ones mentioned in the lambdatest-config.json file will get overridden.

<img loading="lazy" src={require('../assets/images/uploads/authentication.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

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

## Setup the Environment Variables:

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

> **Note** - By doing so, the auth credentials you use in your lambdatest-config.json file will get overridden only if these options are not provided in lambdatest-config.json.

## Run Your Cypress Tests In Parallel On LambdaTest Platform
***
    
If you want to run your tests parallelly on the LambdaTest platform, you can do that using either of the following two ways:

### 1. Run your Cypress tests Parallelly using the CLI

---

To perform Cypress testing parallelly using the CLI, you need to use the "`--parallels`" option while running your tests.

**Syntax:**

```bash
--parallels <number of parallel sessions>
```

For example, if you want to run your Cypress tests on 5 parallel sessions, you can use the below command:

```bash
lambdatest-cypress run --parallels 5
```

### 2. Run your Cypress tests Parallelly using the configuration.json file

---

To run your Cypress testing parallelly, you can also use the **configuration.json** file, using the '**parallels**' key. **Syntax:**

```json
{
  "run_settings": {
    ...
    "parallels": <number of parallel sessions>,
    ...
  }
}
```

For example, if you want to run your Cypress tests on 5 parallel sessions, use the below settings:

```json
{
  "run_settings": {
    ...
    "parallels": 5,
    ...
  }
}
```

> The number of parallel test running on the LambdaTest platform at a time, is based on the concurrency plan of your LambdaTest account. In case the number of parallel tests is more than the concurrency plan, the remaining tests will get queued and run after the existing tests are complete. For example, suppose you have a concurrency plan of 5 parallel sessions and want to run 50 tests parallelly. In this case, only 5 parallel tests will be executed at a time, and the rest 45 will be queued. As the test finishes running, the queued tests will be moved to the running state based on availability.
    
## List Of LambdaTest Cypress CLI Commands
***
    
Below is the list of all the LambdaTest Cypress CLI arguments that can be used, along with their purpose:

```bash
lambdatest-cypress <command> [options]
```

| Command / Arg | Purpose                                                |
| ------------- | ------------------------------------------------------ |
| --help        | To get information of all the commands that can be run |
| init          | To create an initial config file                       |
| run           | To run tests on lambdatest                             |
| build-info    | To get information about the build                     |

### Run command — cli param

---

To start running the test build, you can use the given-below command.

```bash
lambdatest-cypress run
```

Given below are the additional arguments available with the `run` command.

| OPTIONS                        | PURPOSE                                                |
| ------------------------------ | ------------------------------------------------------ |
| --version                      | Show version number [boolean]                          |
| --help                         | Show help [boolean]                                    |
| --ccf, --cypress-config-file   | path of the config file [string]                       |
| --lcf, –lambdatest-config-file | path of the lambdatest config file [string]            |
| -s, --specs                    | path of the spec file or directory or pattern [string] |
| --bn, --build-name             | build name [string]                                    |
| -t, --tags                     | build tags [string]                                    |
| -p, --parallels                | no of parallel sessions [string]                       |

### Build info command - cli param

---

You can use the give-below command to get information on the build.

```bash
lambdatest-cypress build-info
```

Given below are the additional arguments available with the `build-info` command.

| OPTIONS          | PURPOSE                              |
| ---------------- | ------------------------------------ |
| --version        | Show version number [boolean]        |
| --help           | Show help [boolean]                  |
| --id, --build-id | Build Identifier [string] [required] |

## Run Settings
***

Lastly, you need to set other desired capabilities, i.e., cypress_version, build_name, visual feedback settings, number of parallel sessions, etc. For example:

```json
"run_settings": {
      "cypress_config_file": "cypress.json",
      "build_name": "build-name",
      "parallels": 1,
      "specs": "./*.spec.js",  // Please add the path of your spec files here to run the tests on Lambdatest
      "ignore_files": "",
      "feature_file_suppport": false,
      "network": false,
      "headless": false,
      "reporter_config_file": ""
   }
```

## Downloading Artefacts For A Cypress Project
***    
    
This article guides you on how to download the artefacts for a Cypress project from LambdaTest Cloud machine.

>In this demo we are demonstrating using [LambdaTest's sample Cypress Kitchen Sink repo](https://github.com/4DvAnCeBoY/cypress-example-kitchensink). You can find all the resources used for this article in the linked repo.

## Downloading The Data From The LambdaTest Cloud Machine

---

Assuming that you have run a Cypress test on lambdatest platform ( if not, this article [here](https://www.lambdatest.com/support/docs/getting-started-with-cypress-testing/) will guide you in running your first Cypress test on LambdaTest), you need to follow these steps below:

### Update LambdaTest Cypress CLI

---

Before getting started, you would have to update the **lambdatest-cypress cli** using the command below:

```bash
npm install -g lambdatest-cypress-cli
```

### Add downloads Capability

---

Add **"downloads"** capability in the `lambdatest-config.json` file and define the files/directories that you wanted to download in this capability. You can mention multiple file paths in this capability separated by a comma. Refer to the below example for the same.

<img loading="lazy" src={require('../assets/images/cypress/download-artefacts/artefacts-1.webp').default} alt="Image" width="1282" height="722" className="doc_img"/>

### Add -sync Flag

---

Append `–sync` flag in the run command as mentioned below and run your test on the LambdaTest platform. Once the test gets executed, you will find a `session_id` on the console corresponding to the executed test.

```bash
lambdatest-cypress run --sync=true
```

---

<img loading="lazy" src={require('../assets/images/cypress/download-artefacts/artefacts-2.webp').default} alt="Image" width="1282" height="722" className="doc_img"/>

### Add session_id In -sid Flag

---

Add the created session_id in the `–sid` flag and download the artifacts by running the below command:

```bash
lambdatest-cypress generate-report \
--user=LT_USERNAME \
--access_key=LT_ACCESS_KEY \
--sid=SESSION_ID
```

### View The Downloaded Folder

---

- A new folder with the name **lambdatest-artifacts** will get created in the **root** directory of your project and all the files will be downloaded in this folder.

  <img loading="lazy" src={require('../assets/images/cypress/download-artefacts/artefacts-3.webp').default} alt="Image" width="1282" height="722" className="doc_img"/>

  ***

- The file name will be created with the session_id combined with the browser name, browser version, and the test id corresponding to it.

  <img loading="lazy" src={require('../assets/images/cypress/download-artefacts/artefacts-4.webp').default} alt="Image" width="1282" height="722" className="doc_img"/>
    
  ## Integrate LambdaTest with Cypress Dashboard
  ***
   
  This article guides you on how to integrate **LambdaTest platform** with **The Cypress Dashboard**

> In this demo we are demonstrating using [LambdaTest's sample Cypress Kitchen Sink repo](https://github.com/4DvAnCeBoY/cypress-example-kitchensink). You can find all the resources used for this article in the linked repo.

## Steps To Integrate LambdaTest With Cypress Dashboard

---

Assuming that you have run a Cypress test on lambdatest platform ( if not, this article [here](https://www.lambdatest.com/support/docs/getting-started-with-cypress-testing/) will guide you in running your first Cypress test on LambdaTest), you need to follow these steps below:

### Update LambdaTest Cypress CLI

---

- Before getting started, you would have to update the **lambdatest-cypress cli** using the command below:

```bash
npm install -g lambdatest-cypress-cli
```

- The CLI version should be the latest i.e. is 2.3.0. You can check the CLI version by running the below command.

```bash
lambdatest-cypress --version
```

### Create a project

---

Create a project on Cypress Dashboard as shown below:

<img loading="lazy" src={require('../assets/images/cypress/cypress-integration/cypress-integration-1.webp').default} alt="Image" width="1282" height="722" className="doc_img"/>

### Enter Project Name

---

<img loading="lazy" src={require('../assets/images/cypress/cypress-integration/cypress-integration-2.webp').default} alt="Image" width="1282" height="722" className="doc_img"/>

### Define project ID

---

Once to create the project on Cypress Dashboard, you will get a `project ID` and a `record key`. Define the **project ID** in the `cypress.json` file of your project.

<img loading="lazy" src={require('../assets/images/cypress/cypress-integration/cypress-integration-3.webp').default} alt="Image" width="1282" height="722" className="doc_img"/>

---

<img loading="lazy" src={require('../assets/images/cypress/cypress-integration/cypress-integration-4.webp').default} alt="Image" width="1282" height="722" className="doc_img"/>

### Define Record Key

---

Define the record key (Generated by Cypress Dashboard) in the run command as mentioned below:

```bash
lambdatest-cypress run --cy="--record;--key <key_value>"
```

<img loading="lazy" src={require('../assets/images/cypress/cypress-integration/cypress-integration-5.webp').default} alt="Image" width="1282" height="722" className="doc_img"/>

### LambdaTest-Cypress Integration

---

The integration is now done, just open the **LambdaTest Dashboard** and **Cypress Dashboard** to view the results.

<img loading="lazy" src={require('../assets/images/cypress/cypress-integration/cypress-integration-6.webp').default} alt="Image" width="1282" height="722" className="doc_img"/>

---

<img loading="lazy" src={require('../assets/images/cypress/cypress-integration/cypress-integration-7.webp').default} alt="Image" width="1282" height="722" className="doc_img"/>  

## Execute Cypress Tests Including Private Dependencies
***

This article guides you on how to execute your **Cypress** tests including the **private dependencies** on **LambdaTest platform**.
Earlier if your project includes any private dependency, the tests will error out with the **LambdaError** on our platform but now we have built the support for handling the private dependencies.

> In this demo we are demonstrating using [LambdaTest's sample Cypress Kitchen Sink repo](https://github.com/4DvAnCeBoY/cypress-example-kitchensink). You can find all the resources used for this article in the linked repo.

## Steps To Execute Using Private Dependencies

---

Assuming that you have run a Cypress test on lambdatest platform ( if not, this article [here](https://www.lambdatest.com/support/docs/getting-started-with-cypress-testing/) will guide you in running your first Cypress test on LambdaTest), you need to follow these steps below:

### Update LambdaTest Cypress CLI

---

- Before getting started, you would have to update the **lambdatest-cypress cli** using the command below:

```bash
npm install -g lambdatest-cypress-cli
```

- The CLI version should be the latest i.e. is 2.3.0. You can check the CLI version by running the below command.

```bash
lambdatest-cypress --version
```

### Add Private Dependencies

---

You can either add private dependency in the `package.json` file or in the `lambdatest-config.json` file. Refer to the below steps for both approaches.

- **If passing private dependency in package.json file –**

  Add the private dependency and create `.npmrc` file in the root directory of your project as highlighted below and define the same in `.npmrc` file as well.

  <img loading="lazy" src={require('../assets/images/cypress/dependencies/dependencies-1.webp').default} alt="Image" width="1282" height="722" className="doc_img"/>

  ***

  <img loading="lazy" src={require('../assets/images/cypress/dependencies/dependencies-2.webp').default} alt="Image" width="1282" height="722" className="doc_img"/>

  ***

- **If passing private dependency in lambdatest-config.json file -**

  If you define the dependencies in the `lambdatest-config.json` file, it will override the `package.json` file and our cloud grid will read the dependencies from the `lambdatest-config.json` file. You can define the dependencies in the npm_dependencies object available in the run_settings of `lambdatest-config.json` file. Also, here as well, you have to create `.npmrc` file and there you have to define the private dependency.

  <img loading="lazy" src={require('../assets/images/cypress/dependencies/dependencies-3.webp').default} alt="Image" width="1282" height="722" className="doc_img"/>

  ***

  <img loading="lazy" src={require('../assets/images/cypress/dependencies/dependencies-4.webp').default} alt="Image" width="1282" height="722" className="doc_img"/>

  > If you are using an **access token** in the private dependency and you are accessing its value from the **environment variable**, in that case, you have to add `dep_token` capability and define all those in environment variables in it. You can pass multiple environment variables as comma-separated.

  Refer the below screenshot for the help.

  ***

  <img loading="lazy" src={require('../assets/images/cypress/dependencies/dependencies-5.webp').default} alt="Image" width="1282" height="722" className="doc_img"/>

  > All the keys present in **dep_tokens** will be replaced in the `.npmrc` file and if the key is not present in the environment variable, it will throw an error.

After doing this setup, run your tests on the **LambdaTest platform** and now the test will execute perfectly with the **private dependencies**.
