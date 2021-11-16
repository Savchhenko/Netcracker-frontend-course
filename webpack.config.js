const path = require("path");

module.exports = {
  entry: "./task_4/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname + "/task_4", "dist"),
  },
};
