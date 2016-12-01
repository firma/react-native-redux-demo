# React Native + Redux  demo

## Introduction

Since I got excited about the React + Redux combo, I've tried it out on a current project. It was working well for me,
so I've extracted relevant parts out into this demo.

This demo application represents a "fun fair" (amusement park) with two daily shifts (morning and afternoon), while each
shift has a group of semaphores to indicate the queue length (of people waiting for the attraction).
The semaphores are updated automatically server-side (just polling every 5 seconds in this demo), but employees can
 also change the state of a semaphore by clicking on it and submitting the form.

## JS stack

* ES6, Webpack, Babel
* React   + Redux   +  redux-thunk
* [fetch](https://github.com/github/fetch))


## Features

* Async actions (i.e. XHRs)
* Middleware
    * [redux-thunk] 
    * [redux-logger] 
    * Custom network api middleware for XHRs
    * Custom "throttle" middleware
* Basic development/production toggle
    * `__DEV__`: react-hot-loader, logger middleware

## Development build 

    npm install
    react-native run-ios 
    react-native run-android

## TODO

* login 
