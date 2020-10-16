# daily-planner

#### _05 Third-Party APIs: Work Day Scheduler, 10.16.20_

### _By Lohelani Hicks_

***Requirements:***

When loading your app the current day will be displayed.
The page will show all the timeblocks for a standard busness day.
Each timeblock should be color coded to indicate whether it is in the past, present, or future.
A user can enter an event by clicking on a timeblock.
Saving an event is saved in local storage.
Saved events will persist when refreshing or closing the browser.

## Description and Method

This application is to be used as a work-day scheduler. This application contains the links to, and employs the use of jquery. momentj.s, and bootstrap. I started out by hardcoding the time blocks into the html div with class "container". From there I added a little bit of style, but also reference the style in the css file. Added a sticky footer. In my javascript I wrapped the entire script into a .ready funciton. I used moment.js to update the time clock in the header with the current day and time. Events are saved in the textarea time blocks using an on click function which sets the items in local storage. The value of the input is saved onto the page after reload using localStorage.getItem. The time blocks are color-coded using a .each function which employs the use of if and else if statements to determine if the conditions for the classes are met, and to add and remove classes accordingly.

# Link to Deployed Application:

https://lohelani.github.io/daily-planner/

# Screenshot

![image](https://user-images.githubusercontent.com/70550481/96306773-52194700-0fce-11eb-94e3-8dd6aebf3139.png)

