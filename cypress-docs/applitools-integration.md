# Applitools Integration With LambdaTest For Cypress

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

  <img height="400" src="https://user-images.githubusercontent.com/70570645/169605991-154a66b8-3eaa-40f0-9892-c8a00d4f08f2.png"/>
  

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

  <img height="400" src="https://user-images.githubusercontent.com/70570645/169606295-96672066-9047-41ba-bc90-5b898e07bc41.png"/>

## Running The Sample Project

---

Execute your first test case using the below command:

```bash
lambdatest-cypress run
```

<img height="400" src="https://user-images.githubusercontent.com/70570645/169606482-6dcdd3e1-63bb-489b-91f2-cb16ff9449b4.png"/>

---

> The first test case that you execute will be considered as the base image by default by Applitools.

<img height="400" src="https://user-images.githubusercontent.com/70570645/169606594-f60d15c8-8646-4706-81b7-fea622433e4f.png"/>

---

Edit the URL in the `applitoolsIntegration.spec.js` file and run your second test by using the same run command.

<img height="400" src="https://user-images.githubusercontent.com/70570645/169606719-7becc844-fd4a-4004-918b-070a7fd1f269.png"/>

---

Applitools will compare the base image with this test and highlight the difference.

<img height="400" src="https://user-images.githubusercontent.com/70570645/169606795-a06e3df1-7c14-4520-8135-d0bc8448152c.png"/>
