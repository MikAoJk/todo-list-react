[![build,install and deploy main branch](https://github.com/MikAoJk/todo-list-react/actions/workflows/build_install_deploy.yml/badge.svg?branch=main)](https://github.com/MikAoJk/todo-list-react/actions/workflows/build_install_deploy.yml)
![GitHub issues](https://img.shields.io/github/issues-raw/MikAoJk/todo-list-react)
![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/MikAoJk/todo-list-react)
![GitHub](https://img.shields.io/github/license/MikAoJk/todo-list-react)


## Technologies used
* Yarn
* Docker
* React
* TypeScript


## Getting started

### Prerequisites
Make sure you have yarn installed
See [yarn install](https://yarnpkg.com/getting-started/install) on how to install it locally
You can check which yarn version you have installed using this command:
`yarn --version`

### Running the application locally

#### Building the application
`yarn build`
Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

#### Running the application
`yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### Creating a docker image
Creating a docker image should be as simple as `docker build -t todo-list-react .`

#### Running a docker image
`docker run --rm -it -p 3000:3000 todo-list-react`

## Deploy to github pages manually

> **Note**
> Need to have a GitHub token in order to deploy to GitHub pages

`yarn deploy`
You can visit the deployed app, at https://mikaojk.github.io/todo-list-react
