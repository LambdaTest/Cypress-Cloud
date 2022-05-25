## Execute Cypress Tests Including Private Dependencies
***

This article guides you on how to execute your **Cypress** tests including the **private dependencies** on **LambdaTest platform**.
Earlier if your project includes any private dependency, the tests will error out with the **LambdaError** on our platform but now we have built the support for handling the private dependencies.

> In this demo we are demonstrating using [LambdaTest's sample Cypress Kitchen Sink repo](https://github.com/LambdaTest/cypress-example-kitchensink). You can find all the resources used for this article in the linked repo.

## Steps To Execute Using Private Dependencies

---

Assuming that you have run a Cypress test on LambdaTest platform. If not, refer to [running your first Cypress test](https://www.lambdatest.com/support/docs/getting-started-with-cypress-testing/). Now follow the below steps to execute Cypress tests using private dependencies:

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

  <img height="200" src="https://user-images.githubusercontent.com/70570645/169604117-93f9fd17-06bd-4973-b171-7e02e161415c.png"/>

***

  <img height="400" src="https://user-images.githubusercontent.com/70570645/169604223-97ba9992-3ad5-4b29-a866-cb470e620f32.png"/>

  ***

- **If passing private dependency in lambdatest-config.json file -**

  If you define the dependencies in the `lambdatest-config.json` file, it will override the `package.json` file and our cloud grid will read the dependencies from the `lambdatest-config.json` file. You can define the dependencies in the npm_dependencies object available in the run_settings of `lambdatest-config.json` file. Also, here as well, you have to create `.npmrc` file and there you have to define the private dependency.

  <img height="400" src="https://user-images.githubusercontent.com/70570645/169604325-83df70d6-c4eb-4253-bc2b-5931fbd2d620.png"/>

  ***

  <img height="400" src="https://user-images.githubusercontent.com/70570645/169604402-924bd55d-4701-4e32-8f4a-e7e3c1b50e7c.png"/>

  > If you are using an **access token** in the private dependency and you are accessing its value from the **environment variable**, in that case, you have to add `dep_token` capability and define all those in environment variables in it. You can pass multiple environment variables as comma-separated.

  Refer the below screenshot for the help.

  ***

  <img height="400" src="https://user-images.githubusercontent.com/70570645/169604455-6ec4c5a4-fb8f-45d0-b0cc-678cd9fafbe9.png"/>

  > All the keys present in **dep_tokens** will be replaced in the `.npmrc` file and if the key is not present in the environment variable, it will throw an error.

After doing this setup, run your tests on the **LambdaTest platform** and now the test will execute perfectly with the **private dependencies**.
