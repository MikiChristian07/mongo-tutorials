import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const postSchema = new Schema({
    title: String,
},{ timestamp: true })

export default postSchema;