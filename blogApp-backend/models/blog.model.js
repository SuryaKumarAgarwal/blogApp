const mongoose = require("mongoose"),
    passportLocalMongoose = require("passport-local-mongoose");
// var blogSchema =
module.exports = mongoose.model(
    "Blog",
    new mongoose.Schema({
        title: String,
        image: String,
        body: String,
        author: {
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
            username: String,
        },
    }).plugin(passportLocalMongoose)
);
