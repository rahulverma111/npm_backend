const express = require("express");
const app = express();
const userRouter = require("./routers/userRoute");
const packageRouter = require("./routers/packageRouter");
const handlebarsRoute = require("./routers/handlebarsRoute");

app.use(express.json());

app.use("/api/v1/pakages", packageRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/handlebars", handlebarsRoute);

module.exports = app;
