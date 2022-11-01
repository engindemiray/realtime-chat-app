# Realtime Chat App

![chat-app-image](https://user-images.githubusercontent.com/91262816/199111675-af884dfe-c823-45ed-8ee3-4b2c23347bd0.png)

## Languages & Tools

- JavaScript
- Node.js
- Express.js
- Socket.io

## Installation

Creating a package.json file:
``` bash
$ npm init --yes
```
Install Express & Socket.io with this command:
``` bash
$ npm i express socket.io
```
Run the app with this command:
``` bash
$ nodemon server.js
```
## Socket.id
Each new connection is assigned a random 20-characters identifier.<br/>
This identifier is synced with the value on the server-side.
```js
// server-side
io.on("connection", (socket) => {
  console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});

// client-side
socket.on("connect", () => {
  console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});

socket.on("disconnect", () => {
  console.log(socket.id); // undefined
});
```
