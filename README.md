# Loncotes County Library

This repo is the starting code for the Loncotes County Library client chapter in the NSS .NET curriculum.

## Setup

1. Use this template to create a new repo in your own account, and clone the new repo locally.
1. Run `npm install` to get all of the project dependencies.
1. This client assumes that the .NET API is running locally on port `5001` for HTTPS. It is likely that your own API is using a different port. To edit your app's port, edit `launchSettings.json` in the `Properties` folder of your API repo so that the `https` profile looks like this:

```json
"https": {
      "commandName": "Project",
      "dotnetRunMessages": true,
      "launchBrowser": true,
      "launchUrl": "swagger",
      "applicationUrl": "https://localhost:5001;http://localhost:5000",
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Development"
      }
    },
```

1. Shut down and restart your API if it is running, otherwise start the API
1. Then run `npm run dev` to start the application.
