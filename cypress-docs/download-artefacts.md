# Downloading Artefacts For A Cypress Project
***    
    
This article guides you on how to download the artefacts for a Cypress project from LambdaTest Cloud machine.

>In this demo we are demonstrating using [LambdaTest's sample Cypress Kitchen Sink repo](https://github.com/LambdaTest/cypress-example-kitchensink/pull/21/?target=_blank). You can find all the resources used for this article in the linked repo.

## Downloading The Data From The LambdaTest Cloud Machine
---

Assuming that you have run a Cypress test on LambdaTest platform ( if not, this article [here](https://www.lambdatest.com/support/docs/getting-started-with-cypress-testing/?target=_blank) will guide you in running your first Cypress test on LambdaTest), you need to follow these steps below:

### Update LambdaTest Cypress CLI
---

Before getting started, you would have to update the **lambdatest-cypress cli** using the command below:

```bash
npm install -g lambdatest-cypress-cli
```

### Add downloads Capability
---

Add **"downloads"** capability in the `lambdatest-config.json` file and define the files/directories that you wanted to download in this capability. You can mention multiple file paths in this capability separated by a comma. Refer to the below example for the same.

<img height="400" src="https://user-images.githubusercontent.com/70570645/169602283-fc53998f-b87b-4acc-a0b1-a1b125e15dff.png"/>

### Add -sync Flag

---

Append `–sync` flag in the run command as mentioned below and run your test on the LambdaTest platform. Once the test gets executed, you will find a `session_id` on the console corresponding to the executed test.

```bash
lambdatest-cypress run --sync=true
```
---

<img height="400" src="https://user-images.githubusercontent.com/70570645/169602547-1a604e97-68fb-4e1f-95cd-efa242e80df9.png"/>


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

<img height="400" src="https://user-images.githubusercontent.com/70570645/169602655-928455a0-c8d4-444c-8f72-8f8a20ea342d.png"/>

  ***

- The file name will be created with the session_id combined with the browser name, browser version, and the test id corresponding to it.

<img height="400" src="https://user-images.githubusercontent.com/70570645/169602718-f5f13bf6-2cff-411e-bc8b-30ead6d8ba4c.png"/>

