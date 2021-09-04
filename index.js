const io = require("socket.io-client");
const API_URL = "http://localhost:1337/";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjMwNzQ4ODE1LCJleHAiOjE2MzMzNDA4MTV9.Fwl7XnXQtWKWcB7FIG4tZmwUod6S25qg8Vv7YgBMX3w";

const socket = io.connect(API_URL, {
    query: { token },
});

socket.emit('subscribe', 'mynotifications');
// socket.emit('subscribe', 'notification');

socket.on("my_notification_3", (data) => {
    console.log("RECEIVED NEW NOTIFICATION");
    console.log(data);
});