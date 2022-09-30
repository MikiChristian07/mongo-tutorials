import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const blogPostSchema = new Schema({
    title: String,
    content: String,
    comments: [{ 
        type: Schema.Types.ObjectId,
        ref: 'Comment'
     }]
})

const BlogPost = mongoose.model('BlogPost', blogPostSchema)

export default BlogPost;