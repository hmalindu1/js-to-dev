---
title: "Configure ESLint to your Node.js Express Project"
description: "meta description"
date: 2022-08-29T05:00:00Z
image: "/images/posts/01.png"
categories: ["art"]
authors: ["Mark Dinn"]
tags: ["diy", "toy"]
draft: false
---

Ever since I started my dev journey, ESLint has been a mysterious place for me. Because dumb me could not understand what is happening with ESLint until I found out the powerfulness of it! That’s a great tool you can use to arrange your JavaScript code automatically in a good structural manner and to maintained a consistent coding throughout the project . I will show you how to configure ESLint with VSCode so you can do the linting perfectly for your Node.js project . I am using Node Package Manager to install ESLint and other necessary dependencies to my project. I’ll run a simple app using Express Js.

First I will initiate the `package.json` file inside the project folder using “npm init” . Create a new folder where you want to have the project files and open that folder through VSCode. Type and enter 

```shell
npm init
``` 

inside the terminal window of that file.

Then it’ll ask some information about the project folder and simply fill those. You’ll be good to go! Below shown are the given information. For entry point you can give server.js , the rest you can fill according to you preference.

```shell
package name: (simple-app) 
version: (1.0.0) 
description: Configuring ESLint to VSCode 
entry point: (index.js) server.js 
test command: 
git repository: 
keywords: Node Express ESLint VSCode Prettier Babel 
author: Hashan 
license: (ISC) 
```

Then it’ll show the package.json file inside your simple app folder. Click on the package json file and inside that package.json file, every given information will be there.

```json
{
  "name": "nodejs-eslint",
  "version": "1.0.0",
  "description": "Configure ESLint to VSCode",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "Node",
    "Express",
    "ESLint",
    "VSCode",
    "Prettier",
    "Babel"
  ],
  "author": "Hashan",
  "license": "ISC"
}

```

Then I’ll be installing all the dependencies we need to build our application. First main dependency I need is Express.Js . We are going to build our application based on Express framework. To install Express, run the command

```shell
 npm install express
 ```

 on the terminal. So the command will download dependencies for express and it’ll be added to package.json file. Then you can see inside the folder, `node_modules` folder and `package-lock.json` file are added. Also `package.json` file has been updated from express installation.



Then let’s create a simple app using express. First create a new file inside the simple app folder. Name it as `server.js` . Inside server.js file, we simply create our express application.

```js
import express, { json } from "express";
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(json());

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
```
Then run the server by typing

```shell
node server.js
```

Your app is running on port 3000. Let’s now install ESLint to our project. Stop the server using **CTRL + c**, then run below command

```shell
npm init @eslint/config@latest
```

It'll ask for few configurations 

```shell
Need to install the following packages:
@eslint/create-config@1.1.4
Ok to proceed? (y) y
√ How would you like to use ESLint? · problems    
√ What type of modules does your project use? · esm
√ Which framework does your project use? · none
√ Does your project use TypeScript? · javascript
√ Where does your code run? · browser
The config that you've selected requires the following dependencies:

eslint@9.x, globals, @eslint/js
√ Would you like to install them now? · No / Yes
√ Which package manager do you want to use? · npm
☕️Installing...
```

Install them as your preference. Then you'll get the `eslint.config.mjs` file.