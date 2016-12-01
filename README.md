# React Native + Redux  demo
# แหล่งเรียนรู้ด้านคอมพิวเตอร์ ฟรี (เน้นภาษาไทย)

เรียนอย่างนี้นะครับว่า ตั้งแต่ผมทำ  ก็ได้แชร์ลิงค์ต่างๆ ที่เป็นความรู้ไว้เยอะมาก จึงรู้ว่าความรู้ที่คนไทยเผยแพร่มีเยอะ แต่ปัญหาใหญ่เวลาโพสต์บนเพจ มันไล่หายาก สะเปะสะปะ ไม่เป็นระเบียบ ผมเลยถือโอกาสจัดรวบรวมเท่าที่ทำได้ เพื่อให้ค้นหาได้ง่ายหน่อย __ต่อไปก็จะมีเพิ่มขึ้นเรื่อยๆ ถ้าหาเจอนะ__ (ใครมีอะไรแนะนำก็แตก Branch แล้ว commit มาได้เลยครับ)

แหล่งเรียนรู้ส่วนใหญ่ ก็จะเป็น e-book, วีดีโอ, เน้นไปที่ __ภาษาไทย__ เป็นหลัก เหมาะกับผู้ศึกษาศาสตร์ทางคอมพิวเตอร์เริ่มต้น ที่ภาษาอังกฤษอาจยังไม่แข็งแรงมากนัก โดยเน้นไปทางการเขียนโปรแกรมเป็นหลัก แต่ก็มีภาษาอังกฤษด้วย เผื่อคนสนใจ

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
