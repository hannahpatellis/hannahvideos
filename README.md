![VideoRepo Logo](videorepo.png)

# VideoRepo Server + Frontend v.1.0.0

![Screenshot of VideoRepo Frontend in a web browser](demo.png)

## What is VideoRepo?

I am a MERN stack and UX/UI bootcamp instructor and have been in the classroom for 3+ years. I have amassed quite a collection of lectures and supplementary videos and wanted a way to share them all with current and former students. So in turn, I built this online video repository where video links are stored in a Mongo database and displayed easily and with filter capabilities. All protected by a password, so only students and faculty can get access.

### VideoRepo Frontend

Written in React, Frontend is the main user interface for accessing the video repository. It has the following features:

- Password authentication with Server (using a shameful form of authentication)
- Token-based authentication for requests with Server
- Retrieves all videos from Server
- Displays all videos and allows a user to filter by class, curriculum, lesson, and subcategory

### VideoRepo Server

Written in JavaScript and powered by Express.js, the server backend powers VideoRepo Frontend and VideoRepo Uploader. It includes the following routes:

`POST /api/new` Retrieves a new video entry along with an API key, validates the API key with the Mongo database and upon successful validation, writes the new entry to the database. (Route accessed by the VideoRepo Uploader.)

`POST /api/data` Retrieves the class video repo, list of classes, list of lessons, list of subcategories, and list of curricula from a Mongo database and returns it to the client upon a successful token validation.

`POST /api/auth` Retrieves a password and validates it with the system password. If the password is correct, create a token, stores it in the Mongo database, and send it back to the client. (This is weak and will eventually change.)

`GET *` Sends the user to VideoRepo Frontend.

## .env File Template

Here is the template for the .env file, on which Server relies heavily.

```
MONGODB_URI=mongodb://user:password@domain:port/database
PASSWORD=passwordhere
```

### API Token Generation

I used [passwordsgenerator.net](https://passwordsgenerator.net/) to generate API tokens. These are the paramaters I set.

![passwordsgenerator.net token template](token.png)

## Run Instructions

To run the application, simply run `yarn start:prod` to run in production mode (only the Express server runs) or `yarn start:dev` to run in development mode (Express server runs along with the React dev server).

## VideoRepo Uploader

Uploader is the backend application for adding new videos to the database. It is written using Electron and currently packaged for macOS. You can find it [here (hannahpatellis/videorepo_uploader)](https://github.com/hannahpatellis/videorepo_uploader).

### Enjoy! 👩🏻‍🏫

---

### Take a look at some of my other classroom apps!

[Plume](https://github.com/hannahpatellis/plume): A React app for generating random groups and displaying a countdown timer

[HoDO Dashboard](https://github.com/hannahpatellis/hodo_dashboard) and [HoDO Desktop](https://github.com/hannahpatellis/hodo_desktop): A MERN stack web app for keeping track of and administering house points, challenges, and guidelines for the Houses of Design Olympics game for UX/UI bootcamps; and an Electron app for quickly adding new points.

[House Points Dashboard for Coding Bootcamps](https://github.com/hannahpatellis/gthousedash): The original incarnation of the Houses of Design Olympics, made for Full-Stack Flex bootcamps. *(No longer in use.)*

---

Developed by Alexandria 'Hannah' Isadora Patellis in 2018

[hannahap.com](https://hannahap.com)