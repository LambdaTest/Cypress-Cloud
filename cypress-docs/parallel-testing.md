## Run Your Cypress Tests In Parallel On LambdaTest Platform
***
    
If you want to run your tests in parallel on the LambdaTest platform, you can do that using either of the following two ways:

### 1. Run your Cypress tests in Parallel using the CLI

---

To perform Cypress testing in parallel using the CLI, you need to use the "`--parallels`" option while running your tests.

**Syntax:**

```bash
--parallels <number of parallel sessions>
```

For example, if you want to run your Cypress tests on 5 parallel sessions, you can use the below command:

```bash
lambdatest-cypress run --parallels 5
```

### 2. Run your Cypress tests in Parallel using the configuration.json file

---

To run your Cypress testing in parallel, you can also use the **configuration.json** file, using the '**parallels**' key. **Syntax:**

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

> The number of parallel test running on the LambdaTest platform at a time, is based on the concurrency plan of your LambdaTest account. In case the number of parallel tests is more than the concurrency plan, the remaining tests will get queued and run after the existing tests are complete. For example, suppose you have a concurrency plan of 5 parallel sessions and want to run 50 tests in parallel. In this case, only 5 parallel tests will be executed at a time, and the rest 45 will be queued. As the test finishes running, the queued tests will be moved to the running state based on availability.
    
