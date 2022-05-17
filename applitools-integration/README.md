**Applitools** provides an end-to-end software testing platform powered by **Visual AI**. This article will guide you on how to integrate your **Cypress** automation tests with **Applitools** and **LambdaTest**.

> Before getting started, make sure you have made accounts in **LambdaTest** and **Applitools** platforms.

## Setting Up Applitools Dependencies And Packages

---

You can download or clone the sample GitHub project from the following repo - [Cypress-LambdaTest-Applitools-Integration](https://github.com/gaurav8760/Cypress-LambdaTest-Applitools-Integration). Navigate to your project directory and follow these steps:

- Install the **NPM dependencies** using the below command:

  ```bash
  npm install
  ```

- Set up **Applitools Eyes** using the below command:

  ```bash
  npx eyes-setup
  ```

- Add the access token of your Applitools account in the `applitools.config.js` file as highlighted in the below screenshot. You can find your **Applitools API** key by logging into your Applitools account and going to your **Profile > My API Key**.

  ***

  <img loading="lazy" src={require('../assets/images/applitools-cypress/applitools1.webp').default} alt="Image" width="1353" height="622" className="doc_img"/>

  > Set the **testConcurrency** and **browser configuration** as per the requirement.

- Install Applitools Eyes dependencies using the below command:

  ```bash
  npm install @applitools/eyes-cypress --save-dev
  ```

  > It will create Applitools Eyes to an Existing Node.js Cypress Project.

## Setting up LambdaTest CLI and Dependencies

---

- Install the LambdaTest CLI using below command:

  ```bash
  npm install -g lambdatest-cypress-cli
  ```

- Setup configurations on which you want to run your test using the below command:

  ```bash
  lambdatest-cypress init
  ```

  > It will create a **lambdatest-config.json** file in the root directory of your project.

- Add spec file path in the `run_setting` and your **LambdaTest credentials** in the auth section of the `lambdatest-config.json` file as shown in the image below.

  ***

  <img loading="lazy" src={require('../assets/images/applitools-cypress/applitools2.webp').default} alt="Image" width="1353" height="622" className="doc_img"/>

## Running The Sample Project

---

Execute your first test case using the below command:

```bash
lambdatest-cypress run
```

<img loading="lazy" src={require('../assets/images/applitools-cypress/applitools3.webp').default} alt="Image" width="1353" height="622" className="doc_img"/>

---

> The first test case that you execute will be considered as the base image by default by Applitools.

<img loading="lazy" src={require('../assets/images/applitools-cypress/applitools4.webp').default} alt="Image" width="1353" height="622" className="doc_img"/>

---

Edit the URL in the `applitoolsIntegration.spec.js` file and run your second test by using the same run command.

<img loading="lazy" src={require('../assets/images/applitools-cypress/applitools5.webp').default} alt="Image" width="1353" height="622" className="doc_img"/>

---

Applitools will compare the base image with this test and highlight the difference.

<img loading="lazy" src={require('../assets/images/applitools-cypress/applitools6.webp').default} alt="Image" width="1353" height="622" className="doc_img"/>
