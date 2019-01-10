# React boilerplate

This boilerplate was made to quickly get up and running a basic React Web Application.

## Installation
**1. Download NPM with Node.js**
Official website [here](https://www.npmjs.com/get-npm).

**2. Clone this repository**
``` https://github.com/cfascina/react-boilerplate.git ```

**3. Install Depedencies**
``` npm install ```

## Development Commands
**Kill Node.js Processes (for Windows environments)**
```npm run kill```
>On Windows, if you try to rebuild the Webpack after it was already initialized once, you will get an error.
>Running this command you will kill all Node.js processes and after that whe Webpack can be initialized again.

**Start Webpack on Development Mode**
```npm start```
>The application will be running on http://localhost:8080.
>You can change this default port on **webpack.config.js** file (inside the **devServer** section).

**Watch Webpack**
```npm run watch```

**Build Webpack on Production Mode**
```npm run build```
>After a successful build, the **/dist** folder will be created with the application files.

*Start coding and be happy!* :smile:
*Or not...* :rage:
