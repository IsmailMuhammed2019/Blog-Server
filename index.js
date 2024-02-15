const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const app = express();

mongoose.connect(process.env.MONODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('mongodb connected');
})
.catch(error => {
  console.error('MongoDB connection error:', error);
});

// Middleware
app.use("/uploads", express.static("uploads"));
app.use(express.json());
const userRoute = require("./routes/user");
const profileRoute = require("./routes/profile");
const blogRoute = require("./routes/blogpost");
app.use("/user", userRoute);
app.use("/profile", profileRoute);
app.use("/blogPost", blogRoute);

// Define response for the root endpoint ("/")
app.get("/", (req, res) => {
  const data = {
    msg: "Welcome on DevStack Blog App development YouTube video series",
    info: "This is a root endpoint",
    Working: "Documentations of other endpoints will be released soon :)",
    request: "Hey if you didn't subscribe to my YouTube channel, please subscribe to it"
  };
  res.json(data);
});

app.listen(port, "0.0.0.0", () =>
  console.log(`Listening on port ${port}`)
);







// const express = require("express");
// const mongoose = require("mongoose");
// const port = process.env.PORT || 5000;
// const app = express();

// mongoose.connect(
//   process.env.MONODB_URI,{useNewUrlParser: true, useUnifiedTopology : true})
//   .then(()=>{
//     console.log('mongodb connected')

//   })
// ;

// // const connection = mongoose.connection;
// // connection.once("open", () => {
// //   console.log("MongoDb connected");
// // });

// //middleware
// app.use("/uploads", express.static("uploads"));
// app.use(express.json());
// const userRoute = require("./routes/user");
// app.use("/user", userRoute);
// const profileRoute = require("./routes/profile");
// app.use("/profile", profileRoute);
// const blogRoute = require("./routes/blogpost");
// app.use("/blogPost", blogRoute);

// data = {
//   msg: "Welcome on DevStack Blog App development YouTube video series",
//   info: "This is a root endpoint",
//   Working: "Documentations of other endpoints will be release soon :)",
//   request:
//     "Hey if you did'nt subscribed my YouTube channle please subscribe it",
// };

// app.route("/").get((req, res) => res.json(data));

// app.listen(port, "0.0.0.0", () =>
//   console.log(`welcome your listinnig at port ${port}`)
// );



// const express = require("express");
// const mongoose = require("mongoose");
// const port = process.env.PORT || 5000;
// const app = express();

// mongoose.connect(
//   "mongodb+srv://admin:CloudTrack..@userdata.imbivt0.mongodb.net/",
//   {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//   }
// );

// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("MongoDb connected");
// });

// //middleware
// app.use("/uploads", express.static("uploads"));
// app.use(express.json());
// const userRoute = require("./routes/user");
// app.use("/user", userRoute);
// const profileRoute = require("./routes/profile");
// app.use("/profile", profileRoute);
// const blogRoute = require("./routes/blogpost");
// app.use("/blogPost", blogRoute);

// data = {
//   msg: "Welcome on DevStack Blog App development YouTube video series",
//   info: "This is a root endpoint",
//   Working: "Documentations of other endpoints will be release soon :)",
//   request:
//     "Hey if you did'nt subscribed my YouTube channle please subscribe it",
// };

// app.route("/").get((req, res) => res.json(data));

// app.listen(port, "0.0.0.0", () =>
//   console.log(`welcome your listinnig at port ${port}`)
// );
