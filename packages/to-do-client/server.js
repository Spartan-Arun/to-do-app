const express = require('express');
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
    liveReloadServer.refresh("/");
});
app = express();
app.use(connectLiveReload());
app.use(express.static(__dirname + "/public"));
app.listen(3000, () => console.log("Listening"));