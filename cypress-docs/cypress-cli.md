# List Of LambdaTest Cypress CLI Commands
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

## Run command — cli param

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

## Build info command - cli param

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


```
