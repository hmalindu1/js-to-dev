---
title: "Understanding JavaScript's Variable Hoisting, Temporal Dead Zone (TDZ), and How the Engine Works: A Comprehensive Guide"
description: "Discover how JavaScript handles variable hoisting, the Temporal Dead Zone (TDZ), and the differences between var, let, and const. Learn how the JavaScript engine processes code during compilation and execution"
date: 2024-09-27T05:00:00Z
image: "/images/posts/08.png"
categories: ["back end", "front end"]
authors: ["Hashan Hemachandra"]
tags: ["Javascript"]
draft: false
---

JavaScript is one of the most widely used programming languages in the world, yet its inner workings are often misunderstood. Concepts like **hoisting**, the **Temporal Dead Zone (TDZ)**, and the **differences between** `var`, `let`, and `const` can confuse even seasoned developers.

In this blog post, we'll take a deep dive into how the JavaScript engine processes your code, focusing on critical stages like **compilation** and **execution**, and explain the behavior of variable declarations in modern JavaScript. Whether you're a beginner looking to deepen your knowledge or an advanced developer seeking to solidify your understanding, this post will provide the comprehensive insight you need.

#### How the JavaScript Engine Works ####

Before we can understand JavaScript behavior like hoisting and the Temporal Dead Zone, we need to first understand how the JavaScript engine processes code. Unlike compiled languages like C or Java, JavaScript is often referred to as an "interpreted" language. However, modern JavaScript engines (like Google's V8) do more than just interpret code line by line—they actually compile the code before execution.

##### JavaScript Processing: Two Phases #####

1. **Compilation Phase**

2. **Execution Phase**

These two phases ensure that JavaScript can properly manage variables and functions, allowing for optimizations like hoisting. Let's explore each of these phases in more detail.

##### Compilation Phase #####

During the **compilation phase**, the JavaScript engine scans through your code and identifies all the **variable** and **function declarations**. This process allows the engine to "hoist" these declarations to the top of their scope.

However, it's crucial to understand that hoisting works differently for different types of variable declarations. The engine behaves differently depending on whether a variable is declared with `var`, `let`, or `const`.

During the **compilation phase**, the engine does the following:

- **var**: It hoists `var` declarations to the top of their scope and initializes them to `undefined`. This means that even if a `var` declaration appears later in the code, it will be available for use throughout the scope.

- **`let` and `const`**: These variables are also hoisted, but **not initialized**. They remain uninitialized, and this is where the **Temporal Dead Zone (TDZ)** comes into play (more on that later).

- **Function declarations**: Unlike variables, **function declarations** are fully hoisted, including their entire body. This allows you to call a function before its actual declaration in the code.

Once the compilation phase completes, JavaScript knows about all the variables and functions in the code, even if they haven't been initialized yet.

##### Execution Phase ##### 

Once the **compilation phase** finishes, the engine enters the **execution phase**, where it begins running your code line by line. At this point, the behavior of variables and functions depends on how they were declared (`var`, `let`, `const`).

During execution:

- **var**: Variables declared with var are already initialized with undefined, so they can be accessed even before the line where they are assigned a value.

- **`let` and `const`**: These variables are still in the **Temporal Dead Zone (TDZ)** until they are initialized. If you try to access them before initialization, JavaScript throws a `ReferenceError`.

- **Function declarations**: Since function declarations are fully hoisted, you can call them anywhere in the scope, even before the actual function definition in the code.

The interplay between **declaration**, **hoisting**, and **initialization** is crucial to understanding how JavaScript handles variables during execution.

##### Variable Declaration and Initialization #####

To better understand how JavaScript handles variables, it's important to differentiate between **declaration** and **initialization**:

- Declaration: This is the act of telling the JavaScript engine that a variable or function exists. For example, in let x;, you are declaring the variable x.
- Initialization: This is when you assign a value to a variable. In x = 5;, you are initializing x with the value 5.

In JavaScript, the **declaration** happens during the **compilation phase**, while **initialization** usually happens during the **execution phase** (except for `var`, which is initialized to `undefined` during the compilation phase).

#### What is Hoisting in JavaScript? ####

**Hoisting** is a mechanism that allows JavaScript to "move" declarations to the top of their scope. This behavior applies to **variables** and **functions** but works differently depending on how the variable is declared.

##### Hoisting Behavior: #####

- `var`: Variables declared with `var` are hoisted and initialized to `undefined`. This means you can access a `var` variable before the line where it's declared, but its value will be `undefined` until assignment.

```typescript
console.log(x);  // Output: undefined
var x = 5;
```
In this example, `var x` is hoisted to the top and initialized to `undefined`, so when `console.log(x)` runs, it outputs `undefined`.

- `let` and `const`: Variables declared with `let` and `const` are also hoisted but not initialized. They remain in the **Temporal Dead Zone (TDZ)** until their declaration and initialization occur.

```typescript
console.log(y);  // ReferenceError: Cannot access 'y' before initialization
let y = 10;
```
Here, `let y` is hoisted but remains uninitialized until the line `let y = 10;` is executed, leading to a `ReferenceError` if you try to access it beforehand.

- **Function Declarations**: Function declarations are fully hoisted. This means the entire function definition is moved to the top of the scope, so you can call the function even before it appears in the code.

```typescript
sayHello();  // Output: "Hello!"
function sayHello() {
  console.log("Hello!");
}
```

#### The Temporal Dead Zone (TDZ) ####

The **Temporal Dead Zone (TDZ)** is a period during the execution of JavaScript code in which a `let` or `const` variable is hoisted but not yet initialized. Attempting to access the variable during this period results in a `ReferenceError`.

##### How the TDZ Works: #####

- The TDZ begins when the scope (such as a block or function) is entered and continues until the variable is initialized.

- Even though the JavaScript engine knows about the variable (because of hoisting during the compilation phase), it cannot be used until the initialization line is reached.

```typescript
{
  console.log(a);  // ReferenceError: Cannot access 'a' before initialization
  let a = 5;
}
```

In this example, the TDZ starts as soon as the block `{}` is entered. The variable `a` remains in the TDZ until` let a = 5;` is executed. Any attempt to access `a` before this point results in a `ReferenceError`.

##### Why the TDZ Exists: #####

The TDZ ensures that variables declared with `let` and `const` are not accessible before they are properly initialized, which helps prevent potential bugs caused by accessing uninitialized variables.

#### Clarifying the Scope of `var`, `let`, and `const` ####

Understanding the scoping rules of var, let, and const is crucial for writing clean and predictable JavaScript code. Let’s break down the differences in how they behave when declared in different scopes.

##### `var` Scope: #####

- **Function-scoped**: If `var` is declared inside a function, it is scoped to the entire function. The variable can be accessed from anywhere within that function, regardless of whether it's inside a block (such as an `if` or `for` loop).
- **Global-scoped**: If `var` is declared outside of any function (i.e., in the global scope), it becomes a global variable. This also means it will become a property of the `window` object (in browsers).
- **Not Block-scoped**: `var` ignores block scope, meaning that if it’s declared inside a block (such as an `if` or `for` statement), it will still be accessible outside of that block, as long as it’s in the same function.

```typescript
function myFunction() {
    if (true) {
        var x = 10;  // Declared inside a block (if statement), but scoped to the entire function
    }
    console.log(x);  // Output: 10 (accessible even outside the block)
}

myFunction();
console.log(x);  // ReferenceError: x is not defined (because x is function-scoped, not global)
```

In this example, `var x` is accessible throughout the entire `myFunction`, but not outside of it because `var` is function-scoped, not global-scoped.

**Example of Global Scope:**

```typescript
var globalVar = "I'm global!";
console.log(window.globalVar);  // Output: I'm global!
```

When `var` is declared globally, it becomes part of the `window` object, meaning it’s available throughout the entire script and globally accessible.

##### `let` Scope: #####

- **Block-scoped**: `let` is only accessible within the block `{}` where it is declared. Blocks include things like `if` statements, `for` loops, or any `{}` block, even within functions.
- **Not Function-scoped**: Unlike `var`, `let` respects block boundaries and does not "leak" out of them, even if declared within a function.
- **Global scope**: When declared at the global level, `let` variables are global, but they do not become properties of the `window` object (in browsers), unlike `var`.

```typescript
function testBlockScope() {
    if (true) {
        let y = 20;  // Block-scoped
    }
    console.log(y);  // ReferenceError: y is not defined (y is not accessible outside the block)
}

testBlockScope();
```

In this case, `let y` is confined to the `if` block and cannot be accessed outside of it, even though it’s within the same function.

##### `const` Scope: #####

- **Block-scoped**: Like `let`, `const` is also block-scoped and only accessible within the block it’s declared in.
- **Not Reassignable**: Once a value is assigned to a `const` variable, it cannot be reassigned. However, if it’s an object or an array, the contents of the object or array can be modified.
- **Global scope**: Just like `let`, when declared globally, `const` variables do not become properties of the `window` object in the browser.

**Example of Block Scoping with const:**

```typescript
if (true) {
    const z = 30;  // Block-scoped
}
console.log(z);  // ReferenceError: z is not defined (z is block-scoped)
```

Just like `let`, `const z` is limited to the `if` block and does not leak outside of it.

##### Differences Between Global Scope for `var`, `let`, and `const` #####

While all three can exist in the global scope:

- `var` declarations in the global scope become properties of the `window` object.
- `let` and `const` do not pollute the global object (`window`).

```typescript
let globalLet = "I'm a global `let`!";
const globalConst = "I'm a global `const`!";

console.log(window.globalLet);  // Output: undefined
console.log(window.globalConst);  // Output: undefined
```
In this example, neither `globalLet` nor `globalConst` become properties of the `window` object, which is a safer behavior that avoids unintended side effects.

#### Sequence of Events: Compilation, Hoisting, TDZ, and Execution ####

Here’s a step-by-step sequence of what happens in JavaScript:

##### 1. Compilation Phase: #####

- JavaScript scans the code and hoists all declarations to the top of their respective scopes.
- `var` is hoisted and initialized to `undefined`.
- `let` and `const` are hoisted but not initialized (they enter the TDZ).
- Function declarations are fully hoisted, including their bodies.

##### 2. Entering Scope: #####

- When the JavaScript engine enters a scope (e.g., a block or function), `let` and `const` variables are in the TDZ.

##### 3. Execution Phase: #####

- JavaScript starts executing code line by line.
- `var` variables are accessible but will be `undefined` until initialized.
- `let` and `const` variables remain in the TDZ until they are initialized.
- Function declarations are available from the start of the scope.

##### 4. Initialization: #####

- Once the engine reaches the `let` or `const` declaration, the variable is initialized, and the TDZ ends.

Understanding how **hoisting**, the **Temporal Dead Zone (TDZ)**, and the **JavaScript engine** work is key to writing efficient and bug-free code. By mastering how the **compilation phase** and **execution phase** affect variable declaration and initialization, you can avoid common pitfalls when using var, let, and const.

Knowing the intricacies of JavaScript's processing model allows you to take full control of your code, ensuring predictable and stable behavior in your applications. Keep these principles in mind, and you'll be better equipped to write clear and maintainable JavaScript code!