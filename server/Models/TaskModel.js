const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    time: String,
    title: String,
});

const TaskModel = mongoose.model('Task',TaskSchema);
module.exports = TaskModel;
