import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    title: String,
    content: String,
    user: { 
        type: Schema.Types.ObjectId,
        ref: 'User'
    }// no array, since its returning one user
})

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;