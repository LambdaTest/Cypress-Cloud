This article will guide you on how to integrate the **LambdaTest** platform with **ReportPortal.io** platform for running your **Cypress** automation tests. Before you can get started, make sure you have an account on [ReportPortal.io](http://reportportal.io/).

> By default, the LambdaTest **Cypress-Multi-Reporter** mechanism generates **mochaawesome**. To override it with some other reporting options (report portal in this case), you have to create a different file to define the reporting configuration.

## Steps To Integrate

---

- Navigate to [ReportPortal.io](http://reportportal.io/) and login into your account. Then open your **Report Portal IO Profile**.

  <img loading="lazy" src={require('../assets/images/report-portal-cypress/report1.webp').default} alt="Image" width="1353" height="622" className="doc_img"/>

  ***

- Copy the Report Portal Credentials

  <img loading="lazy" src={require('../assets/images/report-portal-cypress/report2.webp').default} alt="Image" width="1353" height="622" className="doc_img"/>

  ***

- Open your Cypress project and create a new file for defining report portal configuration/credentials

  <img loading="lazy" src={require('../assets/images/report-portal-cypress/report3.webp').default} alt="Image" width="1353" height="622" className="doc_img"/>

  ***

- Define the file name in the “`reporter_config_file`“ capability of `lambdatest-config.json` file as mentioned in the below screenshot

  <img loading="lazy" src={require('../assets/images/report-portal-cypress/report4.webp').default} alt="Image" width="1353" height="622" className="doc_img"/>

  ***

- Define the **reportportal.io** dependency (`@reportportal/agent-js-cypress`) in your **lambdatest-config.json** or **package.json** file

  <img loading="lazy" src={require('../assets/images/report-portal-cypress/report5.webp').default} alt="Image" width="1353" height="622" className="doc_img"/>

  ***

- Integration is now done, open the Dashboard to see the results.

  <img loading="lazy" src={require('../assets/images/report-portal-cypress/report6.webp').default} alt="Image" width="1353" height="622" className="doc_img"/>

  ***

  <img loading="lazy" src={require('../assets/images/report-portal-cypress/report7.webp').default} alt="Image" width="1353" height="622" className="doc_img"/>
