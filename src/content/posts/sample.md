---
title: "JavaScript Execution Context"
description: "Let's talk about JS Execution Context"
date: 2025-03-11T05:00:00Z
image: ""
categories: ["back end", "front end"]
authors: ["Hashan Hemachandra"]
tags: ["Javascript"]
draft: false
---

You may have heard **Execution Context** many time in your JavaScript journey while you are learning new things. Also It's one of the most popular interview question so you would get almost every JavaScript Engineer interview you'd face. Today let's deep dive into matter of execution context

#### What is Execution Context

It is the environment in which a code get executed. It contains many internal components that the **JavaScript Engine** uses to keep track of execution flow of any piece of code. Execution context use **environment records** to keep track and maintain the identifire bindings that have been created for the variable declerations, function decleration and all the values within that context.

Let's use following script to see what exactly happens behind the scene

```javascript
const firstName = "Hashan";
let lastName = "Hemachandra";

function intro(name) {
    const fullName = name + " " + lastName;
    return "Hello, " + fullName;
}

intro(firstName);
```

When this script is loaded **Global Execution Context** is created. Global execution context has many components. Sake of explanation, will focus through only three parts. 

![Global Execution Context](/images/execution-context/global-execution-context.png)

- Realm
- Lexical Environment
- Variable Environment

##### Realm #####

Realm is an isolated environment which a code runs. For example, when we open a new tab on a browser, a Realm is created. Realm consists of several components. 

- Intrinsics
- Global Object
- Global Environment Record

###### Intrinsics ######



Every execution context goes through **two phases**. 

1. Creation Phase
2. Execution Phase

##### Creation Phase #####

