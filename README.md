## Installation

Steps to run your project locally

### 1. OAuth stuff

1. [Register an OAuth app in github](https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/)
2. [Deploy an instance of Gatekeeper to heroku](https://github.com/prose/gatekeeper#deploy-on-heroku) 



### 2. Local preparation

1. `git clone https://github.com/MrRamka/github-web-client.git` 
   
   or `git clone git@github.com:MrRamka/github-web-client.git`
   
2. `cd github-web-client.git`
3. Create `.env` file and add



REACT_APP_AUTH_API_URI=`YOUR_HEROKU_URL` <br />
REACT_APP_REDIRECT_URI=`http://localhost:3000/login/oauth/access_token/` <br />
REACT_APP_CLIENT_ID=`YOUR_GITHUB_CLIENT_ID` <br />


4. Install all packages using `yarn` command  

### 3. Run project

`yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

`yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## Contributing

###Project structure
```
src 
├───api 
│   ├───index.ts 
│   └───ApiName 
│	    ├───index.ts 
│	    ├───queries.ts 
│	    └───types.ts 
├───components 
│   └───Component
│	    ├───index.ts
│	    ├───styles.ts
│	    ├───Component.tsx
│	    └───types.ts
├───constants
│   ├───index.ts
│   └───const.ts
├───helpers
│   ├───index.ts
│   └───helper.ts
├───pages
│   └───Page
│	 ├───index.ts
│	 └───Page.tsx
└───shared
    ├───index.ts
    └───SharedComponent.tsx
```

Best way to keep up to date is check the issues. We really welcome improvements for all aspects of an app.

Any suggestions/improvements/bugs can be in the form of Pull Requests, or creating an issue.

##License

Released under the MIT License. Check [LICENSE.md](https://github.com/MrRamka/github-web-client/blob/master/LICENSE) for more info.
