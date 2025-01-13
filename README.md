# Todo List App

A simple and intuitive Todo List application built with React and MobX for state management. This app allows users to manage their tasks efficiently, view tasks for specific dates using a calendar, and filter tasks based on their completion status.

## Features

- **Task Management**: Add, complete, and delete tasks.
- **Calendar Integration**: Select a date to view tasks for that specific day.
- **Task Filtering**: Filter tasks using three buttons:
  - **All**: View all tasks.
  - **Completed**: View only completed tasks.
  - **Incomplete**: View only incomplete tasks.
- **Search Bar**: Quickly search for tasks by name.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **MobX**: A state management library that makes it simple to connect your state to your UI.
- **React Calendar**: A calendar component for selecting dates.
-  [`typescript`](https://www.typescriptlang.org/)  
  type definitions for javascript
- [`esbuild`](https://esbuild.github.io/)   
  build system
- [`express`](https://expressjs.com/)  
  web server
- [`react`](https://reactjs.org/)  
  front end library
- [`jest`](https://jestjs.io/) (optional)  
  testing library


## Directory structure
- `src`  
  Javascript code that runs the web server.
- `web`  
  Javascript code that runs on the browser.
- `public`  
  Static html files.
- `dev`  
  Development code. You shlould normally not need to change these files.
- `dist`  
  Compiled production code. Created with the build command and excluded from source control.
      
## How to download
clone from <http://192.168.100.110/web/stws-demo>  

## How to run
``` bash
# Once, after git cloning the project, install dependencies
npm install

#start the development web server
npm run startDev
```
Open the page from 
<http://localhost:5000>

When updating a file, the page will auto reload

## Snapshot:
![Screenshot 2025-01-13 173212](https://github.com/user-attachments/assets/9b54961e-bea4-4417-9f89-95a9d522f938)

