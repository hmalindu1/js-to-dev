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

### What is Execution Context

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

### Realm

Realm is an isolated environment which a code runs. For example, when we open a new tab on a browser, a Realm is created. Realm consists of several components.

1. Intrinsics
2. Global Object
3. Global Environment Record

##### 1. Intrinsics

Intrinsics provide all the the standard built in objects and functions that are required for executing a JavaScript code. For an example **Array** , **Function**, **Error**, **Date**, **Math** and so on.

##### 2. Global Object

Global Object contains multiple properties.

i. Specification defined properties.</br>
ii. Host defined properties.</br>
iii. User defined properties.</br>

###### i. Specification Defined Properties

All the JavaScript built in Functions and Objects like **Array**, **Function**, **Error**. Basically this is the **_Intrinsics_**

###### ii. Host Defined Properties

All the browser related APIs like **fetch**, **setTimeout**, **Document**, **localStorage**. These are also made available through the global object.

###### iii. User Defined Properties

As developers we can add properties to the global object whenever we declare a **function** on the global scope or whenever we declare a variable using **var** keyword on global scope. These are also added to the global object and now available to use throughout the entire script.

##### 3. Global Environment Record

Environment records manage the identifier bindings within it's scope. Let's break this down. 

###### What is an identfire ?

Identifier is the variable name you assign to a variable.

###### What is identifier binding ?

It means a creating connection between the variable name and the actual data it represents.






Every execution context goes through **two phases**.

1. Creation Phase
2. Execution Phase

##### Creation Phase
