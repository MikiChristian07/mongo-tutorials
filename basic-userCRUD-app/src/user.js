import mongoose from 'mongoose';
import postSchema from './post.schema.js';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        validate: {
            validator: (name) => name.length > 2,
            message: 'Name must be longer than 2 characters'
        },
        required: [true, 'Name is required']
    },
    posts: [postSchema],  // Embedded document
    likes: Number,
    blogPosts: [{ 
        type: Schema.Types.ObjectId,
        ref: 'BlogPost'
    }]
});

userSchema.virtual('postCount').get(function(){
    return this.posts.length;
});

// Remove middleware
userSchema.pre('remove', function(next) {
    // to avoid cyclic require
    const BlogPost = mongoose.model('BlogPost')
    // this === joe
    BlogPost.remove({ _id: { $in: this.blogPosts } })
        .then(() => next());
 });

const User = mongoose.model('User', userSchema);

export default User;
 