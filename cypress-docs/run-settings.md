# Run Settings
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
