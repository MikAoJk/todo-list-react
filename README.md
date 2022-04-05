[![build,install and deploy main branch](https://github.com/MikAoJk/todo-list-react/actions/workflows/build_install_deploy.yml/badge.svg?branch=main)](https://github.com/MikAoJk/todo-list-react/actions/workflows/build_install_deploy.yml)

## Deploy to github pages manually

**NOTE**
Need to have a github token to do a deploy to github pages

`yarn deploy`
You can visit the deployed app, at https://mikaojk.github.io/todo-list-react

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

### Creating a docker image
Creating a docker image should be as simple as `docker build -t todo-list-react .`

### Running a docker image
`docker run --rm -it -p 3000:3000 todo-list-react`
