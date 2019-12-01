# The App

Helping engineers search for the best GIFs around internetown by building GIFted. A fast, easy
to use GIF app that runs on all modern browsers built using modern web technologies.

## Overview

The App includes three major components: 
- `SearchContainer` - A carousel like, horizontally scrolling component for performing manual search.
- `Trending` - A vertically expanding section that shows the most trending GIFs.
- `RandomGif`- A section to generate a random GIF.

To reduce the amount of data, infinite scrolling has been implemented in the `Trendings` section. The application will initially load 20 GIFs. As soon as a user reaches the bottom of the screen, the next set of GIFs will be seamlessly loaded.

Also, lazy loading has been implemented while searching manually for GIFs based on keywords. Here, the next 20 GIFs are fetched on click of `More...` button located at the end of the carousel.

### How to fetch GIFs ?

- Visit https://developers.giphy.com
- Signup and create a new app to get a beta API Key
- Read the docs https://develope

## Features

- Find GIFs using keywords.
- Find top trending GIFs.
- Generate a random GIF.
- Click to Play/Pause any GIF.
- Responsive and User-friendly UI.
- Infinite Scrolling on `Trending GIFs` section.
- Lazy Loading on `Search GIFs` section.
- Uses SASS for keeping the CSS cleaner, modular, and composable.

## Setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `yarn install`

If you are accessing this project for the very first time, you should perform a `yarn install` to install all the dependencies listed in the `package.json`.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />

## Dependencies

| Package          | Version  |
| ---------------- | :------: |
| React            | ^16.11.0 |
| enzyme           | ^3.10.0  |
| react-router-dom |  ^5.1.2  |
| node-sass        | ^4.13.0  |
