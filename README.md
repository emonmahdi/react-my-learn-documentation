# React Documentation my Personal Learning Purpose

## Job Placement Shortlist React Interview Question and Anser

#### 1. What is react js? Why User React?

React is a JavaScript library for building user interfaces.
React(aka React.js or ReactJS) is an open-source front-end JavaScript library that is used for building composable user interfaces, especially for single-page applications. It is used for handling the view layer for web and mobile apps based on components in a declarative approach.
React was created by Jordan Walke, a software engineer working for Facebook. React was first deployed on Facebook's News Feed in 2011 and on Instagram in 2012.

#### Benefits of react js:

- React easy to learn from other library of framework
- React has large development community
- React provide reusable components
- Virtual Dom
- Jsx performance better in application
- Debugging and Error Handling easily because Uni directional Data flow
- Redux implement easily
- React Hooks

Reference: [why use react js](https://www.monocubed.com/blog/why-use-react/)

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

#### 10.What is Hooks? UseEffect and useState কি return করে?

useState and useEffect are two fundamental hooks in React that are used for managing state and performing side effects in functional components.

useState
The useState hook returns an array with two elements

1. State Variable: The first element of the array is the current state value, which is typically a variable that holds the current state of the component.
2. State-Updating Function: The second element of the array is a function that allows you to update the state.

useEffect
The useEffect hook returns nothing. It is used for handling side effects in functional components. The useEffect function itself does not return anything; instead, it allows you to perform side effects (such as data fetching, subscriptions, manual DOM manipulations, etc.) in a declarative way.

Ref:

1. [Hooks](https://saadbashar.com/2021/07/24/%E0%A6%B8%E0%A6%B9%E0%A6%9C-%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%E0%A7%9F-react-hooks-%E0%A6%B8%E0%A6%BF%E0%A6%B0%E0%A6%BF%E0%A6%9C-%E0%A6%AA%E0%A6%B0%E0%A7%8D%E0%A6%AC-%E0%A7%A7/)

2. [All hooks with example](https://medium.com/@AbidKazmi/all-react-hooks-in-one-short-4b0ed4b5a6e4)

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
4. [Memoization](https://www.freecodecamp.org/news/memoization-in-javascript-and-react/)
5. Server-Side Rendering (SSR) and Static Site Generation (SSG)
6. Optimize Images and Assets
7. Optimize Component Rendering
8. Optimize State Management
9. Bundle Analysis and Profiling
10. Upgrade React and Dependencies

Reference:

1. [React Optimization](https://blog.logrocket.com/optimizing-performance-react-app/) 2.[React App Optimization Techniques](https://www.freecodecamp.org/news/measure-and-improve-performance-of-react-apps/)

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

JSX: JavaScript এর একটি Syntax Extension হচ্ছে JSX। UI সুন্দর করতে মূলত এটি React এ ব্যবহার করা হয় এবং React এর Elements গুলোকে DOM এর মধ্যে Rendering করতে JSX অসাধারণ কাজ করে থাকে। এটি একটি JavaScript Extension যা ডেভেলপারদের HTML ও XML Syntax কন্ট্রোল ও লজিক কে একসাথে করে। [JSX](https://www.linkedin.com/pulse/react-js-%E0%A6%95-%E0%A6%95%E0%A6%A8-%E0%A6%95%E0%A6%AD%E0%A6%AC-md-sabbir-hossain/)

Reference: [React JSX](https://medium.com/zonayeds-diary/%E0%A6%B0%E0%A6%BF%E0%A6%85%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%95%E0%A7%8D%E0%A6%9F-%E0%A6%AC%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95%E0%A6%B8%E0%A6%83-%E0%A6%9C%E0%A7%87%E0%A6%8F%E0%A6%B8%E0%A6%8F%E0%A6%95%E0%A7%8D%E0%A6%B8-jsx-%E0%A6%AA%E0%A6%B0%E0%A6%BF%E0%A6%9A%E0%A6%BF%E0%A6%A4%E0%A6%BF-80b66440b0b7)

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
4. It updates fast

#### 19. UseEfect এর ডিপেন্ডেন্সি কেন ইউস করা হয়

In React, the useEffect hook is used to perform side effects in functional components. A side effect in this context refers to any operation that affects something outside the scope of the component, such as data fetching, subscriptions, manually changing the DOM, or setting up timers.

The dependency array in the useEffect hook is used to specify the values from the component's state or props that the effect depends on. It determines when the effect should run. If the values in the dependency array change, the effect will be re-executed.

```js
import React, { useEffect, useState } from "react";

function ExampleComponent({ someProp }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    // This code will run when the component mounts and whenever 'someProp' changes
    fetchData(someProp);
  }, [someProp]);

  const fetchData = async (param) => {
    // Fetch data based on the parameter
    const result = await fetchDataFromAPI(param);
    setData(result);
  };

  // Rest of the component code...
}
```

#### 20. What is context API? How does it work?

#### 21. Props drilling কি?

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

### 3. What are React props?

Answer: Props (short for "properties") are a way to pass data from parent components to child components in React. Props are read-only, meaning that child components should not modify the data passed to them through props.

Props are passed as attributes to child components and can be accessed within the child component using the props object. Here's an example of how to pass and use props in React:

Parent component:

```js
import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const message = "Hello from ParentComponent";

  return <ChildComponent text={message} />;
}

export default ParentComponent;
```

Child component:

```js
import React from "react";

function ChildComponent(props) {
  return <h1>{props.text}</h1>;
}

export default ChildComponent;
```

In this example, the ParentComponent passes the message variable as a prop named text to the ChildComponent. The ChildComponent then accesses the text prop using props.text and renders it in an `<h1>` element.

### 4. What is state in React, and how is it managed?

Answer: In React, the state refers to an object that holds the data or information required to render a component. The state is mutable and can change over time, causing the component to re-render whenever there's a change in the state.

In class components, the state is managed using the this.state object and the this.setState() method. The this.state object holds the initial state of the component, while the this.setState() method is used to update the state.

Here's an example of managing state in a class component:

```js
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCounter = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.incrementCounter}>Increment</button>
      </div>
    );
  }
}

export default Counter;
```

In functional components, the state can be managed using the useState hook. The useState hook is a function that takes the initial state as an argument and returns an array containing the current state and a function to update the state.

Here's an example of managing state in a functional component using the useState hook:

```js
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}

export default Counter;
```

### 5. What are React lifecycle methods?

Answer: Lifecycle methods are special methods in class components that allow you to execute code at specific points during the component's lifecycle. The lifecycle of a React component can be divided into three main phases:

<h3>Mounting:</h3>  This phase occurs when a component is being created and inserted into the DOM. The following lifecycle methods are called during this phase:

<h4>constructor():</h4>  Called when the component is being created. It's used to initialize the state and bind event handlers.

<h4>static getDerivedStateFromProps():</h4> Called before the component is rendered. It's used to update the state based on changes in the props.

<h4>render():</h4>  Called to generate the JSX representation of the component. It's the only required lifecycle method.

<h4>componentDidMount():</h4>  Called after the component is inserted into the DOM. It's used for fetching data, setting up subscriptions, or other side effects.

<h3>Updating:</h3>  This phase occurs when a component's state or props change, causing the component to re-render. The following lifecycle methods are called during this phase:

<h4>getDerivedStateFromProps():</h4>   Called before the component is re-rendered. It's used to update the state based on changes in the props.

<h4>shouldComponentUpdate(): </h4> Called before the component is re-rendered. It's used to determine if the component should re-render based on changes in the state or props.
render(): Called to generate the JSX representation of the component.

<h4>getSnapshotBeforeUpdate():</h4>  Called before the DOM is updated. It's used to capture information from the DOM (e.g., scroll position) before the update.

<h4>componentDidUpdate():</h4>  Called after the component is re-rendered and the DOM is updated. It's used to perform side effects, like updating the data or subscriptions.

<h3>Unmounting:</h3>  This phase occurs when a component is being removed from the DOM. The following lifecycle method is called during this phase:

<h4>componentWillUnmount():</h4>  Called before the component is removed from the DOM. It's used to clean up resources, like timers or subscriptions, to prevent memory leaks.
With the introduction of React Hooks, lifecycle methods can now be replicated using hooks like useEffect in functional components, minimizing the need for class components.

### 6. What are React Hooks, and what are the most commonly used hooks?

Answer: React Hooks are functions introduced in React 16.8 that allow you to use state and other React features in functional components instead of class components. Hooks enable you to reuse stateful logic between components without changing the component hierarchy.

The most commonly used hooks are:

1. useState: This hook allows you to add state to functional components. It takes the initial state as an argument and returns an array containing the current state and a function to update the state.

- Example of using useState:

```js
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}

export default Counter;
```

2. useEffect: This hook allows you to perform side effects, like fetching data or updating the DOM, in functional components. It takes two arguments: a function containing the side effect and an optional dependency array. The side effect function is called whenever the dependencies change or the component mounts/unmounts.

- Example of using useEffect:

```js
import React, { useState, useEffect } from "react";

function DataFetcher() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}

export default DataFetcher;
```

3. useContext: This hook allows you to access the value of a React context without using the Context.Consumer component. It takes the context object as an argument and returns the current context value.

- Example of using useContext:

```js
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemedButton() {
  const theme = useContext(ThemeContext);

  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      Themed Button
    </button>
  );
}

export default ThemedButton;
```

There are other built-in hooks like `useReducer`, `useCallback`, `useMemo`, and `useRef`. Developers can also create custom hooks to share stateful logic between components.

### 7. What is the virtual DOM, and how does it work?

The virtual DOM (vDOM) is an in-memory representation of the actual DOM (Document Object Model). In React, whenever there is an update or change in the component's state, a new virtual DOM is created instead of updating the real DOM directly. The virtual DOM is much faster than the real DOM because updating the real DOM directly can be expensive in terms of performance.

React uses a technique called "diffing" to compare the new virtual DOM with the old one. It identifies the differences (or "diffs") between the two and then updates only the parts of the real DOM that have changed. This process is known as "reconciliation" and helps to optimize the performance of React applications.

Here's an analogy to help you understand the concept of virtual DOM:

Think of the real DOM as a large, complicated jigsaw puzzle. Each time you make a change, you need to take the whole puzzle apart and put it back together again. On the other hand, the virtual DOM is like having a second, identical puzzle that you can quickly update. You can then compare the two puzzles and only change the pieces that are different. This way, you avoid the time-consuming process of rebuilding the entire puzzle from scratch.

### 8. What is JSX, and why is it used in React?

JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript code. It's not a programming language, but rather a way to describe the structure and appearance of your UI (User Interface) components using a familiar syntax.

React uses JSX to define the structure and appearance of components. It makes the code more readable and easier to understand, especially when dealing with complex UIs. JSX is not required to use React, but it's highly recommended and widely adopted in the community.

Here's an example of a simple React component using JSX:

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

Without JSX, the same component would look like this:

```js
function Welcome(props) {
  return React.createElement("h1", null, `Hello, ${props.name}`);
}
```

As you can see, the JSX version is more readable and easier to understand.

### 9. How do you handle events in React?

In React, event handling is similar to handling events in plain HTML, but with some differences in syntax. For example, instead of using the onclick attribute in HTML, you would use the onClick attribute in React. Additionally, event handlers in React are written in camelCase, and you pass a function as the event handler instead of a string.

Here's an example of handling a button click event in React:

```js
import React from "react";

function ButtonClick() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return <button onClick={handleClick}>Click me</button>;
}

export default ButtonClick;
```

In this example, we define a handleClick function that will be called when the button is clicked. We then pass this function as the event handler to the onClick attribute of the button.

When using class components, you need to be careful with the value of this inside event handlers. To ensure that this refers to the component instance, you can either bind the event handler in the constructor or use an arrow function.

Here's an example of handling a button click event in a class component:

```js
import React, { Component } from "react";

class ButtonClick extends Component {
  handleClick() {
    alert("Button clicked!");
  }

  render() {
    return <button onClick={this.handleClick.bind(this)}>Click me</button>;
  }
}

export default ButtonClick;
```

Or using an arrow function:

```js
import React, { Component } from "react";

class ButtonClick extends Component {
  handleClick = () => {
    alert("Button clicked!");
  };

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}

export default ButtonClick;
```

### 10. What are controlled and uncontrolled components?

In React, form elements like input, textarea, and select can be handled as either controlled or uncontrolled components.

Controlled Components
Controlled components are form elements whose values are controlled by the React state. In a controlled component, the form element's value is directly linked to the component's state, and any change in the form element's value will update the state.

Here's an example of a controlled input component:

```js
import React, { useState } from "react";

function ControlledInput() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Entered value: {inputValue}</p>
    </div>
  );
}

export default ControlledInput;
```

In this example, the input element's value is set using the value attribute and is linked to the inputValue state. When the input value changes, the handleChange function is called, which updates the state with the new value.

<h3>Uncontrolled Components:</h3>

Uncontrolled components are form elements whose values are managed by the DOM itself, not by the React state. To access the values of uncontrolled components, you use a ref to get direct access to the DOM element.

Here's an example of an uncontrolled input component:

```js
import React, { useRef } from "react";

function UncontrolledInput() {
  const inputRef = useRef();

  const handleClick = () => {
    alert(`Entered value: ${inputRef.current.value}`);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Show entered value</button>
    </div>
  );
}

export default UncontrolledInput;
```

In this example, we use a ref to access the input element directly. When the button is clicked, the handleClick function is called, which retrieves and displays the input value using the ref.

In general, it's recommended to use controlled components because they make it easier to manage form data and validate user input.

### 11. What is the context API?

The Context API is a feature in React that allows you to share data between components without having to pass it through props. This can be helpful when you need to pass data through multiple levels of a component tree, or when you have a global state that should be accessible by multiple components.

To create a context, you can use the `React.createContext` function:

```js
const MyContext = React.createContext();
```

This will create a context object with two components, `MyContext.Provider` and `MyContext.Consumer`.

`MyContext.Provider` is a component that wraps the part of the component tree that needs access to the shared data. It has a `value` prop that takes the data you want to share.

Here's an example of using the context provider:

```js
import React from "react";
import MyComponent from "./MyComponent";
import MyContext from "./MyContext";

function App() {
  const sharedData = { text: "Hello from context!" };

  return (
    <MyContext.Provider value={sharedData}>
      <MyComponent />
    </MyContext.Provider>
  );
}

export default App;
```

`MyContext.Consumer` is a component that can be used inside the component tree to access the shared data. It takes a function as a child, which receives the context value as an argument.

Here's an example of using the context consumer:

```js
import React from "react";
import MyContext from "./MyContext";

function MyComponent() {
  return (
    <MyContext.Consumer>
      {(context) => <p>{context.text}</p>}
    </MyContext.Consumer>
  );
}

export default MyComponent;
```

In this example, the MyComponent component uses the `MyContext.Consumer` component to access the shared data from the context.

You can also use the useContext hook to access the context value in functional components:

```js
import React, { useContext } from "react";
import MyContext from "./MyContext";

function MyComponent() {
  const context = useContext(MyContext);
  return <p>{context.text}</p>;
}

export default MyComponent;
```

The Context API is a convenient way to share state and data between components, but it's not a replacement for state management libraries like Redux, which provide more features and optimizations for managing complex state.

### 12. What are Higher-Order Components (HOCs)?

Higher-Order Components (HOCs) are a pattern in React for reusing component logic. HOCs are functions that take a component as an argument and return a new component with additional props or behavior.

Here's an example of a simple HOC that logs the props of the wrapped component:

```js
function withLogging(WrappedComponent) {
  return function LoggingComponent(props) {
    console.log("Props:", props);
    return <WrappedComponent {...props} />;
  };
}
```

In this example, the withLogging function takes a WrappedComponent as an argument and returns a new LoggingComponent that logs the props and renders the WrappedComponent with the same props.

To use the HOC, you can wrap your component like this:

```js
import React from "react";
import withLogging from "./withLogging";

function MyComponent(props) {
  return <p>Hello, {props.name}!</p>;
}

export default withLogging(MyComponent);
```

This will create a new component that includes the logging behavior, and you can use it just like the original component.

HOCs can be used to inject additional props, modify existing props, or add new behavior to components. They can also be composed together to create more complex components.

Keep in mind that HOCs can introduce some issues, like naming collisions or extra component layers in the React tree. Many of these issues can be mitigated by using React Hooks, which provide a more flexible and composable way to reuse logic between components.

### 13. What is React Router, and how do you use it?

React Router is a popular third-party library for managing navigation and rendering components based on the browser URL in React applications. It provides a declarative way to define routes and navigate between components.

`npm install react-router-dom`

### 14. What are keys in React, and why are they important?

Keys are a special attribute in React used to help identify and track elements in a list. When rendering a list of elements, each element should have a unique key prop to help React determine which elements have changed, been added, or been removed when updating the DOM.

Here's an example of using keys when rendering a list of items:

```js
import React from "react";

function ItemList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}

export default ItemList;
```

In this example, we assign a unique key prop to each li element based on the item.id property.

Keys should be unique among siblings, and they should not be based on the index of the element in the list, as this can cause issues with the update and reordering process. Instead, use a unique identifier from your data, like an ID or a combination of properties that make the element unique.

Using keys correctly can improve the performance of your application and help prevent bugs related to component updates and state management.

### 15. What is useCallback, and when should you use it?

`useCallback` is a hook in React that allows you to memoize a function, so it doesn't get recreated on every render of the component. This can be useful when you want to optimize the performance of your application by preventing unnecessary re-renders of child components that depend on the memoized function.

The `useCallback` hook takes two arguments: the function you want to memoize and an array of dependencies. The hook returns a memoized version of the function, which will only be recreated if any of the dependencies change.

Here's an example of using `useCallback`:

```js
import React, { useCallback, useState } from "react";

function ExpensiveComponent({ onClick }) {
  console.log("ExpensiveComponent rendered");
  return <button onClick={onClick}>Click me</button>;
}

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <ExpensiveComponent onClick={handleClick} />
      <p>Count: {count}</p>
    </div>
  );
}

export default App;
```

In this example, we use `useCallback` to memoize the handleClick function, which updates the count state. The ExpensiveComponent takes this memoized function as a prop and renders a button that calls it when clicked.

Since the handleClick function doesn't change between renders, the ExpensiveComponent will not re-render when the count state changes, which can improve the performance of the application.

Keep in mind that `useCallback` should be used sparingly and only when necessary, as it can introduce additional complexity and overhead to your code. In many cases, using a regular function or an inline arrow function is sufficient and more efficient.

### 16. What is useMemo, and when should you use it?

`useMemo` is a hook in React that allows you to memoize the result of a function so that it doesn't get recomputed on every render of the component. This can be useful when you want to optimize the performance of your application by preventing unnecessary calculations or data transformations.

The `useMemo` hook takes two arguments: a function that computes the memoized value and an array of dependencies. The hook returns the memoized value, which will only be recomputed if any of the dependencies change.

Here's an example of using `useMemo`:

```js
import React, { useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const expensiveComputation = (value) => {
    console.log("Expensive computation");
    return value * 10;
  };

  const memoizedResult = useMemo(() => expensiveComputation(count), [count]);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Increase count</button>
      <p>Count: {count}</p>
      <p>Memoized result: {memoizedResult}</p>
    </div>
  );
}

export default App;
```

In this example, we use useMemo to memoize the result of the expensiveComputation function, which takes the count state as an argument. Since the memoized result is only recomputed when the count state changes, the expensiveComputation function is not called on every render, which can improve the performance of the application.

Keep in mind that useMemo should be used sparingly and only when necessary, as it can introduce additional complexity and overhead to your code. In many cases, computing the value directly or using a regular function is sufficient and more efficient.

### 17. What is React.Children, and when should you use it?

React.Children is a utility provided by React to help you work with the children prop in a more consistent and flexible way. It provides methods for counting, mapping, or iterating over the children, as well as other utility functions.

Here's an example of using React.Children.map to wrap each child in a div element

```js
import React from "react";

function WrapperComponent({ children }) {
  return (
    <div>
      {React.Children.map(children, (child) => (
        <div className="wrapper">{child}</div>
      ))}
    </div>
  );
}

export default WrapperComponent;
```

In this example, the WrapperComponent takes a children prop and uses React.Children.map to render each child inside a div element with a wrapper class.

You can use React.Children when you need more control over the rendering or processing of the children in a component, or when you want to ensure that your components work correctly with different types of children, like arrays, strings, or elements.

### 18. What is the difference between React.PureComponent and React.Component?

React.PureComponent is a subclass of React.Component that implements a shallow comparison for checking if the component should update. This means that PureComponent only re-renders when its props or state have changed in a shallow manner, which can lead to performance improvements in some cases.

```js
import React from "react";

class RegularComponent extends React.Component {
  render() {
    console.log("RegularComponent rendered");
    return <div>{this.props.value}</div>;
  }
}

class PureComponentExample extends React.PureComponent {
  render() {
    console.log("PureComponentExample rendered");
    return <div>{this.props.value}</div>;
  }
}

export { RegularComponent, PureComponentExample };
```

In this example, we have two components, RegularComponent and PureComponentExample. The PureComponentExample extends React.PureComponent instead of React.Component. If we pass the same props to both components and update the parent component, RegularComponent will re-render regardless of whether its props have changed, while PureComponentExample will only re-render if its props have changed, which can lead to better performance.

However, it's important to note that PureComponent only performs a shallow comparison of props and state. This means that if you're passing complex data structures like nested objects or arrays, it may not update correctly, and you might need to implement a custom shouldComponentUpdate method in your component.

### 19. What is PropTypes, and how do you use it?

PropTypes is a library used to define the types of props that a component should receive, helping you to catch errors during development. It is not included in the React core library, but it's widely used in the React community.

### 20. What is the difference between React.createRef and useRef?

`React.createRef` and `useRef` are two ways to create a reference to a DOM element or an instance of a class component in React.

`React.createRef` is used in class components, while `useRef` is a hook that can be used in functional components. Here's an example of using each method to create a reference to an input element:

```js
import React, { useRef } from "react";

class ClassComponentExample extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    return <input ref={this.inputRef} />;
  }
}

function FunctionalComponentExample() {
  const inputRef = useRef();

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} />;
}

export { ClassComponentExample, FunctionalComponentExample };
```

In general, if you're using functional components with hooks, you should use useRef to create references. If you're still using class components, you can use React.createRef.

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
