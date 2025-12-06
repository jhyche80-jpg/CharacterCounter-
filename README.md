# README Template 
## Table of contents 
 ## Table of contents 
  1. [Overview](#Overview)
     1. [Features](#Features) 
     2. [Usage](#Usage)
  2. [Problem](#problem)     
     1. [Problem Breakdown/ Goal](#problem-breakdown-goal)
     2. [Questions and Answer](#questions--answers)
     3. [Input?](#input-)
     4. [Output?](#output-)
     5. [Step by step Plan](#step-by-step-process-what-will-i-need-to-do)
  3. [What I did step by step](#what-i-did-in-detail)
  4. [Trouble Shooting ](#troubleshooting)
  5. [Reflection](#reflection)
  6. [References](#references)
     1. [Programs Used ](#programs-i-used) 
## Project Overview 
In this lab, you will create an interactive character counter application that demonstrates state management and event handling in React. The application will allow users to input text and see real-time statistics about their input, including character count, word count, and reading time. This lab focuses on state management, event handling, and component interaction using React hooks.

## Problem 
### Problem Breakdown!/ Goal
Building a Word counter:
-  Ui 
- Type Section 
- Components 
  - Character count 
    - count letters 
    - count spaces to track words. 
  - Text Input 
  - stats display 
  - Time display 

### Questions + Answers  
1. How do I get character count in react? 
   1. How do I access the text area text content to count it inside react?
   - In React, you typically bind the <textarea> value to a state variable.
   2. how could i use that to count the ammount? 
   - after binding the characters into a count I can then find the count of words by using the legnth of the words.
2. How do I get word count in react ?
I can use the split method. The split() method divides a string into an array based on the specified separator. Using an empty string '' as the separator splits the string into individual characters, including spaces and punctuation.

### Input ?
Text from the text area 
### Output ??
character count
Word Count 
time to read. 
↑ 
all shown in another component 
In short I neeed to pass string from the text area to the main component and then do things with that string that will show the count , word count , and time to read ( all three might need algorithims.)


Note : functions have to be passed to the children. 
### Step-by-Step Process (What will I need to do)  


The Outcome of every battle takes place in the planning phase. 
1. Create a new React TypeScript project using Vite
2.  Create the following folder structure
3. Make the type for the Input text , Text stats , and display stats
4.  Begin making the Text area component
5. Start the display area component 
6. Make the function for text stats and have it display in the area 



## What I did in detail 
In this section you should say what you did and why and if you made refinements as well. 
1. I made went through each of the components and made the html I wanted to display
2. I determined ( after a long time)  which component would be the parent component
3. I made the Character counter  the  parent and started trying to pass the words that are typed into the box there from the textInput.tsx.
4. I then took those words and made the stat display. I pulles the string made from the input and gave t a use state of value. then i manioulated the value to show the display state
   - I had to do calculations to find the time and also filter through the string to find character and word count 
5. I then went on to ass styling to the page

## Troubleshooting 
    Ask: “What should happen right now?”
    Ask: “What’s actually happening?”
    Test your assumptions step by step.
### Problems 
Problems  will arise every time you code knowing the problem is key to understanding it !

1.  I couldn't get the code to display 
2. I had a type issue originally with the reading time 

### Solutions
 Finding out how to fix those problems will be important!

1. I had a path probelm and didnt map it right 
2. The interface for the time was being read ass  string when it should be a number. 

## Reflection
1. How did you handle state updates when the text changed?
- In text Input I added an onchange label that would run a functuion that would update the value in the parent function. 

2. What considerations did you make when calculating reading time?
- I had to take the word count andd turn it into times in a minute ( after researching the words read per minute), divide it by the (wpm/ Words per minute) then convert it to seconds and then minutes again then take the left over time and change it to second then add it to a string that displayed the time.  
3. How did you ensure the UI remained responsive during rapid text input?
- I stored only the text value into state and cuomputing the derived  values like the character count , word count and reading time therre instead of in state . This kept updates light and leet react rerender only what changes even when typing rapidly . 
4. What challenges did you face when implementing the statistics calculations?
- I have  touble using and remembering Modulo it is something I am not used to using so it really makes me nervious using it. However the biggest cchallenge is make the code reflect the math. 
## References 


### Programs I used 

- Typescript 
- React 
- Css
### Websites I used
- https://coreui.io/answers/how-to-convert-a-string-to-an-array-in-javascript/#:~:text=Use%20the%20split()%20method,array%20of%20characters%20or%20elements.&text=The%20split()%20method%20divides,characters%2C%20including%20spaces%20and%20punctuation.
- https://scholarwithin.com/average-reading-speed#:~:text=The%20average%20reader%20can%20read,words%20per%20minute%20(WPM).
### Styles Used 
- Ice Cold: #a0d2eb

- Freeze Purple: #e5eaf5

- Medium Purple: #d0bdf4

- Purple Pain: #8458B3

- Heavy Purple: #a28089



