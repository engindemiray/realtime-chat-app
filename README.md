# Realtime Chat App

![chat-app-image](https://user-images.githubusercontent.com/91262816/199104588-9e0ee2b5-1d84-44a0-9436-5455e8262401.png)

## Languages & Tools

- JavaScript
- Node.js
- Express.js
- Socket.io

## Installation
Run these commands in Terminal.

Creating a package.json file:
``` bash
$ npm init --yes
```
To install Express & Socket.io:
``` bash
$ npm i express socket.io
```
To start the app:
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
