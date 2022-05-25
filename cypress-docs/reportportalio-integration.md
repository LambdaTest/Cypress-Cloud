# ReportPortal.io Integration With LambdaTest For Cypress

Learn how to integrate the **LambdaTest** platform with **ReportPortal.io** platform for running your **Cypress** automation tests. Before you can get started, make sure you have an account on [ReportPortal.io](http://reportportal.io/).

> By default, the LambdaTest **Cypress-Multi-Reporter** mechanism generates **mochaawesome**. To override it with some other reporting options (report portal in this case), you have to create a different file to define the reporting configuration.

## Steps To Integrate

---

- Navigate to [ReportPortal.io](http://reportportal.io/) and login into your account. Then open your **Report Portal IO Profile**.

<img height="400" src="https://user-images.githubusercontent.com/70570645/169647643-7e9ac13b-9e84-461b-bc71-99dd5b6cc567.png"/>

  ***

- Copy the Report Portal Credentials

<img height="400" src="https://user-images.githubusercontent.com/70570645/169647742-9e588502-6239-45b1-b08d-aa736bd1cc74.png"/>

  ***

- Open your Cypress project and create a new file for defining report portal configuration/credentials

<img height="400" src="https://user-images.githubusercontent.com/70570645/169647753-94cdb5d6-1ebe-4fe5-b555-e31293f3ff09.png"/>

  ***

- Define the file name in the “`reporter_config_file`“ capability of `lambdatest-config.json` file as mentioned in the below screenshot

<img height="400" src="https://user-images.githubusercontent.com/70570645/169647775-bd3c330b-9428-47b8-9ba0-c9fd2d59dc06.png"/>

  ***

- Define the **reportportal.io** dependency (`@reportportal/agent-js-cypress`) in your **lambdatest-config.json** or **package.json** file

<img height="400" src="https://user-images.githubusercontent.com/70570645/169647798-2cf1ca7b-cba1-4878-bdf1-65482fdfde46.png"/>

  ***

- Integration is now done, open the Dashboard to see the results.

<img height="400" src="https://user-images.githubusercontent.com/70570645/169647832-14fe7630-1a63-4f99-99ee-76d80f465b3b.png"/>

  ***

<img height="400" src="https://user-images.githubusercontent.com/70570645/169647852-c204342c-647c-4c81-a05c-02843a330ffa.png"/>
