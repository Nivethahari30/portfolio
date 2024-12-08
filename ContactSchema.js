const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    }
});

const Contacts = mongoose.model("Contacts", ContactSchema); // Correct capitalization of 'model'
module.exports = Contacts;
