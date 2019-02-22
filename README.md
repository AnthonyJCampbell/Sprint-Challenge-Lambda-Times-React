# Sprint Challenge: Lambda Times (React)

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored Intermediate React, React Tooling, The React Life-cycle, React Composition Patterns and CSS-in-JS. In this Sprint Challenge, you will demonstrate proficiency by creating an application that uses to build a fully-functioning replicate of the LA-Times website.

Remember, this is a way for you to analyze your understanding of the concepts presented this week. Feel free to reference old code, but please refrain from copy/pasting, even rewriting old code can teach you something new! Take your time, and have fun!

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency Intermediate React and your command of the concepts and techniques in the React Tooling, The React Life-cycle, React Composition Patterns and CSS-in-JS modules.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager).

## Description

For the Lambda Times challenge you will create a React application that replicates the[LA Times Website](http://www.latimes.com). Throughout this challenge you will take a Vanilla JavaScript app, and convert it to a React app. Much of the initial work has been done, but there are some missing pieces you will need to complete to get the app working properly.

Your base React app has already been created, and includes some components. Included as well is a CSS file that you may reference when writing your own code.

Look through the application code. If you have the old Lambda Times (Applied JavaScript) sprint challenge handy, you may compare how the structure of this app differs from that, noting how React gives us very easy to use concise components.

## Self-Study/Essay Questions

- [x] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
    PropTypes is a dependency in React that allows you to check the type of incoming props. In the past, PropTypes was a native piece of the React framework, but has since become stand-alone. Using PropTypes (and it's tricky capitalization conventions), you can check if an incoming prop is a string, boolean, object, function, etc. This can serve multiple purposes: you can use it as the evaluation of a conditional, but the most common purpose is to use `.isRequired` after checking the proptype. Using this, the app will simply fail to load when the wrong type of props is passed on.
    Checking your data in JS is key, since JavaScript will happily chugg on, if you accidentally pass the wrong type of data. This can lead to some mistakes that are hard to debug. What's more, we have to account for irrational user-behaviour like passing in numbers in an email-address input. It's just good form and makes for more robust, bug-free apps.

- [x] Describe a life-cycle event in React?
    Every React component has multiple phases it passes through from the moment the component is first evaluated and called, to the moment it is discarded and taken out of the flow of the website. These three phases are the 'Mount', 'Update', and 'Unmount' phases, each of which have multiple smaller steps as part of the process. We can interact with these smaller sub-steps using life-cycle-methods.
    When an app first gets rendered, a Component gets generated and 'Mounted', the first phase. Then, as soon as it's passed `render()`, we can interact with it. We can change its state, play around with its values and in general just make a mess of things - as humans are wont to do. This is all part of the 'Update' phase. Finally, when we've had enough of our poor Component we can 'unmount' a component and interact with it one last time before it goes into the ether. (With `componentWillUnmount()`)

- [x] Explain the details of a Higher Order Component?
    Higher Order Components (HOCs) are used when you want to have multiple Components share the same base functionality. To to do so, you'd take the HOC and pass it the component you want to have the HOCs functionality. 
    There are hundreds of use-cases for HOCs. Examples are; adding a state to each component that tracks the amount of time a user has spent on the page, passing authentication to multiple components without having to rewrite functionality, and ensuring certain handling-methods like `onChangeHandler()` are uniform and in place wherever you need 'em.
    In short, it mimics Higher-Order Functions. You have a functional component and pass it another component. This then adds some functionality or does something to the incoming Component and then exports it once again.

- [x] What are three different ways to style components in React? Explain some of the benefits of each.
    First off, you can use in-line styling. Just like in HTML, you can declare `style={}` in a JSX element and make it do whatever you want. Generally, this is frowned upon. It makes your JSX pretty unreadable and necessitates going through dozens of JSX files in the case of some competing styles elsewhere.
    Secondly, you can use external stylesheets connected to every single Component. This works for the most part, but necessitates ample usage of classes and identifiers to ensure that the styling is localized to that one component, rather than inadvertedly affecting elements elsewhere.
    Finally, you can use styled-components. This dependency enables us to declare Components that are practically a container for styling and then incorporate these directly into our React. No need for separate styling anymore. It also negates the need for using `className` and other CSS-fu. Now, we can take an element from our JSX, declare it to be a custom Component using styled-components, and then immediately enjoy the brand-new styling. 

## Project Setup

Follow these steps to set up your project:

- [x] Create a forked copy of this project.
- [x] Add your project manager as collaborator on Github.
- [x] Clone your OWN version of the repository (Not Lambda's by mistake!).
- [x] Create a new branch: git checkout -b `<firstName-lastName>`.
- [x] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [x] Push commits: git push origin `<firstName-lastName>`.
- [x] From within the `lambdatimes` folder run `yarn` and then `yarn start`. This will open your locally hosted application in your browser. Once you are ready move onto the next steps.
- [x] Inside the `Content` folder you will find all 5 components that make up the content of the application. The flow goes like this: `Content > Tabs > Tab` and `Content > Cards > Card`. Follow the directions in the `Content` component to get your data ready.

Follow these steps for completing your project.

- [x] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repository). **Please don't merge your own pull request**
- [x] Add your project manager as a reviewer on the pull-request
- [x] Your project manager will count the project as complete by merging the branch back into master.

## Minimum Viable Product

- [ ] Go through the `Tabs`, `Tab`, `Cards`, and `Card` components following the instructions, and passing data and props to get the tabs and cards to appear on the screen.
- [ ] Once the Tabs and Cards are rendering to the screen complete the `changeSelected` and `filterCards` functions in the `Content` component.
- [ ] You should now be able to filter cards using your tabs!
- [ ] Make sure all of your props being passed are validated using PropTypes.
- [ ] Find the `TopBar` and `Header` components. Convert these two components to Styled Components. You should not have any `className` props when you are finished.

## Stretch Challenge

There are multiple stretch challenges available to you, you may attempt these in any order. Remember, stretch challenges are only to give you extra time to work on these concepts, if you do not get to these challenges, that is fine! Continue working on your main objectives.

- [ ] Re-factor the app, so that it uses ALL styled components. There should be no `className` props on any component. To truly test this, delete the CSS file.

- [ ] You will find a `Carousel` component in your Content folder. Complete this component, rendering a functional carousel. Add this component between your `Tabs` and `Cards` components within the `Content` component. Added challenge: make it so that there is infinite scroll to the right and the left.

- [ ] Add a login and an HOC. Make it so that when a user clicks on the login button at the top, a login modal is shown (Use React-strap). Have a user login, validating the login credentials on the `localStorage`. Add a Higher Order Component that wraps the `Content` component, only allowing it to render once a user has logged in. For more instructions see this README: [React-Insta-Clone: Day III](https://github.com/LambdaSchool/React-Insta-Clone/blob/master/DAY_THREE_README.md#tasks-day-iii)
