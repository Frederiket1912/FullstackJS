# Period-1 Vanilla JavaScript, Es-next, Node.js, Babel + Webpack and TypeScript

# Explain and Reflect:

1) Explain the differences between Java and JavaScript + node. Topics you could include:
 - that Java is a compiled language and JavaScript a scripted language
 - Java is both a language and a platform
- General differences in language features.
- Blocking vs. non-blocking

- Blocking refers to operations that block further execution until that operation finishes while non-blocking refers to code that doesn’t block execution. Or as Node.js docs puts it, blocking is when the execution of additional JavaScript in the Node.js process must wait until a non-JavaScript operation completes.

2) Explain generally about node.js, when it “makes sense” and npm, and how it “fits” into the node echo system.

"Node. js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node. js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices."

"npm , short for Node Package Manager, is two things: first and foremost, it is an online repository for the publishing of open-source Node. js projects; second, it is a command-line utility for interacting with said repository that aids in package installation, version management, and dependency management."

3) Explain about the Event Loop in JavaScript, including terms like; blocking, non-blocking, event loop, callback queue and "other" API's. Make sure to include why this is relevant for us as developers.

https://miro.medium.com/max/700/1*iHhUyO4DliDwa6x_cO5E3A.gif

The event loop is how JS handles processes with it's single thread. All the processes that needs to be done are on a single stack. When a process is ready to computed it is either done by the thread or thrown over to another API. If it is thrown to another API then when the other API is done, it will be put into the callback queue. When the stack is empty the first thing in the callback queue will then be put un to the stack and run. That way we can avoid a process that takes a while, for example a fetch, blocks everything else. Because another API takes care of it the next item on the stack can be run even though the fetch might take a while. 

4) What does it mean if a method in nodes API's ends with xxxxxxSync?

A method ending with 'Sync' means that it is synchronous and will block the stack untill the method is done.

5) Explain the terms JavaScript Engine (name at least one) and JavaScript Runtime Environment (name at least two)

From stackoverflow: "Unlike C and other compiled languages, Javascript runs in a container - a program that reads your js codes and runs them. This program must do two things

parse your code and convert it to runnable commands
provide some objects to javascript so that it can interact with the outside world.
The first part is called Engine and the second is Runtime.

For example, the Chrome Browser and node.js use the same Engine - V8, but their Runtimes are different: in Chrome you have the window, DOM objects etc, while node gives you require, Buffers and processes."

6) Explain (some) of the purposes with the tools Babel and WebPack and how they differ from each other. Use examples from the exercises.

Webpack is an aggressive and powerful module bundler for JavaScript applications. ... However, Webpack is more than just a module bundler. With the help of loaders and plugins, it can transform, minify and optimize all types of files before serving them as one bundle to the browser.

Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

See Exercise 4 for examples.

# Explain using sufficient code examples the following features in JavaScript (and node)
1) Variable/function-Hoisting

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

See Exercise 1 for examples.

2) this in JavaScript and how it differs from what we know from Java/.net.

The JavaScript this keyword refers to the object it belongs to.

It has different values depending on where it is used:

In a method, this refers to the owner object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), and apply() can refer this to any object.

3) Function Closures and the JavaScript Module Pattern

A closure is a function having access to the parent scope, even after the parent function has closed.

The Module Pattern is one of the important patterns in JavaScript. It is a commonly used Design Pattern which is used to wrap a set of variables and functions together in a single scope. It is used to define objects and specify the variables and the functions that can be accessed from outside the scope of the function.

4) User-defined Callback Functions (writing functions that take a callback)

A callback is a function that is invoked after a function has finished its execution. As JavaScript is an event-driven language, it does not wait for a function to finish its execution before moving on to the next one. Callbacks make it possible to make a function execute only after another function has finished executing.

All functions in JavaScript are objects, hence like any other object, a JavaScript function can be passed another function as an argument. There are many inbuilt functions which use callbacks.

A custom callback function can be created by using the callback keyword as the last parameter. It can then be invoked by calling the callback() function at the end of the function.

5) Explain the methods map, filter and reduce

The map() method creates a new array with the results of calling a function for every array element.
The map() method calls the provided function once for each element in an array, in order.

The filter() method creates an array filled with all array elements that pass a test (provided as a function).

The reduce() method reduces the array to a single value.
The reduce() method executes a provided function for each value of the array (from left-to-right).
The return value of the function is stored in an accumulator (result/total).

6) Provide examples of user-defined reusable modules implemented in Node.js (learnynode - 6)
See learnyounode my-module and make-it-modular.

7) Provide examples and explain the es2015 features: let, arrow functions, this, rest parameters, destructuring objects and arrays,   maps/sets etc.
The rest parameter syntax allows us to represent an indefinite number of arguments as an array. With the help of a rest parameter a function can be called with any number of arguments, no matter how it was defined.

8) Provide an example of ES6 inheritance and reflect over the differences between Inheritance in Java and in ES6.
Java follows class based inheritance—a top down, hierarchical, class-based relationship whereby properties are defined in a class and inherited by an instance of that class (one of its members). In JavaScript, inheritance is prototypal—all objects can inherit directly from other objects.

9) Explain and demonstrate, how to implement event-based code, how to emit events and how to listen for such events
The simple example of an event is a user clicking the mouse or pressing a key on the keyboard. The addEventListener() is an inbuilt function in JavaScript which takes the event to listen for, and a second argument to be called whenever the described event gets fired.

# ES6,7,8,ES-next and TypeScript

1) Provide examples with es-next, running in a browser, using Babel and Webpack
ES Next is a term used to refer to future versions of ECMAScript that have not been released. ... After features are accepted and officially added to a new version of ECMAScript, these features can begin to be added to JavaScript engines, which is when developers can get hold of them with an extra framework.

See Exercise 4.

2) Explain the two strategies for improving JavaScript: Babel and ES6 + ES-Next, versus Typescript. What does it require to use these technologies: In our backend with Node and in (many different) Browsers

Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

In short, TypeScript is a superset of JavaScript that has optional typing and compiles to plain JavaScript.
In simpler words, TypeScript technically is JavaScript with static typing, whenever you want to have it.

3) Provide examples to demonstrate the benefits of using TypeScript, including, types, interfaces, classes and generics
See Exercise 5.

4) Explain how we can get typescript code completion for external imports.
IntelliSense shows you intelligent code completion, hover info, and signature information so that you can write code more quickly and correctly.

5) Explain the ECMAScript Proposal Process for how new features are added to the language (the TC39 Process)
Stage 0: Strawperson — to allow input into specifications
Stage 1: Proposal — make the case for the addition, describe the solution and identify the potential challenges
Stage 2: Draft — describe the syntax and semantics using formal spec language
Stage 3: Candidate — states that further refinement will need feedback from implementations and users
Stage 4: Finished — states that the addition is ready for inclusion in the formal ECMAScript standard

# Callbacks, Promises and async/await
1) Explain about (ES-6) promises in JavaScript including, the problems they solve, a quick explanation of the Promise API and:
Promises can be used when you want to program asynchronously. They solve the problem of blocking when you want to do many things at the same time.
The Promise constructor takes a function (an executor) that will be executed immediately and passes in two functions: resolve , which must be called when the Promise is resolved (passing a result), and reject , when it is rejected (passing an error).

2) Example(s) that demonstrate how to avoid the callback hell  (“Pyramid of Doom")
See Exercise 3.

3) Example(s) that demonstrate how to execute asynchronous (promise-based) code in serial or parallel
See Exercise 3.

4) Example(s) that demonstrate how to implement our own promise-solutions.
See Exercise 3.

5) Example(s) that demonstrate error handling with promises
See Exercise 3.

# Explain about JavaScripts async/await, how it relates to promises and reasons to use it compared to the plain promise API.
# Provide examples to demonstrate 

- The async function returns a promise. The converse is also true. Every function that returns a promise can be considered as async function.
- await is used for calling an async function and waits for it to resolve or reject.
- await blocks the execution of the code within the async function in which it is located.
- If the output of function2 is dependent on the output of function1, I use await.
- If two functions can be run in parallel, create two different async functions and then run them in parallel.
- To run promises in parallel, create an array of promises and then use Promise.all(promisesArray).
- Every time you use await remember that you are writing blocking code. Over time we tend to neglect this.
- Instead of creating huge async functions with many await asyncFunction() in it, it is better to create smaller async functions. This way, we will be aware of not writing too much blocking code.
- Another advantage of using smaller async functions is that you force yourself to think of which async functions can be run in parallel.
- If your code contains blocking code, it is better to make it an async function. By doing this, you are making sure that somebody else can use your function asynchronously.
- By making async functions out of blocking code, you are enabling the user (who will call your function) to decide on the level of asynchronicity they want.

1) Why this often is the preferred way of handling promises
They allow you to write promise-based code as if it were synchronous, but without blocking the main thread. They make your asynchronous code less "clever" and more readable. If you use the async keyword before a function definition, you can then use await within the function.

2) Error handling with async/await
- When using async await, make sure you use try catch for error handling.

3) Serial or parallel execution with async/await.
- To run promises in parallel, create an array of promises and then use Promise.all(promisesArray).
See Exercise 3 e3.
