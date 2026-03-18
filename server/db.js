const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://masterphpsrctree-phporg:NsYivSZSoWZdZOQZuEkOZfTKGLlAWEuv@cluster0.mongodb.net/casinoDB?retryWrites=true&w=majority";

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

module.exports = mongoose;
