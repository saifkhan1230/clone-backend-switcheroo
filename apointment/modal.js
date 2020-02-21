const mongoose = require("mongoose")

const Model = mongoose.Schema({
   appointmentTime: {
        type: String,
        required: [true, "appointment must have the time"],
        unique: true
    },
    appointmentDate: {
        type: String,
        required: [true, "appiontment must have the date"],
        unique: true
    },
    appointmentSection: {
        type: String,
        required: [true, "appointment must have the section"],
        enum: {
            values: ["morning", "afternoon", "evening"],
            message: " apointment section must be morning afternoon and evening "
        }
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
    },
    user: { 
        type: mongoose.Schema.ObjectId,
        ref: "Users",
        required: true
    },

})

module.exports = mongoose.model("appoiment", Model)