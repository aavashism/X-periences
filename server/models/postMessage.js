// Importing the mongoose library to interact with the MongoDB database
import mongoose from 'mongoose';

// Creating a new mongoose schema for a post object
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: { type: [String], default: [] },
    comments: { type: [String], default: [] },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

// Creating a model from the schema to represent a post object in the database
var PostMessage = mongoose.model('PostMessage', postSchema);
// Exporting the PostMessage model for use in other parts of the application
export default PostMessage;