# STWS-DEMO

Satways demo project  
Used as a base to start any project, web or even services without a web interface

-----

## Technology used

- [`typescript`](https://www.typescriptlang.org/)  
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
