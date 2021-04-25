const mongoose = require('mongoose');
mongoose
  .connect(
    "mongodb+srv://shaileshpendam:saisamart@1@cluster0.mo9gw.mongodb.net/UXCrud?retryWrites=true&w=majority", { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });


module.exports = mongoose;