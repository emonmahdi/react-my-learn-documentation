# React Documentation my Personal Learning Purpose

## Job Placement Shortlist React Interview Question and Anser

#### 1. What is reactjs?

React is a JavaScript library for building user interfaces.
React(aka React.js or ReactJS) is an open-source front-end JavaScript library that is used for building composable user interfaces, especially for single-page applications. It is used for handling the view layer for web and mobile apps based on components in a declarative approach.
React was created by Jordan Walke, a software engineer working for Facebook. React was first deployed on Facebook's News Feed in 2011 and on Instagram in 2012.

#### 2. React js disadvantage.?

Some disadvantage react js:

1. The high pace of development
2. Poor Documentation
3. View Part
4. JSX as a barrier
5. Problems with SEO

Advantages:

1. Easy to Learn
2. Structural Flexibility
3. Reusable Components
4. Creating Dynamic Web Applications Becomes Easier
5. Using Virtual DOM that why create fast application

#### 3. useState কেন ইউস করি, এটার কাজ কি?

useState is a React Hook that allows you to add a state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.

useState, you can manage component state in a functional component, making it more concise and easier to read. The hook also takes care of the necessary re-renders when the state is updated, ensuring that your component reflects the latest state values.

#### 4. Chilld থেকে Parents এ ডাটা পাস করা যায় কিনা?

In React, data flow is unidirectional, and child components are not supposed to directly modify the state of their parent components. Instead, the parent component can pass down functions (callbacks) to the child components as props, and the child components can invoke these functions to communicate with the parent.

Approach:
Following are the steps to pass data from the child component to the parent component:

1. In the parent component, create a callback function. This callback function will retrieve the data from the child component.
2. Pass the callback function to the child as a prop from the parent component.
3. The child component calls the parent callback function using props and passes the data to the parent component.

#### 5. Parant থেকে ৪-৫ নিচের চাইল্ড ডাটা পাস করার বেস্ট ওয়ে কোনটা?

React follows a unidirectional data flow, and passing data from parent to child components is straightforward using props. However, when you need to pass data from a child component deep down in the component the process becomes a bit more complex.

Here are some common patterns for passing data from a deep child component to a parent component:

1. Callback Function Prop
2. Context API
3. State Management Library

Reference: https://www.geeksforgeeks.org/how-to-pass-data-from-child-component-to-its-parent-in-reactjs/

#### 6. রিয়েক্ট এর সাথ Mongodb কেন ইউস করা হয়ছে MySql কেন নয়?

React and MongoDB serve different purposes in web development, and they are not mutually exclusive. React is a JavaScript library for building user interfaces, while MongoDB is a NoSQL database. They are often used together in a technology stack commonly referred to as the MERN stack (MongoDB, Express.js, React, Node.js).

Here's why MongoDB is commonly used with React:

1. JSON-Like Documents
2. Schema Flexibility
3. NoSQL Nature
4. Developer Productivity
5. Open Source Ecosystem

#### 7. What is Redux and its uses?

Redux is a pattern and library for managing and updating application state, using events called "actions". It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.

Redux helps you manage "global" state - state that is needed across many parts of your application.

The patterns and tools provided by Redux make it easier to understand when, where, why, and how the state in your application is being updated, and how your application logic will behave when those changes occur.

#### 8. React native সম্পর্কে কি জানো বলো

React Native is an open-source framework developed by Facebook for building mobile applications using JavaScript and React. It allows developers to use React, a popular JavaScript library for building user interfaces, to create native mobile applications for iOS and Android platforms.

Key features and concepts of React Native include:

1. Cross-Platform Development
2. Reusable Components
3. React Principles
4. Native Performance
5. Hot Reloading
6. Community and Ecosystem
7. Integration with Native Code

#### 9. Higher order components কি? বাস্তব উদাহার দাও।

Higher Order Components or HOC are basically functions that take a component as an argument and return a new component.
Higher-order components are useful to abstract a shared logic used by many components.
Components in React allow code reuse and prevent code repetition. Using HOCs you can reduce the repeated code, by encapsulating that logic into a Higher Order Component.
Real Life example: create a React Component that upon hover its background color changes to blue.

Reference: https://deadsimplechat.com/blog/higher-order-componets-in-react/

#### 10. UseEffect and useState কি return করে?

useState and useEffect are two fundamental hooks in React that are used for managing state and performing side effects in functional components.

useState
The useState hook returns an array with two elements

1. State Variable: The first element of the array is the current state value, which is typically a variable that holds the current state of the component.
2. State-Updating Function: The second element of the array is a function that allows you to update the state.

useEffect
The useEffect hook returns nothing. It is used for handling side effects in functional components. The useEffect function itself does not return anything; instead, it allows you to perform side effects (such as data fetching, subscriptions, manual DOM manipulations, etc.) in a declarative way.

#### 11. React lifecycle সম্পর্কে বলো

React use 2 components - functional and class component. Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.

The three phases are: Mounting, Updating, and Unmounting.

1. Mounting: Mounting means putting elements into the DOM.

React has four built-in methods that gets called, in this order, when mounting a component: one is componentDidMount

componentDidMount(): The componentDidMount() method is called after the component is rendered.

2. Updating: When a component is updated. A component is updated whenever there is a change in the component's state or props.

React has five built-in methods that gets called, in this order, when a component is updated: one is componentDidUpdate.

componentDidUpdate(): The componentDidUpdate method is called after the component is updated in the DOM.

3. Unmounting: when a component is removed from the DOM

React has only one built-in method that gets called when a component is unmounted:

componentWillUnmount(): The componentWillUnmount method is called when the component is about to be removed from the DOM.

#### 12. Props and state কীভাবে কাজ করে

Props and State are two fundamental concepts used to manage and pass data in a React application.

Props: props (short for properties) are used to pass data from a parent component to a child component.
Props are immutable; they cannot be modified by the child component that receives them.

How to pass props:

1. You pass props in a React component by adding attributes to the component's JSX tag
2. You can destructure props directly in the function parameters or within the function body for better readability.

State: state is used to manage the internal state of a component.

Differences:
props are passed down from parent to child components and are immutable in the child component.
state is managed internally by a component and can be modified using the setState method.

Best Practices:
Use props for data that comes from a parent component and doesn't change within the component.
Use state for data that is managed within the component and may change over time.

#### 13. রিয়েক্ট আমরা কেন ব্যাবহার করব?

React is a popular JavaScript library for building user interfaces, and it is widely used for several reasons

1. Component-Based Architecture
2. Declarative Syntax
3. Virtual DOM
4. Efficient Updates
5. One-Way Data Binding
6. Rich Ecosystem
7. Community Support
8. React Native
9. Compatibility with Other Libraries/Frameworks
10. SEO-Friendly

#### 14. রিয়েক্ট অপ্টমাইজ কীভাবে করে?

Optimizing a React application involves various strategies to improve performance, reduce load times, and enhance the overall user experience. Here are some key optimization techniques:

1. Code Splitting
2. Bundle Size Optimization
3. Lazy Loading
4. Memoization
5. Server-Side Rendering (SSR) and Static Site Generation (SSG)
6. Optimize Images and Assets
7. Optimize Component Rendering
8. Optimize State Management
9. Bundle Analysis and Profiling
10. Upgrade React and Dependencies

reference: https://blog.logrocket.com/optimizing-performance-react-app/

#### 15. রিয়েক্ট এর স্টেড ম্যানেজমেন্ট জিনিস্টা কি?

State management is the process of handling the state of an application optimally. It is a crucial part of the development process.
React state management is a critical aspect of building React applications. The state represents the data that a component can maintain and modify over time. Here are key concepts related to React state management:

1. useState Hooks
2. useReducer Hooks
3. useContext Hooks
4. Redux
5. MobX

Reference: https://blog.logrocket.com/modern-guide-react-state-patterns/#:~:text=When%20it%20comes%20to%20React,state%20of%20an%20application%20optimally.

#### 16. Jsx কীভাবে কাজ করে?

JSX (JavaScript XML) is a syntax extension that makes writing React components more declarative and readable. Under the hood, JSX gets transformed into JavaScript code that uses React.createElement to create a virtual representation of the UI. This virtual representation is then rendered to the actual DOM by React.

#### 17. Redux -flax কি?

#### 18. Virtual dom and real dom এর পার্থক্য কি?

Real Dom:

1. Real DOM represents the actual structure of the webpage.
2. DOM manipulation is very expensive
3. There is too much memory wastage
4. It updates Slow

Virtual DOM:

1. Virtual DOM represents the virtual/memory representation of the web page.
2. DOM manipulation is very easy
3. No memory wastage
4. No memory wastage
5. It updates fast

#### 19. UseEfect এর ডিপেন্ডেন্সি কেন ইউস করা হয়

#### 20. What is context API? How does it work?

#### 21. Props drailng কি?

Prop drilling is the process of passing data from a parent component down to its nested child components through intermediate components in a React application

#### 22. React native এর Elementor and component নিয়ে কাজ করছে কিনা

#### 23. React re-render কীভাবে ঠেকানো যায়

#### 24. useMemo use kora hoy kno?

#### 25. useHistory কেন ইউস করা হয়?

useHistory is a hook provided by React Router, a popular routing library for React applications. The useHistory hook allows components to access and interact with the history object, which keeps track of the navigation history.
What is controlled & uncontrolled components? And between this?

In a controlled component, the form data is handled by the React component's state. The state is updated in response to user actions, such as typing into an input field. The input fields receive their current values through props and only change when the state is updated. Controlled components provide a single source of truth for the form data.

In an uncontrolled component, the form data is not controlled by React state. Instead, the DOM itself holds the state. The input fields keep their own state, and you access their values using references after the form is submitted or when needed. Uncontrolled components are often used when integrating React with non-React code or when you want to rely more on the DOM.

Ref: https://www.scaler.com/topics/react/controlled-and-uncontrolled-components-in-react/

## Top 20 ReactJS Technical Questions in Coding Interviews

### 1. What is ReactJS, and what are its key features?

Answer: ReactJS, often referred to as React, is an open-source JavaScript library developed by Facebook for building user interfaces, specifically for single-page applications. It enables developers to create reusable UI components, manage the state of the app, and efficiently update the UI as the state changes.

#### Key features of ReactJS include:

1. Virtual DOM: React creates a lightweight in-memory data structure called the Virtual DOM, which is an abstract representation of the actual DOM. This feature allows React to efficiently update the UI by calculating the difference between the current and new Virtual DOM (called "diffing") and then updating the real DOM with only the necessary changes.

2. Component-based architecture: React follows a component-based architecture, where complex UIs can be broken down into smaller, reusable components. Each component has its own logic, state, and can render itself independently.

3. One-way data binding: React follows a unidirectional data flow, meaning the data is passed down from parent components to child components through properties (props). This approach makes it easier to trace and debug the flow of data in an application.

4. JSX: JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like structures within JavaScript code. It makes the code more readable and easier to understand.

### 2. What is the difference between functional and class components?

Functional components (also known as stateless or dumb components) are plain JavaScript functions that accept props as an argument and return a React element. They are primarily used for presenting data and don't have access to the component's state or lifecycle methods. However, with the introduction of React Hooks, functional components can now manage state and access lifecycle methods.

```js
import React from "react";

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Greeting;
```

Class components (also known as stateful or smart components) are JavaScript ES6 classes that extend the React.Component class. They have access to component state and lifecycle methods, making them suitable for managing data and complex UI logic.

```js
import React, { Component } from "react";

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

export default Greeting;
```

With the introduction of React Hooks, functional components have become more powerful, and the use of class components has declined. However, it's still essential to understand both types of components for coding interviews and legacy codebases.

### Most asked Interview Questions and Answer

Link: [https://www.altcademy.com/blog/top-20-reactjs-technical-questions-in-coding-interviews/]

2. [Medium React js asked questions](https://medium.com/@greennolgaa/mastering-reactjs-interview-questions-and-answers-a-comprehensive-guide-for-5-years-of-experience-d93fd09d44c2)

### Coding Interview Exercise:

1. 10 Coding Exercise Reference Link: [https://dev.to/frontendengineer/10-reactjs-coding-exercises-with-codepen-exercise-and-solution--22k7]

2. 30 React coding exercise: [https://codeinterview.io/blog/reactjs-coding-interview-questions/]

3. React Coding Interview [https://medium.com/@shashipraba.56/react-coding-interview-questions-answers-with-coding-challenges-45a3cd50433d]

4. Advanced Interview questions: [https://www.fullstack.cafe/blog/react-js-interview-questions]

5. React Coding Challenges : [https://blog.imocha.io/react-coding-challenges] [https://profy.dev/article/react-coding-challenges] [https://www.dhiwise.com/post/react-coding-challenges-common-pitfalls-and-how-to-avoid-them]

6. JavaScript Coding Interview Preparation: [https://codeinterview.io/blog/javascript-coding-interview-questions/]
